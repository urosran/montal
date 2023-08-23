// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: pcFNE46rGqnuDWuZHtCFTE
// Component: CvK8Weuz6UD
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Header from "../../Header"; // plasmic-import: pWNh6TZJnoM1/component
import Button from "../../Button"; // plasmic-import: 02lq7nnnvkm/component
import TextInput from "../../TextInput"; // plasmic-import: B4V1IgWtq3Xd/component
import { useScreenVariants as useScreenVariantsmOKod1Jttq } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: mO_KOD1Jttq_/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_montal.module.css"; // plasmic-import: pcFNE46rGqnuDWuZHtCFTE/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: CvK8Weuz6UD/css
import Icon3Icon from "./icons/PlasmicIcon__Icon3"; // plasmic-import: 9G9orG1_p6IZ/icon
import Icon2Icon from "./icons/PlasmicIcon__Icon2"; // plasmic-import: 5fPXOujFdoNV/icon
import Icon28Icon from "./icons/PlasmicIcon__Icon28"; // plasmic-import: XghSQPwT_Fcp/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: TiU0_2HRXfm9/icon
import martenBjork6DW3XyQvcYeUnsplashjpgRHzA0GgqX5Na from "./images/martenBjork6DW3XyQvcYeUnsplashjpg.jpg"; // plasmic-import: RHzA0ggqX5Na/picture
import swissCheese575542640PngWJvvM9X24Vhp from "./images/swissCheese575542640Png.png"; // plasmic-import: WJvvM9x24VHP/picture

createPlasmicElementProxy;

export const PlasmicHomepage__VariantProps = new Array();

