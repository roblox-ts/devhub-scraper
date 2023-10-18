Resets this curve's keys using the FloatCurveKey array passed as argument.
Keys in the keysArray are sorted in ascending time order before insertion.
Keys at duplicated times are removed in a stable manner. Returns the
number of keys actually inserted.

Keys previously stored in this curve are removed before the keys passed as
arguments are added.