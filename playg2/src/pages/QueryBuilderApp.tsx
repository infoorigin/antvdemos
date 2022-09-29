import { QueryBuilder } from '@cubejs-client/playground';
// import the antd styles from the `@cubejs-client/playground` package as it overrides some variables
// import '@cubejs-client/playground/lib/antd.min.css';
// alternatively you can use the default antd styles
import 'antd/dist/antd.min.css';
import { Layout } from 'antd';
const { Content } = Layout;

const apiUrl = 'https://awesome-ecom.gcp-us-central1.cubecloudapp.dev/cubejs-api/v1';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1OTQ2NjY4OTR9.0fdi5cuDZ2t3OSrPOMoc3B1_pwhnWj4ZmM3FHEX7Aus';

const onTokenPayloadChange = async (payload: Record<string, any>, token:string|null) => {
    if (token != null) {
      return token;
    }
  
    const response = await fetch('/playground/token', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        payload,
      }),
    });
    const json = await response.json();
    return json.token;
  }

export default function App() {
  const query = {
    measures: ['Orders.count'],
    dimensions:  ['Orders.status']
  };

  return (
    <Content
      className="site-layout"
      style={{
        padding: '0 50px',
        marginTop: 64,
      }}
    >
    <QueryBuilder
      apiUrl={apiUrl}
      token={token}
      onTokenPayloadChange={onTokenPayloadChange}
      initialVizState={{
        query
      }}
    />
    </Content>
  );
}
