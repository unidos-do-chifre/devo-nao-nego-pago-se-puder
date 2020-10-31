import styled from 'styled-components/native';
import {
  color,
  space,
  layout,
  flexbox,
  background,
  position,
  shadow,
  border,
  ColorProps,
  SpaceProps,
  LayoutProps,
  FlexboxProps,
  BackgroundProps,
  PositionProps,
  ShadowProps,
  BorderProps,
} from 'styled-system';

type MergeProps = ColorProps &
  SpaceProps &
  LayoutProps &
  FlexboxProps &
  BackgroundProps &
  PositionProps &
  ShadowProps &
  BorderProps;

const SView = styled.View<MergeProps>`
  ${color}
  ${background}
  ${space}
  ${border}
  ${shadow}
  ${layout}
  ${flexbox}
  ${position}
`;

const Scroll = styled.ScrollView<MergeProps>`
  ${space}
  ${border}
  ${shadow}
  ${layout}
  ${flexbox}
  ${position}
`;

const Row = styled(SView)`
  flex-direction: row;
`;
const Column = styled(SView)``;

export {SView, Scroll, Row, Column};
