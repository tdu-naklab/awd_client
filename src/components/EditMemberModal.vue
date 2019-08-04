<template>
  <v-card>
    <v-toolbar class="headline primary" primary-title>
      <v-toolbar-title>
        <span>{{ 'Userを' + (newContent ? '追加' : '編集') }}</span>
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items>
        <v-flex align-center layout py-2>
          <v-btn flat icon @click="closeThisModal">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-flex>
      </v-toolbar-items>
    </v-toolbar>
    <v-card-text>
      <v-form>
        <v-layout>
          <v-text-field
            v-model="content.name"
            name="name"
            label="Name"
            type="text"
          ></v-text-field>
        </v-layout>
        <v-layout>
          <v-text-field
            v-model="content.machine_name"
            name="machine_name"
            label="machine_name"
            type="text"
          ></v-text-field>
        </v-layout>
        <v-layout>
          <v-text-field
            v-model="content.barcode"
            name="barcode"
            label="machine_name"
            type="number"
          ></v-text-field>
        </v-layout>
        <v-card-actions>
          <v-btn color="success" @click="save">
            Save
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
  import { Component, Prop, Vue, Emit } from 'vue-property-decorator'
  import { Member } from '@/lib/model'
  import * as api from '@/lib/api'

  @Component({
    components: {}
  })
  export default class EditMemberModal extends Vue {
    @Prop(Object)
    content!: Member

    @Prop(Boolean)
    newContent!: boolean

    @Emit('closeThisModal')
    closeThisModal() {
      console.log('close this modal')
    }

    async save() {
      const param = this.content
      console.log(param)

      try {
        if (this.newContent) {
          await api.postMember(param)
        } else {
          await api.updateMember(param)
        }
        //     message = this.resultMessage(result)
        //     this.visibleParentSnackBar(result, message)
        this.closeThisModal()
      } catch (e) {
        console.error(e)
      }

      // const baseUrl = '/api/book'
      // const url = this.newContent ? baseUrl : baseUrl + `/${this.content.uuid}`
      // const method = this.newContent ? 'POST' : 'PUT'
      //
      // this.$axios({ url, method, data: param })
      //   .then((res) => {
      //     console.log(res)
      //     message = this.resultMessage(result)
      //     this.visibleParentSnackBar(result, message)
      //     this.closeThisModal()
      //   })
      //   .catch((e) => {
      //     result = false
      //     message = this.resultMessage(result)
      //     this.visibleThisSnackBar(result, message)
      //     console.log(e)
      //   })
    }
  }
</script>

<style scoped></style>
