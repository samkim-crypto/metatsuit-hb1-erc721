import { utils, BigNumber } from "ethers";
import React from "react";
import NetworkConfigInterface from "../../../../smart-contract/lib/NetworkConfigInterface";

interface Props {
  networkConfig: NetworkConfigInterface;
  maxSupply: number;
  totalSupply: number;
  tokenPrice: BigNumber;
  maxMintAmountPerTx: number;
  isPaused: boolean;
  isWhitelistMintEnabled: boolean;
  isUserInWhitelist: boolean;
  mintTokens(mintAmount: number, state: MintWidget): Promise<void>;
  whitelistMintTokens(mintAmount: number, state: MintWidget): Promise<void>;
}

interface State {
  mintAmount: number;
  mintClicked: boolean;
}

const defaultState: State = {
  mintAmount: 1,
  mintClicked: false,
};

export default class MintWidget extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = defaultState;
  }

  private canMint(): boolean {
    return !this.props.isPaused || this.canWhitelistMint();
  }

  private canWhitelistMint(): boolean {
    return this.props.isWhitelistMintEnabled && this.props.isUserInWhitelist;
  }

  private incrementMintAmount(): void {
    this.setState({
      mintAmount: Math.min(
        this.props.maxMintAmountPerTx,
        this.state.mintAmount + 1
      ),
    });
  }

  private decrementMintAmount(): void {
    this.setState({
      mintAmount: Math.max(1, this.state.mintAmount - 1),
    });
  }

  public setMintClicked(): void {
    this.setState({
      mintClicked: true,
    });
  }

  private async mint(): Promise<void> {
    if (!this.props.isPaused) {
      await this.props.mintTokens(this.state.mintAmount, this);

      return;
    }

    await this.props.whitelistMintTokens(this.state.mintAmount, this);
  }

  render() {
    return (
      <>
        {this.canMint() ? (
          <div className="mint-widget">
            <div className="text-large text-yellow-400">
              {this.state.mintClicked ? (
                <>
                  <div className="border-2 border-yellow-400 pt-2 pb-4">
                    <span className="emoji">🎉</span> Mint was successful!{" "}
                    <span className="emoji">🎉</span>
                    <br /> Give it a minute and check out your NFT on{" "}
                    <a href={"https://opensea.io/"} target="_blank">
                      OpenSea
                    </a>
                    .
                  </div>
                </>
              ) : null}
            </div>

            <div className="preview">
              <img
                src="/build/images/mintingpage.gif"
                alt="Collection preview"
              />
            </div>

            <div className="price">
              <strong>Total price:</strong>{" "}
              {utils.formatEther(
                this.props.tokenPrice.mul(this.state.mintAmount)
              )}{" "}
              {this.props.networkConfig.symbol}
            </div>

            <div className="controls">
              <button
                className="decrease text-xl"
                onClick={() => this.decrementMintAmount()}
              >
                -
              </button>
              <span className="mint-amount text-xl">
                {this.state.mintAmount}
              </span>
              <button
                className="increase text-xl"
                onClick={() => this.incrementMintAmount()}
              >
                +
              </button>
              <button
                className="primary"
                onClick={() => {
                  // this.setMintClicked();
                  this.mint();
                }}
              >
                Mint
              </button>
            </div>
          </div>
        ) : (
          <div className="cannot-mint">
            {this.props.isWhitelistMintEnabled ? (
              <>
                You are not included in the <strong>whitelist</strong>.
              </>
            ) : (
              <>The sale has not started yet.</>
            )}
          </div>
        )}
      </>
    );
  }
}
