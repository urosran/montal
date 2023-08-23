// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: pcFNE46rGqnuDWuZHtCFTE
// Component: 02lq7nnnvkm
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
import sty from "./PlasmicButton.module.css"; // plasmic-import: 02lq7nnnvkm/css
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: QnJQiuLrJJaI/icon

createPlasmicElementProxy;

export const PlasmicButton__VariantProps = new Array(
  "showStartIcon",
  "showEndIcon",
  "isDisabled",
  "shape",
  "size",
  "color"
);

export const PlasmicButton__ArgProps = new Array(
  "children",
  "startIcon",
  "endIcon",
  "link",
  "submitsForm",
  "target"
);

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicButton__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});
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
        path: "shape",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.shape
      },
      {
        path: "size",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.size
      },
      {
        path: "color",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.color
      }
    ],

    [$props, $ctx, $refs]
  );

  const $state = p.useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries,
    $refs
  });
  const [isRootFocusVisibleWithin, triggerRootFocusVisibleWithinProps] =
    useTrigger("useFocusVisibleWithin", {
      isTextInput: false
    });
  const triggers = {
    focusVisibleWithin_root: isRootFocusVisibleWithin
  };
  return (
    <p.Stack
      as={"button"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.button,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        {
          [sty.root___focusVisibleWithin]: triggers.focusVisibleWithin_root,
          [sty.rootcolor_blue]: hasVariant($state, "color", "blue"),
          [sty.rootcolor_clear]: hasVariant($state, "color", "clear"),
          [sty.rootcolor_green]: hasVariant($state, "color", "green"),
          [sty.rootcolor_link]: hasVariant($state, "color", "link"),
          [sty.rootcolor_link_size_minimal]:
            hasVariant($state, "color", "link") &&
            hasVariant($state, "size", "minimal"),
          [sty.rootcolor_red]: hasVariant($state, "color", "red"),
          [sty.rootcolor_sand]: hasVariant($state, "color", "sand"),
          [sty.rootcolor_softBlue]: hasVariant($state, "color", "softBlue"),
          [sty.rootcolor_softGreen]: hasVariant($state, "color", "softGreen"),
          [sty.rootcolor_softRed]: hasVariant($state, "color", "softRed"),
          [sty.rootcolor_softSand]: hasVariant($state, "color", "softSand"),
          [sty.rootcolor_softYellow]: hasVariant($state, "color", "softYellow"),
          [sty.rootcolor_yellow]: hasVariant($state, "color", "yellow"),
          [sty.rootisDisabled]: hasVariant($state, "isDisabled", "isDisabled"),
          [sty.rootshape_round]: hasVariant($state, "shape", "round"),
          [sty.rootshape_round_size_compact]:
            hasVariant($state, "shape", "round") &&
            hasVariant($state, "size", "compact"),
          [sty.rootshape_rounded]: hasVariant($state, "shape", "rounded"),
          [sty.rootshowEndIcon]: hasVariant(
            $state,
            "showEndIcon",
            "showEndIcon"
          ),

          [sty.rootshowEndIcon_shape_rounded]:
            hasVariant($state, "showEndIcon", "showEndIcon") &&
            hasVariant($state, "shape", "rounded"),
          [sty.rootshowStartIcon]: hasVariant(
            $state,
            "showStartIcon",
            "showStartIcon"
          ),

          [sty.rootshowStartIcon_shape_rounded]:
            hasVariant($state, "shape", "rounded") &&
            hasVariant($state, "showStartIcon", "showStartIcon"),
          [sty.rootsize_compact]: hasVariant($state, "size", "compact"),
          [sty.rootsize_compact_color_sand]:
            hasVariant($state, "color", "sand") &&
            hasVariant($state, "size", "compact"),
          [sty.rootsize_compact_shape_rounded]:
            hasVariant($state, "size", "compact") &&
            hasVariant($state, "shape", "rounded"),
          [sty.rootsize_compact_showEndIcon]:
            hasVariant($state, "size", "compact") &&
            hasVariant($state, "showEndIcon", "showEndIcon"),
          [sty.rootsize_compact_showStartIcon]:
            hasVariant($state, "size", "compact") &&
            hasVariant($state, "showStartIcon", "showStartIcon"),
          [sty.rootsize_compact_showStartIcon_showEndIcon]:
            hasVariant($state, "size", "compact") &&
            hasVariant($state, "showStartIcon", "showStartIcon") &&
            hasVariant($state, "showEndIcon", "showEndIcon"),
          [sty.rootsize_minimal]: hasVariant($state, "size", "minimal")
        }
      )}
      data-plasmic-trigger-props={[triggerRootFocusVisibleWithinProps]}
    >
      {(hasVariant($state, "showStartIcon", "showStartIcon") ? true : false) ? (
        <div
          data-plasmic-name={"startIconContainer"}
          data-plasmic-override={overrides.startIconContainer}
          className={classNames(projectcss.all, sty.startIconContainer, {
            [sty.startIconContainercolor_blue]: hasVariant(
              $state,
              "color",
              "blue"
            ),

            [sty.startIconContainershowStartIcon]: hasVariant(
              $state,
              "showStartIcon",
              "showStartIcon"
            ),

            [sty.startIconContainershowStartIcon_shape_rounded]:
              hasVariant($state, "shape", "rounded") &&
              hasVariant($state, "showStartIcon", "showStartIcon")
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <ChecksvgIcon
                className={classNames(projectcss.all, sty.svg__eUcIz)}
                role={"img"}
              />
            ),

            value: args.startIcon,
            className: classNames(sty.slotTargetStartIcon, {
              [sty.slotTargetStartIconcolor_blue]: hasVariant(
                $state,
                "color",
                "blue"
              ),

              [sty.slotTargetStartIconcolor_clear]: hasVariant(
                $state,
                "color",
                "clear"
              ),

              [sty.slotTargetStartIconcolor_link]: hasVariant(
                $state,
                "color",
                "link"
              ),

              [sty.slotTargetStartIconcolor_softBlue]: hasVariant(
                $state,
                "color",
                "softBlue"
              ),

              [sty.slotTargetStartIconcolor_softGreen]: hasVariant(
                $state,
                "color",
                "softGreen"
              ),

              [sty.slotTargetStartIconcolor_softRed]: hasVariant(
                $state,
                "color",
                "softRed"
              ),

              [sty.slotTargetStartIconcolor_softSand]: hasVariant(
                $state,
                "color",
                "softSand"
              ),

              [sty.slotTargetStartIconcolor_softYellow]: hasVariant(
                $state,
                "color",
                "softYellow"
              ),

              [sty.slotTargetStartIconcolor_yellow]: hasVariant(
                $state,
                "color",
                "yellow"
              ),

              [sty.slotTargetStartIconshowStartIcon]: hasVariant(
                $state,
                "showStartIcon",
                "showStartIcon"
              )
            })
          })}
        </div>
      ) : null}
      <div
        data-plasmic-name={"contentContainer"}
        data-plasmic-override={overrides.contentContainer}
        className={classNames(projectcss.all, sty.contentContainer, {
          [sty.contentContainer___focusVisibleWithin]:
            triggers.focusVisibleWithin_root,
          [sty.contentContainerisDisabled]: hasVariant(
            $state,
            "isDisabled",
            "isDisabled"
          ),

          [sty.contentContainershape_rounded]: hasVariant(
            $state,
            "shape",
            "rounded"
          ),

          [sty.contentContainershowEndIcon]: hasVariant(
            $state,
            "showEndIcon",
            "showEndIcon"
          )
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Button",
          value: args.children,
          className: classNames(sty.slotTargetChildren, {
            [sty.slotTargetChildren___focusVisibleWithin]:
              triggers.focusVisibleWithin_root,
            [sty.slotTargetChildrencolor_blue]: hasVariant(
              $state,
              "color",
              "blue"
            ),

            [sty.slotTargetChildrencolor_clear]: hasVariant(
              $state,
              "color",
              "clear"
            ),

            [sty.slotTargetChildrencolor_green]: hasVariant(
              $state,
              "color",
              "green"
            ),

            [sty.slotTargetChildrencolor_link]: hasVariant(
              $state,
              "color",
              "link"
            ),

            [sty.slotTargetChildrencolor_link_size_minimal]:
              hasVariant($state, "color", "link") &&
              hasVariant($state, "size", "minimal"),
            [sty.slotTargetChildrencolor_red]: hasVariant(
              $state,
              "color",
              "red"
            ),

            [sty.slotTargetChildrencolor_sand]: hasVariant(
              $state,
              "color",
              "sand"
            ),

            [sty.slotTargetChildrencolor_softBlue]: hasVariant(
              $state,
              "color",
              "softBlue"
            ),

            [sty.slotTargetChildrencolor_softGreen]: hasVariant(
              $state,
              "color",
              "softGreen"
            ),

            [sty.slotTargetChildrencolor_softRed]: hasVariant(
              $state,
              "color",
              "softRed"
            ),

            [sty.slotTargetChildrencolor_softSand]: hasVariant(
              $state,
              "color",
              "softSand"
            ),

            [sty.slotTargetChildrencolor_softYellow]: hasVariant(
              $state,
              "color",
              "softYellow"
            ),

            [sty.slotTargetChildrencolor_yellow]: hasVariant(
              $state,
              "color",
              "yellow"
            ),

            [sty.slotTargetChildrenisDisabled]: hasVariant(
              $state,
              "isDisabled",
              "isDisabled"
            ),

            [sty.slotTargetChildrenshape_rounded]: hasVariant(
              $state,
              "shape",
              "rounded"
            ),

            [sty.slotTargetChildrenshowEndIcon]: hasVariant(
              $state,
              "showEndIcon",
              "showEndIcon"
            ),

            [sty.slotTargetChildrenshowStartIcon]: hasVariant(
              $state,
              "showStartIcon",
              "showStartIcon"
            ),

            [sty.slotTargetChildrensize_compact_color_sand]:
              hasVariant($state, "size", "compact") &&
              hasVariant($state, "color", "sand"),
            [sty.slotTargetChildrensize_minimal]: hasVariant(
              $state,
              "size",
              "minimal"
            )
          })
        })}
      </div>
      {(hasVariant($state, "showEndIcon", "showEndIcon") ? true : false) ? (
        <div
          data-plasmic-name={"endIconContainer"}
          data-plasmic-override={overrides.endIconContainer}
          className={classNames(projectcss.all, sty.endIconContainer, {
            [sty.endIconContainercolor_yellow]: hasVariant(
              $state,
              "color",
              "yellow"
            ),

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
                className={classNames(projectcss.all, sty.svg__iRjvW)}
                role={"img"}
              />
            ),

            value: args.endIcon,
            className: classNames(sty.slotTargetEndIcon, {
              [sty.slotTargetEndIconcolor_clear]: hasVariant(
                $state,
                "color",
                "clear"
              ),

              [sty.slotTargetEndIconcolor_link]: hasVariant(
                $state,
                "color",
                "link"
              ),

              [sty.slotTargetEndIconcolor_softBlue]: hasVariant(
                $state,
                "color",
                "softBlue"
              ),

              [sty.slotTargetEndIconcolor_softGreen]: hasVariant(
                $state,
                "color",
                "softGreen"
              ),

              [sty.slotTargetEndIconcolor_softRed]: hasVariant(
                $state,
                "color",
                "softRed"
              ),

              [sty.slotTargetEndIconcolor_softSand]: hasVariant(
                $state,
                "color",
                "softSand"
              ),

              [sty.slotTargetEndIconcolor_softYellow]: hasVariant(
                $state,
                "color",
                "softYellow"
              ),

              [sty.slotTargetEndIconcolor_yellow]: hasVariant(
                $state,
                "color",
                "yellow"
              ),

              [sty.slotTargetEndIconshowEndIcon]: hasVariant(
                $state,
                "showEndIcon",
                "showEndIcon"
              )
            })
          })}
        </div>
      ) : null}
    </p.Stack>
  );
}

