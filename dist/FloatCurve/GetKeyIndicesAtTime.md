The first returned value is the index of the last key with
`key.time <= time` (or `min(1,length)` if no key was found). The second
returned value is the index of the first key with `key.time >= time` or
the length of the curve if no key was found satisfying the inequality.