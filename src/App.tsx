import React from 'react';
import {Mosaic, MosaicBranch, MosaicWindow, RemoveButton} from "react-mosaic-component";

import "react-mosaic-component/react-mosaic-component.css";
import '@blueprintjs/core/lib/css/blueprint.css';

import './App.scss';
import WindowPortal from "./WindowPortal";


const ELEMENT_MAP: { [viewId: string]: string } = {
    'a': 'Left Window',
    'b': 'Top Right Window',
    'c': 'Bottom Right Window',
    'new': 'New Window',
};

interface AppState {
    count: number
}

class App extends React.PureComponent<{}, AppState> {
    constructor(props: any) {
        super(props);
        this.state = {
            count: 0
        }
    }
    private onClick = () => {
        this.setState({count: this.state.count + 1});
    };

    render() {
        return (
            <div className='app'>
                <div onClick={this.onClick}>
                    <WindowPortal>
                        <Mosaic
                            renderTile={(id: any, path: MosaicBranch[]) => (
                                <MosaicWindow
                                    path={path} createNode={() => 'new'}
                                    title={ELEMENT_MAP[id]}
                                    toolbarControls={[<RemoveButton/>]}
                                >
                                    <h1>{ELEMENT_MAP[id]}</h1>
                                </MosaicWindow>
                            )}
                            initialValue={{
                                direction: 'column',
                                first: {
                                    direction: 'row',
                                    first: 'b',
                                    second: 'c',
                                },
                                second: 'a',
                                splitPercentage: 60,
                            }}
                        />
                    </WindowPortal>
                </div>
                <Mosaic
                    renderTile={(id: any, path: MosaicBranch[]) => (
                        <MosaicWindow
                            path={path} createNode={() => 'new'}
                            title={ELEMENT_MAP[id]}
                            toolbarControls={[<RemoveButton/>]}
                        >
                            <h1>{ELEMENT_MAP[id]}</h1>
                        </MosaicWindow>
                    )}
                    initialValue={{

                        direction: 'column',
                        first: {
                            direction: 'row',
                            first: 'b',
                            second: 'c',
                        },
                        second: 'a',
                        splitPercentage: 60,
                    }}
                />
            </div>
        );
    }
}

export default App;