export const PlasmicHomepage__ArgProps = new Array();

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicHomepage__RenderFunc(props) {
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
        path: "textInput.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "textInput2.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "textInput3.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
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
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsmOKod1Jttq()
  });
  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
        <p.Stack
          as={"div"}
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          hasGap={true}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <nav className={classNames(projectcss.all, sty.nav__wdEfH)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__bw6F1
              )}
            >
              {"Some annoucement you want to make goes here..."}
            </div>
          </nav>
          <nav className={classNames(projectcss.all, sty.nav__ooJg8)}>
            <Header
              data-plasmic-name={"header"}
              data-plasmic-override={overrides.header}
              className={classNames("__wab_instance", sty.header)}
            />
          </nav>
          {true ? (
            <section className={classNames(projectcss.all, sty.section__iAv7Z)}>
              <div className={classNames(projectcss.all, sty.freeBox__umUt)}>
                <div className={classNames(projectcss.all, sty.columns__vAyjg)}>
                  <div
                    className={classNames(projectcss.all, sty.column___5Wh1G)}
                  >
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__xVn0N)}
                    >
                      <h1
                        data-plasmic-name={"h1"}
                        data-plasmic-override={overrides.h1}
                        className={classNames(
                          projectcss.all,
                          projectcss.h1,
                          projectcss.__wab_text,
                          sty.h1
                        )}
                      >
                        {"Montal, where it all begins...."}
                      </h1>
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__l7A5
                        )}
                      >
                        {hasVariant(globalVariants, "screen", "mobileOnly")
                          ? "Sed ut perspiciatis unde omnis iste natus error sit voluptatem"
                          : "French chatou to celebrate your moments with your people"}
                      </div>
                    </p.Stack>
                  </div>
                </div>
              </div>
            </section>
          ) : null}
          <section
            data-plasmic-name={"section3Cta"}
            data-plasmic-override={overrides.section3Cta}
            className={classNames(projectcss.all, sty.section3Cta)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox___0Lscq)}
            >
              <h2
                className={classNames(
                  projectcss.all,
                  projectcss.h2,
                  projectcss.__wab_text,
                  sty.h2__vE7Gd
                )}
              >
                {"Create your dream moment at Montal..."}
              </h2>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__kxhAd
                )}
              >
                {
                  "Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing"
                }
              </div>
            </p.Stack>
          </section>
          <section
            data-plasmic-name={"sideImage"}
            data-plasmic-override={overrides.sideImage}
            className={classNames(projectcss.all, sty.sideImage)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__yROso)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.columns__ycmTh)}
              >
                <div className={classNames(projectcss.all, sty.column__ef4XF)}>
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__rvrRj)}
                    displayHeight={"100%"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"auto"}
                    loading={"lazy"}
                    src={
                      "https://images.unsplash.com/photo-1550948390-6eb7fa773072?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1748&q=80"
                    }
                  />
                </div>
                <div className={classNames(projectcss.all, sty.column__xpnj2)}>
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__gthYf)}
                  >
                    <h2
                      className={classNames(
                        projectcss.all,
                        projectcss.h2,
                        projectcss.__wab_text,
                        sty.h2__xTr2W
                      )}
                    >
                      {"A unique and inviting place"}
                    </h2>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__u5ZKy
                      )}
                    >
                      {
                        "Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing"
                      }
                    </div>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__tk1T7
                      )}
                    >
                      {
                        "Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing"
                      }
                    </div>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__kwwIb
                      )}
                    >
                      {
                        "Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing"
                      }
                    </div>
                  </p.Stack>
                </div>
              </p.Stack>
            </p.Stack>
          </section>
          <section
            data-plasmic-name={"section3Cta2"}
            data-plasmic-override={overrides.section3Cta2}
            className={classNames(projectcss.all, sty.section3Cta2)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__cGq1E)}
            >
              <h2
                className={classNames(
                  projectcss.all,
                  projectcss.h2,
                  projectcss.__wab_text,
                  sty.h2__vMz1
                )}
              >
                {"Create your dream moment at Montal..."}
              </h2>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__se0KR
                )}
              >
                {
                  "Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing"
                }
              </div>
            </p.Stack>
          </section>
          <section
            data-plasmic-name={"niceBackgroundImage"}
            data-plasmic-override={overrides.niceBackgroundImage}
            className={classNames(projectcss.all, sty.niceBackgroundImage)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__eycPz)}
            >
              {(
                hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
              ) ? (
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__hxnir)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  loading={"lazy"}
                  src={{
                    src: martenBjork6DW3XyQvcYeUnsplashjpgRHzA0GgqX5Na,
                    fullWidth: 4096,
                    fullHeight: 2730,
                    aspectRatio: undefined
                  }}
                />
              ) : null}
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__poqSl)}
              >
                <h2
                  className={classNames(
                    projectcss.all,
                    projectcss.h2,
                    projectcss.__wab_text,
                    sty.h2__nT2Hc
                  )}
                >
                  {"Beautiful moments"}
                </h2>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__h24Au
                  )}
                >
                  {
                    "Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing"
                  }
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__szNk7
                  )}
                >
                  {
                    "Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing"
                  }
                </div>
                <Button
                  className={classNames("__wab_instance", sty.button__l4G7U)}
                  color={"sand"}
                  size={"compact"}
                  submitsForm={true}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__d5GVe
                    )}
                  >
                    {"Book now"}
                  </div>
                </Button>
              </p.Stack>
            </p.Stack>
          </section>
          <section className={classNames(projectcss.all, sty.section__mFskS)}>
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__enxoP)}
            >
              <h2
                className={classNames(
                  projectcss.all,
                  projectcss.h2,
                  projectcss.__wab_text,
                  sty.h2__tw0Sn
                )}
              >
                {hasVariant(globalVariants, "screen", "mobileOnly")
                  ? "Get In Touch"
                  : "Contact us"}
              </h2>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__fwNzI
                )}
              >
                {"Fill in your order info and someone will be in touch."}
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__se1Xs)}>
                {true ? (
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox___0KwOq)}
                  >
                    <TextInput
                      data-plasmic-name={"textInput"}
                      data-plasmic-override={overrides.textInput}
                      className={classNames("__wab_instance", sty.textInput)}
                      onChange={(...eventArgs) => {
                        p.generateStateOnChangeProp($state, [
                          "textInput",
                          "value"
                        ])((e => e.target?.value).apply(null, eventArgs));
                      }}
                      placeholder={"Enter your Email  here"}
                      value={
                        p.generateStateValueProp($state, [
                          "textInput",
                          "value"
                        ]) ?? ""
                      }
                    />

                    <TextInput
                      data-plasmic-name={"textInput2"}
                      data-plasmic-override={overrides.textInput2}
                      className={classNames("__wab_instance", sty.textInput2)}
                      onChange={(...eventArgs) => {
                        p.generateStateOnChangeProp($state, [
                          "textInput2",
                          "value"
                        ])((e => e.target?.value).apply(null, eventArgs));
                      }}
                      placeholder={"Order"}
                      value={
                        p.generateStateValueProp($state, [
                          "textInput2",
                          "value"
                        ]) ?? ""
                      }
                    />

                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button__trT8V
                      )}
                      color={"sand"}
                      size={"compact"}
                      submitsForm={true}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__qgkhV
                        )}
                      >
                        {"Submit"}
                      </div>
                    </Button>
                  </p.Stack>
                ) : null}
              </div>
            </p.Stack>
          </section>
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__vccOc)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__ufGbo)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__u2DYb)}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__jVhaP)}
                  displayHeight={"61px"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  loading={"lazy"}
                  src={{
                    src: swissCheese575542640PngWJvvM9X24Vhp,
                    fullWidth: 640,
                    fullHeight: 532,
                    aspectRatio: undefined
                  }}
                />

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox___2IvbB)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___5Bkqr
                    )}
                  >
                    {
                      "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Lorem Ipsum Dolor Sit Amet, Consectetur ."
                    }
                  </div>
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__wkrQz)}
                  >
                    {true ? (
                      <a
                        className={classNames(
                          projectcss.all,
                          projectcss.a,
                          sty.link__mu6BW
                        )}
                        href={"#"}
                        target={"_blank"}
                      >
                        <Icon3Icon
                          className={classNames(projectcss.all, sty.svg__iw5Db)}
                          role={"img"}
                        />
                      </a>
                    ) : null}
                    {true ? (
                      <a
                        className={classNames(
                          projectcss.all,
                          projectcss.a,
                          sty.link__y3YvN
                        )}
                        href={"#"}
                        target={"_blank"}
                      >
                        <Icon2Icon
                          className={classNames(projectcss.all, sty.svg__hTeXe)}
                          role={"img"}
                        />
                      </a>
                    ) : null}
                    {true ? (
                      <a
                        className={classNames(
                          projectcss.all,
                          projectcss.a,
                          sty.link__oF957
                        )}
                        href={"#"}
                        target={"_blank"}
                      >
                        <Icon28Icon
                          className={classNames(projectcss.all, sty.svg__ik8Pj)}
                          role={"img"}
                        />
                      </a>
                    ) : null}
                  </p.Stack>
                </p.Stack>
              </p.Stack>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__qbBkU)}
              >
                <h3
                  className={classNames(
                    projectcss.all,
                    projectcss.h3,
                    projectcss.__wab_text,
                    sty.h3__rV2Zv
                  )}
                >
                  {"SUPPORT"}
                </h3>
                <p.Stack
                  as={"a"}
                  hasGap={true}
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link___57ID
                  )}
                >
                  {false ? (
                    <IconIcon
                      className={classNames(projectcss.all, sty.svg__zKhea)}
                      role={"img"}
                    />
                  ) : null}
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__gySl
                    )}
                  >
                    {"FAQ"}
                  </div>
                  {false ? (
                    <IconIcon
                      className={classNames(projectcss.all, sty.svg__jiW4R)}
                      role={"img"}
                    />
                  ) : null}
                </p.Stack>
                <p.Stack
                  as={"a"}
                  hasGap={true}
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__a4Crx
                  )}
                >
                  {false ? (
                    <IconIcon
                      className={classNames(projectcss.all, sty.svg__fVzYd)}
                      role={"img"}
                    />
                  ) : null}
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__c9BUu
                    )}
                  >
                    {"Shipping"}
                  </div>
                  {false ? (
                    <IconIcon
                      className={classNames(projectcss.all, sty.svg__fiTrz)}
                      role={"img"}
                    />
                  ) : null}
                </p.Stack>
                <p.Stack
                  as={"a"}
                  hasGap={true}
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__lt3Y9
                  )}
                >
                  {false ? (
                    <IconIcon
                      className={classNames(projectcss.all, sty.svg__cdAk)}
                      role={"img"}
                    />
                  ) : null}
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__jPwbG
                    )}
                  >
                    {"Returns + Exchanges"}
                  </div>
                  {false ? (
                    <IconIcon
                      className={classNames(projectcss.all, sty.svg__ithnB)}
                      role={"img"}
                    />
                  ) : null}
                </p.Stack>
                <p.Stack
                  as={"a"}
                  hasGap={true}
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__jTeMy
                  )}
                >
                  {false ? (
                    <IconIcon
                      className={classNames(projectcss.all, sty.svg__nuZs)}
                      role={"img"}
                    />
                  ) : null}
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__p8PQt
                    )}
                  >
                    {"Contact Us"}
                  </div>
                  {false ? (
                    <IconIcon
                      className={classNames(projectcss.all, sty.svg___2CDPt)}
                      role={"img"}
                    />
                  ) : null}
                </p.Stack>
              </p.Stack>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__yhlr)}
              >
                <h3
                  className={classNames(
                    projectcss.all,
                    projectcss.h3,
                    projectcss.__wab_text,
                    sty.h3__wRIr
                  )}
                >
                  {"COMPANY"}
                </h3>
                <p.Stack
                  as={"a"}
                  hasGap={true}
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__pJbkL
                  )}
                >
                  {false ? (
                    <IconIcon
                      className={classNames(projectcss.all, sty.svg__b9Sk7)}
                      role={"img"}
                    />
                  ) : null}
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__fdNw1
                    )}
                  >
                    {"Our Mission"}
                  </div>
                  {false ? (
                    <IconIcon
                      className={classNames(projectcss.all, sty.svg__tlUgn)}
                      role={"img"}
                    />
                  ) : null}
                </p.Stack>
                <p.Stack
                  as={"a"}
                  hasGap={true}
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__nyaKy
                  )}
                >
                  {false ? (
                    <IconIcon
                      className={classNames(projectcss.all, sty.svg__ag3NT)}
                      role={"img"}
                    />
                  ) : null}
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__azeW
                    )}
                  >
                    {"Sustainability"}
                  </div>
                  {false ? (
                    <IconIcon
                      className={classNames(projectcss.all, sty.svg__psSx6)}
                      role={"img"}
                    />
                  ) : null}
                </p.Stack>
                <p.Stack
                  as={"a"}
                  hasGap={true}
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__vK6Pb
                  )}
                >
                  {false ? (
                    <IconIcon
                      className={classNames(projectcss.all, sty.svg__pKp3Q)}
                      role={"img"}
                    />
                  ) : null}
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__tizeT
                    )}
                  >
                    {"Stores"}
                  </div>
                  {false ? (
                    <IconIcon
                      className={classNames(projectcss.all, sty.svg__ovAQe)}
                      role={"img"}
                    />
                  ) : null}
                </p.Stack>
                <p.Stack
                  as={"a"}
                  hasGap={true}
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__ui0V7
                  )}
                >
                  {false ? (
                    <IconIcon
                      className={classNames(projectcss.all, sty.svg__p3Q6E)}
                      role={"img"}
                    />
                  ) : null}
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___2JLwj
                    )}
                  >
                    {"Careers"}
                  </div>
                  {false ? (
                    <IconIcon
                      className={classNames(projectcss.all, sty.svg__xUx0J)}
                      role={"img"}
                    />
                  ) : null}
                </p.Stack>
              </p.Stack>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__hWlKs)}
              >
                <h3
                  className={classNames(
                    projectcss.all,
                    projectcss.h3,
                    projectcss.__wab_text,
                    sty.h3__hwP2E
                  )}
                >
                  {"Newsletter"}
                </h3>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__lpO9O
                  )}
                >
                  {"Lorem ipsum dolor sit amet, "}
                </div>
                {true ? (
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__z0SDl)}
                  >
                    <TextInput
                      data-plasmic-name={"textInput3"}
                      data-plasmic-override={overrides.textInput3}
                      className={classNames("__wab_instance", sty.textInput3)}
                      onChange={(...eventArgs) => {
                        p.generateStateOnChangeProp($state, [
                          "textInput3",
                          "value"
                        ])((e => e.target?.value).apply(null, eventArgs));
                      }}
                      placeholder={"Enter email  address"}
                      value={
                        p.generateStateValueProp($state, [
                          "textInput3",
                          "value"
                        ]) ?? ""
                      }
                    />

                    <Button
                      className={classNames("__wab_instance", sty.button__sVYz)}
                      color={"sand"}
                      size={"compact"}
                      submitsForm={true}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__fxmr4
                        )}
                      >
                        {"SUbscribe"}
                      </div>
                    </Button>
                  </p.Stack>
                ) : null}
              </p.Stack>
            </p.Stack>
            <div className={classNames(projectcss.all, sty.freeBox__oGiwl)}>
              {true ? (
                <div className={classNames(projectcss.all, sty.freeBox__x34Tk)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__d9Xio
                    )}
                  >
                    {
                      "\u00a9 Company. All rights reserved. This site proudly built with  "
                    }
                  </div>
                  <a
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      projectcss.__wab_text,
                      sty.link__gLZrz
                    )}
                    href={"https://www.plasmic.app"}
                    target={"_blank"}
                  >
                    {"Plasmic"}
                  </a>
                </div>
              ) : null}
            </div>
          </p.Stack>
        </p.Stack>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "header",
    "h1",
    "section3Cta",
    "sideImage",
    "section3Cta2",
    "niceBackgroundImage",
    "textInput",
    "textInput2",
    "textInput3"
  ],

  header: ["header"],
  h1: ["h1"],
  section3Cta: ["section3Cta"],
  sideImage: ["sideImage"],
  section3Cta2: ["section3Cta2"],
  niceBackgroundImage: ["niceBackgroundImage"],
  textInput: ["textInput"],
  textInput2: ["textInput2"],
  textInput3: ["textInput3"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    h1: makeNodeComponent("h1"),
    section3Cta: makeNodeComponent("section3Cta"),
    sideImage: makeNodeComponent("sideImage"),
    section3Cta2: makeNodeComponent("section3Cta2"),
    niceBackgroundImage: makeNodeComponent("niceBackgroundImage"),
    textInput: makeNodeComponent("textInput"),
    textInput2: makeNodeComponent("textInput2"),
    textInput3: makeNodeComponent("textInput3"),
    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
