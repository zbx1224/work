import item from "../../hooks/useSider"
import {getSession} from "../../API/session"
import { Menu } from 'antd';
import { useEffect, useState } from "react";

export default function SiderContent() {
  let [ke,setKe] = useState()
  
  useEffect(()=>{
    setKe(item(getSession("key")))
  },[])
  return (
    <div>
    <Menu
      mode="inline"
      theme="dark"
      items={ke}
    />
  </div>
  )
}
