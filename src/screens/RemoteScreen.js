import React from 'react';
import HomeIcon from 'grommet/components/icons/base/Home';
import ConfigureIcon from 'grommet/components/icons/base/Configure';
import LeftIcon from 'grommet/components/icons/base/CaretBack';
import UpIcon from 'grommet/components/icons/base/CaretUp';
import RightIcon from 'grommet/components/icons/base/CaretNext';
import DownIcon from 'grommet/components/icons/base/CaretDown';
import CircleIcon from 'grommet/components/icons/base/EmptyCircle';
import RevertIcon from 'grommet/components/icons/base/Revert';
import Pulse from 'grommet/components/icons/Pulse';
import Button from 'grommet/components/Button';

export default class RemoteScreen extends React.Component {
  render() {
    return (
      <div>
        <div id="remoteBtnHeader">
          <Button
            id="toolsShortcut"
            onClick={() => {
              console.log('click');
            }}
          >
            <ConfigureIcon size="xlarge" />
          </Button>
          <Button
            id="homeShortcut"
            onClick={() => {
              console.log('click');
            }}
          >
            <HomeIcon size="xlarge" />
          </Button>
        </div>
        <div id="remoteCenterDiv" style={{ position: 'fixed', top: '50%' }}>
          <div id="remoteControlsDiv">
            <div
              className="remoteBtnDiv"
              style={{ marginTop: '200px', marginRight: '50px' }}
            >
              <Button
                id="remoteLeft"
                onClick={() => {
                  console.log('click');
                }}
              >
                <LeftIcon size="xlarge" />
              </Button>
            </div>
            <div className="remoteBtnDiv">
              <Button
                id="remoteUp"
                onClick={() => {
                  console.log('click');
                }}
              >
                <UpIcon size="xlarge" />
              </Button>
              <div style={{ height: '50px' }} />
              <Button
                id="remoteSelect"
                onClick={() => {
                  console.log('click');
                }}
              >
                <CircleIcon size="xlarge" />
              </Button>
              <div style={{ height: '50px' }} />
              <Button
                id="remoteDown"
                onClick={() => {
                  console.log('click');
                }}
              >
                <DownIcon size="xlarge" />
              </Button>
            </div>
            <div
              className="remoteBtnDiv"
              style={{ marginTop: '200px', marginLeft: '50px' }}
            >
              <Button
                id="remoteRight"
                onClick={() => {
                  console.log('click');
                }}
              >
                <RightIcon size="xlarge" />
              </Button>
            </div>
          </div>
        </div>
        <div id="remoteBtnFooter">
          <Button
            id="remoteBackBtn"
            onClick={() => {
              console.log('click');
            }}
          >
            <RevertIcon size="xlarge" />
          </Button>
        </div>
      </div>
    );
  }
}
