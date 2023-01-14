import s from './OnOff.module.css'

type OnOffType = {
  isActive: boolean
}

type SwitchType = {
  state: string
}

const on: string = s.onClass;
const off: string = s.offClass;

function Switch(props: SwitchType) {
  return (
    <div className={props.state}>
      <div className={s.on}>on</div>
      <div className={s.off}>off</div>
      <div className={s.light}></div>
    </div>
  )
}

export function OnOff(props: OnOffType) {
  return (
    <div>
      {props.isActive && <Switch state={on}/>}
      {!props.isActive && <Switch state={off}/>}
    </div>
  )
}