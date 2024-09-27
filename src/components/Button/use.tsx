import Button from "./button";

function ButtonCom() {
  return (
    <div style={{ width: 800 }}>
      <Button style={{ margin: 5 }} type="primary" size="large">
        Primary
      </Button>
      <Button style={{ margin: 5 }} type="info" size="large">
        Info
      </Button>
      <Button
        style={{ margin: 5 }}
        href="https://www.baidu.com/"
        target="_blank"
        type="link"
        size="large"
      >
        Link
      </Button>
      <Button style={{ margin: 5 }} type="success" size="large">
        Success
      </Button>
      <Button style={{ margin: 5 }} type="danger" size="large">
        Danger
      </Button>
      <Button style={{ margin: 5 }} type="warning" size="large">
        Warning
      </Button>
      <Button style={{ margin: 5 }} type="dark" size="large">
        Dark
      </Button>
      <Button style={{ margin: 5 }} type="light" size="large">
        Light
      </Button>
      <Button style={{ margin: 5 }} type="secondary" size="large">
        Secondary
      </Button>
    </div>
  );
}

export default ButtonCom;
