.color-theme-toggle-label {
  :checked + & {
    border-color: var(--color-accent-fg);
  }
}

.hidden-radio-input {
  position: absolute;
  width: 0;
  height: 0;
  appearance: none;
}

// this appears to be visually hidden
.radio-label-theme-discs {
  padding: 0;
  transition: padding 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  :checked + & {
    border-color: var(--color-accent-emphasis);
  }

  :checked + &,
  &:hover {
    padding: $spacer-2;
  }
}
