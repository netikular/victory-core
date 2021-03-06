import React from "react";
import { merge } from "lodash";
import ReactDOM from "react-dom";
import Ecology from "ecology";
import Radium, { Style } from "radium";
import * as docgen from "react-docgen";
import { VictoryAnimation } from "../../src/index";
import { VictoryTheme, appendLinkIcon, ecologyPlaygroundLoading } from "formidable-landers";

class Docs extends React.Component {
  render() {
    return (
      <div>
        <Ecology
          overview={require("!!raw!./ecology.md")}
          source={docgen.parse(require("!!raw!../../src/victory-animation/victory-animation"))}
          scope={{React, ReactDOM, VictoryAnimation}}
          playgroundtheme="elegant"
          customRenderers={merge(appendLinkIcon, ecologyPlaygroundLoading)}
        />
        <Style rules={VictoryTheme}/>
      </div>
    );
  }
}

export default Radium(Docs);
