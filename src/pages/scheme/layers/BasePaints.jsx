import React, { useMemo } from "react";
import _ from "lodash";

import URLImage from "components/URLImage";
import { LayerTypes } from "constant";
import config from "config";

const BasePaints = (props) => {
  const { layers, handleImageSize } = props;

  const filteredLayers = useMemo(
    () =>
      _.orderBy(
        layers.filter(
          (item) => item.layer_type === LayerTypes.BASE && item.layer_visible
        ),
        ["layer_order", "desc"]
      ),
    [layers]
  );

  return (
    <>
      {filteredLayers.map((layer) => (
        <URLImage
          src={`${config.assetsURL}/bases/${layer.layer_data.id}/${layer.layer_data.img}`}
          tellSize={handleImageSize}
          opacity={layer.layer_data.opacity}
          filterColor={layer.layer_data.color}
          key={layer.id}
          listening={false}
        />
      ))}
    </>
  );
};

export default React.memo(BasePaints);
