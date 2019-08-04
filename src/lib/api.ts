// import axios from 'axios'
import range from 'lodash/range'
import { Member } from '~/lib/model'

// const BASE_URL = process.env.API_URL

// eslint-disable-next-line require-await
export const getMemberList = async (): Promise<Array<Member>> => {
  return range(10).map((it): Member => <Member>({
    id: it,
    name: `ユーザー名 ${it}`,
    machine_name: `機体名 ${it}`,
    barcode: 114514
  }))
}

// eslint-disable-next-line require-await,@typescript-eslint/no-unused-vars
export const postMember = async (member: Member): Promise<null> => {
  // axious request
  return null
}

// eslint-disable-next-line require-await,@typescript-eslint/no-unused-vars
export const updateMember = async (member: Member): Promise<null> => {
  // axious request
  return null
}

// eslint-disable-next-line require-await,@typescript-eslint/no-unused-vars
export const deleteMember = async (member: Member): Promise<null> => {
  // axious request
  return null
}

/**
 * ユーザー登録画面はいる　バーコードとユーザーの紐付け
 * 機体の名前：nullable

 websocket
 スタートした瞬間（機体ごとに）

 待機状態
 レース登録フェーズ　カメラの下にマシンを置いて、機体登録
 登録完了→レース実施
 レース完了後→OK押してレースデータ送信
 送信失敗→レースをやり直し

 ゴールした瞬間→審判が試合が有効か判定→完了処理
 上位９
 */
