import { HomeOutlined, UserOutlined, ProfileOutlined, MailOutlined, GlobalOutlined } from '@ant-design/icons';
import { Breadcrumb, ConfigProvider } from 'antd';
import DropdownLanguage from './DropdownLanguage';

const Header = () => {

  return (
    <ConfigProvider
      theme={{
        token: {
          fontSize: 15,
          colorTextDescription: '#000000',
        }
      }}>
      <Breadcrumb
        items={[
        {
          href: '/',
          title: (
            <>
              <HomeOutlined />
              <span>Home</span>
            </>
          )
        },
        {
          href: '/about',
          title: (
            <>
              <UserOutlined />
              <span>About</span>
            </>
          ),
        },
        {
          href: '/project',
          title: (
            <>
              <ProfileOutlined />
              <span>Project</span>
            </>
          )
        },
        {
          href: '/contact',
          title: (
            <>
              <MailOutlined />
              <span>Contact</span>
            </>
          )
        },
        {
          href: '',
          title: (
            <>
              <GlobalOutlined />
              <span>Language</span>
            </>
          )
        },
        ]}
      />
      {/* <DropdownLanguage /> */}
    </ConfigProvider>
  )
}

export default Header;