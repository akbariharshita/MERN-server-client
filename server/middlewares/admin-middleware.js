const adminMiddleware = async (req, res, next) => {
  try {
    const adminRole = req.user.isAdmin;
    if (!adminRole) {
      return res
        .status(403)
        .json({ message: "Access denied. User is not an admin." });
    }
    //    res.status(200).json({msg: adminRole})
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = adminMiddleware;
