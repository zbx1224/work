import { Layout,Popconfirm } from 'antd';
import { useMemo} from 'react';
import "../assets/css/home.scss"
import SiderContent from '../components/sider/SiderContent';
import {getSession} from "../API/session"
import { Outlet, useLocation,useNavigate} from 'react-router-dom';
import { exitSession } from '../API/AxiosURL';
import { Re } from '../API/session';
// 布局
const { Header,Sider, Content } = Layout;


export default function Home() {
let loginName = useMemo(()=>
  getSession("key").loginName
,[])
const locat = useLocation();
const navigate = useNavigate()
const handlExit = () => {
  navigate("/");
  Re("key");
  exitSession()
}
  return (
    <div className='home'>
      
        <Layout>
            <Sider width="256">
                <SiderContent></SiderContent>
            </Sider>
            <Layout>
                <Header>
                  <div className='fr'>
                    <span className='welcome'>欢迎</span>
                    <span className='welcome color_luyao'>{loginName}</span>
                    <span className='exit color_luyao'>
                      <Popconfirm
                          title="确定退出嘛?"
                          okText="确定"
                          onConfirm={handlExit}
                          cancelText="取消"
                      >
                        退出
                      </Popconfirm>
                    </span>
                  </div>
                </Header>
                <Content>
                  <div className='display_content'>
                      <p className='fl tilte'>{locat.state?.name}</p>
                      <p className='fr weather'>
                      </p>
                  </div>
                  <div>
                    <Outlet></Outlet>
                  </div>
                </Content>
            </Layout>
        </Layout>
    </div>
  )
}
