<template>
  <div class="v-m-validation-messages" v-if="errorMessages">
    <template v-if="errorMessages instanceof Array">
      <template v-if="error && errorMessages.length && typeof errorMessages[0] === 'string'">
        <VText
          v-for="message in errorMessages" size="x-small"
          :key="message"
        >{{ message }}</VText>
      </template>

      <template v-else-if="typeof errorMessages[0] === 'object'">
        <div
          v-for="message in errorMessages"
          :key="message.text"
          :class="['v-m-validation-messages__message', `${message.state ? `v-m-validation-messages__message--${message.state}` : '' }`]"
        >
          <VText size="x-small">{{ message.text }}</VText>
        </div>
      </template>
    </template>

    <VText v-else-if="typeof errorMessages === 'string' && error" size="x-small">{{ errorMessages }}</VText>
  </div>
</template>

<script>
import VText from 'atoms/VText'

export default {
  name: 'VValidationMessages',
  components: {
    VText
  },
  props: {
    errorMessages: {
      type: [Array, String]
    },
    error: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.v-m-validation-messages {
  .v-a-text {
    color: inherit;
  }
}
</style>
