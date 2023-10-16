// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: pcFNE46rGqnuDWuZHtCFTE
// Component: NySpP4drS6
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_montal.module.css"; // plasmic-import: pcFNE46rGqnuDWuZHtCFTE/projectcss
import sty from "./PlasmicCard.module.css"; // plasmic-import: NySpP4drS6/css

createPlasmicElementProxy;

export const PlasmicCard__VariantProps = new Array();

export const PlasmicCard__ArgProps = new Array("children", "slot", "slot2");

const $$ = {};

function PlasmicCard__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = p.useCurrentUser?.() || {};
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <div
        data-plasmic-name={"divsingleFacility"}
        data-plasmic-override={overrides.divsingleFacility}
        className={classNames(projectcss.all, sty.divsingleFacility)}
      >
        <div
          data-plasmic-name={"symbol2"}
          data-plasmic-override={overrides.symbol2}
          className={classNames(projectcss.all, sty.symbol2)}
        >
          {p.renderPlasmicSlot({
            defaultContents: "\uf0ac",
            value: args.slot2,
            className: classNames(sty.slotTargetSlot2)
          })}
        </div>
        <div
          data-plasmic-name={"heading5Accessibilite"}
          data-plasmic-override={overrides.heading5Accessibilite}
          className={classNames(projectcss.all, sty.heading5Accessibilite)}
        >
          {p.renderPlasmicSlot({
            defaultContents: "Accessibilit\u00e9",
            value: args.children,
            className: classNames(sty.slotTargetChildren)
          })}
        </div>
        {p.renderPlasmicSlot({
          defaultContents: "200 km de Paris\n20 km de Cabourg\n20 km de Caen",
          value: args.slot,
          className: classNames(sty.slotTargetSlot)
        })}
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "divsingleFacility", "symbol2", "heading5Accessibilite"],
  divsingleFacility: ["divsingleFacility", "symbol2", "heading5Accessibilite"],
  symbol2: ["symbol2"],
  heading5Accessibilite: ["heading5Accessibilite"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicCard__ArgProps,
          internalVariantPropNames: PlasmicCard__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCard";
  } else {
    func.displayName = `PlasmicCard.${nodeName}`;
  }
  return func;
}

export const PlasmicCard = Object.assign(
  // Top-level PlasmicCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    divsingleFacility: makeNodeComponent("divsingleFacility"),
    symbol2: makeNodeComponent("symbol2"),
    heading5Accessibilite: makeNodeComponent("heading5Accessibilite"),
    // Metadata about props expected for PlasmicCard
    internalVariantProps: PlasmicCard__VariantProps,
    internalArgProps: PlasmicCard__ArgProps
  }
);

export default PlasmicCard;
/* prettier-ignore-end */
