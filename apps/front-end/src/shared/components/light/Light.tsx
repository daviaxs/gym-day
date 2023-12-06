import { LightProps, LightStyle } from './Light.style'

export function Light({ color = 'blue-500', $intensity = 'high' }: LightProps) {
  return <LightStyle className="light" color={color} $intensity={$intensity} />
}
