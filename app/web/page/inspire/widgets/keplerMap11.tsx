import React, { useEffect } from 'react';
// useState,
import { connect } from 'react-redux';
import KeplerGl from 'kepler.gl';
// updateMap } from 'kepler.gl/actions';
import { addDataToMap, wrapTo } from 'kepler.gl/actions';
import { theme } from 'kepler.gl/styles';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
// import lodash from 'lodash';
import { ThemeProvider } from 'styled-components';
import { IKeplerProps, IKeplerJson } from '@/types/common';
// import xiaoniuData from '../data/fleet-data.json';
import configGalaxy from '../data/galaxy-config';
import galaxyData from '../data/galaxy-data.json';
// import keplerglAllData from '../data/keplergl-all.json';

// longitude 纬度
// latitude 经度

const KeplerMapContainer: React.FC<IKeplerProps> = props => {
  const { dispatch } = props;
  // statisticsData } = props;
  // const [realData, setRealData] = useState<any>();
  // const [xiaoniuConfig, setXiaoniuConfig] = useState<any>();

  // // 处理数据
  // useEffect(() => {
  //   if (!lodash.isEmpty(statisticsData)) {
  //     const useData = xiaoniuData as IKeplerJson;
  //     const rows = statisticsData.detail.map(item => {
  //       if (item.coordinate[1] > 39) {
  //         const result = [];
  //         result.push(item.count);
  //         result.push(item.coordinate[0]);
  //         result.push(item.coordinate[1]);
  //         return result;
  //       }
  //       return [];
  //     });

  //     const calcData = {
  //       info: {},
  //       data: {
  //         fields: [],
  //         rows: [],
  //       },
  //     };
  //     calcData.info = useData.info;
  //     calcData.data.fields = useData.datasets[0].data.fields;
  //     calcData.data.rows = rows;
  //     setRealData(calcData);

  //     const {
  //       config: { config },
  //     } = useData;
  //     setXiaoniuConfig(config);
  //   }
  // }, [statisticsData]);

  // // 安装数据
  // useEffect(() => {
  //   if (!lodash.isEmpty(realData)) {
  //     dispatch(
  //       wrapTo(
  //         'KeplerGlMap',
  //         addDataToMap({
  //           datasets: realData,
  //           config: xiaoniuConfig,
  //           option: {
  //             centerMap: true,
  //             readOnly: false,
  //           },
  //         }),
  //       ),
  //     );

  //     dispatch(updateMap({ latitude: 40, longitude: 116.146, zoom: 9 }));
  //   }
  // }, [realData]);

  // // 初始化数据 不显示弹窗
  // useEffect(() => {
  //   dispatch(
  //     wrapTo(
  //       'KeplerGlMap',
  //       addDataToMap({
  //         datasets: null,
  //         option: {
  //           centerMap: true,
  //           readOnly: false,
  //         },
  //       }),
  //     ),
  //   );
  // }, []);

  // demo数据
  useEffect(() => {
    // 处理config信息
    const {
      config: { config: showConfig },
    } = configGalaxy;

    // 处理数据信息
    const jsonToData = {
      info: {},
      data: {
        fields: [],
        rows: [],
      },
    };
    // galaxyData
    const useData = galaxyData as IKeplerJson;

    jsonToData.info = useData.info;
    jsonToData.data.fields = useData.datasets[0].data.fields;
    jsonToData.data.rows = useData.datasets[0].data.allData;

    dispatch(
      wrapTo(
        'KeplerGlMap',
        addDataToMap({
          datasets: jsonToData,
          config: showConfig,
          option: {
            centerMap: true,
            readOnly: false,
          },
        }),
      ),
    );
  }, []);

  return (
    <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
      <ThemeProvider theme={theme}>
        <AutoSizer>{({ height, width }) => <KeplerGl mapboxApiAccessToken={MAPBOX_TOKEN} id="KeplerGlMap" width={width} height={height} />}</AutoSizer>
      </ThemeProvider>
    </div>
  );
};

const mapStateToProps = state => state;
const dispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, dispatchToProps)(KeplerMapContainer);
