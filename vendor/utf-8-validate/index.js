module.exports = function isValidUTF8(buf) {
  try {
    new TextDecoder("utf-8", { fatal: true }).decode(buf);
    return true;
  } catch (e) {
    return false;
  }
};
