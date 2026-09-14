function mask(source, maskBytes, output, offset, length) {
  for (let i = 0; i < length; i++) {
    output[offset + i] = source[i] ^ maskBytes[i & 3];
  }
}

function unmask(buffer, maskBytes) {
  for (let i = 0; i < buffer.length; i++) {
    buffer[i] ^= maskBytes[i & 3];
  }
}

module.exports = { mask, unmask };
