<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-content>
    <v-container fluid>
      <v-layout align-center justify-center>
        <v-flex xs10>
          <v-card>
            <v-toolbar>
              <v-toolbar-title>ユーザ一覧</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-dialog v-model="editDialog" persistent max-width="500">
                <template v-slot:activator="{ on }">
                  <v-btn color="primary" v-on="on" @click="isNewContent = true">
                    ユーザを追加
                  </v-btn>
                </template>
                <edit-member-modal
                  :content="editContent"
                  :new-content="isNewContent"
                  @closeThisModal="closeThisModal"
                />
              </v-dialog>
            </v-toolbar>
            <v-card-text>
              <v-layout>
                <v-data-table :headers="headers" :items="userList" class="elevation-1">
                  <template v-slot:items="props">
                    <td>{{ props.item.id }}</td>
                    <td>
                      {{ props.item.name }}
                    </td>
                    <td>{{ props.item.machine_name }}</td>
                    <td>
                      {{ props.item.barcode }}
                    </td>
                    <td class="justify-center layout px-0">
                      <v-icon small class="mr-2" @click="editItem(props.item)">
                        edit
                      </v-icon>
                      <v-icon small @click="deleteItem(props.item)">
                        delete
                      </v-icon>
                    </td>
                  </template>
                </v-data-table>
              </v-layout>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import cloneDeep from 'lodash/cloneDeep'
  import * as api from '@/lib/api'
  import { Member, initDefaultMember } from '~/lib/model'
  import EditMemberModal from '~/components/EditMemberModal.vue'

  @Component({
    components: { EditMemberModal },

    async asyncData({ $axios }) {
      return {
        userList: await api.getMemberList($axios)
      }
    }
  })
  export default class User extends Vue {
    userList: Array<Member> = []

    editContent: Member = initDefaultMember()
    editDialog = false
    isNewContent = true

    headers = [
      {
        text: 'id',
        value: 'id',
        align: 'left',
        sortable: true
      },
      {
        text: '名前',
        value: 'user_name',
        align: 'left',
        sortable: false
      },
      {
        text: '機体名',
        value: 'machine_name',
        align: 'left',
        sortable: false
      },
      {
        text: 'barcode',
        value: 'barcode',
        sortable: false
      }
    ]

    editItem(member: Member) {
      this.editContent = cloneDeep(member)
      this.isNewContent = false
      this.editDialog = true
    }

    async deleteItem(member: Member) {
      await api.deleteMember(member)
      await this.loadContents()
    }

    async closeThisModal() {
      this.editDialog = false
      this.editContent = initDefaultMember()
      await this.loadContents()
    }

    async loadContents() {
      this.userList = await api.getMemberList(this.$axios)
    }
  }
</script>

<style scoped>

</style>
