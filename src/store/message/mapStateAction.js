
const mapStateToProps = store => {
  return {
    msg: store.msg.message
  }
}

export default mapStateToProps;