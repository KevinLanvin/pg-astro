import { ScreenPlugin, useScreenPlugin } from 'tinacms'

export const TestPlugin: ScreenPlugin = {
  _type: 'screen',
  name: 'Mise en ligne',
  Icon: () => <span>🐨</span>,
  layout: "popup",
  Component() {
    return <span>Mise en ligne du site</span>
  },
}

export default function CustomButtons() {
  useScreenPlugin(TestPlugin)
  return <span>Pourquoi pas</span>
}