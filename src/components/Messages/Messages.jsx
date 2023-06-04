import "./Messages.css";

const Messages = (props) => {
    return (
      <div className="content content__messages">
        <div className="messages">
          <div className="messages__names">
            <div className="messages__name active">Andrey</div>
            <div className="messages__name">Ruslan</div>
            <div className="messages__name">Serega</div>
            <div className="messages__name">Pashok</div>
            <div className="messages__name">Vadim</div>
            <div className="messages__name">Leha</div>
          </div>
          <div className="messages__dialogs">
            <div className="messages__dialog">Hi!</div>
            <div className="messages__dialog">How are u?</div>
            <div className="messages__dialog">Where`s Pashok?</div>
          </div>
        </div>
      </div>
    );
}
 
export default Messages;