<template>
  <svg
    :height="height"
    :width="width"
    id="add_media"
    style="enable-background:new 0 0 100 100;"
    version="1.1"
    viewBox="0 0 100 100"
    x="0px" y="0px"
    xml:space="preserve"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xmlns="http://www.w3.org/2000/svg"
    >
    <g>
      <g>
        <path class="st0" opacity="0.3" :fill="iconColor" d="M86.9,97.8H13.3c-0.4,0-0.8-0.3-0.8-0.8V53.5h75.1V97C87.6,97.5,87.3,97.8,86.9,97.8z"/>
        <path class="st1" opacity="0.9" :fill="iconColor" d="M86.5,100H13.7c-1.8,0-3.3-1.5-3.3-3.3V51.3h79.5v45.4C89.8,98.5,88.3,100,86.5,100z M14.7,95.6h70.7v-40
          H14.7V95.6z"/>
      </g>
      <g>
        <path class="st0" opacity="0.3" :fill="iconColor" d="M60.6,53.5H12.5L4,37c-0.4-0.8,0.2-1.6,1-1.6h45.6c0.4,0,0.8,0.2,1,0.6L60.6,53.5z"/>
        <path class="st1" opacity="0.9" :fill="iconColor" d="M64.2,55.7h-53L2,38c-0.5-1-0.5-2.3,0.1-3.3c0.6-1,1.7-1.6,2.8-1.6h45.6c1.2,0,2.4,0.7,2.9,1.8L64.2,55.7z
           M13.9,51.3H57l-7.1-13.8H6.7L13.9,51.3z"/>
      </g>
      <g>
        <path class="st0" opacity="0.3" :fill="iconColor" d="M60.5,53.5h27L96,37c0.4-0.8-0.2-1.6-1-1.6H70.6c-0.4,0-0.8,0.2-1,0.6L60.5,53.5z"/>
        <path class="st1" opacity="0.9" :fill="iconColor" d="M88.8,55.7H56.9l10.7-20.7c0.6-1.1,1.7-1.8,2.9-1.8H95c1.2,0,2.2,0.6,2.8,1.6c0.6,1,0.7,2.2,0.1,3.3
          L88.8,55.7z M64.1,51.3h22l7.1-13.8h-22L64.1,51.3z"/>
      </g>
      <g>
        <line class="st2" fill="yellow" x1="60.5" y1="53.5" x2="60.6" y2="97.8"/>

          <rect x="58.4" y="53.5" transform="matrix(1 -2.219072e-03 2.219072e-03 1 -0.1677 0.1346)" class="st1" opacity="0.9" :fill="iconColor" width="4.4" height="44.3"/>
      </g>
      <g>
        <line class="st2" fill="yellow" x1="50.4" y1="2.9" x2="50.4" y2="17.8"/>
        <path class="st1" opacity="0.9" :fill="iconColor" d="M50.4,20.7c-1.6,0-2.9-1.3-2.9-2.9V2.9c0-1.6,1.3-2.9,2.9-2.9s2.9,1.3,2.9,2.9v14.8
          C53.3,19.4,52,20.7,50.4,20.7z"/>
      </g>
      <g>
        <line class="st2" fill="yellow" x1="27.9" y1="8" x2="34" y2="19.2"/>
        <path class="st1" opacity="0.9" :fill="iconColor" d="M34,22.1c-1,0-2.1-0.6-2.6-1.5l-6-11.3c-0.8-1.4-0.2-3.2,1.2-4c1.4-0.8,3.2-0.2,4,1.2l6,11.3
          c0.8,1.4,0.2,3.2-1.2,4C34.9,22,34.4,22.1,34,22.1z"/>
      </g>
      <g>
        <line class="st2" fill="yellow" x1="66.2" y1="19.2" x2="72.2" y2="8"/>
        <path class="st1" opacity="0.9" :fill="iconColor" d="M66.2,22.1c-0.5,0-0.9-0.1-1.4-0.3c-1.4-0.8-2-2.5-1.2-4l6-11.3c0.8-1.4,2.5-2,4-1.2c1.4,0.8,2,2.5,1.2,4
          l-6,11.3C68.3,21.6,67.2,22.1,66.2,22.1z"/>
      </g>
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    width: {
      type: [Number, String],
      default: 18
    },
    height: {
      type: [Number, String],
      default: 18
    },
    iconColor: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>
