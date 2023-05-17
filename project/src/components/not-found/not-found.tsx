function NotFoundPage(): JSX.Element {

  return (
    <div className="page-content" style={{ height: '100vh'}}>
      <div style={{ padding: '100px', textAlign: 'center'}}>
        <span style={{ fontSize: '88px', lineHeight: '100px' }}>☹️</span>
        <h1 style={{ fontSize: '88px', margin: '0', lineHeight: '100px'}}>
        404 Not Found
        </h1>
        <p style={{ fontSize: '26px', margin: '0', lineHeight: '50px' }}>
      Unfortunately, this page is not available.
      Please procced to&nbsp;
          <a href="/"
            style={{
              color: '#3443eb',
              fontWeight: 'bold',
              cursor: 'pointer'}}
          >
        Main page
          </a>
        </p>
      </div>
    </div>
  );
}

export default NotFoundPage;
