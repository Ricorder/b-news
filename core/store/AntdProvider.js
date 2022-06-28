import { ConfigProvider } from 'antd'
import ruRU from 'antd/lib/locale/ru_RU'

export default function AntdProvider ({children, ...props}) {
  return <ConfigProvider locale={ruRU} componentSize="large">{children}</ConfigProvider>
}