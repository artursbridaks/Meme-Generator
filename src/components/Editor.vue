<template>
    <div class="editor">
      <div id="download" ref="download" :idCanvas="idCanvas">
            <img :src="imgToEdit" :alt="`Image to edit`" :parent="true" id="img">
            <vue-draggable-resizable :w="50" :h="50" @dragging="onDrag" @resizing="onResize">
                <p :style="{ fontSize: textSize + 'px', color: selectedColor, opacity: textOpacity, fontFamily: selectedFont }" >{{bottomField}}</p>
            </vue-draggable-resizable>
            <vue-draggable-resizable :w="50" :h="50" @dragging="onDrag" @resizing="onResize">
                <p :style="{ fontSize: textSize + 'px', color: selectedColor, opacity: textOpacity, fontFamily: selectedFont}" >{{topField}}</p>
            </vue-draggable-resizable>
            <vue-draggable-resizable :w="50" :h="50" @dragging="onDrag" @resizing="onResize">
                <p :style="{ fontSize: textSize + 'px', color: selectedColor, opacity: textOpacity, fontFamily: selectedFont}" >{{extraField}}</p>
            </vue-draggable-resizable>
            <vue-draggable-resizable :w="50" :h="50" @dragging="onDrag" @resizing="onResize">
                <p :style="{ fontSize: textSize + 'px', color: selectedColor, opacity: textOpacity, fontFamily: selectedFont}" >{{extraField2}}</p>
            </vue-draggable-resizable>
      </div>
      <b-form>
        <div class="top">
            <label class="sr-only" for="inline-form-input-name"></label>
            <b-input id="inline-form-input-name" class="mb-2 mr-sm-2 mb-sm-0" v-model="topField" placeholder="Top Text"></b-input>
            <b-input id="inline-form-input-name" class="my-3 mr-sm-2 mb-sm-0" v-model="bottomField" placeholder="Bottom Text"></b-input>
            <b-input id="inline-form-input-name" class="my-3 mr-sm-2 mb-sm-0" v-model="extraField" placeholder="Extra Text"></b-input>
            <b-input id="inline-form-input-name" class="my-3 mr-sm-2 mb-sm-0" v-model="extraField2" placeholder="Extra Text"></b-input>

            <label for="size">Font Size</label>
            <b-form-input class="size" :id="idSize" type="range" min="30" max="50" step="1" v-on:input="mySize"></b-form-input>
            <label for="opacity">Font Opacity</label>
            <b-form-input class="opacity" :id="idOpacity" type="range" min="0" max="1" step="0.1" v-on:input="opacity"></b-form-input>
            <label class="sr-only" for="inline-form-input-name"></label>
            <b-button @click="download" class="btn mt-3">Download</b-button>
        </div>
    </b-form>
  </div>
  
</template>
<script>
import { saveAsPng } from 'save-html-as-image'
export default {
  name: 'Editor',
  props: {
    imgToEdit: {
      type: String
    }
  },
  data () {
    return {
      topField: '',
      bottomField: '',
      extraField: '',
      extraField2: '',
      value: '',
      textSize: '8',
      textOpacity: '1',
      idSize: 'rng1',
      idOpacity: 'op1',
      width: 0,
      heigth: 0,
      x: 0,
      y: 0,
      idCanvas: 'image',
    }
  },
  methods: {
    onResize: function (x, y, width, heigth) {
      this.x = x
      this.y = x
      this.width = width
      this.heigth = heigth
    },
    onDrag: function (x, y) {
      this.x = x
      this.y = y
    },
    mySize: function () {
      this.textSize = self.rng1.value
    },
    opacity: function () {
      this.textOpacity = self.op1.value
    },
    download: function () {
      const node = this.$refs.download
      saveAsPng(node, { filename: 'MemeOverlord', printDate: false })
      // saveAsJpeg(node, { filename: 'MemeOverlord', printDate: false })
    }
  }
}
</script>

<style scoped>
*{
  background-color: white;
}

.header{
    text-align: center;
    font-weight: bold;
}

#download img{
    max-width: 100%;
    margin-right: 10px;
}
.editor form{
    width: 90%;
    margin-left: 10px;
}
.editor form input{
    width: 100%;
}
.top{
  display: flex;
  flex-direction: column;
}
.top label{
    margin-top: 10px;
}
.editor form input:last-child{
    margin-top: 20px;
}
.editor form .value p{
    font-size: 24px;
    text-transform: uppercase;
    width: 80%;
    height: 5%;
    margin: 15px;
    text-align: center;
}
.handle, .vdr {
    position: absolute;
    box-sizing: border-box;
    top: 0;
    border: none;
}
</style>