function useBehavior(props, ref) {
  const b = pp.useButton(
    PlasmicButton,
    props,
    {
      showStartIconVariant: {
        group: "showStartIcon",
        variant: "showStartIcon"
      },
      showEndIconVariant: { group: "showEndIcon", variant: "showEndIcon" },
      isDisabledVariant: { group: "isDisabled", variant: "isDisabled" },
      contentSlot: "children",
      startIconSlot: "startIcon",
      endIconSlot: "endIcon",
      root: "root"
    },
    ref
  );

  return b;
}

const PlasmicDescendants = {
  root: ["root", "startIconContainer", "contentContainer", "endIconContainer"],
  startIconContainer: ["startIconContainer"],
  contentContainer: ["contentContainer"],
  endIconContainer: ["endIconContainer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicButton__ArgProps,
          internalVariantPropNames: PlasmicButton__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicButton";
  } else {
    func.displayName = `PlasmicButton.${nodeName}`;
  }
  return func;
}

export const PlasmicButton = Object.assign(
  // Top-level PlasmicButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    startIconContainer: makeNodeComponent("startIconContainer"),
    contentContainer: makeNodeComponent("contentContainer"),
    endIconContainer: makeNodeComponent("endIconContainer"),
    // Metadata about props expected for PlasmicButton
    internalVariantProps: PlasmicButton__VariantProps,
    internalArgProps: PlasmicButton__ArgProps,
    useBehavior
  }
);

export default PlasmicButton;
/* prettier-ignore-end */
