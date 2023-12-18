const pathSplit = (req, path) => {
  var path2 = path.replace(/\\/g, "/");
  return  "/" + path2.split("/").slice(1).join("/");
};
module.exports = pathSplit;
