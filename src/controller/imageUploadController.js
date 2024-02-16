const single = async (req, res) => {
  try {
    let data = req.file;
    console.log("data", data);
    return res.status(200).json({
      success: true,
      message: "image upload successfully",
      data: data.filename,
    });
  } catch (error) {
    console.log("error", error);
    return error;
  }
};

const multiple = async (req, res) => {
  try {
    let data = req.files;
    let map = data.map((item) => item.filename);
    return res.status(200).json({
      success: true,
      message: "image upload successfully",
      data: map,
    });
  } catch (error) {
    console.log("error", error);
    return error;
  }
};

module.exports = {
  single,
  multiple,
};
