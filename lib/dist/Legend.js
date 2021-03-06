'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _propTypes = require('prop-types');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _LegendItem = require('./LegendItem.js');

var _LegendItem2 = _interopRequireDefault(_LegendItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @extends {Component}
 */
var Legend = function (_Component) {
    (0, _inherits3.default)(Legend, _Component);

    function Legend() {
        (0, _classCallCheck3.default)(this, Legend);
        return (0, _possibleConstructorReturn3.default)(this, (Legend.__proto__ || (0, _getPrototypeOf2.default)(Legend)).apply(this, arguments));
    }

    (0, _createClass3.default)(Legend, [{
        key: 'render',

        /* React render function */
        value: function render() {
            var _props = this.props,
                className = _props.className,
                data = _props.data,
                strokeColor = _props.strokeColor,
                emptyColor = _props.emptyColor,
                colorFunction = _props.colorFunction,
                colors = _props.colors,
                width = _props.width,
                totalWidth = _props.totalWidth,
                onClick = _props.onClick,
                onMouseEnter = _props.onMouseEnter,
                toggleSelect = _props.toggleSelect,
                selected = _props.selected;


            var legendItemClassName = className + '-item';
            return _react2.default.createElement(
                'g',
                {
                    className: className },
                data.map(function (item, index) {
                    var classes = {};
                    var isEmpty = item.isEmpty,
                        className = item.className;

                    var stroke = strokeColor;
                    var opacity = 1;

                    if (isEmpty) {
                        classes.empty = true;
                        stroke = emptyColor;
                    } else if (selected.label === item.label) {
                        if (toggleSelect) {
                            classes.toggled = true;
                            opacity = 1;
                        } else {
                            classes.selected = true;
                            opacity = 0.5;
                        }
                    }

                    if (className) {
                        classes[className] = true;
                    }

                    classes[legendItemClassName] = true;

                    var fill = isEmpty ? emptyColor : colorFunction(colors, index);

                    return _react2.default.createElement(_LegendItem2.default, {
                        key: 'legenditem' + index,
                        index: index,
                        item: item,
                        className: (0, _classnames2.default)(classes),
                        width: width,
                        totalWidth: totalWidth,
                        opacity: opacity,
                        fill: fill,
                        stroke: stroke,
                        onClick: onClick,
                        onMouseEnter: onMouseEnter
                    });
                })
            );
        }
    }]);
    return Legend;
}(_react.Component); /**
                      * @fileOverview Legend component.
                      * Orchestrates all rendering each LegendItem component,
                      * based on each item.
                      * @name Legend.jsx
                      * @author JJ Naughton
                      * @license MIT
                      */


exports.default = Legend;


Legend.propTypes = {
    data: _propTypes.arrayOf(_propTypes.shape({
        value: _propTypes.number.isrequired,
        label: _propTypes.string.isrequired,
        className: _propTypes.string,
        isEmpty: _propTypes.boolean
    })).isRequired,
    selected: _propTypes.shape({
        value: _propTypes.number.isRequired,
        label: _propTypes.string.isRequired,
        className: _propTypes.string,
        isEmpty: _propTypes.boolean
    }).isRequired,
    toggleSelect: _propTypes.bool.isRequired,
    colorFunction: _propTypes.func.isRequired,
    onMouseEnter: _propTypes.func.isRequired,
    onClick: _propTypes.func.isRequired,
    width: _propTypes.number.isRequired,
    totalWidth: _propTypes.number.isRequired,
    className: _propTypes.string,
    colors: _propTypes.arrayOf(_propTypes.string),
    emptyColor: _propTypes.string,
    strokeColor: _propTypes.string
};

Legend.defaultProps = {
    data: [{
        label: '',
        value: 100,
        isEmpty: true
    }],
    selected: {
        value: 100,
        label: '',
        isEmpty: true
    },
    toggleSelect: false,
    className: 'donutchart-legend',
    width: 250,
    totalWidth: 750,
    colors: ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722', '#795548', '#607d8b'],
    emptyColor: '#e0e0e0',
    strokeColor: '#212121',
    colorFunction: function colorFunction(colors, index) {
        return colors[index % colors.length];
    },
    onMouseEnter: function onMouseEnter(item) {
        return item;
    },
    onClick: function onClick(item) {
        return item;
    }
};