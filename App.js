import { FileOutlined,SmileOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import { Space, Table, Tag } from 'antd';
import { DownOutlined,EditOutlined,DeleteOutlined,PlayCircleOutlined,PauseCircleOutlined} from '@ant-design/icons';
import { Button, Dropdown, Tooltip, message } from 'antd';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { Checkbox } from 'antd';
import { Switch } from 'antd';


const { Header, Content, Footer, Sider } = Layout;
dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const weekFormat = 'MM/DD';
const monthFormat = 'YYYY/MM';

/** Manually entering any of the following formats will perform date parsing */
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY'];
const customFormat = (value) => `custom format: ${value.format(dateFormat)}`;
const customWeekStartEndFormat = (value) =>
  `${dayjs(value).startOf('week').format(weekFormat)} ~ ${dayjs(value)
    .endOf('week')
    .format(weekFormat)}`;

const onChange = (e) => {
console.log(`checked = ${e.target.checked}`);
};

const OnChange = (checked) => {
  console.log(`switch to ${checked}`);
};

const handleMenuClick = (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
  };

const items = [
  {
    label: '1st menu item',
    key: '1',
    icon: <UserOutlined />,
  },
  {
    label: '2nd menu item',
    key: '2',
    icon: <UserOutlined />,
  },
  {
    label: '3rd menu item',
    key: '3',
    icon: <UserOutlined />,
    // danger: true,
  },
  {
    label: '4rd menu item',
    key: '4',
    icon: <UserOutlined />,
    // danger: true,
    // disabled: true,
  },
];

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const value = [
  getItem('Dashboard','1', <FileOutlined />),
  getItem('Catalog','2', <FileOutlined />),
  getItem('Inventory','3', <FileOutlined />),
  getItem('Advertising','4', <FileOutlined />),
  getItem('Product Intelligence','5', <FileOutlined />),
  getItem('Fore casting','6', <FileOutlined />),
  getItem('Report Central','7', <FileOutlined/>),
  getItem('Report','8', <FileOutlined />),
  getItem('Link Accounts','9', <FileOutlined />),
  getItem('Settings','10', <FileOutlined />),
  getItem('Help','11', <FileOutlined />),
];
const App = () => {
  
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  const columns = [
    {
      title:  <Checkbox onChange={onChange}></Checkbox>,
      dataIndex: 'checkbox',
      key:'checkbox',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Campaignname',
      dataIndex:'campaignname',
      key: 'campaignname',
      // icon:<EditOutlined />,
      // render: (_, record) => (
      //   <Space size="middle">
      //     {record.campaignname}
      //     <a>Delete</a>
      //   </Space>
      // ),
    },
    {
      title: 'Info',
      key: 'info',
      dataIndex: 'info',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Automation',
      dataIndex: 'automation',
      key: 'automation',
    },
    {
      title: 'Dayparting',
      dataIndex: 'dayparting',
      key: 'dayparting',
    },
    {
      title: 'Budget',
      dataIndex: 'budget',
      key: 'budget',
    },
    {
      title: 'Bidding Strategy',
      dataIndex: 'biddingstrategy',
      key: 'biddingstrategy',
    },
    {
      title: 'Spend',
      dataIndex: 'spend',
      key: 'spend',
    },
    {
      title: 'Revenue',
      dataIndex: 'revenue',
      key: 'revenue',
    },
    {
      title: 'Current Bid',
      dataIndex: 'currentbid',
      key: 'currentbid',
    },
    {
      title: 'ACOS',
      dataIndex: 'acos',
      key: 'acos',
    },
    {
      title: 'Orders',
      dataIndex: 'orders',
      key: 'orders',
    },
    {
      title: 'Impression',
      dataIndex: 'impression',
      key: 'impression',
    },
    {
      title: 'CTR',
      dataIndex: 'ctr',
      key: 'ctr',
    },
    {
      title: 'Conv Rate',
      dataIndex: 'convrate',
      key: 'convrate',
    },
    {
      title: '',
      dataIndex: 'report',
      key: 'report',
    },
    {
      title: '',
      dataIndex: 'dot',
      key: 'dot',
    },
    
  ];
  const data = [
    {
      key: '1',
      checkbox: <Checkbox onChange={onChange}></Checkbox>,
      status:[<PlayCircleOutlined />],
      campaignname: ['Maxima Twin',<EditOutlined />],
      tags: ['M', 'SP','KT'],
      automation:<Switch defaultChecked nChange={OnChange} />,
      dayparting: <Switch unChecked nChange={OnChange} />,
      budget: '$7,099',
      biddingstrategy: <u style={{color:"blue"}}>Up&Down</u>,
      spend: '$7,099',
      revenue: '$7,099',
      currentbid: '$9',
      acos: '298%',
      orders: '34',
      impression: '4.5k',
      ctr: '4.5k',
      convrate: '1.5%',
      report: 'report',
      dot:'...'
    },
    {
      key: '2',
      checkbox:  <Checkbox onChange={onChange}></Checkbox>,
      status:[<PlayCircleOutlined />],
      campaignname: ['Alpha Bed Frames',<EditOutlined />],
      tags: ['M', 'SP','KT'],
      automation:<Switch unChecked nChange={OnChange} />,
      dayparting:<Switch defaultChecked nChange={OnChange} />,
      budget: '$12,805',
      biddingstrategy: <u style={{color:"blue"}}>Up&Down</u>,
      spend: '$12,805',
      revenue: '$12,805',
      currentbid: '$9',
      acos: '145%',
      orders: '453',
      impression: '12k',
      ctr: '12k',
      convrate: '4.5%',
      report: 'report',
      dot:'...'
    },
    {
      key: '3',
      checkbox: <Checkbox onChange={onChange}></Checkbox>,
      status:[<PauseCircleOutlined />],
      campaignname: ['Mattress',<EditOutlined />],
      tags: ['M', 'SD','PD'],
      automation:<Switch defaultChecked nChange={OnChange} />,
      dayparting: <Switch unChecked nChange={OnChange} />,
      budget: '$57,804',
      biddingstrategy: <u style={{color:"blue"}}>Up</u>,
      spend: '$57,804',
      revenue: '$57,804',
      currentbid: '$9',
      acos: '569.45%',
      orders: '35',
      impression: '4.6k',
      ctr: '4.6k',
      convrate: '5.5%',
      report: 'report',
      dot:'...'
    },
    {
      key: '4',
      checkbox: <Checkbox onChange={onChange}></Checkbox>,
      status:<DeleteOutlined />,
      campaignname: ['Bamboo Toppers',<EditOutlined />],
      tags: ['Auto'],
      automation:<Switch unChecked nChange={OnChange} />,
      dayparting: <Switch defaultChecked nChange={OnChange} />,
      budget: '$7,209',
      biddingstrategy: <u style={{color:"blue"}}>Down</u>,
      spend: '$7,209',
      revenue: '$7,209',
      currentbid: '$9',
      acos: '225%',
      orders: '35',
      impression: '3.6k',
      ctr: '3.6k',
      convrate: '9.5%',
      report: 'report',
      dot:'...'
    },
  ];

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={value} />
      </Sider>

      <Layout>
        <div style={{background: colorBgContainer,backgroundColor:"white", height:20, display: 'flex', flexDirection:"row",justifyContent:'end' }}><UserOutlined /></div>,
        <Header
          style={{
            padding: "flex",
            textAlign: 'left',
            height: 240,
            flexDirection:'column',
            background: colorBgContainer,
          }}
        ><b style={{fontSize:25}}>Advertising</b>
          <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent:"space-between"
          }}>
            <div style={{
              display: "flex",
              justifyContent: "flex-start"
              // justifyContent:"space-evenly"
            }}>
        <div style={{
            display: "flex",
          flexDirection:"column"}}>Marketplace
        <Dropdown menu={menuProps}>
      <Button>
        <Space>
          <b>Amazon 977462</b>
          <DownOutlined />
        </Space>
      </Button>
            </Dropdown>
          </div>
          <div style={{
            display: "flex",
              flexDirection: "column"
            }}>
      Ad type        
      <Dropdown menu={menuProps}>
      <Button>
        <Space>
          <b>All</b>
          <DownOutlined />
        </Space>
      </Button>
            </Dropdown>
              </div>
            </div>
            
            <div style={{
              display: "flex",
            justifyContent:"flex-end"}}>
          <div style={{
            display: "flex",
              flexDirection: "column",
            }}>Date & Time
            <Space direction="vertical" size={12}>
      <RangePicker
      defaultValue={[dayjs('2020/11/08', dateFormat), dayjs('2020/03/12', dateFormat)]}
      format={dateFormat}
                  />
                </Space>PST - Time
              </div>
            </div>
          </div>
        </Header>

        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          ><b style={{fontSize:20}}>All Campaign</b>
          <Table columns={columns} dataSource={data} />
          {/* <Table columns={columns} dataSource={data} /> */}
          </div>
        </Content>

        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
  
export default App;