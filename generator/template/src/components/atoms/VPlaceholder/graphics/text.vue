<template functional>
  <clipPath :id="props.shapeId">
    <rect
      v-for="(n, index) in props.lines"
      :key="index"
      x="0"
      :y="index > 0 ? (index * props.lineScale) + (index * props.lineScale * props.lineHeight) : 0"
      :rx="props.roundedCorners ? props.lineScale / 2 : 0"
      :ry="props.roundedCorners ? props.lineScale / 2 : 0"
      :width="index < props.lines - 1 || props.lines === 1 ? 400 : 280"
      :height="props.lineScale"
    />
  </clipPath>
</template>
