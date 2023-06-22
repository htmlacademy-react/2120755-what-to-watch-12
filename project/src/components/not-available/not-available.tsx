function NotAvailible(): JSX.Element {

  return (
    <div className="page-content" style={{ height: '100vh'}}>
      <div style={{ padding: '100px', textAlign: 'center'}}>
        <span style={{ fontSize: '88px', lineHeight: '100px' }}>☹️</span>
        <p style={{ fontSize: '28px', margin: '0', lineHeight: '150px' }}>
      Sorry, something wrong with server, at the moment.
        </p>
        <p style={{ fontSize: '28px', margin: '0', lineHeight: '30px' }}>
      Please return later.
        </p>
      </div>
    </div>
  );
}

export default NotAvailible;
