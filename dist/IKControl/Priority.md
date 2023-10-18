When multiple controls are active on a character, the order in which they
are solved by the underlying system affects the final generated pose. By
changing this value, you specify the ordering in which controls are
satisfied. Higher values have higher priority, and higher-priority
controls are resolved later because their result might override the
previous result of other controls. If you have multiple IK controls on a
character and one is more important than the other, specify a lower
priority for it. It is 0 by default, meaning all controls have the same
priority.