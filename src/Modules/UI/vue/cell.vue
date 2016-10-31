<template lang="pug">
.uiCell
  .left
    uiIcon(v-if="icon",:icon="icon")
    span.label(v-if="label") {{label}}
    slot(name="left")
  .center
    a(v-if="href"): slot
    slot(v-if="!href")
  .right
    slot(name="right")
    span.label.secondary(v-if="secondaryLabel") {{secondaryLabel}}
    uiIcon(v-if="href",icon="aprinotifica")
</template>

<script >
var props = {
    "label": {
        default: ""
    },
    "href": {
        default: ""
    },
    "icon": {
        default: ""
    },
    "secondaryLabel": {
        default: ""
    }
};

export default {
    props,
    data() {
        return {
            "isActive": false
        };
    },
    methods: {
        focus() {
            this.isActive = true;
        },
        unfocus() {
            this.isActive = false;
        }
    }
}
</script>
<style>
@import "UI/cssVariables.css";
.uiCell {
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(200, 200, 200, .2);
    line-height: 5rem
}

.uiCell * {
    vertical-align: middle;
}

.uiCell>.center {
    flex-grow: 1
}

.uiCell>:empty {
    display: none;
}

.uiCell>.right {
    margin: 0 .5rem 0 .5rem;
}

.uiCell>.left {
    margin: 0 .5rem 0 .5rem;
}

.uiCell .label {
    display: block;
    color: var(--color_dark_gray);
}
</style>
