// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: pcFNE46rGqnuDWuZHtCFTE
// Component: B4V1IgWtq3Xd
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import * as pp from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  useTrigger,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_montal.module.css"; // plasmic-import: pcFNE46rGqnuDWuZHtCFTE/projectcss
import sty from "./PlasmicTextInput.module.css"; // plasmic-import: B4V1IgWtq3Xd/css
import Searchsvg2Icon from "./icons/PlasmicIcon__Searchsvg2"; // plasmic-import: 1napMU7J24i9/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: QnJQiuLrJJaI/icon

createPlasmicElementProxy;

export const PlasmicTextInput__VariantProps = new Array(
  "showStartIcon",
  "showEndIcon",
  "isDisabled",
  "color"
);

export const PlasmicTextInput__ArgProps = new Array(
  "placeholder",
  "endIcon",
  "startIcon",
  "name",
  "aria-label",
  "aria-labelledby",
  "type",
  "value"
);

function PlasmicTextInput__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(
    () =>
      Object.assign(
        {
          placeholder: "Enter Email"
        },
        props.args
      ),
    [props.args]
  );
  const $props = {
    ...args,
    ...variants
  };
  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = p.useCurrentUser?.() || {};
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "showStartIcon",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.showStartIcon
      },
      {
        path: "showEndIcon",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.showEndIcon
      },
      {
        path: "isDisabled",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isDisabled
      },
      {
        path: "color",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.color
      },
      {
        path: "value",
        type: "writable",
        variableType: "text",
        valueProp: "value",
        onChangeProp: "onChange"
      }
    ],

    [$props, $ctx, $refs]
  );
  const $state = p.useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });
  const [isRootFocusVisibleWithin, triggerRootFocusVisibleWithinProps] =
    useTrigger("useFocusVisibleWithin", {
      isTextInput: true
    });
  const triggers = {
    focusVisibleWithin_root: isRootFocusVisibleWithin
  };
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
        sty.root,
        {
          [sty.root___focusVisibleWithin]: triggers.focusVisibleWithin_root,
          [sty.rootcolor_dark]: hasVariant($state, "color", "dark"),
          [sty.rootisDisabled]: hasVariant($state, "isDisabled", "isDisabled"),
          [sty.rootshowStartIcon]: hasVariant(
            $state,
            "showStartIcon",
            "showStartIcon"
          )
        }
      )}
      data-plasmic-trigger-props={[triggerRootFocusVisibleWithinProps]}
    >
      <div
        data-plasmic-name={"startIconContainer"}
        data-plasmic-override={overrides.startIconContainer}
        className={classNames(projectcss.all, sty.startIconContainer, {
          [sty.startIconContainer___focusVisibleWithin]:
            triggers.focusVisibleWithin_root,
          [sty.startIconContainercolor_dark]: hasVariant(
            $state,
            "color",
            "dark"
          ),
          [sty.startIconContainerisDisabled]: hasVariant(
            $state,
            "isDisabled",
            "isDisabled"
          ),
          [sty.startIconContainershowStartIcon]: hasVariant(
            $state,
            "showStartIcon",
            "showStartIcon"
          )
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <Searchsvg2Icon
              className={classNames(projectcss.all, sty.svg__oFxI2)}
              role={"img"}
            />
          ),

          value: args.startIcon,
          className: classNames(sty.slotTargetStartIcon, {
            [sty.slotTargetStartIconcolor_dark]: hasVariant(
              $state,
              "color",
              "dark"
            ),
            [sty.slotTargetStartIconshowStartIcon]: hasVariant(
              $state,
              "showStartIcon",
              "showStartIcon"
            )
          })
        })}
      </div>
      <input
        data-plasmic-name={"input"}
        data-plasmic-override={overrides.input}
        className={classNames(projectcss.all, projectcss.input, sty.input, {
          [sty.input___focusVisibleWithin]: triggers.focusVisibleWithin_root,
          [sty.inputcolor_dark]: hasVariant($state, "color", "dark"),
          [sty.inputisDisabled]: hasVariant($state, "isDisabled", "isDisabled"),
          [sty.inputshowStartIcon]: hasVariant(
            $state,
            "showStartIcon",
            "showStartIcon"
          )
        })}
        disabled={
          hasVariant($state, "isDisabled", "isDisabled") ? true : undefined
        }
        placeholder={args.placeholder}
        ref={ref => {
          $refs["input"] = ref;
        }}
        type={"text"}
      />

      <div
        data-plasmic-name={"endIconContainer"}
        data-plasmic-override={overrides.endIconContainer}
        className={classNames(projectcss.all, sty.endIconContainer, {
          [sty.endIconContainercolor_dark]: hasVariant($state, "color", "dark"),
          [sty.endIconContainershowEndIcon]: hasVariant(
            $state,
            "showEndIcon",
            "showEndIcon"
          )
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <ChecksvgIcon
              className={classNames(projectcss.all, sty.svg__a685J)}
              role={"img"}
            />
          ),

          value: args.endIcon,
          className: classNames(sty.slotTargetEndIcon, {
            [sty.slotTargetEndIconcolor_dark]: hasVariant(
              $state,
              "color",
              "dark"
            ),
            [sty.slotTargetEndIconshowEndIcon]: hasVariant(
              $state,
              "showEndIcon",
              "showEndIcon"
            )
          })
        })}
      </div>
    </div>
  );
}

function useBehavior(props, ref) {
  return pp.useTextInput(
    PlasmicTextInput,
    props,
    {
      showStartIconVariant: {
        group: "showStartIcon",
        variant: "showStartIcon"
      },
      showEndIconVariant: { group: "showEndIcon", variant: "showEndIcon" },
      isDisabledVariant: { group: "isDisabled", variant: "isDisabled" },
      startIconSlot: "startIcon",
      endIconSlot: "endIcon",
      root: "root",
      input: "input"
    },
    ref
  );
}

const PlasmicDescendants = {
  root: ["root", "startIconContainer", "input", "endIconContainer"],
  startIconContainer: ["startIconContainer"],
  input: ["input"],
  endIconContainer: ["endIconContainer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicTextInput__ArgProps,
          internalVariantPropNames: PlasmicTextInput__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicTextInput__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTextInput";
  } else {
    func.displayName = `PlasmicTextInput.${nodeName}`;
  }
  return func;
}

export const PlasmicTextInput = Object.assign(
  // Top-level PlasmicTextInput renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    startIconContainer: makeNodeComponent("startIconContainer"),
    input: makeNodeComponent("input"),
    endIconContainer: makeNodeComponent("endIconContainer"),
    // Metadata about props expected for PlasmicTextInput
    internalVariantProps: PlasmicTextInput__VariantProps,
    internalArgProps: PlasmicTextInput__ArgProps,
    useBehavior
  }
);

export default PlasmicTextInput;
/* prettier-ignore-end */
