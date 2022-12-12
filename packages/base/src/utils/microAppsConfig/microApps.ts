export type MicroApps = {
  name: string
  module: string
  devEntry?: string
  proEntry?: string
  port?: string
  routerBase?: string
  countainer?: string
}
export const apps: MicroApps[] = [
  {
    name: 'local',
    module: 'local',
    devEntry: '//localhost:5174',
    routerBase: '#/local'
  },
  {
    name: 'whole-network',
    module: 'whole-network',
    devEntry: '//localhost:5175',
    routerBase: '#/whole'
  }
]
