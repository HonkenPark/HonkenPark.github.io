import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space, MenuProps } from 'antd';
import { useState } from 'react';

const DropdownLanguage = () => {

  const [open, setOpen] = useState(false);

  const handleMenuClick = (e) => {
    console.log(e);
  };

  const handleOpenChange = (flag) => {
    setOpen(!flag);
    console.log(flag);
  };

  const langList = [
    {
      label: '한국어',
      key: '1',
    },
    {
      label: 'English',
      key: '2',
    }
  ];

  return (
    <>
      <Dropdown menu={{ langList, onClick: handleMenuClick, }}
      open={open}
      onOpenChange={handleOpenChange}
      >
        <Space>
          &nbsp;Language
          <DownOutlined />
        </Space>
      </Dropdown>
    </>
  )
}

export default DropdownLanguage;