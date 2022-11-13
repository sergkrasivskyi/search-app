<template>
  <div>
<input class="| hidden" type="checkbox" name="rooms" id="room-1" value="1"
  v-bind="$attrs">
<label class="border-solid border-sky-300 border-2 cursor-pointer font-medium  text-sky-600  bg-yellow-200 px-4 py-2"
  for="room-1"><slot></slot></label>
  </div>
</template>

<script>
  export default {
    name: 'AppInput'
  }
</script>