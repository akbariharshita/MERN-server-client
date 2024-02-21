const multer = require("multer");
const path = require("path");

const Service = require("../models/service-model");

const getAllServices = async (req, res) => {
  try {
    const response = await Service.find();
    if (!response) {
      res.status(404).json({ message: "No Services Found" });
      return;
    }
    res.status(200).json({ message: response });
  } catch (err) {
    console.log(`services: ${err}`);
  }
};

const getServiceById = async (req, res) => {
  console.log("get service by id");
  try {
    const id = req.params.id;
    const data = await Service.findOne({ _id: id });
    return res.status(200).json({ message: data });
  } catch (err) {
    next(err);
  }
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
});

const addService = async (req, res) => {
  try {
    upload.single("img")(req, res, async (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "File upload failed" });
      }

      const { service, description, price, provider } = req.body;
      const serviceadd = await Service.create({
        service,
        description,
        price,
        provider,
        img: req.file.filename,
      });
      return res.status(200).json({ msg: serviceadd });
    });
  } catch (err) {
    console.log(err);
  }
};

const updateService = async (req, res) => {
  try {
    const id = req.params.id;
    const updateServiceData = req.body;

    if (req.file) {
      updateServiceData.img = req.file.filename;
    }

    const updatedData = await Service.updateOne(
      { _id: id },
      {
        $set: updateServiceData,
      }
    );
    return res.status(200).json({ updatedData });
  } catch (err) {
    next(err);
  }
};

module.exports = { getAllServices, getServiceById, updateService, addService };
