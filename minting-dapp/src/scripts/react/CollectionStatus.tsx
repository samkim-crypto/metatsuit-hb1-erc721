import React from "react";

interface Props {
  userAddress: string | null;
  totalSupply: number;
  maxSupply: number;
  isPaused: boolean;
  isWhitelistMintEnabled: boolean;
  isUserInWhitelist: boolean;
}

interface State {}

const defaultState: State = {};

export default class CollectionStatus extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = defaultState;
  }

  private isSaleOpen(): boolean {
    return this.props.isWhitelistMintEnabled || !this.props.isPaused;
  }

  render() {
    return (
      <>
        <div className="collection-status">
          <div className="user-address">
            <span className="label font-bold">Wallet address:</span>
            <span className="address">{this.props.userAddress}</span>
          </div>

          <div className="supply">
            <span className="label">Supply</span>
            {this.props.totalSupply}/{this.props.maxSupply}
          </div>

          <div className="current-sale">
            <span className="label font-bold">Sale status</span>
            {this.isSaleOpen() ? (
              <>
                {this.props.isWhitelistMintEnabled ? "Whitelist only" : "Open"}
              </>
            ) : (
              "Not Yet Open"
            )}
          </div>
        </div>
      </>
    );
  }
}
