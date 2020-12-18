import React, { Component } from 'react';
import { connect } from 'react-redux';
import KeplerGl from 'kepler.gl';
import { addDataToMap, wrapTo } from 'kepler.gl/actions';
import { theme } from 'kepler.gl/styles';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import { ThemeProvider } from 'styled-components';
import configGalaxy from '../data/galaxy-config';
import galaxyData from '../data/galaxy-data.json';

// longitude 纬度
// latitude 经度
const MAPBOX_TOKEN = 'pk.eyJ1IjoieGlhb25pdSIsImEiOiJjamsxNm9oczMwNzk4M3dsYmNsdjIxYm4xIn0.xaNqu5WkkTDwuBR2zk2M9Q'; // eslint-disable-line

class KeplerMapContainer extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    const {
      config: { config: showConfig }
    } = configGalaxy;

    // 处理数据信息
    const jsonToData = {
      info: {},
      data: {
        fields: [],
        rows: []
      }
    };
    // galaxyData
    const useData = galaxyData;

    jsonToData.info = useData.info;
    jsonToData.data.fields = useData.datasets[0].data.fields;
    jsonToData.data.rows = useData.datasets[0].data.allData;

    const { dispatch } = this.props
    dispatch(
      wrapTo(
        'KeplerGlMap',
        addDataToMap({
          datasets: jsonToData,
          config: showConfig,
          option: {
            centerMap: true,
            readOnly: false
          }
        }),
      ),
    );
  }

  render () {
    return (
      <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
        <AutoSizer>{({ height, width }) => <KeplerGl mapboxApiAccessToken={MAPBOX_TOKEN} id="KeplerGlMap" width={width} height={height} />}</AutoSizer>
      </div>
    );
  }
}

const mapStateToProps = state => state;
const dispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, dispatchToProps)(KeplerMapContainer);
