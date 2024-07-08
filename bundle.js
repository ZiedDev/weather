/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/apikey.js":
/*!**************************!*\
  !*** ./src/js/apikey.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const WEATHER_API = "628fa756fb6a40f5948225627241506";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WEATHER_API);


/***/ }),

/***/ "./node_modules/@shopify/draggable/build/esm/Draggable/DragEvent/DragEvent.mjs":
/*!*************************************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/Draggable/DragEvent/DragEvent.mjs ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DragEvent: () => (/* binding */ DragEvent),
/* harmony export */   DragMoveEvent: () => (/* binding */ DragMoveEvent),
/* harmony export */   DragOutContainerEvent: () => (/* binding */ DragOutContainerEvent),
/* harmony export */   DragOutEvent: () => (/* binding */ DragOutEvent),
/* harmony export */   DragOverContainerEvent: () => (/* binding */ DragOverContainerEvent),
/* harmony export */   DragOverEvent: () => (/* binding */ DragOverEvent),
/* harmony export */   DragPressureEvent: () => (/* binding */ DragPressureEvent),
/* harmony export */   DragStartEvent: () => (/* binding */ DragStartEvent),
/* harmony export */   DragStopEvent: () => (/* binding */ DragStopEvent),
/* harmony export */   DragStoppedEvent: () => (/* binding */ DragStoppedEvent),
/* harmony export */   isDragOverEvent: () => (/* binding */ isDragOverEvent)
/* harmony export */ });
/* harmony import */ var _shared_AbstractEvent_AbstractEvent_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/AbstractEvent/AbstractEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/shared/AbstractEvent/AbstractEvent.mjs");


class DragEvent extends _shared_AbstractEvent_AbstractEvent_mjs__WEBPACK_IMPORTED_MODULE_0__.AbstractEvent {

  constructor(data) {
    super(data);
    this.data = data;
  }

  get source() {
    return this.data.source;
  }

  get originalSource() {
    return this.data.originalSource;
  }

  get mirror() {
    return this.data.mirror;
  }

  get sourceContainer() {
    return this.data.sourceContainer;
  }

  get sensorEvent() {
    return this.data.sensorEvent;
  }

  get originalEvent() {
    if (this.sensorEvent) {
      return this.sensorEvent.originalEvent;
    }
    return null;
  }
}

DragEvent.type = 'drag';
class DragStartEvent extends DragEvent {}

DragStartEvent.type = 'drag:start';
DragStartEvent.cancelable = true;
class DragMoveEvent extends DragEvent {}

DragMoveEvent.type = 'drag:move';

class DragOverEvent extends DragEvent {

  get overContainer() {
    return this.data.overContainer;
  }

  get over() {
    return this.data.over;
  }
}
DragOverEvent.type = 'drag:over';
DragOverEvent.cancelable = true;
function isDragOverEvent(event) {
  return event.type === DragOverEvent.type;
}

class DragOutEvent extends DragEvent {

  get overContainer() {
    return this.data.overContainer;
  }

  get over() {
    return this.data.over;
  }
}

DragOutEvent.type = 'drag:out';

class DragOverContainerEvent extends DragEvent {

  get overContainer() {
    return this.data.overContainer;
  }
}

DragOverContainerEvent.type = 'drag:over:container';

class DragOutContainerEvent extends DragEvent {

  get overContainer() {
    return this.data.overContainer;
  }
}

DragOutContainerEvent.type = 'drag:out:container';

class DragPressureEvent extends DragEvent {

  get pressure() {
    return this.data.pressure;
  }
}

DragPressureEvent.type = 'drag:pressure';
class DragStopEvent extends DragEvent {}

DragStopEvent.type = 'drag:stop';
DragStopEvent.cancelable = true;
class DragStoppedEvent extends DragEvent {}
DragStoppedEvent.type = 'drag:stopped';




/***/ }),

/***/ "./node_modules/@shopify/draggable/build/esm/Draggable/Draggable.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/Draggable/Draggable.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Draggable),
/* harmony export */   defaultOptions: () => (/* binding */ defaultOptions)
/* harmony export */ });
/* harmony import */ var _shared_utils_closest_closest_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/utils/closest/closest.mjs */ "./node_modules/@shopify/draggable/build/esm/shared/utils/closest/closest.mjs");
/* harmony import */ var _Plugins_Announcement_Announcement_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Plugins/Announcement/Announcement.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Plugins/Announcement/Announcement.mjs");
/* harmony import */ var _Plugins_Focusable_Focusable_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Plugins/Focusable/Focusable.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Plugins/Focusable/Focusable.mjs");
/* harmony import */ var _Plugins_Mirror_Mirror_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Plugins/Mirror/Mirror.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Plugins/Mirror/Mirror.mjs");
/* harmony import */ var _Plugins_Scrollable_Scrollable_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Plugins/Scrollable/Scrollable.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Plugins/Scrollable/Scrollable.mjs");
/* harmony import */ var _Emitter_Emitter_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Emitter/Emitter.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Emitter/Emitter.mjs");
/* harmony import */ var _Sensors_MouseSensor_MouseSensor_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Sensors/MouseSensor/MouseSensor.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Sensors/MouseSensor/MouseSensor.mjs");
/* harmony import */ var _Sensors_TouchSensor_TouchSensor_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Sensors/TouchSensor/TouchSensor.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Sensors/TouchSensor/TouchSensor.mjs");
/* harmony import */ var _Sensors_SensorEvent_SensorEvent_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Sensors/SensorEvent/SensorEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Sensors/SensorEvent/SensorEvent.mjs");
/* harmony import */ var _DraggableEvent_DraggableEvent_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./DraggableEvent/DraggableEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/DraggableEvent/DraggableEvent.mjs");
/* harmony import */ var _DragEvent_DragEvent_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./DragEvent/DragEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/DragEvent/DragEvent.mjs");












const onDragStart = Symbol('onDragStart');
const onDragMove = Symbol('onDragMove');
const onDragStop = Symbol('onDragStop');
const onDragPressure = Symbol('onDragPressure');
const dragStop = Symbol('dragStop');

const defaultAnnouncements = {
  'drag:start': event => `Picked up ${event.source.textContent.trim() || event.source.id || 'draggable element'}`,
  'drag:stop': event => `Released ${event.source.textContent.trim() || event.source.id || 'draggable element'}`
};
const defaultClasses = {
  'container:dragging': 'draggable-container--is-dragging',
  'source:dragging': 'draggable-source--is-dragging',
  'source:placed': 'draggable-source--placed',
  'container:placed': 'draggable-container--placed',
  'body:dragging': 'draggable--is-dragging',
  'draggable:over': 'draggable--over',
  'container:over': 'draggable-container--over',
  'source:original': 'draggable--original',
  mirror: 'draggable-mirror'
};
const defaultOptions = {
  draggable: '.draggable-source',
  handle: null,
  delay: {},
  distance: 0,
  placedTimeout: 800,
  plugins: [],
  sensors: [],
  exclude: {
    plugins: [],
    sensors: []
  }
};

class Draggable {

  constructor(containers = [document.body], options = {}) {

    if (containers instanceof NodeList || containers instanceof Array) {
      this.containers = [...containers];
    } else if (containers instanceof HTMLElement) {
      this.containers = [containers];
    } else {
      throw new Error('Draggable containers are expected to be of type `NodeList`, `HTMLElement[]` or `HTMLElement`');
    }
    this.options = {
      ...defaultOptions,
      ...options,
      classes: {
        ...defaultClasses,
        ...(options.classes || {})
      },
      announcements: {
        ...defaultAnnouncements,
        ...(options.announcements || {})
      },
      exclude: {
        plugins: options.exclude && options.exclude.plugins || [],
        sensors: options.exclude && options.exclude.sensors || []
      }
    };

    this.emitter = new _Emitter_Emitter_mjs__WEBPACK_IMPORTED_MODULE_5__["default"]();

    this.dragging = false;

    this.plugins = [];

    this.sensors = [];
    this[onDragStart] = this[onDragStart].bind(this);
    this[onDragMove] = this[onDragMove].bind(this);
    this[onDragStop] = this[onDragStop].bind(this);
    this[onDragPressure] = this[onDragPressure].bind(this);
    this[dragStop] = this[dragStop].bind(this);
    document.addEventListener('drag:start', this[onDragStart], true);
    document.addEventListener('drag:move', this[onDragMove], true);
    document.addEventListener('drag:stop', this[onDragStop], true);
    document.addEventListener('drag:pressure', this[onDragPressure], true);
    const defaultPlugins = Object.values(Draggable.Plugins).filter(Plugin => !this.options.exclude.plugins.includes(Plugin));
    const defaultSensors = Object.values(Draggable.Sensors).filter(sensor => !this.options.exclude.sensors.includes(sensor));
    this.addPlugin(...[...defaultPlugins, ...this.options.plugins]);
    this.addSensor(...[...defaultSensors, ...this.options.sensors]);
    const draggableInitializedEvent = new _DraggableEvent_DraggableEvent_mjs__WEBPACK_IMPORTED_MODULE_9__.DraggableInitializedEvent({
      draggable: this
    });
    this.on('mirror:created', ({
      mirror
    }) => this.mirror = mirror);
    this.on('mirror:destroy', () => this.mirror = null);
    this.trigger(draggableInitializedEvent);
  }

  destroy() {
    document.removeEventListener('drag:start', this[onDragStart], true);
    document.removeEventListener('drag:move', this[onDragMove], true);
    document.removeEventListener('drag:stop', this[onDragStop], true);
    document.removeEventListener('drag:pressure', this[onDragPressure], true);
    const draggableDestroyEvent = new _DraggableEvent_DraggableEvent_mjs__WEBPACK_IMPORTED_MODULE_9__.DraggableDestroyEvent({
      draggable: this
    });
    this.trigger(draggableDestroyEvent);
    this.removePlugin(...this.plugins.map(plugin => plugin.constructor));
    this.removeSensor(...this.sensors.map(sensor => sensor.constructor));
  }

  addPlugin(...plugins) {
    const activePlugins = plugins.map(Plugin => new Plugin(this));
    activePlugins.forEach(plugin => plugin.attach());
    this.plugins = [...this.plugins, ...activePlugins];
    return this;
  }

  removePlugin(...plugins) {
    const removedPlugins = this.plugins.filter(plugin => plugins.includes(plugin.constructor));
    removedPlugins.forEach(plugin => plugin.detach());
    this.plugins = this.plugins.filter(plugin => !plugins.includes(plugin.constructor));
    return this;
  }

  addSensor(...sensors) {
    const activeSensors = sensors.map(Sensor => new Sensor(this.containers, this.options));
    activeSensors.forEach(sensor => sensor.attach());
    this.sensors = [...this.sensors, ...activeSensors];
    return this;
  }

  removeSensor(...sensors) {
    const removedSensors = this.sensors.filter(sensor => sensors.includes(sensor.constructor));
    removedSensors.forEach(sensor => sensor.detach());
    this.sensors = this.sensors.filter(sensor => !sensors.includes(sensor.constructor));
    return this;
  }

  addContainer(...containers) {
    this.containers = [...this.containers, ...containers];
    this.sensors.forEach(sensor => sensor.addContainer(...containers));
    return this;
  }

  removeContainer(...containers) {
    this.containers = this.containers.filter(container => !containers.includes(container));
    this.sensors.forEach(sensor => sensor.removeContainer(...containers));
    return this;
  }

  on(type, ...callbacks) {
    this.emitter.on(type, ...callbacks);
    return this;
  }

  off(type, callback) {
    this.emitter.off(type, callback);
    return this;
  }

  trigger(event) {
    this.emitter.trigger(event);
    return this;
  }

  getClassNameFor(name) {
    return this.getClassNamesFor(name)[0];
  }

  getClassNamesFor(name) {
    const classNames = this.options.classes[name];
    if (classNames instanceof Array) {
      return classNames;
    } else if (typeof classNames === 'string' || classNames instanceof String) {
      return [classNames];
    } else {
      return [];
    }
  }

  isDragging() {
    return Boolean(this.dragging);
  }

  getDraggableElements() {
    return this.containers.reduce((current, container) => {
      return [...current, ...this.getDraggableElementsForContainer(container)];
    }, []);
  }

  getDraggableElementsForContainer(container) {
    const allDraggableElements = container.querySelectorAll(this.options.draggable);
    return [...allDraggableElements].filter(childElement => {
      return childElement !== this.originalSource && childElement !== this.mirror;
    });
  }

  cancel() {
    this[dragStop]();
  }

  [onDragStart](event) {
    const sensorEvent = getSensorEvent(event);
    const {
      target,
      container,
      originalSource
    } = sensorEvent;
    if (!this.containers.includes(container)) {
      return;
    }
    if (this.options.handle && target && !(0,_shared_utils_closest_closest_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(target, this.options.handle)) {
      sensorEvent.cancel();
      return;
    }
    this.originalSource = originalSource;
    this.sourceContainer = container;
    if (this.lastPlacedSource && this.lastPlacedContainer) {
      clearTimeout(this.placedTimeoutID);
      this.lastPlacedSource.classList.remove(...this.getClassNamesFor('source:placed'));
      this.lastPlacedContainer.classList.remove(...this.getClassNamesFor('container:placed'));
    }
    this.source = this.originalSource.cloneNode(true);
    this.originalSource.parentNode.insertBefore(this.source, this.originalSource);
    this.originalSource.style.display = 'none';
    const dragStartEvent = new _DragEvent_DragEvent_mjs__WEBPACK_IMPORTED_MODULE_10__.DragStartEvent({
      source: this.source,
      originalSource: this.originalSource,
      sourceContainer: container,
      sensorEvent
    });
    this.trigger(dragStartEvent);
    this.dragging = !dragStartEvent.canceled();
    if (dragStartEvent.canceled()) {
      this.source.remove();
      this.originalSource.style.display = null;
      return;
    }
    this.originalSource.classList.add(...this.getClassNamesFor('source:original'));
    this.source.classList.add(...this.getClassNamesFor('source:dragging'));
    this.sourceContainer.classList.add(...this.getClassNamesFor('container:dragging'));
    document.body.classList.add(...this.getClassNamesFor('body:dragging'));
    applyUserSelect(document.body, 'none');
    requestAnimationFrame(() => {
      const oldSensorEvent = getSensorEvent(event);
      const newSensorEvent = oldSensorEvent.clone({
        target: this.source
      });
      this[onDragMove]({
        ...event,
        detail: newSensorEvent
      });
    });
  }

  [onDragMove](event) {
    if (!this.dragging) {
      return;
    }
    const sensorEvent = getSensorEvent(event);
    const {
      container
    } = sensorEvent;
    let target = sensorEvent.target;
    const dragMoveEvent = new _DragEvent_DragEvent_mjs__WEBPACK_IMPORTED_MODULE_10__.DragMoveEvent({
      source: this.source,
      originalSource: this.originalSource,
      sourceContainer: container,
      sensorEvent
    });
    this.trigger(dragMoveEvent);
    if (dragMoveEvent.canceled()) {
      sensorEvent.cancel();
    }
    target = (0,_shared_utils_closest_closest_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(target, this.options.draggable);
    const withinCorrectContainer = (0,_shared_utils_closest_closest_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(sensorEvent.target, this.containers);
    const overContainer = sensorEvent.overContainer || withinCorrectContainer;
    const isLeavingContainer = this.currentOverContainer && overContainer !== this.currentOverContainer;
    const isLeavingDraggable = this.currentOver && target !== this.currentOver;
    const isOverContainer = overContainer && this.currentOverContainer !== overContainer;
    const isOverDraggable = withinCorrectContainer && target && this.currentOver !== target;
    if (isLeavingDraggable) {
      const dragOutEvent = new _DragEvent_DragEvent_mjs__WEBPACK_IMPORTED_MODULE_10__.DragOutEvent({
        source: this.source,
        originalSource: this.originalSource,
        sourceContainer: container,
        sensorEvent,
        over: this.currentOver,
        overContainer: this.currentOverContainer
      });
      this.currentOver.classList.remove(...this.getClassNamesFor('draggable:over'));
      this.currentOver = null;
      this.trigger(dragOutEvent);
    }
    if (isLeavingContainer) {
      const dragOutContainerEvent = new _DragEvent_DragEvent_mjs__WEBPACK_IMPORTED_MODULE_10__.DragOutContainerEvent({
        source: this.source,
        originalSource: this.originalSource,
        sourceContainer: container,
        sensorEvent,
        overContainer: this.currentOverContainer
      });
      this.currentOverContainer.classList.remove(...this.getClassNamesFor('container:over'));
      this.currentOverContainer = null;
      this.trigger(dragOutContainerEvent);
    }
    if (isOverContainer) {
      overContainer.classList.add(...this.getClassNamesFor('container:over'));
      const dragOverContainerEvent = new _DragEvent_DragEvent_mjs__WEBPACK_IMPORTED_MODULE_10__.DragOverContainerEvent({
        source: this.source,
        originalSource: this.originalSource,
        sourceContainer: container,
        sensorEvent,
        overContainer
      });
      this.currentOverContainer = overContainer;
      this.trigger(dragOverContainerEvent);
    }
    if (isOverDraggable) {
      target.classList.add(...this.getClassNamesFor('draggable:over'));
      const dragOverEvent = new _DragEvent_DragEvent_mjs__WEBPACK_IMPORTED_MODULE_10__.DragOverEvent({
        source: this.source,
        originalSource: this.originalSource,
        sourceContainer: container,
        sensorEvent,
        overContainer,
        over: target
      });
      this.currentOver = target;
      this.trigger(dragOverEvent);
    }
  }

  [dragStop](event) {
    if (!this.dragging) {
      return;
    }
    this.dragging = false;
    const dragStopEvent = new _DragEvent_DragEvent_mjs__WEBPACK_IMPORTED_MODULE_10__.DragStopEvent({
      source: this.source,
      originalSource: this.originalSource,
      sensorEvent: event ? event.sensorEvent : null,
      sourceContainer: this.sourceContainer
    });
    this.trigger(dragStopEvent);
    if (!dragStopEvent.canceled()) this.source.parentNode.insertBefore(this.originalSource, this.source);
    this.source.remove();
    this.originalSource.style.display = '';
    this.source.classList.remove(...this.getClassNamesFor('source:dragging'));
    this.originalSource.classList.remove(...this.getClassNamesFor('source:original'));
    this.originalSource.classList.add(...this.getClassNamesFor('source:placed'));
    this.sourceContainer.classList.add(...this.getClassNamesFor('container:placed'));
    this.sourceContainer.classList.remove(...this.getClassNamesFor('container:dragging'));
    document.body.classList.remove(...this.getClassNamesFor('body:dragging'));
    applyUserSelect(document.body, '');
    if (this.currentOver) {
      this.currentOver.classList.remove(...this.getClassNamesFor('draggable:over'));
    }
    if (this.currentOverContainer) {
      this.currentOverContainer.classList.remove(...this.getClassNamesFor('container:over'));
    }
    this.lastPlacedSource = this.originalSource;
    this.lastPlacedContainer = this.sourceContainer;
    this.placedTimeoutID = setTimeout(() => {
      if (this.lastPlacedSource) {
        this.lastPlacedSource.classList.remove(...this.getClassNamesFor('source:placed'));
      }
      if (this.lastPlacedContainer) {
        this.lastPlacedContainer.classList.remove(...this.getClassNamesFor('container:placed'));
      }
      this.lastPlacedSource = null;
      this.lastPlacedContainer = null;
    }, this.options.placedTimeout);
    const dragStoppedEvent = new _DragEvent_DragEvent_mjs__WEBPACK_IMPORTED_MODULE_10__.DragStoppedEvent({
      source: this.source,
      originalSource: this.originalSource,
      sensorEvent: event ? event.sensorEvent : null,
      sourceContainer: this.sourceContainer
    });
    this.trigger(dragStoppedEvent);
    this.source = null;
    this.originalSource = null;
    this.currentOverContainer = null;
    this.currentOver = null;
    this.sourceContainer = null;
  }

  [onDragStop](event) {
    this[dragStop](event);
  }

  [onDragPressure](event) {
    if (!this.dragging) {
      return;
    }
    const sensorEvent = getSensorEvent(event);
    const source = this.source || (0,_shared_utils_closest_closest_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(sensorEvent.originalEvent.target, this.options.draggable);
    const dragPressureEvent = new _DragEvent_DragEvent_mjs__WEBPACK_IMPORTED_MODULE_10__.DragPressureEvent({
      sensorEvent,
      source,
      pressure: sensorEvent.pressure
    });
    this.trigger(dragPressureEvent);
  }
}

Draggable.Plugins = {
  Announcement: _Plugins_Announcement_Announcement_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
  Focusable: _Plugins_Focusable_Focusable_mjs__WEBPACK_IMPORTED_MODULE_2__["default"],
  Mirror: _Plugins_Mirror_Mirror_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
  Scrollable: _Plugins_Scrollable_Scrollable_mjs__WEBPACK_IMPORTED_MODULE_4__["default"]
};

Draggable.Sensors = {
  MouseSensor: _Sensors_MouseSensor_MouseSensor_mjs__WEBPACK_IMPORTED_MODULE_6__["default"],
  TouchSensor: _Sensors_TouchSensor_TouchSensor_mjs__WEBPACK_IMPORTED_MODULE_7__["default"]
};
function getSensorEvent(event) {
  return event.detail;
}
function applyUserSelect(element, value) {
  element.style.webkitUserSelect = value;
  element.style.mozUserSelect = value;
  element.style.msUserSelect = value;
  element.style.oUserSelect = value;
  element.style.userSelect = value;
}




/***/ }),

/***/ "./node_modules/@shopify/draggable/build/esm/Draggable/DraggableEvent/DraggableEvent.mjs":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/Draggable/DraggableEvent/DraggableEvent.mjs ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DraggableDestroyEvent: () => (/* binding */ DraggableDestroyEvent),
/* harmony export */   DraggableEvent: () => (/* binding */ DraggableEvent),
/* harmony export */   DraggableInitializedEvent: () => (/* binding */ DraggableInitializedEvent)
/* harmony export */ });
/* harmony import */ var _shared_AbstractEvent_AbstractEvent_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/AbstractEvent/AbstractEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/shared/AbstractEvent/AbstractEvent.mjs");


class DraggableEvent extends _shared_AbstractEvent_AbstractEvent_mjs__WEBPACK_IMPORTED_MODULE_0__.AbstractEvent {

  get draggable() {
    return this.data.draggable;
  }
}

DraggableEvent.type = 'draggable';
class DraggableInitializedEvent extends DraggableEvent {}

DraggableInitializedEvent.type = 'draggable:initialize';
class DraggableDestroyEvent extends DraggableEvent {}
DraggableDestroyEvent.type = 'draggable:destroy';




/***/ }),

/***/ "./node_modules/@shopify/draggable/build/esm/Draggable/Emitter/Emitter.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/Draggable/Emitter/Emitter.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Emitter)
/* harmony export */ });
class Emitter {
  constructor() {
    this.callbacks = {};
  }

  on(type, ...callbacks) {
    if (!this.callbacks[type]) {
      this.callbacks[type] = [];
    }
    this.callbacks[type].push(...callbacks);
    return this;
  }

  off(type, callback) {
    if (!this.callbacks[type]) {
      return null;
    }
    const copy = this.callbacks[type].slice(0);
    for (let i = 0; i < copy.length; i++) {
      if (callback === copy[i]) {
        this.callbacks[type].splice(i, 1);
      }
    }
    return this;
  }

  trigger(event) {
    if (!this.callbacks[event.type]) {
      return null;
    }
    const callbacks = [...this.callbacks[event.type]];
    const caughtErrors = [];
    for (let i = callbacks.length - 1; i >= 0; i--) {
      const callback = callbacks[i];
      try {
        callback(event);
      } catch (error) {
        caughtErrors.push(error);
      }
    }
    if (caughtErrors.length) {

      console.error(`Draggable caught errors while triggering '${event.type}'`, caughtErrors);

    }

    return this;
  }
}




/***/ }),

/***/ "./node_modules/@shopify/draggable/build/esm/Draggable/Plugins/Announcement/Announcement.mjs":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/Draggable/Plugins/Announcement/Announcement.mjs ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Announcement),
/* harmony export */   defaultOptions: () => (/* binding */ defaultOptions)
/* harmony export */ });
/* harmony import */ var _shared_AbstractPlugin_AbstractPlugin_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/AbstractPlugin/AbstractPlugin.mjs */ "./node_modules/@shopify/draggable/build/esm/shared/AbstractPlugin/AbstractPlugin.mjs");


const onInitialize = Symbol('onInitialize');
const onDestroy = Symbol('onDestroy');
const announceEvent = Symbol('announceEvent');
const announceMessage = Symbol('announceMessage');
const ARIA_RELEVANT = 'aria-relevant';
const ARIA_ATOMIC = 'aria-atomic';
const ARIA_LIVE = 'aria-live';
const ROLE = 'role';

const defaultOptions = {
  expire: 7000
};

class Announcement extends _shared_AbstractPlugin_AbstractPlugin_mjs__WEBPACK_IMPORTED_MODULE_0__.AbstractPlugin {

  constructor(draggable) {
    super(draggable);

    this.options = {
      ...defaultOptions,
      ...this.getOptions()
    };

    this.originalTriggerMethod = this.draggable.trigger;
    this[onInitialize] = this[onInitialize].bind(this);
    this[onDestroy] = this[onDestroy].bind(this);
  }

  attach() {
    this.draggable.on('draggable:initialize', this[onInitialize]);
  }

  detach() {
    this.draggable.off('draggable:destroy', this[onDestroy]);
  }

  getOptions() {
    return this.draggable.options.announcements || {};
  }

  [announceEvent](event) {
    const message = this.options[event.type];
    if (message && typeof message === 'string') {
      this[announceMessage](message);
    }
    if (message && typeof message === 'function') {
      this[announceMessage](message(event));
    }
  }

  [announceMessage](message) {
    announce(message, {
      expire: this.options.expire
    });
  }

  [onInitialize]() {

    this.draggable.trigger = event => {
      try {
        this[announceEvent](event);
      } finally {

        this.originalTriggerMethod.call(this.draggable, event);
      }
    };
  }

  [onDestroy]() {
    this.draggable.trigger = this.originalTriggerMethod;
  }
}

const liveRegion = createRegion();

function announce(message, {
  expire
}) {
  const element = document.createElement('div');
  element.textContent = message;
  liveRegion.appendChild(element);
  return setTimeout(() => {
    liveRegion.removeChild(element);
  }, expire);
}

function createRegion() {
  const element = document.createElement('div');
  element.setAttribute('id', 'draggable-live-region');
  element.setAttribute(ARIA_RELEVANT, 'additions');
  element.setAttribute(ARIA_ATOMIC, 'true');
  element.setAttribute(ARIA_LIVE, 'assertive');
  element.setAttribute(ROLE, 'log');
  element.style.position = 'fixed';
  element.style.width = '1px';
  element.style.height = '1px';
  element.style.top = '-1px';
  element.style.overflow = 'hidden';
  return element;
}

document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(liveRegion);
});




/***/ }),

/***/ "./node_modules/@shopify/draggable/build/esm/Draggable/Plugins/Focusable/Focusable.mjs":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/Draggable/Plugins/Focusable/Focusable.mjs ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Focusable)
/* harmony export */ });
/* harmony import */ var _shared_AbstractPlugin_AbstractPlugin_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/AbstractPlugin/AbstractPlugin.mjs */ "./node_modules/@shopify/draggable/build/esm/shared/AbstractPlugin/AbstractPlugin.mjs");


const onInitialize = Symbol('onInitialize');
const onDestroy = Symbol('onDestroy');

const defaultOptions = {};

class Focusable extends _shared_AbstractPlugin_AbstractPlugin_mjs__WEBPACK_IMPORTED_MODULE_0__.AbstractPlugin {

  constructor(draggable) {
    super(draggable);

    this.options = {
      ...defaultOptions,
      ...this.getOptions()
    };
    this[onInitialize] = this[onInitialize].bind(this);
    this[onDestroy] = this[onDestroy].bind(this);
  }

  attach() {
    this.draggable.on('draggable:initialize', this[onInitialize]).on('draggable:destroy', this[onDestroy]);
  }

  detach() {
    this.draggable.off('draggable:initialize', this[onInitialize]).off('draggable:destroy', this[onDestroy]);

    this[onDestroy]();
  }

  getOptions() {
    return this.draggable.options.focusable || {};
  }

  getElements() {
    return [...this.draggable.containers, ...this.draggable.getDraggableElements()];
  }

  [onInitialize]() {

    requestAnimationFrame(() => {
      this.getElements().forEach(element => decorateElement(element));
    });
  }

  [onDestroy]() {

    requestAnimationFrame(() => {
      this.getElements().forEach(element => stripElement(element));
    });
  }
}

const elementsWithMissingTabIndex = [];

function decorateElement(element) {
  const hasMissingTabIndex = Boolean(!element.getAttribute('tabindex') && element.tabIndex === -1);
  if (hasMissingTabIndex) {
    elementsWithMissingTabIndex.push(element);
    element.tabIndex = 0;
  }
}

function stripElement(element) {
  const tabIndexElementPosition = elementsWithMissingTabIndex.indexOf(element);
  if (tabIndexElementPosition !== -1) {
    element.tabIndex = -1;
    elementsWithMissingTabIndex.splice(tabIndexElementPosition, 1);
  }
}




/***/ }),

/***/ "./node_modules/@shopify/draggable/build/esm/Draggable/Plugins/Mirror/Mirror.mjs":
/*!***************************************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/Draggable/Plugins/Mirror/Mirror.mjs ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Mirror),
/* harmony export */   defaultOptions: () => (/* binding */ defaultOptions),
/* harmony export */   getAppendableContainer: () => (/* binding */ getAppendableContainer),
/* harmony export */   onDragMove: () => (/* binding */ onDragMove),
/* harmony export */   onDragStart: () => (/* binding */ onDragStart),
/* harmony export */   onDragStop: () => (/* binding */ onDragStop),
/* harmony export */   onMirrorCreated: () => (/* binding */ onMirrorCreated),
/* harmony export */   onMirrorMove: () => (/* binding */ onMirrorMove),
/* harmony export */   onScroll: () => (/* binding */ onScroll)
/* harmony export */ });
/* harmony import */ var _shared_AbstractPlugin_AbstractPlugin_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/AbstractPlugin/AbstractPlugin.mjs */ "./node_modules/@shopify/draggable/build/esm/shared/AbstractPlugin/AbstractPlugin.mjs");
/* harmony import */ var _MirrorEvent_MirrorEvent_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MirrorEvent/MirrorEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Plugins/Mirror/MirrorEvent/MirrorEvent.mjs");



const onDragStart = Symbol('onDragStart');
const onDragMove = Symbol('onDragMove');
const onDragStop = Symbol('onDragStop');
const onMirrorCreated = Symbol('onMirrorCreated');
const onMirrorMove = Symbol('onMirrorMove');
const onScroll = Symbol('onScroll');
const getAppendableContainer = Symbol('getAppendableContainer');

const defaultOptions = {
  constrainDimensions: false,
  xAxis: true,
  yAxis: true,
  cursorOffsetX: null,
  cursorOffsetY: null,
  thresholdX: null,
  thresholdY: null
};

class Mirror extends _shared_AbstractPlugin_AbstractPlugin_mjs__WEBPACK_IMPORTED_MODULE_0__.AbstractPlugin {

  constructor(draggable) {
    super(draggable);

    this.options = {
      ...defaultOptions,
      ...this.getOptions()
    };

    this.scrollOffset = {
      x: 0,
      y: 0
    };

    this.initialScrollOffset = {
      x: window.scrollX,
      y: window.scrollY
    };
    this[onDragStart] = this[onDragStart].bind(this);
    this[onDragMove] = this[onDragMove].bind(this);
    this[onDragStop] = this[onDragStop].bind(this);
    this[onMirrorCreated] = this[onMirrorCreated].bind(this);
    this[onMirrorMove] = this[onMirrorMove].bind(this);
    this[onScroll] = this[onScroll].bind(this);
  }

  attach() {
    this.draggable.on('drag:start', this[onDragStart]).on('drag:move', this[onDragMove]).on('drag:stop', this[onDragStop]).on('mirror:created', this[onMirrorCreated]).on('mirror:move', this[onMirrorMove]);
  }

  detach() {
    this.draggable.off('drag:start', this[onDragStart]).off('drag:move', this[onDragMove]).off('drag:stop', this[onDragStop]).off('mirror:created', this[onMirrorCreated]).off('mirror:move', this[onMirrorMove]);
  }

  getOptions() {
    return this.draggable.options.mirror || {};
  }
  [onDragStart](dragEvent) {
    if (dragEvent.canceled()) {
      return;
    }
    if ('ontouchstart' in window) {
      document.addEventListener('scroll', this[onScroll], true);
    }
    this.initialScrollOffset = {
      x: window.scrollX,
      y: window.scrollY
    };
    const {
      source,
      originalSource,
      sourceContainer,
      sensorEvent
    } = dragEvent;

    this.lastMirrorMovedClient = {
      x: sensorEvent.clientX,
      y: sensorEvent.clientY
    };
    const mirrorCreateEvent = new _MirrorEvent_MirrorEvent_mjs__WEBPACK_IMPORTED_MODULE_1__.MirrorCreateEvent({
      source,
      originalSource,
      sourceContainer,
      sensorEvent,
      dragEvent
    });
    this.draggable.trigger(mirrorCreateEvent);
    if (isNativeDragEvent(sensorEvent) || mirrorCreateEvent.canceled()) {
      return;
    }
    const appendableContainer = this[getAppendableContainer](source) || sourceContainer;
    this.mirror = source.cloneNode(true);
    const mirrorCreatedEvent = new _MirrorEvent_MirrorEvent_mjs__WEBPACK_IMPORTED_MODULE_1__.MirrorCreatedEvent({
      source,
      originalSource,
      sourceContainer,
      sensorEvent,
      dragEvent,
      mirror: this.mirror
    });
    const mirrorAttachedEvent = new _MirrorEvent_MirrorEvent_mjs__WEBPACK_IMPORTED_MODULE_1__.MirrorAttachedEvent({
      source,
      originalSource,
      sourceContainer,
      sensorEvent,
      dragEvent,
      mirror: this.mirror
    });
    this.draggable.trigger(mirrorCreatedEvent);
    appendableContainer.appendChild(this.mirror);
    this.draggable.trigger(mirrorAttachedEvent);
  }
  [onDragMove](dragEvent) {
    if (!this.mirror || dragEvent.canceled()) {
      return;
    }
    const {
      source,
      originalSource,
      sourceContainer,
      sensorEvent
    } = dragEvent;
    let passedThreshX = true;
    let passedThreshY = true;
    if (this.options.thresholdX || this.options.thresholdY) {
      const {
        x: lastX,
        y: lastY
      } = this.lastMirrorMovedClient;
      if (Math.abs(lastX - sensorEvent.clientX) < this.options.thresholdX) {
        passedThreshX = false;
      } else {
        this.lastMirrorMovedClient.x = sensorEvent.clientX;
      }
      if (Math.abs(lastY - sensorEvent.clientY) < this.options.thresholdY) {
        passedThreshY = false;
      } else {
        this.lastMirrorMovedClient.y = sensorEvent.clientY;
      }
      if (!passedThreshX && !passedThreshY) {
        return;
      }
    }
    const mirrorMoveEvent = new _MirrorEvent_MirrorEvent_mjs__WEBPACK_IMPORTED_MODULE_1__.MirrorMoveEvent({
      source,
      originalSource,
      sourceContainer,
      sensorEvent,
      dragEvent,
      mirror: this.mirror,
      passedThreshX,
      passedThreshY
    });
    this.draggable.trigger(mirrorMoveEvent);
  }
  [onDragStop](dragEvent) {
    if ('ontouchstart' in window) {
      document.removeEventListener('scroll', this[onScroll], true);
    }
    this.initialScrollOffset = {
      x: 0,
      y: 0
    };
    this.scrollOffset = {
      x: 0,
      y: 0
    };
    if (!this.mirror) {
      return;
    }
    const {
      source,
      sourceContainer,
      sensorEvent
    } = dragEvent;
    const mirrorDestroyEvent = new _MirrorEvent_MirrorEvent_mjs__WEBPACK_IMPORTED_MODULE_1__.MirrorDestroyEvent({
      source,
      mirror: this.mirror,
      sourceContainer,
      sensorEvent,
      dragEvent
    });
    this.draggable.trigger(mirrorDestroyEvent);
    if (!mirrorDestroyEvent.canceled()) {
      this.mirror.remove();
    }
  }
  [onScroll]() {
    this.scrollOffset = {
      x: window.scrollX - this.initialScrollOffset.x,
      y: window.scrollY - this.initialScrollOffset.y
    };
  }

  [onMirrorCreated]({
    mirror,
    source,
    sensorEvent
  }) {
    const mirrorClasses = this.draggable.getClassNamesFor('mirror');
    const setState = ({
      mirrorOffset,
      initialX,
      initialY,
      ...args
    }) => {
      this.mirrorOffset = mirrorOffset;
      this.initialX = initialX;
      this.initialY = initialY;
      this.lastMovedX = initialX;
      this.lastMovedY = initialY;
      return {
        mirrorOffset,
        initialX,
        initialY,
        ...args
      };
    };
    mirror.style.display = 'none';
    const initialState = {
      mirror,
      source,
      sensorEvent,
      mirrorClasses,
      scrollOffset: this.scrollOffset,
      options: this.options,
      passedThreshX: true,
      passedThreshY: true
    };
    return Promise.resolve(initialState)

    .then(computeMirrorDimensions).then(calculateMirrorOffset).then(resetMirror).then(addMirrorClasses).then(positionMirror({
      initial: true
    })).then(removeMirrorID).then(setState);
  }

  [onMirrorMove](mirrorEvent) {
    if (mirrorEvent.canceled()) {
      return null;
    }
    const setState = ({
      lastMovedX,
      lastMovedY,
      ...args
    }) => {
      this.lastMovedX = lastMovedX;
      this.lastMovedY = lastMovedY;
      return {
        lastMovedX,
        lastMovedY,
        ...args
      };
    };
    const triggerMoved = args => {
      const mirrorMovedEvent = new _MirrorEvent_MirrorEvent_mjs__WEBPACK_IMPORTED_MODULE_1__.MirrorMovedEvent({
        source: mirrorEvent.source,
        originalSource: mirrorEvent.originalSource,
        sourceContainer: mirrorEvent.sourceContainer,
        sensorEvent: mirrorEvent.sensorEvent,
        dragEvent: mirrorEvent.dragEvent,
        mirror: this.mirror,
        passedThreshX: mirrorEvent.passedThreshX,
        passedThreshY: mirrorEvent.passedThreshY
      });
      this.draggable.trigger(mirrorMovedEvent);
      return args;
    };
    const initialState = {
      mirror: mirrorEvent.mirror,
      sensorEvent: mirrorEvent.sensorEvent,
      mirrorOffset: this.mirrorOffset,
      options: this.options,
      initialX: this.initialX,
      initialY: this.initialY,
      scrollOffset: this.scrollOffset,
      passedThreshX: mirrorEvent.passedThreshX,
      passedThreshY: mirrorEvent.passedThreshY,
      lastMovedX: this.lastMovedX,
      lastMovedY: this.lastMovedY
    };
    return Promise.resolve(initialState).then(positionMirror({
      raf: true
    })).then(setState).then(triggerMoved);
  }

  [getAppendableContainer](source) {
    const appendTo = this.options.appendTo;
    if (typeof appendTo === 'string') {
      return document.querySelector(appendTo);
    } else if (appendTo instanceof HTMLElement) {
      return appendTo;
    } else if (typeof appendTo === 'function') {
      return appendTo(source);
    } else {
      return source.parentNode;
    }
  }
}

function computeMirrorDimensions({
  source,
  ...args
}) {
  return withPromise(resolve => {
    const sourceRect = source.getBoundingClientRect();
    resolve({
      source,
      sourceRect,
      ...args
    });
  });
}

function calculateMirrorOffset({
  sensorEvent,
  sourceRect,
  options,
  ...args
}) {
  return withPromise(resolve => {
    const top = options.cursorOffsetY === null ? sensorEvent.clientY - sourceRect.top : options.cursorOffsetY;
    const left = options.cursorOffsetX === null ? sensorEvent.clientX - sourceRect.left : options.cursorOffsetX;
    const mirrorOffset = {
      top,
      left
    };
    resolve({
      sensorEvent,
      sourceRect,
      mirrorOffset,
      options,
      ...args
    });
  });
}

function resetMirror({
  mirror,
  source,
  options,
  ...args
}) {
  return withPromise(resolve => {
    let offsetHeight;
    let offsetWidth;
    if (options.constrainDimensions) {
      const computedSourceStyles = getComputedStyle(source);
      offsetHeight = computedSourceStyles.getPropertyValue('height');
      offsetWidth = computedSourceStyles.getPropertyValue('width');
    }
    mirror.style.display = null;
    mirror.style.position = 'fixed';
    mirror.style.pointerEvents = 'none';
    mirror.style.top = 0;
    mirror.style.left = 0;
    mirror.style.margin = 0;
    if (options.constrainDimensions) {
      mirror.style.height = offsetHeight;
      mirror.style.width = offsetWidth;
    }
    resolve({
      mirror,
      source,
      options,
      ...args
    });
  });
}

function addMirrorClasses({
  mirror,
  mirrorClasses,
  ...args
}) {
  return withPromise(resolve => {
    mirror.classList.add(...mirrorClasses);
    resolve({
      mirror,
      mirrorClasses,
      ...args
    });
  });
}

function removeMirrorID({
  mirror,
  ...args
}) {
  return withPromise(resolve => {
    mirror.removeAttribute('id');
    delete mirror.id;
    resolve({
      mirror,
      ...args
    });
  });
}

function positionMirror({
  withFrame = false,
  initial = false
} = {}) {
  return ({
    mirror,
    sensorEvent,
    mirrorOffset,
    initialY,
    initialX,
    scrollOffset,
    options,
    passedThreshX,
    passedThreshY,
    lastMovedX,
    lastMovedY,
    ...args
  }) => {
    return withPromise(resolve => {
      const result = {
        mirror,
        sensorEvent,
        mirrorOffset,
        options,
        ...args
      };
      if (mirrorOffset) {
        const x = passedThreshX ? Math.round((sensorEvent.clientX - mirrorOffset.left - scrollOffset.x) / (options.thresholdX || 1)) * (options.thresholdX || 1) : Math.round(lastMovedX);
        const y = passedThreshY ? Math.round((sensorEvent.clientY - mirrorOffset.top - scrollOffset.y) / (options.thresholdY || 1)) * (options.thresholdY || 1) : Math.round(lastMovedY);
        if (options.xAxis && options.yAxis || initial) {
          mirror.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        } else if (options.xAxis && !options.yAxis) {
          mirror.style.transform = `translate3d(${x}px, ${initialY}px, 0)`;
        } else if (options.yAxis && !options.xAxis) {
          mirror.style.transform = `translate3d(${initialX}px, ${y}px, 0)`;
        }
        if (initial) {
          result.initialX = x;
          result.initialY = y;
        }
        result.lastMovedX = x;
        result.lastMovedY = y;
      }
      resolve(result);
    }, {
      frame: withFrame
    });
  };
}

function withPromise(callback, {
  raf = false
} = {}) {
  return new Promise((resolve, reject) => {
    if (raf) {
      requestAnimationFrame(() => {
        callback(resolve, reject);
      });
    } else {
      callback(resolve, reject);
    }
  });
}

function isNativeDragEvent(sensorEvent) {
  return /^drag/.test(sensorEvent.originalEvent.type);
}




/***/ }),

/***/ "./node_modules/@shopify/draggable/build/esm/Draggable/Plugins/Mirror/MirrorEvent/MirrorEvent.mjs":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/Draggable/Plugins/Mirror/MirrorEvent/MirrorEvent.mjs ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MirrorAttachedEvent: () => (/* binding */ MirrorAttachedEvent),
/* harmony export */   MirrorCreateEvent: () => (/* binding */ MirrorCreateEvent),
/* harmony export */   MirrorCreatedEvent: () => (/* binding */ MirrorCreatedEvent),
/* harmony export */   MirrorDestroyEvent: () => (/* binding */ MirrorDestroyEvent),
/* harmony export */   MirrorEvent: () => (/* binding */ MirrorEvent),
/* harmony export */   MirrorMoveEvent: () => (/* binding */ MirrorMoveEvent),
/* harmony export */   MirrorMovedEvent: () => (/* binding */ MirrorMovedEvent)
/* harmony export */ });
/* harmony import */ var _shared_AbstractEvent_AbstractEvent_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/AbstractEvent/AbstractEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/shared/AbstractEvent/AbstractEvent.mjs");


class MirrorEvent extends _shared_AbstractEvent_AbstractEvent_mjs__WEBPACK_IMPORTED_MODULE_0__.AbstractEvent {

  constructor(data) {
    super(data);
    this.data = data;
  }

  get source() {
    return this.data.source;
  }

  get originalSource() {
    return this.data.originalSource;
  }

  get sourceContainer() {
    return this.data.sourceContainer;
  }

  get sensorEvent() {
    return this.data.sensorEvent;
  }

  get dragEvent() {
    return this.data.dragEvent;
  }

  get originalEvent() {
    if (this.sensorEvent) {
      return this.sensorEvent.originalEvent;
    }
    return null;
  }
}

class MirrorCreateEvent extends MirrorEvent {}
MirrorCreateEvent.type = 'mirror:create';

class MirrorCreatedEvent extends MirrorEvent {

  get mirror() {
    return this.data.mirror;
  }
}
MirrorCreatedEvent.type = 'mirror:created';

class MirrorAttachedEvent extends MirrorEvent {

  get mirror() {
    return this.data.mirror;
  }
}
MirrorAttachedEvent.type = 'mirror:attached';

class MirrorMoveEvent extends MirrorEvent {

  get mirror() {
    return this.data.mirror;
  }

  get passedThreshX() {
    return this.data.passedThreshX;
  }

  get passedThreshY() {
    return this.data.passedThreshY;
  }
}
MirrorMoveEvent.type = 'mirror:move';
MirrorMoveEvent.cancelable = true;

class MirrorMovedEvent extends MirrorEvent {

  get mirror() {
    return this.data.mirror;
  }

  get passedThreshX() {
    return this.data.passedThreshX;
  }

  get passedThreshY() {
    return this.data.passedThreshY;
  }
}
MirrorMovedEvent.type = 'mirror:moved';

class MirrorDestroyEvent extends MirrorEvent {

  get mirror() {
    return this.data.mirror;
  }
}
MirrorDestroyEvent.type = 'mirror:destroy';
MirrorDestroyEvent.cancelable = true;




/***/ }),

/***/ "./node_modules/@shopify/draggable/build/esm/Draggable/Plugins/Scrollable/Scrollable.mjs":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/Draggable/Plugins/Scrollable/Scrollable.mjs ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Scrollable),
/* harmony export */   defaultOptions: () => (/* binding */ defaultOptions),
/* harmony export */   onDragMove: () => (/* binding */ onDragMove),
/* harmony export */   onDragStart: () => (/* binding */ onDragStart),
/* harmony export */   onDragStop: () => (/* binding */ onDragStop),
/* harmony export */   scroll: () => (/* binding */ scroll)
/* harmony export */ });
/* harmony import */ var _shared_AbstractPlugin_AbstractPlugin_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/AbstractPlugin/AbstractPlugin.mjs */ "./node_modules/@shopify/draggable/build/esm/shared/AbstractPlugin/AbstractPlugin.mjs");
/* harmony import */ var _shared_utils_closest_closest_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/utils/closest/closest.mjs */ "./node_modules/@shopify/draggable/build/esm/shared/utils/closest/closest.mjs");



const onDragStart = Symbol('onDragStart');
const onDragMove = Symbol('onDragMove');
const onDragStop = Symbol('onDragStop');
const scroll = Symbol('scroll');

const defaultOptions = {
  speed: 6,
  sensitivity: 50,
  scrollableElements: []
};

class Scrollable extends _shared_AbstractPlugin_AbstractPlugin_mjs__WEBPACK_IMPORTED_MODULE_0__.AbstractPlugin {

  constructor(draggable) {
    super(draggable);

    this.options = {
      ...defaultOptions,
      ...this.getOptions()
    };

    this.currentMousePosition = null;

    this.scrollAnimationFrame = null;

    this.scrollableElement = null;

    this.findScrollableElementFrame = null;
    this[onDragStart] = this[onDragStart].bind(this);
    this[onDragMove] = this[onDragMove].bind(this);
    this[onDragStop] = this[onDragStop].bind(this);
    this[scroll] = this[scroll].bind(this);
  }

  attach() {
    this.draggable.on('drag:start', this[onDragStart]).on('drag:move', this[onDragMove]).on('drag:stop', this[onDragStop]);
  }

  detach() {
    this.draggable.off('drag:start', this[onDragStart]).off('drag:move', this[onDragMove]).off('drag:stop', this[onDragStop]);
  }

  getOptions() {
    return this.draggable.options.scrollable || {};
  }

  getScrollableElement(target) {
    if (this.hasDefinedScrollableElements()) {
      return (0,_shared_utils_closest_closest_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(target, this.options.scrollableElements) || document.documentElement;
    } else {
      return closestScrollableElement(target);
    }
  }

  hasDefinedScrollableElements() {
    return Boolean(this.options.scrollableElements.length !== 0);
  }

  [onDragStart](dragEvent) {
    this.findScrollableElementFrame = requestAnimationFrame(() => {
      this.scrollableElement = this.getScrollableElement(dragEvent.source);
    });
  }

  [onDragMove](dragEvent) {
    this.findScrollableElementFrame = requestAnimationFrame(() => {
      this.scrollableElement = this.getScrollableElement(dragEvent.sensorEvent.target);
    });
    if (!this.scrollableElement) {
      return;
    }
    const sensorEvent = dragEvent.sensorEvent;
    const scrollOffset = {
      x: 0,
      y: 0
    };
    if ('ontouchstart' in window) {
      scrollOffset.y = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      scrollOffset.x = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
    }
    this.currentMousePosition = {
      clientX: sensorEvent.clientX - scrollOffset.x,
      clientY: sensorEvent.clientY - scrollOffset.y
    };
    this.scrollAnimationFrame = requestAnimationFrame(this[scroll]);
  }

  [onDragStop]() {
    cancelAnimationFrame(this.scrollAnimationFrame);
    cancelAnimationFrame(this.findScrollableElementFrame);
    this.scrollableElement = null;
    this.scrollAnimationFrame = null;
    this.findScrollableElementFrame = null;
    this.currentMousePosition = null;
  }

  [scroll]() {
    if (!this.scrollableElement || !this.currentMousePosition) {
      return;
    }
    cancelAnimationFrame(this.scrollAnimationFrame);
    const {
      speed,
      sensitivity
    } = this.options;
    const rect = this.scrollableElement.getBoundingClientRect();
    const bottomCutOff = rect.bottom > window.innerHeight;
    const topCutOff = rect.top < 0;
    const cutOff = topCutOff || bottomCutOff;
    const documentScrollingElement = getDocumentScrollingElement();
    const scrollableElement = this.scrollableElement;
    const clientX = this.currentMousePosition.clientX;
    const clientY = this.currentMousePosition.clientY;
    if (scrollableElement !== document.body && scrollableElement !== document.documentElement && !cutOff) {
      const {
        offsetHeight,
        offsetWidth
      } = scrollableElement;
      if (rect.top + offsetHeight - clientY < sensitivity) {
        scrollableElement.scrollTop += speed;
      } else if (clientY - rect.top < sensitivity) {
        scrollableElement.scrollTop -= speed;
      }
      if (rect.left + offsetWidth - clientX < sensitivity) {
        scrollableElement.scrollLeft += speed;
      } else if (clientX - rect.left < sensitivity) {
        scrollableElement.scrollLeft -= speed;
      }
    } else {
      const {
        innerHeight,
        innerWidth
      } = window;
      if (clientY < sensitivity) {
        documentScrollingElement.scrollTop -= speed;
      } else if (innerHeight - clientY < sensitivity) {
        documentScrollingElement.scrollTop += speed;
      }
      if (clientX < sensitivity) {
        documentScrollingElement.scrollLeft -= speed;
      } else if (innerWidth - clientX < sensitivity) {
        documentScrollingElement.scrollLeft += speed;
      }
    }
    this.scrollAnimationFrame = requestAnimationFrame(this[scroll]);
  }
}

function hasOverflow(element) {
  const overflowRegex = /(auto|scroll)/;
  const computedStyles = getComputedStyle(element, null);
  const overflow = computedStyles.getPropertyValue('overflow') + computedStyles.getPropertyValue('overflow-y') + computedStyles.getPropertyValue('overflow-x');
  return overflowRegex.test(overflow);
}

function isStaticallyPositioned(element) {
  const position = getComputedStyle(element).getPropertyValue('position');
  return position === 'static';
}

function closestScrollableElement(element) {
  if (!element) {
    return getDocumentScrollingElement();
  }
  const position = getComputedStyle(element).getPropertyValue('position');
  const excludeStaticParents = position === 'absolute';
  const scrollableElement = (0,_shared_utils_closest_closest_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(element, parent => {
    if (excludeStaticParents && isStaticallyPositioned(parent)) {
      return false;
    }
    return hasOverflow(parent);
  });
  if (position === 'fixed' || !scrollableElement) {
    return getDocumentScrollingElement();
  } else {
    return scrollableElement;
  }
}

function getDocumentScrollingElement() {
  return document.scrollingElement || document.documentElement;
}




/***/ }),

/***/ "./node_modules/@shopify/draggable/build/esm/Draggable/Sensors/DragSensor/DragSensor.mjs":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/Draggable/Sensors/DragSensor/DragSensor.mjs ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DragSensor)
/* harmony export */ });
/* harmony import */ var _shared_utils_closest_closest_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/utils/closest/closest.mjs */ "./node_modules/@shopify/draggable/build/esm/shared/utils/closest/closest.mjs");
/* harmony import */ var _Sensor_Sensor_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Sensor/Sensor.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Sensors/Sensor/Sensor.mjs");
/* harmony import */ var _SensorEvent_SensorEvent_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SensorEvent/SensorEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Sensors/SensorEvent/SensorEvent.mjs");




const onMouseDown = Symbol('onMouseDown');
const onMouseUp = Symbol('onMouseUp');
const onDragStart = Symbol('onDragStart');
const onDragOver = Symbol('onDragOver');
const onDragEnd = Symbol('onDragEnd');
const onDrop = Symbol('onDrop');
const reset = Symbol('reset');

class DragSensor extends _Sensor_Sensor_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {

  constructor(containers = [], options = {}) {
    super(containers, options);

    this.mouseDownTimeout = null;

    this.draggableElement = null;

    this.nativeDraggableElement = null;
    this[onMouseDown] = this[onMouseDown].bind(this);
    this[onMouseUp] = this[onMouseUp].bind(this);
    this[onDragStart] = this[onDragStart].bind(this);
    this[onDragOver] = this[onDragOver].bind(this);
    this[onDragEnd] = this[onDragEnd].bind(this);
    this[onDrop] = this[onDrop].bind(this);
  }

  attach() {
    document.addEventListener('mousedown', this[onMouseDown], true);
  }

  detach() {
    document.removeEventListener('mousedown', this[onMouseDown], true);
  }

  [onDragStart](event) {

    event.dataTransfer.setData('text', '');
    event.dataTransfer.effectAllowed = this.options.type;
    const target = document.elementFromPoint(event.clientX, event.clientY);
    const originalSource = this.draggableElement;
    if (!originalSource) {
      return;
    }
    const dragStartEvent = new _SensorEvent_SensorEvent_mjs__WEBPACK_IMPORTED_MODULE_2__.DragStartSensorEvent({
      clientX: event.clientX,
      clientY: event.clientY,
      target,
      originalSource,
      container: this.currentContainer,
      originalEvent: event
    });

    setTimeout(() => {
      this.trigger(this.currentContainer, dragStartEvent);
      if (dragStartEvent.canceled()) {
        this.dragging = false;
      } else {
        this.dragging = true;
      }
    }, 0);
  }

  [onDragOver](event) {
    if (!this.dragging) {
      return;
    }
    const target = document.elementFromPoint(event.clientX, event.clientY);
    const container = this.currentContainer;
    const dragMoveEvent = new _SensorEvent_SensorEvent_mjs__WEBPACK_IMPORTED_MODULE_2__.DragMoveSensorEvent({
      clientX: event.clientX,
      clientY: event.clientY,
      target,
      container,
      originalEvent: event
    });
    this.trigger(container, dragMoveEvent);
    if (!dragMoveEvent.canceled()) {
      event.preventDefault();
      event.dataTransfer.dropEffect = this.options.type;
    }
  }

  [onDragEnd](event) {
    if (!this.dragging) {
      return;
    }
    document.removeEventListener('mouseup', this[onMouseUp], true);
    const target = document.elementFromPoint(event.clientX, event.clientY);
    const container = this.currentContainer;
    const dragStopEvent = new _SensorEvent_SensorEvent_mjs__WEBPACK_IMPORTED_MODULE_2__.DragStopSensorEvent({
      clientX: event.clientX,
      clientY: event.clientY,
      target,
      container,
      originalEvent: event
    });
    this.trigger(container, dragStopEvent);
    this.dragging = false;
    this.startEvent = null;
    this[reset]();
  }

  [onDrop](event) {
    event.preventDefault();
  }

  [onMouseDown](event) {

    if (event.target && (event.target.form || event.target.contenteditable)) {
      return;
    }
    const target = event.target;
    this.currentContainer = (0,_shared_utils_closest_closest_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(target, this.containers);
    if (!this.currentContainer) {
      return;
    }
    if (this.options.handle && target && !(0,_shared_utils_closest_closest_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(target, this.options.handle)) {
      return;
    }
    const originalSource = (0,_shared_utils_closest_closest_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(target, this.options.draggable);
    if (!originalSource) {
      return;
    }
    const nativeDraggableElement = (0,_shared_utils_closest_closest_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(event.target, element => element.draggable);
    if (nativeDraggableElement) {
      nativeDraggableElement.draggable = false;
      this.nativeDraggableElement = nativeDraggableElement;
    }
    document.addEventListener('mouseup', this[onMouseUp], true);
    document.addEventListener('dragstart', this[onDragStart], false);
    document.addEventListener('dragover', this[onDragOver], false);
    document.addEventListener('dragend', this[onDragEnd], false);
    document.addEventListener('drop', this[onDrop], false);
    this.startEvent = event;
    this.mouseDownTimeout = setTimeout(() => {
      originalSource.draggable = true;
      this.draggableElement = originalSource;
    }, this.delay.drag);
  }

  [onMouseUp]() {
    this[reset]();
  }

  [reset]() {
    clearTimeout(this.mouseDownTimeout);
    document.removeEventListener('mouseup', this[onMouseUp], true);
    document.removeEventListener('dragstart', this[onDragStart], false);
    document.removeEventListener('dragover', this[onDragOver], false);
    document.removeEventListener('dragend', this[onDragEnd], false);
    document.removeEventListener('drop', this[onDrop], false);
    if (this.nativeDraggableElement) {
      this.nativeDraggableElement.draggable = true;
      this.nativeDraggableElement = null;
    }
    if (this.draggableElement) {
      this.draggableElement.draggable = false;
      this.draggableElement = null;
    }
  }
}




/***/ }),

/***/ "./node_modules/@shopify/draggable/build/esm/Draggable/Sensors/ForceTouchSensor/ForceTouchSensor.mjs":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/Draggable/Sensors/ForceTouchSensor/ForceTouchSensor.mjs ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ForceTouchSensor)
/* harmony export */ });
/* harmony import */ var _shared_utils_closest_closest_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/utils/closest/closest.mjs */ "./node_modules/@shopify/draggable/build/esm/shared/utils/closest/closest.mjs");
/* harmony import */ var _Sensor_Sensor_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Sensor/Sensor.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Sensors/Sensor/Sensor.mjs");
/* harmony import */ var _SensorEvent_SensorEvent_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SensorEvent/SensorEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Sensors/SensorEvent/SensorEvent.mjs");




const onMouseForceWillBegin = Symbol('onMouseForceWillBegin');
const onMouseForceDown = Symbol('onMouseForceDown');
const onMouseDown = Symbol('onMouseDown');
const onMouseForceChange = Symbol('onMouseForceChange');
const onMouseMove = Symbol('onMouseMove');
const onMouseUp = Symbol('onMouseUp');
const onMouseForceGlobalChange = Symbol('onMouseForceGlobalChange');

class ForceTouchSensor extends _Sensor_Sensor_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {

  constructor(containers = [], options = {}) {
    super(containers, options);

    this.mightDrag = false;
    this[onMouseForceWillBegin] = this[onMouseForceWillBegin].bind(this);
    this[onMouseForceDown] = this[onMouseForceDown].bind(this);
    this[onMouseDown] = this[onMouseDown].bind(this);
    this[onMouseForceChange] = this[onMouseForceChange].bind(this);
    this[onMouseMove] = this[onMouseMove].bind(this);
    this[onMouseUp] = this[onMouseUp].bind(this);
  }

  attach() {
    for (const container of this.containers) {
      container.addEventListener('webkitmouseforcewillbegin', this[onMouseForceWillBegin], false);
      container.addEventListener('webkitmouseforcedown', this[onMouseForceDown], false);
      container.addEventListener('mousedown', this[onMouseDown], true);
      container.addEventListener('webkitmouseforcechanged', this[onMouseForceChange], false);
    }
    document.addEventListener('mousemove', this[onMouseMove]);
    document.addEventListener('mouseup', this[onMouseUp]);
  }

  detach() {
    for (const container of this.containers) {
      container.removeEventListener('webkitmouseforcewillbegin', this[onMouseForceWillBegin], false);
      container.removeEventListener('webkitmouseforcedown', this[onMouseForceDown], false);
      container.removeEventListener('mousedown', this[onMouseDown], true);
      container.removeEventListener('webkitmouseforcechanged', this[onMouseForceChange], false);
    }
    document.removeEventListener('mousemove', this[onMouseMove]);
    document.removeEventListener('mouseup', this[onMouseUp]);
  }

  [onMouseForceWillBegin](event) {
    event.preventDefault();
    this.mightDrag = true;
  }

  [onMouseForceDown](event) {
    if (this.dragging) {
      return;
    }
    const target = document.elementFromPoint(event.clientX, event.clientY);
    const container = event.currentTarget;
    if (this.options.handle && target && !(0,_shared_utils_closest_closest_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(target, this.options.handle)) {
      return;
    }
    const originalSource = (0,_shared_utils_closest_closest_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(target, this.options.draggable);
    if (!originalSource) {
      return;
    }
    const dragStartEvent = new _SensorEvent_SensorEvent_mjs__WEBPACK_IMPORTED_MODULE_2__.DragStartSensorEvent({
      clientX: event.clientX,
      clientY: event.clientY,
      target,
      container,
      originalSource,
      originalEvent: event
    });
    this.trigger(container, dragStartEvent);
    this.currentContainer = container;
    this.dragging = !dragStartEvent.canceled();
    this.mightDrag = false;
  }

  [onMouseUp](event) {
    if (!this.dragging) {
      return;
    }
    const dragStopEvent = new _SensorEvent_SensorEvent_mjs__WEBPACK_IMPORTED_MODULE_2__.DragStopSensorEvent({
      clientX: event.clientX,
      clientY: event.clientY,
      target: null,
      container: this.currentContainer,
      originalEvent: event
    });
    this.trigger(this.currentContainer, dragStopEvent);
    this.currentContainer = null;
    this.dragging = false;
    this.mightDrag = false;
  }

  [onMouseDown](event) {
    if (!this.mightDrag) {
      return;
    }

    event.stopPropagation();
    event.stopImmediatePropagation();
    event.preventDefault();
  }

  [onMouseMove](event) {
    if (!this.dragging) {
      return;
    }
    const target = document.elementFromPoint(event.clientX, event.clientY);
    const dragMoveEvent = new _SensorEvent_SensorEvent_mjs__WEBPACK_IMPORTED_MODULE_2__.DragMoveSensorEvent({
      clientX: event.clientX,
      clientY: event.clientY,
      target,
      container: this.currentContainer,
      originalEvent: event
    });
    this.trigger(this.currentContainer, dragMoveEvent);
  }

  [onMouseForceChange](event) {
    if (this.dragging) {
      return;
    }
    const target = event.target;
    const container = event.currentTarget;
    const dragPressureEvent = new _SensorEvent_SensorEvent_mjs__WEBPACK_IMPORTED_MODULE_2__.DragPressureSensorEvent({
      pressure: event.webkitForce,
      clientX: event.clientX,
      clientY: event.clientY,
      target,
      container,
      originalEvent: event
    });
    this.trigger(container, dragPressureEvent);
  }

  [onMouseForceGlobalChange](event) {
    if (!this.dragging) {
      return;
    }
    const target = event.target;
    const dragPressureEvent = new _SensorEvent_SensorEvent_mjs__WEBPACK_IMPORTED_MODULE_2__.DragPressureSensorEvent({
      pressure: event.webkitForce,
      clientX: event.clientX,
      clientY: event.clientY,
      target,
      container: this.currentContainer,
      originalEvent: event
    });
    this.trigger(this.currentContainer, dragPressureEvent);
  }
}




/***/ }),

/***/ "./node_modules/@shopify/draggable/build/esm/Draggable/Sensors/MouseSensor/MouseSensor.mjs":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/Draggable/Sensors/MouseSensor/MouseSensor.mjs ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MouseSensor)
/* harmony export */ });
/* harmony import */ var _shared_utils_closest_closest_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/utils/closest/closest.mjs */ "./node_modules/@shopify/draggable/build/esm/shared/utils/closest/closest.mjs");
/* harmony import */ var _shared_utils_distance_distance_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/utils/distance/distance.mjs */ "./node_modules/@shopify/draggable/build/esm/shared/utils/distance/distance.mjs");
/* harmony import */ var _Sensor_Sensor_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Sensor/Sensor.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Sensors/Sensor/Sensor.mjs");
/* harmony import */ var _SensorEvent_SensorEvent_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SensorEvent/SensorEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Sensors/SensorEvent/SensorEvent.mjs");





const onContextMenuWhileDragging = Symbol('onContextMenuWhileDragging');
const onMouseDown = Symbol('onMouseDown');
const onMouseMove = Symbol('onMouseMove');
const onMouseUp = Symbol('onMouseUp');
const startDrag = Symbol('startDrag');
const onDistanceChange = Symbol('onDistanceChange');

class MouseSensor extends _Sensor_Sensor_mjs__WEBPACK_IMPORTED_MODULE_2__["default"] {

  constructor(containers = [], options = {}) {
    super(containers, options);

    this.mouseDownTimeout = null;

    this.pageX = null;

    this.pageY = null;
    this[onContextMenuWhileDragging] = this[onContextMenuWhileDragging].bind(this);
    this[onMouseDown] = this[onMouseDown].bind(this);
    this[onMouseMove] = this[onMouseMove].bind(this);
    this[onMouseUp] = this[onMouseUp].bind(this);
    this[startDrag] = this[startDrag].bind(this);
    this[onDistanceChange] = this[onDistanceChange].bind(this);
  }

  attach() {
    document.addEventListener('mousedown', this[onMouseDown], true);
  }

  detach() {
    document.removeEventListener('mousedown', this[onMouseDown], true);
  }

  [onMouseDown](event) {
    if (event.button !== 0 || event.ctrlKey || event.metaKey) {
      return;
    }
    const container = (0,_shared_utils_closest_closest_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(event.target, this.containers);
    if (!container) {
      return;
    }
    if (this.options.handle && event.target && !(0,_shared_utils_closest_closest_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(event.target, this.options.handle)) {
      return;
    }
    const originalSource = (0,_shared_utils_closest_closest_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(event.target, this.options.draggable);
    if (!originalSource) {
      return;
    }
    const {
      delay
    } = this;
    const {
      pageX,
      pageY
    } = event;
    Object.assign(this, {
      pageX,
      pageY
    });
    this.onMouseDownAt = Date.now();
    this.startEvent = event;
    this.currentContainer = container;
    this.originalSource = originalSource;
    document.addEventListener('mouseup', this[onMouseUp]);
    document.addEventListener('dragstart', preventNativeDragStart);
    document.addEventListener('mousemove', this[onDistanceChange]);
    this.mouseDownTimeout = window.setTimeout(() => {
      this[onDistanceChange]({
        pageX: this.pageX,
        pageY: this.pageY
      });
    }, delay.mouse);
  }

  [startDrag]() {
    const startEvent = this.startEvent;
    const container = this.currentContainer;
    const originalSource = this.originalSource;
    const dragStartEvent = new _SensorEvent_SensorEvent_mjs__WEBPACK_IMPORTED_MODULE_3__.DragStartSensorEvent({
      clientX: startEvent.clientX,
      clientY: startEvent.clientY,
      target: startEvent.target,
      container,
      originalSource,
      originalEvent: startEvent
    });
    this.trigger(this.currentContainer, dragStartEvent);
    this.dragging = !dragStartEvent.canceled();
    if (this.dragging) {
      document.addEventListener('contextmenu', this[onContextMenuWhileDragging], true);
      document.addEventListener('mousemove', this[onMouseMove]);
    }
  }

  [onDistanceChange](event) {
    const {
      pageX,
      pageY
    } = event;
    const {
      distance: distance$1
    } = this.options;
    const {
      startEvent,
      delay
    } = this;
    Object.assign(this, {
      pageX,
      pageY
    });
    if (!this.currentContainer) {
      return;
    }
    const timeElapsed = Date.now() - this.onMouseDownAt;
    const distanceTravelled = (0,_shared_utils_distance_distance_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(startEvent.pageX, startEvent.pageY, pageX, pageY) || 0;
    clearTimeout(this.mouseDownTimeout);
    if (timeElapsed < delay.mouse) {

      document.removeEventListener('mousemove', this[onDistanceChange]);
    } else if (distanceTravelled >= distance$1) {
      document.removeEventListener('mousemove', this[onDistanceChange]);
      this[startDrag]();
    }
  }

  [onMouseMove](event) {
    if (!this.dragging) {
      return;
    }
    const target = document.elementFromPoint(event.clientX, event.clientY);
    const dragMoveEvent = new _SensorEvent_SensorEvent_mjs__WEBPACK_IMPORTED_MODULE_3__.DragMoveSensorEvent({
      clientX: event.clientX,
      clientY: event.clientY,
      target,
      container: this.currentContainer,
      originalEvent: event
    });
    this.trigger(this.currentContainer, dragMoveEvent);
  }

  [onMouseUp](event) {
    clearTimeout(this.mouseDownTimeout);
    if (event.button !== 0) {
      return;
    }
    document.removeEventListener('mouseup', this[onMouseUp]);
    document.removeEventListener('dragstart', preventNativeDragStart);
    document.removeEventListener('mousemove', this[onDistanceChange]);
    if (!this.dragging) {
      return;
    }
    const target = document.elementFromPoint(event.clientX, event.clientY);
    const dragStopEvent = new _SensorEvent_SensorEvent_mjs__WEBPACK_IMPORTED_MODULE_3__.DragStopSensorEvent({
      clientX: event.clientX,
      clientY: event.clientY,
      target,
      container: this.currentContainer,
      originalEvent: event
    });
    this.trigger(this.currentContainer, dragStopEvent);
    document.removeEventListener('contextmenu', this[onContextMenuWhileDragging], true);
    document.removeEventListener('mousemove', this[onMouseMove]);
    this.currentContainer = null;
    this.dragging = false;
    this.startEvent = null;
  }

  [onContextMenuWhileDragging](event) {
    event.preventDefault();
  }
}
function preventNativeDragStart(event) {
  event.preventDefault();
}




/***/ }),

/***/ "./node_modules/@shopify/draggable/build/esm/Draggable/Sensors/SensorEvent/SensorEvent.mjs":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/Draggable/Sensors/SensorEvent/SensorEvent.mjs ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DragMoveSensorEvent: () => (/* binding */ DragMoveSensorEvent),
/* harmony export */   DragPressureSensorEvent: () => (/* binding */ DragPressureSensorEvent),
/* harmony export */   DragStartSensorEvent: () => (/* binding */ DragStartSensorEvent),
/* harmony export */   DragStopSensorEvent: () => (/* binding */ DragStopSensorEvent),
/* harmony export */   SensorEvent: () => (/* binding */ SensorEvent)
/* harmony export */ });
/* harmony import */ var _shared_AbstractEvent_AbstractEvent_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/AbstractEvent/AbstractEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/shared/AbstractEvent/AbstractEvent.mjs");


class SensorEvent extends _shared_AbstractEvent_AbstractEvent_mjs__WEBPACK_IMPORTED_MODULE_0__.AbstractEvent {

  get originalEvent() {
    return this.data.originalEvent;
  }

  get clientX() {
    return this.data.clientX;
  }

  get clientY() {
    return this.data.clientY;
  }

  get target() {
    return this.data.target;
  }

  get container() {
    return this.data.container;
  }

  get originalSource() {
    return this.data.originalSource;
  }

  get pressure() {
    return this.data.pressure;
  }
}

class DragStartSensorEvent extends SensorEvent {}

DragStartSensorEvent.type = 'drag:start';
class DragMoveSensorEvent extends SensorEvent {}

DragMoveSensorEvent.type = 'drag:move';
class DragStopSensorEvent extends SensorEvent {}

DragStopSensorEvent.type = 'drag:stop';
class DragPressureSensorEvent extends SensorEvent {}
DragPressureSensorEvent.type = 'drag:pressure';




/***/ }),

/***/ "./node_modules/@shopify/draggable/build/esm/Draggable/Sensors/Sensor/Sensor.mjs":
/*!***************************************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/Draggable/Sensors/Sensor/Sensor.mjs ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Sensor)
/* harmony export */ });
const defaultDelay = {
  mouse: 0,
  drag: 0,
  touch: 100
};

class Sensor {

  constructor(containers = [], options = {}) {

    this.containers = [...containers];

    this.options = {
      ...options
    };

    this.dragging = false;

    this.currentContainer = null;

    this.originalSource = null;

    this.startEvent = null;

    this.delay = calcDelay(options.delay);
  }

  attach() {
    return this;
  }

  detach() {
    return this;
  }

  addContainer(...containers) {
    this.containers = [...this.containers, ...containers];
  }

  removeContainer(...containers) {
    this.containers = this.containers.filter(container => !containers.includes(container));
  }

  trigger(element, sensorEvent) {
    const event = document.createEvent('Event');
    event.detail = sensorEvent;
    event.initEvent(sensorEvent.type, true, true);
    element.dispatchEvent(event);
    this.lastEvent = sensorEvent;
    return sensorEvent;
  }
}

function calcDelay(optionsDelay) {
  const delay = {};
  if (optionsDelay === undefined) {
    return {
      ...defaultDelay
    };
  }
  if (typeof optionsDelay === 'number') {
    for (const key in defaultDelay) {
      if (Object.prototype.hasOwnProperty.call(defaultDelay, key)) {
        delay[key] = optionsDelay;
      }
    }
    return delay;
  }
  for (const key in defaultDelay) {
    if (Object.prototype.hasOwnProperty.call(defaultDelay, key)) {
      if (optionsDelay[key] === undefined) {
        delay[key] = defaultDelay[key];
      } else {
        delay[key] = optionsDelay[key];
      }
    }
  }
  return delay;
}




/***/ }),

/***/ "./node_modules/@shopify/draggable/build/esm/Draggable/Sensors/TouchSensor/TouchSensor.mjs":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/Draggable/Sensors/TouchSensor/TouchSensor.mjs ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TouchSensor)
/* harmony export */ });
/* harmony import */ var _shared_utils_closest_closest_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/utils/closest/closest.mjs */ "./node_modules/@shopify/draggable/build/esm/shared/utils/closest/closest.mjs");
/* harmony import */ var _shared_utils_distance_distance_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/utils/distance/distance.mjs */ "./node_modules/@shopify/draggable/build/esm/shared/utils/distance/distance.mjs");
/* harmony import */ var _shared_utils_touchCoords_touchCoords_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/utils/touchCoords/touchCoords.mjs */ "./node_modules/@shopify/draggable/build/esm/shared/utils/touchCoords/touchCoords.mjs");
/* harmony import */ var _Sensor_Sensor_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Sensor/Sensor.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Sensors/Sensor/Sensor.mjs");
/* harmony import */ var _SensorEvent_SensorEvent_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SensorEvent/SensorEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Sensors/SensorEvent/SensorEvent.mjs");






const onTouchStart = Symbol('onTouchStart');
const onTouchEnd = Symbol('onTouchEnd');
const onTouchMove = Symbol('onTouchMove');
const startDrag = Symbol('startDrag');
const onDistanceChange = Symbol('onDistanceChange');

let preventScrolling = false;

window.addEventListener('touchmove', event => {
  if (!preventScrolling) {
    return;
  }

  event.preventDefault();
}, {
  passive: false
});

class TouchSensor extends _Sensor_Sensor_mjs__WEBPACK_IMPORTED_MODULE_3__["default"] {

  constructor(containers = [], options = {}) {
    super(containers, options);

    this.currentScrollableParent = null;

    this.tapTimeout = null;

    this.touchMoved = false;

    this.pageX = null;

    this.pageY = null;
    this[onTouchStart] = this[onTouchStart].bind(this);
    this[onTouchEnd] = this[onTouchEnd].bind(this);
    this[onTouchMove] = this[onTouchMove].bind(this);
    this[startDrag] = this[startDrag].bind(this);
    this[onDistanceChange] = this[onDistanceChange].bind(this);
  }

  attach() {
    document.addEventListener('touchstart', this[onTouchStart]);
  }

  detach() {
    document.removeEventListener('touchstart', this[onTouchStart]);
  }

  [onTouchStart](event) {
    const container = (0,_shared_utils_closest_closest_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(event.target, this.containers);
    if (!container) {
      return;
    }
    if (this.options.handle && event.target && !(0,_shared_utils_closest_closest_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(event.target, this.options.handle)) {
      return;
    }
    const originalSource = (0,_shared_utils_closest_closest_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(event.target, this.options.draggable);
    if (!originalSource) {
      return;
    }
    const {
      distance = 0
    } = this.options;
    const {
      delay
    } = this;
    const {
      pageX,
      pageY
    } = (0,_shared_utils_touchCoords_touchCoords_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(event);
    Object.assign(this, {
      pageX,
      pageY
    });
    this.onTouchStartAt = Date.now();
    this.startEvent = event;
    this.currentContainer = container;
    this.originalSource = originalSource;
    document.addEventListener('touchend', this[onTouchEnd]);
    document.addEventListener('touchcancel', this[onTouchEnd]);
    document.addEventListener('touchmove', this[onDistanceChange]);
    container.addEventListener('contextmenu', onContextMenu);
    if (distance) {
      preventScrolling = true;
    }
    this.tapTimeout = window.setTimeout(() => {
      this[onDistanceChange]({
        touches: [{
          pageX: this.pageX,
          pageY: this.pageY
        }]
      });
    }, delay.touch);
  }

  [startDrag]() {
    const startEvent = this.startEvent;
    const container = this.currentContainer;
    const touch = (0,_shared_utils_touchCoords_touchCoords_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(startEvent);
    const originalSource = this.originalSource;
    const dragStartEvent = new _SensorEvent_SensorEvent_mjs__WEBPACK_IMPORTED_MODULE_4__.DragStartSensorEvent({
      clientX: touch.pageX,
      clientY: touch.pageY,
      target: startEvent.target,
      container,
      originalSource,
      originalEvent: startEvent
    });
    this.trigger(this.currentContainer, dragStartEvent);
    this.dragging = !dragStartEvent.canceled();
    if (this.dragging) {
      document.addEventListener('touchmove', this[onTouchMove]);
    }
    preventScrolling = this.dragging;
  }

  [onDistanceChange](event) {
    const {
      distance: distance$1
    } = this.options;
    const {
      startEvent,
      delay
    } = this;
    const start = (0,_shared_utils_touchCoords_touchCoords_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(startEvent);
    const current = (0,_shared_utils_touchCoords_touchCoords_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(event);
    const timeElapsed = Date.now() - this.onTouchStartAt;
    const distanceTravelled = (0,_shared_utils_distance_distance_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(start.pageX, start.pageY, current.pageX, current.pageY);
    Object.assign(this, current);
    clearTimeout(this.tapTimeout);
    if (timeElapsed < delay.touch) {

      document.removeEventListener('touchmove', this[onDistanceChange]);
    } else if (distanceTravelled >= distance$1) {
      document.removeEventListener('touchmove', this[onDistanceChange]);
      this[startDrag]();
    }
  }

  [onTouchMove](event) {
    if (!this.dragging) {
      return;
    }
    const {
      pageX,
      pageY
    } = (0,_shared_utils_touchCoords_touchCoords_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(event);
    const target = document.elementFromPoint(pageX - window.scrollX, pageY - window.scrollY);
    const dragMoveEvent = new _SensorEvent_SensorEvent_mjs__WEBPACK_IMPORTED_MODULE_4__.DragMoveSensorEvent({
      clientX: pageX,
      clientY: pageY,
      target,
      container: this.currentContainer,
      originalEvent: event
    });
    this.trigger(this.currentContainer, dragMoveEvent);
  }

  [onTouchEnd](event) {
    clearTimeout(this.tapTimeout);
    preventScrolling = false;
    document.removeEventListener('touchend', this[onTouchEnd]);
    document.removeEventListener('touchcancel', this[onTouchEnd]);
    document.removeEventListener('touchmove', this[onDistanceChange]);
    if (this.currentContainer) {
      this.currentContainer.removeEventListener('contextmenu', onContextMenu);
    }
    if (!this.dragging) {
      return;
    }
    document.removeEventListener('touchmove', this[onTouchMove]);
    const {
      pageX,
      pageY
    } = (0,_shared_utils_touchCoords_touchCoords_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(event);
    const target = document.elementFromPoint(pageX - window.scrollX, pageY - window.scrollY);
    event.preventDefault();
    const dragStopEvent = new _SensorEvent_SensorEvent_mjs__WEBPACK_IMPORTED_MODULE_4__.DragStopSensorEvent({
      clientX: pageX,
      clientY: pageY,
      target,
      container: this.currentContainer,
      originalEvent: event
    });
    this.trigger(this.currentContainer, dragStopEvent);
    this.currentContainer = null;
    this.dragging = false;
    this.startEvent = null;
  }
}
function onContextMenu(event) {
  event.preventDefault();
  event.stopPropagation();
}




/***/ }),

/***/ "./node_modules/@shopify/draggable/build/esm/Draggable/Sensors/index.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/Draggable/Sensors/index.mjs ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DragMoveSensorEvent: () => (/* reexport safe */ _SensorEvent_SensorEvent_mjs__WEBPACK_IMPORTED_MODULE_5__.DragMoveSensorEvent),
/* harmony export */   DragPressureSensorEvent: () => (/* reexport safe */ _SensorEvent_SensorEvent_mjs__WEBPACK_IMPORTED_MODULE_5__.DragPressureSensorEvent),
/* harmony export */   DragSensor: () => (/* reexport safe */ _DragSensor_DragSensor_mjs__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   DragStartSensorEvent: () => (/* reexport safe */ _SensorEvent_SensorEvent_mjs__WEBPACK_IMPORTED_MODULE_5__.DragStartSensorEvent),
/* harmony export */   DragStopSensorEvent: () => (/* reexport safe */ _SensorEvent_SensorEvent_mjs__WEBPACK_IMPORTED_MODULE_5__.DragStopSensorEvent),
/* harmony export */   ForceTouchSensor: () => (/* reexport safe */ _ForceTouchSensor_ForceTouchSensor_mjs__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   MouseSensor: () => (/* reexport safe */ _MouseSensor_MouseSensor_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   Sensor: () => (/* reexport safe */ _Sensor_Sensor_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   SensorEvent: () => (/* reexport safe */ _SensorEvent_SensorEvent_mjs__WEBPACK_IMPORTED_MODULE_5__.SensorEvent),
/* harmony export */   TouchSensor: () => (/* reexport safe */ _TouchSensor_TouchSensor_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])
/* harmony export */ });
/* harmony import */ var _Sensor_Sensor_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sensor/Sensor.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Sensors/Sensor/Sensor.mjs");
/* harmony import */ var _MouseSensor_MouseSensor_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MouseSensor/MouseSensor.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Sensors/MouseSensor/MouseSensor.mjs");
/* harmony import */ var _TouchSensor_TouchSensor_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TouchSensor/TouchSensor.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Sensors/TouchSensor/TouchSensor.mjs");
/* harmony import */ var _DragSensor_DragSensor_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DragSensor/DragSensor.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Sensors/DragSensor/DragSensor.mjs");
/* harmony import */ var _ForceTouchSensor_ForceTouchSensor_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ForceTouchSensor/ForceTouchSensor.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Sensors/ForceTouchSensor/ForceTouchSensor.mjs");
/* harmony import */ var _SensorEvent_SensorEvent_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SensorEvent/SensorEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Sensors/SensorEvent/SensorEvent.mjs");








/***/ }),

/***/ "./node_modules/@shopify/draggable/build/esm/Droppable/Droppable.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/Droppable/Droppable.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Droppable)
/* harmony export */ });
/* harmony import */ var _shared_utils_closest_closest_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/utils/closest/closest.mjs */ "./node_modules/@shopify/draggable/build/esm/shared/utils/closest/closest.mjs");
/* harmony import */ var _Draggable_Draggable_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Draggable/Draggable.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Draggable.mjs");
/* harmony import */ var _Draggable_DragEvent_DragEvent_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Draggable/DragEvent/DragEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/DragEvent/DragEvent.mjs");
/* harmony import */ var _Draggable_DraggableEvent_DraggableEvent_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Draggable/DraggableEvent/DraggableEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/DraggableEvent/DraggableEvent.mjs");
/* harmony import */ var _Draggable_Plugins_Announcement_Announcement_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Draggable/Plugins/Announcement/Announcement.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Plugins/Announcement/Announcement.mjs");
/* harmony import */ var _Draggable_Plugins_Mirror_MirrorEvent_MirrorEvent_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Draggable/Plugins/Mirror/MirrorEvent/MirrorEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Plugins/Mirror/MirrorEvent/MirrorEvent.mjs");
/* harmony import */ var _Draggable_Sensors_SensorEvent_SensorEvent_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Draggable/Sensors/SensorEvent/SensorEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Sensors/SensorEvent/SensorEvent.mjs");
/* harmony import */ var _Draggable_Sensors_TouchSensor_TouchSensor_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Draggable/Sensors/TouchSensor/TouchSensor.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Sensors/TouchSensor/TouchSensor.mjs");
/* harmony import */ var _DroppableEvent_DroppableEvent_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DroppableEvent/DroppableEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/Droppable/DroppableEvent/DroppableEvent.mjs");










const onDragStart = Symbol('onDragStart');
const onDragMove = Symbol('onDragMove');
const onDragStop = Symbol('onDragStop');
const dropInDropzone = Symbol('dropInDropZone');
const returnToOriginalDropzone = Symbol('returnToOriginalDropzone');
const closestDropzone = Symbol('closestDropzone');
const getDropzones = Symbol('getDropzones');

function onDroppableDroppedDefaultAnnouncement({
  dragEvent,
  dropzone
}) {
  const sourceText = dragEvent.source.textContent.trim() || dragEvent.source.id || 'draggable element';
  const dropzoneText = dropzone.textContent.trim() || dropzone.id || 'droppable element';
  return `Dropped ${sourceText} into ${dropzoneText}`;
}

function onDroppableReturnedDefaultAnnouncement({
  dragEvent,
  dropzone
}) {
  const sourceText = dragEvent.source.textContent.trim() || dragEvent.source.id || 'draggable element';
  const dropzoneText = dropzone.textContent.trim() || dropzone.id || 'droppable element';
  return `Returned ${sourceText} from ${dropzoneText}`;
}

const defaultAnnouncements = {
  'droppable:dropped': onDroppableDroppedDefaultAnnouncement,
  'droppable:returned': onDroppableReturnedDefaultAnnouncement
};
const defaultClasses = {
  'droppable:active': 'draggable-dropzone--active',
  'droppable:occupied': 'draggable-dropzone--occupied'
};
const defaultOptions = {
  dropzone: '.draggable-droppable'
};

class Droppable extends _Draggable_Draggable_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {

  constructor(containers = [], options = {}) {
    super(containers, {
      ...defaultOptions,
      ...options,
      classes: {
        ...defaultClasses,
        ...(options.classes || {})
      },
      announcements: {
        ...defaultAnnouncements,
        ...(options.announcements || {})
      }
    });

    this.dropzones = null;

    this.lastDropzone = null;

    this.initialDropzone = null;
    this[onDragStart] = this[onDragStart].bind(this);
    this[onDragMove] = this[onDragMove].bind(this);
    this[onDragStop] = this[onDragStop].bind(this);
    this.on('drag:start', this[onDragStart]).on('drag:move', this[onDragMove]).on('drag:stop', this[onDragStop]);
  }

  destroy() {
    super.destroy();
    this.off('drag:start', this[onDragStart]).off('drag:move', this[onDragMove]).off('drag:stop', this[onDragStop]);
  }

  [onDragStart](event) {
    if (event.canceled()) {
      return;
    }
    this.dropzones = [...this[getDropzones]()];
    const dropzone = (0,_shared_utils_closest_closest_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(event.sensorEvent.target, this.options.dropzone);
    if (!dropzone) {
      event.cancel();
      return;
    }
    const droppableStartEvent = new _DroppableEvent_DroppableEvent_mjs__WEBPACK_IMPORTED_MODULE_8__.DroppableStartEvent({
      dragEvent: event,
      dropzone
    });
    this.trigger(droppableStartEvent);
    if (droppableStartEvent.canceled()) {
      event.cancel();
      return;
    }
    this.initialDropzone = dropzone;
    for (const dropzoneElement of this.dropzones) {
      if (dropzoneElement.classList.contains(this.getClassNameFor('droppable:occupied'))) {
        continue;
      }
      dropzoneElement.classList.add(...this.getClassNamesFor('droppable:active'));
    }
  }

  [onDragMove](event) {
    if (event.canceled()) {
      return;
    }
    const dropzone = this[closestDropzone](event.sensorEvent.target);
    const overEmptyDropzone = dropzone && !dropzone.classList.contains(this.getClassNameFor('droppable:occupied'));
    if (overEmptyDropzone && this[dropInDropzone](event, dropzone)) {
      this.lastDropzone = dropzone;
    } else if ((!dropzone || dropzone === this.initialDropzone) && this.lastDropzone) {
      this[returnToOriginalDropzone](event);
      this.lastDropzone = null;
    }
  }

  [onDragStop](event) {
    const droppableStopEvent = new _DroppableEvent_DroppableEvent_mjs__WEBPACK_IMPORTED_MODULE_8__.DroppableStopEvent({
      dragEvent: event,
      dropzone: this.lastDropzone || this.initialDropzone
    });
    this.trigger(droppableStopEvent);
    const occupiedClasses = this.getClassNamesFor('droppable:occupied');
    for (const dropzone of this.dropzones) {
      dropzone.classList.remove(...this.getClassNamesFor('droppable:active'));
    }
    if (this.lastDropzone && this.lastDropzone !== this.initialDropzone) {
      this.initialDropzone.classList.remove(...occupiedClasses);
    }
    this.dropzones = null;
    this.lastDropzone = null;
    this.initialDropzone = null;
  }

  [dropInDropzone](event, dropzone) {
    const droppableDroppedEvent = new _DroppableEvent_DroppableEvent_mjs__WEBPACK_IMPORTED_MODULE_8__.DroppableDroppedEvent({
      dragEvent: event,
      dropzone
    });
    this.trigger(droppableDroppedEvent);
    if (droppableDroppedEvent.canceled()) {
      return false;
    }
    const occupiedClasses = this.getClassNamesFor('droppable:occupied');
    if (this.lastDropzone) {
      this.lastDropzone.classList.remove(...occupiedClasses);
    }
    dropzone.appendChild(event.source);
    dropzone.classList.add(...occupiedClasses);
    return true;
  }

  [returnToOriginalDropzone](event) {
    const droppableReturnedEvent = new _DroppableEvent_DroppableEvent_mjs__WEBPACK_IMPORTED_MODULE_8__.DroppableReturnedEvent({
      dragEvent: event,
      dropzone: this.lastDropzone
    });
    this.trigger(droppableReturnedEvent);
    if (droppableReturnedEvent.canceled()) {
      return;
    }
    this.initialDropzone.appendChild(event.source);
    this.lastDropzone.classList.remove(...this.getClassNamesFor('droppable:occupied'));
  }

  [closestDropzone](target) {
    if (!this.dropzones) {
      return null;
    }
    return (0,_shared_utils_closest_closest_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(target, this.dropzones);
  }

  [getDropzones]() {
    const dropzone = this.options.dropzone;
    if (typeof dropzone === 'string') {
      return document.querySelectorAll(dropzone);
    } else if (dropzone instanceof NodeList || dropzone instanceof Array) {
      return dropzone;
    } else if (typeof dropzone === 'function') {
      return dropzone();
    } else {
      return [];
    }
  }
}




/***/ }),

/***/ "./node_modules/@shopify/draggable/build/esm/Droppable/DroppableEvent/DroppableEvent.mjs":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/Droppable/DroppableEvent/DroppableEvent.mjs ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DroppableDroppedEvent: () => (/* binding */ DroppableDroppedEvent),
/* harmony export */   DroppableEvent: () => (/* binding */ DroppableEvent),
/* harmony export */   DroppableReturnedEvent: () => (/* binding */ DroppableReturnedEvent),
/* harmony export */   DroppableStartEvent: () => (/* binding */ DroppableStartEvent),
/* harmony export */   DroppableStopEvent: () => (/* binding */ DroppableStopEvent)
/* harmony export */ });
/* harmony import */ var _shared_AbstractEvent_AbstractEvent_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/AbstractEvent/AbstractEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/shared/AbstractEvent/AbstractEvent.mjs");


class DroppableEvent extends _shared_AbstractEvent_AbstractEvent_mjs__WEBPACK_IMPORTED_MODULE_0__.AbstractEvent {

  constructor(data) {
    super(data);
    this.data = data;
  }

  get dragEvent() {
    return this.data.dragEvent;
  }
}
DroppableEvent.type = 'droppable';

class DroppableStartEvent extends DroppableEvent {

  get dropzone() {
    return this.data.dropzone;
  }
}
DroppableStartEvent.type = 'droppable:start';
DroppableStartEvent.cancelable = true;

class DroppableDroppedEvent extends DroppableEvent {

  get dropzone() {
    return this.data.dropzone;
  }
}
DroppableDroppedEvent.type = 'droppable:dropped';
DroppableDroppedEvent.cancelable = true;

class DroppableReturnedEvent extends DroppableEvent {

  get dropzone() {
    return this.data.dropzone;
  }
}
DroppableReturnedEvent.type = 'droppable:returned';
DroppableReturnedEvent.cancelable = true;

class DroppableStopEvent extends DroppableEvent {

  get dropzone() {
    return this.data.dropzone;
  }
}
DroppableStopEvent.type = 'droppable:stop';
DroppableStopEvent.cancelable = true;




/***/ }),

/***/ "./node_modules/@shopify/draggable/build/esm/Plugins/Collidable/Collidable.mjs":
/*!*************************************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/Plugins/Collidable/Collidable.mjs ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Collidable)
/* harmony export */ });
/* harmony import */ var _shared_AbstractPlugin_AbstractPlugin_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/AbstractPlugin/AbstractPlugin.mjs */ "./node_modules/@shopify/draggable/build/esm/shared/AbstractPlugin/AbstractPlugin.mjs");
/* harmony import */ var _shared_utils_closest_closest_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/utils/closest/closest.mjs */ "./node_modules/@shopify/draggable/build/esm/shared/utils/closest/closest.mjs");
/* harmony import */ var _CollidableEvent_CollidableEvent_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CollidableEvent/CollidableEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/Plugins/Collidable/CollidableEvent/CollidableEvent.mjs");




const onDragMove = Symbol('onDragMove');
const onDragStop = Symbol('onDragStop');
const onRequestAnimationFrame = Symbol('onRequestAnimationFrame');

class Collidable extends _shared_AbstractPlugin_AbstractPlugin_mjs__WEBPACK_IMPORTED_MODULE_0__.AbstractPlugin {

  constructor(draggable) {
    super(draggable);

    this.currentlyCollidingElement = null;

    this.lastCollidingElement = null;

    this.currentAnimationFrame = null;
    this[onDragMove] = this[onDragMove].bind(this);
    this[onDragStop] = this[onDragStop].bind(this);
    this[onRequestAnimationFrame] = this[onRequestAnimationFrame].bind(this);
  }

  attach() {
    this.draggable.on('drag:move', this[onDragMove]).on('drag:stop', this[onDragStop]);
  }

  detach() {
    this.draggable.off('drag:move', this[onDragMove]).off('drag:stop', this[onDragStop]);
  }

  getCollidables() {
    const collidables = this.draggable.options.collidables;
    if (typeof collidables === 'string') {
      return Array.prototype.slice.call(document.querySelectorAll(collidables));
    } else if (collidables instanceof NodeList || collidables instanceof Array) {
      return Array.prototype.slice.call(collidables);
    } else if (collidables instanceof HTMLElement) {
      return [collidables];
    } else if (typeof collidables === 'function') {
      return collidables();
    } else {
      return [];
    }
  }

  [onDragMove](event) {
    const target = event.sensorEvent.target;
    this.currentAnimationFrame = requestAnimationFrame(this[onRequestAnimationFrame](target));
    if (this.currentlyCollidingElement) {
      event.cancel();
    }
    const collidableInEvent = new _CollidableEvent_CollidableEvent_mjs__WEBPACK_IMPORTED_MODULE_2__.CollidableInEvent({
      dragEvent: event,
      collidingElement: this.currentlyCollidingElement
    });
    const collidableOutEvent = new _CollidableEvent_CollidableEvent_mjs__WEBPACK_IMPORTED_MODULE_2__.CollidableOutEvent({
      dragEvent: event,
      collidingElement: this.lastCollidingElement
    });
    const enteringCollidable = Boolean(this.currentlyCollidingElement && this.lastCollidingElement !== this.currentlyCollidingElement);
    const leavingCollidable = Boolean(!this.currentlyCollidingElement && this.lastCollidingElement);
    if (enteringCollidable) {
      if (this.lastCollidingElement) {
        this.draggable.trigger(collidableOutEvent);
      }
      this.draggable.trigger(collidableInEvent);
    } else if (leavingCollidable) {
      this.draggable.trigger(collidableOutEvent);
    }
    this.lastCollidingElement = this.currentlyCollidingElement;
  }

  [onDragStop](event) {
    const lastCollidingElement = this.currentlyCollidingElement || this.lastCollidingElement;
    const collidableOutEvent = new _CollidableEvent_CollidableEvent_mjs__WEBPACK_IMPORTED_MODULE_2__.CollidableOutEvent({
      dragEvent: event,
      collidingElement: lastCollidingElement
    });
    if (lastCollidingElement) {
      this.draggable.trigger(collidableOutEvent);
    }
    this.lastCollidingElement = null;
    this.currentlyCollidingElement = null;
  }

  [onRequestAnimationFrame](target) {
    return () => {
      const collidables = this.getCollidables();
      this.currentlyCollidingElement = (0,_shared_utils_closest_closest_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(target, element => collidables.includes(element));
    };
  }
}




/***/ }),

/***/ "./node_modules/@shopify/draggable/build/esm/Plugins/Collidable/CollidableEvent/CollidableEvent.mjs":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/Plugins/Collidable/CollidableEvent/CollidableEvent.mjs ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CollidableEvent: () => (/* binding */ CollidableEvent),
/* harmony export */   CollidableInEvent: () => (/* binding */ CollidableInEvent),
/* harmony export */   CollidableOutEvent: () => (/* binding */ CollidableOutEvent)
/* harmony export */ });
/* harmony import */ var _shared_AbstractEvent_AbstractEvent_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/AbstractEvent/AbstractEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/shared/AbstractEvent/AbstractEvent.mjs");


class CollidableEvent extends _shared_AbstractEvent_AbstractEvent_mjs__WEBPACK_IMPORTED_MODULE_0__.AbstractEvent {

  constructor(data) {
    super(data);
    this.data = data;
  }

  get dragEvent() {
    return this.data.dragEvent;
  }
}
CollidableEvent.type = 'collidable';

class CollidableInEvent extends CollidableEvent {

  get collidingElement() {
    return this.data.collidingElement;
  }
}
CollidableInEvent.type = 'collidable:in';

class CollidableOutEvent extends CollidableEvent {

  get collidingElement() {
    return this.data.collidingElement;
  }
}
CollidableOutEvent.type = 'collidable:out';




/***/ }),

/***/ "./node_modules/@shopify/draggable/build/esm/Plugins/ResizeMirror/ResizeMirror.mjs":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/Plugins/ResizeMirror/ResizeMirror.mjs ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResizeMirror),
/* harmony export */   defaultOptions: () => (/* binding */ defaultOptions)
/* harmony export */ });
/* harmony import */ var _virtual_rollupPluginBabelHelpers_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_virtual/_rollupPluginBabelHelpers.mjs */ "./node_modules/@shopify/draggable/build/esm/_virtual/_rollupPluginBabelHelpers.mjs");
/* harmony import */ var _shared_AbstractPlugin_AbstractPlugin_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/AbstractPlugin/AbstractPlugin.mjs */ "./node_modules/@shopify/draggable/build/esm/shared/AbstractPlugin/AbstractPlugin.mjs");
/* harmony import */ var _shared_utils_decorators_AutoBind_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils/decorators/AutoBind.mjs */ "./node_modules/@shopify/draggable/build/esm/shared/utils/decorators/AutoBind.mjs");
/* harmony import */ var _shared_utils_requestNextAnimationFrame_requestNextAnimationFrame_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/utils/requestNextAnimationFrame/requestNextAnimationFrame.mjs */ "./node_modules/@shopify/draggable/build/esm/shared/utils/requestNextAnimationFrame/requestNextAnimationFrame.mjs");
/* harmony import */ var _Draggable_DragEvent_DragEvent_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Draggable/DragEvent/DragEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/DragEvent/DragEvent.mjs");






var _initProto, _class;

const defaultOptions = {};

class ResizeMirror extends _shared_AbstractPlugin_AbstractPlugin_mjs__WEBPACK_IMPORTED_MODULE_1__.AbstractPlugin {

  constructor(draggable) {
    _initProto(super(draggable));

    this.lastWidth = 0;

    this.lastHeight = 0;

    this.mirror = null;
  }

  attach() {
    this.draggable.on('mirror:created', this.onMirrorCreated).on('drag:over', this.onDragOver).on('drag:over:container', this.onDragOver);
  }

  detach() {
    this.draggable.off('mirror:created', this.onMirrorCreated).off('mirror:destroy', this.onMirrorDestroy).off('drag:over', this.onDragOver).off('drag:over:container', this.onDragOver);
  }

  getOptions() {
    return this.draggable.options.resizeMirror || {};
  }

  onMirrorCreated({
    mirror
  }) {
    this.mirror = mirror;
  }

  onMirrorDestroy() {
    this.mirror = null;
  }

  onDragOver(dragEvent) {
    this.resize(dragEvent);
  }

  resize(dragEvent) {
    requestAnimationFrame(() => {
      let over = null;
      const {
        overContainer
      } = dragEvent;
      if (this.mirror == null || this.mirror.parentNode == null) {
        return;
      }
      if (this.mirror.parentNode !== overContainer) {
        overContainer.appendChild(this.mirror);
      }
      if ((0,_Draggable_DragEvent_DragEvent_mjs__WEBPACK_IMPORTED_MODULE_4__.isDragOverEvent)(dragEvent)) {
        over = dragEvent.over;
      }
      const overElement = over || this.draggable.getDraggableElementsForContainer(overContainer)[0];
      if (!overElement) {
        return;
      }
      (0,_shared_utils_requestNextAnimationFrame_requestNextAnimationFrame_mjs__WEBPACK_IMPORTED_MODULE_3__["default"])(() => {
        const overRect = overElement.getBoundingClientRect();
        if (this.mirror == null || this.lastHeight === overRect.height && this.lastWidth === overRect.width) {
          return;
        }
        this.mirror.style.width = `${overRect.width}px`;
        this.mirror.style.height = `${overRect.height}px`;
        this.lastWidth = overRect.width;
        this.lastHeight = overRect.height;
      });
    });
  }
}
_class = ResizeMirror;
[_initProto] = (0,_virtual_rollupPluginBabelHelpers_mjs__WEBPACK_IMPORTED_MODULE_0__.applyDecs2305)(_class, [[_shared_utils_decorators_AutoBind_mjs__WEBPACK_IMPORTED_MODULE_2__.AutoBind, 2, "onMirrorCreated"], [_shared_utils_decorators_AutoBind_mjs__WEBPACK_IMPORTED_MODULE_2__.AutoBind, 2, "onMirrorDestroy"], [_shared_utils_decorators_AutoBind_mjs__WEBPACK_IMPORTED_MODULE_2__.AutoBind, 2, "onDragOver"]], [], 0, void 0, _shared_AbstractPlugin_AbstractPlugin_mjs__WEBPACK_IMPORTED_MODULE_1__.AbstractPlugin).e;




/***/ }),

/***/ "./node_modules/@shopify/draggable/build/esm/Plugins/Snappable/Snappable.mjs":
/*!***********************************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/Plugins/Snappable/Snappable.mjs ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Snappable)
/* harmony export */ });
/* harmony import */ var _shared_AbstractPlugin_AbstractPlugin_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/AbstractPlugin/AbstractPlugin.mjs */ "./node_modules/@shopify/draggable/build/esm/shared/AbstractPlugin/AbstractPlugin.mjs");
/* harmony import */ var _SnappableEvent_SnappableEvent_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SnappableEvent/SnappableEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/Plugins/Snappable/SnappableEvent/SnappableEvent.mjs");



const onDragStart = Symbol('onDragStart');
const onDragStop = Symbol('onDragStop');
const onDragOver = Symbol('onDragOver');
const onDragOut = Symbol('onDragOut');
const onMirrorCreated = Symbol('onMirrorCreated');
const onMirrorDestroy = Symbol('onMirrorDestroy');

class Snappable extends _shared_AbstractPlugin_AbstractPlugin_mjs__WEBPACK_IMPORTED_MODULE_0__.AbstractPlugin {

  constructor(draggable) {
    super(draggable);

    this.firstSource = null;

    this.mirror = null;
    this[onDragStart] = this[onDragStart].bind(this);
    this[onDragStop] = this[onDragStop].bind(this);
    this[onDragOver] = this[onDragOver].bind(this);
    this[onDragOut] = this[onDragOut].bind(this);
    this[onMirrorCreated] = this[onMirrorCreated].bind(this);
    this[onMirrorDestroy] = this[onMirrorDestroy].bind(this);
  }

  attach() {
    this.draggable.on('drag:start', this[onDragStart]).on('drag:stop', this[onDragStop]).on('drag:over', this[onDragOver]).on('drag:out', this[onDragOut]).on('droppable:over', this[onDragOver]).on('droppable:out', this[onDragOut]).on('mirror:created', this[onMirrorCreated]).on('mirror:destroy', this[onMirrorDestroy]);
  }

  detach() {
    this.draggable.off('drag:start', this[onDragStart]).off('drag:stop', this[onDragStop]).off('drag:over', this[onDragOver]).off('drag:out', this[onDragOut]).off('droppable:over', this[onDragOver]).off('droppable:out', this[onDragOut]).off('mirror:created', this[onMirrorCreated]).off('mirror:destroy', this[onMirrorDestroy]);
  }

  [onDragStart](event) {
    if (event.canceled()) {
      return;
    }
    this.firstSource = event.source;
  }

  [onDragStop]() {
    this.firstSource = null;
  }

  [onDragOver](event) {
    if (event.canceled()) {
      return;
    }
    const source = event.source || event.dragEvent.source;
    if (source === this.firstSource) {
      this.firstSource = null;
      return;
    }
    const snapInEvent = new _SnappableEvent_SnappableEvent_mjs__WEBPACK_IMPORTED_MODULE_1__.SnapInEvent({
      dragEvent: event,
      snappable: event.over || event.droppable
    });
    this.draggable.trigger(snapInEvent);
    if (snapInEvent.canceled()) {
      return;
    }
    if (this.mirror) {
      this.mirror.style.display = 'none';
    }
    source.classList.remove(...this.draggable.getClassNamesFor('source:dragging'));
    source.classList.add(...this.draggable.getClassNamesFor('source:placed'));

    setTimeout(() => {
      source.classList.remove(...this.draggable.getClassNamesFor('source:placed'));
    }, this.draggable.options.placedTimeout);
  }

  [onDragOut](event) {
    if (event.canceled()) {
      return;
    }
    const source = event.source || event.dragEvent.source;
    const snapOutEvent = new _SnappableEvent_SnappableEvent_mjs__WEBPACK_IMPORTED_MODULE_1__.SnapOutEvent({
      dragEvent: event,
      snappable: event.over || event.droppable
    });
    this.draggable.trigger(snapOutEvent);
    if (snapOutEvent.canceled()) {
      return;
    }
    if (this.mirror) {
      this.mirror.style.display = '';
    }
    source.classList.add(...this.draggable.getClassNamesFor('source:dragging'));
  }

  [onMirrorCreated]({
    mirror
  }) {
    this.mirror = mirror;
  }

  [onMirrorDestroy]() {
    this.mirror = null;
  }
}




/***/ }),

/***/ "./node_modules/@shopify/draggable/build/esm/Plugins/Snappable/SnappableEvent/SnappableEvent.mjs":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/Plugins/Snappable/SnappableEvent/SnappableEvent.mjs ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SnapEvent: () => (/* binding */ SnapEvent),
/* harmony export */   SnapInEvent: () => (/* binding */ SnapInEvent),
/* harmony export */   SnapOutEvent: () => (/* binding */ SnapOutEvent)
/* harmony export */ });
/* harmony import */ var _shared_AbstractEvent_AbstractEvent_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/AbstractEvent/AbstractEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/shared/AbstractEvent/AbstractEvent.mjs");


class SnapEvent extends _shared_AbstractEvent_AbstractEvent_mjs__WEBPACK_IMPORTED_MODULE_0__.AbstractEvent {

  get dragEvent() {
    return this.data.dragEvent;
  }

  get snappable() {
    return this.data.snappable;
  }
}

SnapEvent.type = 'snap';
class SnapInEvent extends SnapEvent {}

SnapInEvent.type = 'snap:in';
SnapInEvent.cancelable = true;
class SnapOutEvent extends SnapEvent {}
SnapOutEvent.type = 'snap:out';
SnapOutEvent.cancelable = true;




/***/ }),

/***/ "./node_modules/@shopify/draggable/build/esm/Plugins/SortAnimation/SortAnimation.mjs":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/Plugins/SortAnimation/SortAnimation.mjs ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SortAnimation),
/* harmony export */   defaultOptions: () => (/* binding */ defaultOptions)
/* harmony export */ });
/* harmony import */ var _shared_AbstractPlugin_AbstractPlugin_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/AbstractPlugin/AbstractPlugin.mjs */ "./node_modules/@shopify/draggable/build/esm/shared/AbstractPlugin/AbstractPlugin.mjs");


const onSortableSorted = Symbol('onSortableSorted');
const onSortableSort = Symbol('onSortableSort');

const defaultOptions = {
  duration: 150,
  easingFunction: 'ease-in-out'
};

class SortAnimation extends _shared_AbstractPlugin_AbstractPlugin_mjs__WEBPACK_IMPORTED_MODULE_0__.AbstractPlugin {

  constructor(draggable) {
    super(draggable);

    this.options = {
      ...defaultOptions,
      ...this.getOptions()
    };

    this.lastAnimationFrame = null;
    this.lastElements = [];
    this[onSortableSorted] = this[onSortableSorted].bind(this);
    this[onSortableSort] = this[onSortableSort].bind(this);
  }

  attach() {
    this.draggable.on('sortable:sort', this[onSortableSort]);
    this.draggable.on('sortable:sorted', this[onSortableSorted]);
  }

  detach() {
    this.draggable.off('sortable:sort', this[onSortableSort]);
    this.draggable.off('sortable:sorted', this[onSortableSorted]);
  }

  getOptions() {
    return this.draggable.options.sortAnimation || {};
  }

  [onSortableSort]({
    dragEvent
  }) {
    const {
      sourceContainer
    } = dragEvent;
    const elements = this.draggable.getDraggableElementsForContainer(sourceContainer);
    this.lastElements = Array.from(elements).map(el => {
      return {
        domEl: el,
        offsetTop: el.offsetTop,
        offsetLeft: el.offsetLeft
      };
    });
  }

  [onSortableSorted]({
    oldIndex,
    newIndex
  }) {
    if (oldIndex === newIndex) {
      return;
    }
    const effectedElements = [];
    let start;
    let end;
    let num;
    if (oldIndex > newIndex) {
      start = newIndex;
      end = oldIndex - 1;
      num = 1;
    } else {
      start = oldIndex + 1;
      end = newIndex;
      num = -1;
    }
    for (let i = start; i <= end; i++) {
      const from = this.lastElements[i];
      const to = this.lastElements[i + num];
      effectedElements.push({
        from,
        to
      });
    }
    cancelAnimationFrame(this.lastAnimationFrame);

    this.lastAnimationFrame = requestAnimationFrame(() => {
      effectedElements.forEach(element => animate(element, this.options));
    });
  }
}

function animate({
  from,
  to
}, {
  duration,
  easingFunction
}) {
  const domEl = from.domEl;
  const x = from.offsetLeft - to.offsetLeft;
  const y = from.offsetTop - to.offsetTop;
  domEl.style.pointerEvents = 'none';
  domEl.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  requestAnimationFrame(() => {
    domEl.addEventListener('transitionend', resetElementOnTransitionEnd);
    domEl.style.transition = `transform ${duration}ms ${easingFunction}`;
    domEl.style.transform = '';
  });
}

function resetElementOnTransitionEnd(event) {
  event.target.style.transition = '';
  event.target.style.pointerEvents = '';
  event.target.removeEventListener('transitionend', resetElementOnTransitionEnd);
}




/***/ }),

/***/ "./node_modules/@shopify/draggable/build/esm/Plugins/SwapAnimation/SwapAnimation.mjs":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/Plugins/SwapAnimation/SwapAnimation.mjs ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SwapAnimation),
/* harmony export */   defaultOptions: () => (/* binding */ defaultOptions)
/* harmony export */ });
/* harmony import */ var _virtual_rollupPluginBabelHelpers_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_virtual/_rollupPluginBabelHelpers.mjs */ "./node_modules/@shopify/draggable/build/esm/_virtual/_rollupPluginBabelHelpers.mjs");
/* harmony import */ var _shared_AbstractPlugin_AbstractPlugin_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/AbstractPlugin/AbstractPlugin.mjs */ "./node_modules/@shopify/draggable/build/esm/shared/AbstractPlugin/AbstractPlugin.mjs");
/* harmony import */ var _shared_utils_decorators_AutoBind_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils/decorators/AutoBind.mjs */ "./node_modules/@shopify/draggable/build/esm/shared/utils/decorators/AutoBind.mjs");




var _initProto, _class;

const defaultOptions = {
  duration: 150,
  easingFunction: 'ease-in-out',
  horizontal: false
};

class SwapAnimation extends _shared_AbstractPlugin_AbstractPlugin_mjs__WEBPACK_IMPORTED_MODULE_1__.AbstractPlugin {

  constructor(draggable) {
    _initProto(super(draggable));

    this.options = {
      ...defaultOptions,
      ...this.getOptions()
    };

    this.lastAnimationFrame = null;
  }

  attach() {
    this.draggable.on('sortable:sorted', this.onSortableSorted);
  }

  detach() {
    this.draggable.off('sortable:sorted', this.onSortableSorted);
  }

  getOptions() {
    return this.draggable.options.swapAnimation || {};
  }

  onSortableSorted({
    oldIndex,
    newIndex,
    dragEvent
  }) {
    const {
      source,
      over
    } = dragEvent;
    if (this.lastAnimationFrame) {
      cancelAnimationFrame(this.lastAnimationFrame);
    }

    this.lastAnimationFrame = requestAnimationFrame(() => {
      if (oldIndex >= newIndex) {
        animate(source, over, this.options);
      } else {
        animate(over, source, this.options);
      }
    });
  }
}

_class = SwapAnimation;
[_initProto] = (0,_virtual_rollupPluginBabelHelpers_mjs__WEBPACK_IMPORTED_MODULE_0__.applyDecs2305)(_class, [[_shared_utils_decorators_AutoBind_mjs__WEBPACK_IMPORTED_MODULE_2__.AutoBind, 2, "onSortableSorted"]], [], 0, void 0, _shared_AbstractPlugin_AbstractPlugin_mjs__WEBPACK_IMPORTED_MODULE_1__.AbstractPlugin).e;
function animate(from, to, {
  duration,
  easingFunction,
  horizontal
}) {
  for (const element of [from, to]) {
    element.style.pointerEvents = 'none';
  }
  if (horizontal) {
    const width = from.offsetWidth;
    from.style.transform = `translate3d(${width}px, 0, 0)`;
    to.style.transform = `translate3d(-${width}px, 0, 0)`;
  } else {
    const height = from.offsetHeight;
    from.style.transform = `translate3d(0, ${height}px, 0)`;
    to.style.transform = `translate3d(0, -${height}px, 0)`;
  }
  requestAnimationFrame(() => {
    for (const element of [from, to]) {
      element.addEventListener('transitionend', resetElementOnTransitionEnd);
      element.style.transition = `transform ${duration}ms ${easingFunction}`;
      element.style.transform = '';
    }
  });
}

function resetElementOnTransitionEnd(event) {
  if (event.target == null || !isHTMLElement(event.target)) {
    return;
  }
  event.target.style.transition = '';
  event.target.style.pointerEvents = '';
  event.target.removeEventListener('transitionend', resetElementOnTransitionEnd);
}
function isHTMLElement(eventTarget) {
  return Boolean('style' in eventTarget);
}




/***/ }),

/***/ "./node_modules/@shopify/draggable/build/esm/Plugins/index.mjs":
/*!*********************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/Plugins/index.mjs ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Collidable: () => (/* reexport safe */ _Collidable_Collidable_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   ResizeMirror: () => (/* reexport safe */ _ResizeMirror_ResizeMirror_mjs__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   Snappable: () => (/* reexport safe */ _Snappable_Snappable_mjs__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   SortAnimation: () => (/* reexport safe */ _SortAnimation_SortAnimation_mjs__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   SwapAnimation: () => (/* reexport safe */ _SwapAnimation_SwapAnimation_mjs__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   defaultResizeMirrorOptions: () => (/* reexport safe */ _ResizeMirror_ResizeMirror_mjs__WEBPACK_IMPORTED_MODULE_2__.defaultOptions),
/* harmony export */   defaultSortAnimationOptions: () => (/* reexport safe */ _SortAnimation_SortAnimation_mjs__WEBPACK_IMPORTED_MODULE_6__.defaultOptions),
/* harmony export */   defaultSwapAnimationOptions: () => (/* reexport safe */ _SwapAnimation_SwapAnimation_mjs__WEBPACK_IMPORTED_MODULE_5__.defaultOptions)
/* harmony export */ });
/* harmony import */ var _Collidable_Collidable_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Collidable/Collidable.mjs */ "./node_modules/@shopify/draggable/build/esm/Plugins/Collidable/Collidable.mjs");
/* harmony import */ var _Collidable_CollidableEvent_CollidableEvent_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Collidable/CollidableEvent/CollidableEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/Plugins/Collidable/CollidableEvent/CollidableEvent.mjs");
/* harmony import */ var _ResizeMirror_ResizeMirror_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ResizeMirror/ResizeMirror.mjs */ "./node_modules/@shopify/draggable/build/esm/Plugins/ResizeMirror/ResizeMirror.mjs");
/* harmony import */ var _Snappable_Snappable_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Snappable/Snappable.mjs */ "./node_modules/@shopify/draggable/build/esm/Plugins/Snappable/Snappable.mjs");
/* harmony import */ var _Snappable_SnappableEvent_SnappableEvent_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Snappable/SnappableEvent/SnappableEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/Plugins/Snappable/SnappableEvent/SnappableEvent.mjs");
/* harmony import */ var _SwapAnimation_SwapAnimation_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SwapAnimation/SwapAnimation.mjs */ "./node_modules/@shopify/draggable/build/esm/Plugins/SwapAnimation/SwapAnimation.mjs");
/* harmony import */ var _SortAnimation_SortAnimation_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SortAnimation/SortAnimation.mjs */ "./node_modules/@shopify/draggable/build/esm/Plugins/SortAnimation/SortAnimation.mjs");









/***/ }),

/***/ "./node_modules/@shopify/draggable/build/esm/Sortable/Sortable.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/Sortable/Sortable.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Sortable)
/* harmony export */ });
/* harmony import */ var _Draggable_Draggable_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Draggable/Draggable.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Draggable.mjs");
/* harmony import */ var _Draggable_DragEvent_DragEvent_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Draggable/DragEvent/DragEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/DragEvent/DragEvent.mjs");
/* harmony import */ var _Draggable_DraggableEvent_DraggableEvent_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Draggable/DraggableEvent/DraggableEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/DraggableEvent/DraggableEvent.mjs");
/* harmony import */ var _Draggable_Plugins_Announcement_Announcement_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Draggable/Plugins/Announcement/Announcement.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Plugins/Announcement/Announcement.mjs");
/* harmony import */ var _Draggable_Plugins_Mirror_MirrorEvent_MirrorEvent_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Draggable/Plugins/Mirror/MirrorEvent/MirrorEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Plugins/Mirror/MirrorEvent/MirrorEvent.mjs");
/* harmony import */ var _Draggable_Sensors_SensorEvent_SensorEvent_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Draggable/Sensors/SensorEvent/SensorEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Sensors/SensorEvent/SensorEvent.mjs");
/* harmony import */ var _Draggable_Sensors_TouchSensor_TouchSensor_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Draggable/Sensors/TouchSensor/TouchSensor.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Sensors/TouchSensor/TouchSensor.mjs");
/* harmony import */ var _SortableEvent_SortableEvent_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SortableEvent/SortableEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/Sortable/SortableEvent/SortableEvent.mjs");









const onDragStart = Symbol('onDragStart');
const onDragOverContainer = Symbol('onDragOverContainer');
const onDragOver = Symbol('onDragOver');
const onDragStop = Symbol('onDragStop');

function onSortableSortedDefaultAnnouncement({
  dragEvent
}) {
  const sourceText = dragEvent.source.textContent.trim() || dragEvent.source.id || 'sortable element';
  if (dragEvent.over) {
    const overText = dragEvent.over.textContent.trim() || dragEvent.over.id || 'sortable element';
    const isFollowing = dragEvent.source.compareDocumentPosition(dragEvent.over) & Node.DOCUMENT_POSITION_FOLLOWING;
    if (isFollowing) {
      return `Placed ${sourceText} after ${overText}`;
    } else {
      return `Placed ${sourceText} before ${overText}`;
    }
  } else {

    return `Placed ${sourceText} into a different container`;
  }
}

const defaultAnnouncements = {
  'sortable:sorted': onSortableSortedDefaultAnnouncement
};

class Sortable extends _Draggable_Draggable_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {

  constructor(containers = [], options = {}) {
    super(containers, {
      ...options,
      announcements: {
        ...defaultAnnouncements,
        ...(options.announcements || {})
      }
    });

    this.startIndex = null;

    this.startContainer = null;
    this[onDragStart] = this[onDragStart].bind(this);
    this[onDragOverContainer] = this[onDragOverContainer].bind(this);
    this[onDragOver] = this[onDragOver].bind(this);
    this[onDragStop] = this[onDragStop].bind(this);
    this.on('drag:start', this[onDragStart]).on('drag:over:container', this[onDragOverContainer]).on('drag:over', this[onDragOver]).on('drag:stop', this[onDragStop]);
  }

  destroy() {
    super.destroy();
    this.off('drag:start', this[onDragStart]).off('drag:over:container', this[onDragOverContainer]).off('drag:over', this[onDragOver]).off('drag:stop', this[onDragStop]);
  }

  index(element) {
    return this.getSortableElementsForContainer(element.parentNode).indexOf(element);
  }

  getSortableElementsForContainer(container) {
    const allSortableElements = container.querySelectorAll(this.options.draggable);
    return [...allSortableElements].filter(childElement => {
      return childElement !== this.originalSource && childElement !== this.mirror && childElement.parentNode === container;
    });
  }

  [onDragStart](event) {
    this.startContainer = event.source.parentNode;
    this.startIndex = this.index(event.source);
    const sortableStartEvent = new _SortableEvent_SortableEvent_mjs__WEBPACK_IMPORTED_MODULE_7__.SortableStartEvent({
      dragEvent: event,
      startIndex: this.startIndex,
      startContainer: this.startContainer
    });
    this.trigger(sortableStartEvent);
    if (sortableStartEvent.canceled()) {
      event.cancel();
    }
  }

  [onDragOverContainer](event) {
    if (event.canceled()) {
      return;
    }
    const {
      source,
      over,
      overContainer
    } = event;
    const oldIndex = this.index(source);
    const sortableSortEvent = new _SortableEvent_SortableEvent_mjs__WEBPACK_IMPORTED_MODULE_7__.SortableSortEvent({
      dragEvent: event,
      currentIndex: oldIndex,
      source,
      over
    });
    this.trigger(sortableSortEvent);
    if (sortableSortEvent.canceled()) {
      return;
    }
    const children = this.getSortableElementsForContainer(overContainer);
    const moves = move({
      source,
      over,
      overContainer,
      children
    });
    if (!moves) {
      return;
    }
    const {
      oldContainer,
      newContainer
    } = moves;
    const newIndex = this.index(event.source);
    const sortableSortedEvent = new _SortableEvent_SortableEvent_mjs__WEBPACK_IMPORTED_MODULE_7__.SortableSortedEvent({
      dragEvent: event,
      oldIndex,
      newIndex,
      oldContainer,
      newContainer
    });
    this.trigger(sortableSortedEvent);
  }

  [onDragOver](event) {
    if (event.over === event.originalSource || event.over === event.source) {
      return;
    }
    const {
      source,
      over,
      overContainer
    } = event;
    const oldIndex = this.index(source);
    const sortableSortEvent = new _SortableEvent_SortableEvent_mjs__WEBPACK_IMPORTED_MODULE_7__.SortableSortEvent({
      dragEvent: event,
      currentIndex: oldIndex,
      source,
      over
    });
    this.trigger(sortableSortEvent);
    if (sortableSortEvent.canceled()) {
      return;
    }
    const children = this.getDraggableElementsForContainer(overContainer);
    const moves = move({
      source,
      over,
      overContainer,
      children
    });
    if (!moves) {
      return;
    }
    const {
      oldContainer,
      newContainer
    } = moves;
    const newIndex = this.index(source);
    const sortableSortedEvent = new _SortableEvent_SortableEvent_mjs__WEBPACK_IMPORTED_MODULE_7__.SortableSortedEvent({
      dragEvent: event,
      oldIndex,
      newIndex,
      oldContainer,
      newContainer
    });
    this.trigger(sortableSortedEvent);
  }

  [onDragStop](event) {
    const sortableStopEvent = new _SortableEvent_SortableEvent_mjs__WEBPACK_IMPORTED_MODULE_7__.SortableStopEvent({
      dragEvent: event,
      oldIndex: this.startIndex,
      newIndex: this.index(event.source),
      oldContainer: this.startContainer,
      newContainer: event.source.parentNode
    });
    this.trigger(sortableStopEvent);
    this.startIndex = null;
    this.startContainer = null;
  }
}
function index(element) {
  return Array.prototype.indexOf.call(element.parentNode.children, element);
}
function move({
  source,
  over,
  overContainer,
  children
}) {
  const emptyOverContainer = !children.length;
  const differentContainer = source.parentNode !== overContainer;
  const sameContainer = over && source.parentNode === over.parentNode;
  if (emptyOverContainer) {
    return moveInsideEmptyContainer(source, overContainer);
  } else if (sameContainer) {
    return moveWithinContainer(source, over);
  } else if (differentContainer) {
    return moveOutsideContainer(source, over, overContainer);
  } else {
    return null;
  }
}
function moveInsideEmptyContainer(source, overContainer) {
  const oldContainer = source.parentNode;
  overContainer.appendChild(source);
  return {
    oldContainer,
    newContainer: overContainer
  };
}
function moveWithinContainer(source, over) {
  const oldIndex = index(source);
  const newIndex = index(over);
  if (oldIndex < newIndex) {
    source.parentNode.insertBefore(source, over.nextElementSibling);
  } else {
    source.parentNode.insertBefore(source, over);
  }
  return {
    oldContainer: source.parentNode,
    newContainer: source.parentNode
  };
}
function moveOutsideContainer(source, over, overContainer) {
  const oldContainer = source.parentNode;
  if (over) {
    over.parentNode.insertBefore(source, over);
  } else {

    overContainer.appendChild(source);
  }
  return {
    oldContainer,
    newContainer: source.parentNode
  };
}




/***/ }),

/***/ "./node_modules/@shopify/draggable/build/esm/Sortable/SortableEvent/SortableEvent.mjs":
/*!********************************************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/Sortable/SortableEvent/SortableEvent.mjs ***!
  \********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SortableEvent: () => (/* binding */ SortableEvent),
/* harmony export */   SortableSortEvent: () => (/* binding */ SortableSortEvent),
/* harmony export */   SortableSortedEvent: () => (/* binding */ SortableSortedEvent),
/* harmony export */   SortableStartEvent: () => (/* binding */ SortableStartEvent),
/* harmony export */   SortableStopEvent: () => (/* binding */ SortableStopEvent)
/* harmony export */ });
/* harmony import */ var _shared_AbstractEvent_AbstractEvent_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/AbstractEvent/AbstractEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/shared/AbstractEvent/AbstractEvent.mjs");


class SortableEvent extends _shared_AbstractEvent_AbstractEvent_mjs__WEBPACK_IMPORTED_MODULE_0__.AbstractEvent {

  constructor(data) {
    super(data);
    this.data = data;
  }

  get dragEvent() {
    return this.data.dragEvent;
  }
}
SortableEvent.type = 'sortable';

class SortableStartEvent extends SortableEvent {

  get startIndex() {
    return this.data.startIndex;
  }

  get startContainer() {
    return this.data.startContainer;
  }
}
SortableStartEvent.type = 'sortable:start';
SortableStartEvent.cancelable = true;

class SortableSortEvent extends SortableEvent {

  get currentIndex() {
    return this.data.currentIndex;
  }

  get over() {
    return this.data.over;
  }

  get overContainer() {
    return this.data.dragEvent.overContainer;
  }
}
SortableSortEvent.type = 'sortable:sort';
SortableSortEvent.cancelable = true;

class SortableSortedEvent extends SortableEvent {

  get oldIndex() {
    return this.data.oldIndex;
  }

  get newIndex() {
    return this.data.newIndex;
  }

  get oldContainer() {
    return this.data.oldContainer;
  }

  get newContainer() {
    return this.data.newContainer;
  }
}
SortableSortedEvent.type = 'sortable:sorted';

class SortableStopEvent extends SortableEvent {

  get oldIndex() {
    return this.data.oldIndex;
  }

  get newIndex() {
    return this.data.newIndex;
  }

  get oldContainer() {
    return this.data.oldContainer;
  }

  get newContainer() {
    return this.data.newContainer;
  }
}
SortableStopEvent.type = 'sortable:stop';




/***/ }),

/***/ "./node_modules/@shopify/draggable/build/esm/Swappable/Swappable.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/Swappable/Swappable.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Swappable)
/* harmony export */ });
/* harmony import */ var _Draggable_Draggable_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Draggable/Draggable.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Draggable.mjs");
/* harmony import */ var _Draggable_DragEvent_DragEvent_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Draggable/DragEvent/DragEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/DragEvent/DragEvent.mjs");
/* harmony import */ var _Draggable_DraggableEvent_DraggableEvent_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Draggable/DraggableEvent/DraggableEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/DraggableEvent/DraggableEvent.mjs");
/* harmony import */ var _Draggable_Plugins_Announcement_Announcement_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Draggable/Plugins/Announcement/Announcement.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Plugins/Announcement/Announcement.mjs");
/* harmony import */ var _Draggable_Plugins_Mirror_MirrorEvent_MirrorEvent_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Draggable/Plugins/Mirror/MirrorEvent/MirrorEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Plugins/Mirror/MirrorEvent/MirrorEvent.mjs");
/* harmony import */ var _Draggable_Sensors_SensorEvent_SensorEvent_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Draggable/Sensors/SensorEvent/SensorEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Sensors/SensorEvent/SensorEvent.mjs");
/* harmony import */ var _Draggable_Sensors_TouchSensor_TouchSensor_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Draggable/Sensors/TouchSensor/TouchSensor.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Sensors/TouchSensor/TouchSensor.mjs");
/* harmony import */ var _SwappableEvent_SwappableEvent_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SwappableEvent/SwappableEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/Swappable/SwappableEvent/SwappableEvent.mjs");









const onDragStart = Symbol('onDragStart');
const onDragOver = Symbol('onDragOver');
const onDragStop = Symbol('onDragStop');

function onSwappableSwappedDefaultAnnouncement({
  dragEvent,
  swappedElement
}) {
  const sourceText = dragEvent.source.textContent.trim() || dragEvent.source.id || 'swappable element';
  const overText = swappedElement.textContent.trim() || swappedElement.id || 'swappable element';
  return `Swapped ${sourceText} with ${overText}`;
}

const defaultAnnouncements = {
  'swappabled:swapped': onSwappableSwappedDefaultAnnouncement
};

class Swappable extends _Draggable_Draggable_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {

  constructor(containers = [], options = {}) {
    super(containers, {
      ...options,
      announcements: {
        ...defaultAnnouncements,
        ...(options.announcements || {})
      }
    });

    this.lastOver = null;
    this[onDragStart] = this[onDragStart].bind(this);
    this[onDragOver] = this[onDragOver].bind(this);
    this[onDragStop] = this[onDragStop].bind(this);
    this.on('drag:start', this[onDragStart]).on('drag:over', this[onDragOver]).on('drag:stop', this[onDragStop]);
  }

  destroy() {
    super.destroy();
    this.off('drag:start', this._onDragStart).off('drag:over', this._onDragOver).off('drag:stop', this._onDragStop);
  }

  [onDragStart](event) {
    const swappableStartEvent = new _SwappableEvent_SwappableEvent_mjs__WEBPACK_IMPORTED_MODULE_7__.SwappableStartEvent({
      dragEvent: event
    });
    this.trigger(swappableStartEvent);
    if (swappableStartEvent.canceled()) {
      event.cancel();
    }
  }

  [onDragOver](event) {
    if (event.over === event.originalSource || event.over === event.source || event.canceled()) {
      return;
    }
    const swappableSwapEvent = new _SwappableEvent_SwappableEvent_mjs__WEBPACK_IMPORTED_MODULE_7__.SwappableSwapEvent({
      dragEvent: event,
      over: event.over,
      overContainer: event.overContainer
    });
    this.trigger(swappableSwapEvent);
    if (swappableSwapEvent.canceled()) {
      return;
    }

    if (this.lastOver && this.lastOver !== event.over) {
      swap(this.lastOver, event.source);
    }
    if (this.lastOver === event.over) {
      this.lastOver = null;
    } else {
      this.lastOver = event.over;
    }
    swap(event.source, event.over);
    const swappableSwappedEvent = new _SwappableEvent_SwappableEvent_mjs__WEBPACK_IMPORTED_MODULE_7__.SwappableSwappedEvent({
      dragEvent: event,
      swappedElement: event.over
    });
    this.trigger(swappableSwappedEvent);
  }

  [onDragStop](event) {
    const swappableStopEvent = new _SwappableEvent_SwappableEvent_mjs__WEBPACK_IMPORTED_MODULE_7__.SwappableStopEvent({
      dragEvent: event
    });
    this.trigger(swappableStopEvent);
    this.lastOver = null;
  }
}
function withTempElement(callback) {
  const tmpElement = document.createElement('div');
  callback(tmpElement);
  tmpElement.remove();
}
function swap(source, over) {
  const overParent = over.parentNode;
  const sourceParent = source.parentNode;
  withTempElement(tmpElement => {
    sourceParent.insertBefore(tmpElement, source);
    overParent.insertBefore(source, over);
    sourceParent.insertBefore(over, tmpElement);
  });
}




/***/ }),

/***/ "./node_modules/@shopify/draggable/build/esm/Swappable/SwappableEvent/SwappableEvent.mjs":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/Swappable/SwappableEvent/SwappableEvent.mjs ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SwappableEvent: () => (/* binding */ SwappableEvent),
/* harmony export */   SwappableStartEvent: () => (/* binding */ SwappableStartEvent),
/* harmony export */   SwappableStopEvent: () => (/* binding */ SwappableStopEvent),
/* harmony export */   SwappableSwapEvent: () => (/* binding */ SwappableSwapEvent),
/* harmony export */   SwappableSwappedEvent: () => (/* binding */ SwappableSwappedEvent)
/* harmony export */ });
/* harmony import */ var _shared_AbstractEvent_AbstractEvent_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/AbstractEvent/AbstractEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/shared/AbstractEvent/AbstractEvent.mjs");


class SwappableEvent extends _shared_AbstractEvent_AbstractEvent_mjs__WEBPACK_IMPORTED_MODULE_0__.AbstractEvent {

  constructor(data) {
    super(data);
    this.data = data;
  }

  get dragEvent() {
    return this.data.dragEvent;
  }
}

SwappableEvent.type = 'swappable';
class SwappableStartEvent extends SwappableEvent {}
SwappableStartEvent.type = 'swappable:start';
SwappableStartEvent.cancelable = true;

class SwappableSwapEvent extends SwappableEvent {

  get over() {
    return this.data.over;
  }

  get overContainer() {
    return this.data.overContainer;
  }
}
SwappableSwapEvent.type = 'swappable:swap';
SwappableSwapEvent.cancelable = true;

class SwappableSwappedEvent extends SwappableEvent {

  get swappedElement() {
    return this.data.swappedElement;
  }
}

SwappableSwappedEvent.type = 'swappable:swapped';
class SwappableStopEvent extends SwappableEvent {}
SwappableStopEvent.type = 'swappable:stop';




/***/ }),

/***/ "./node_modules/@shopify/draggable/build/esm/_virtual/_rollupPluginBabelHelpers.mjs":
/*!******************************************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/_virtual/_rollupPluginBabelHelpers.mjs ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyDecs2305: () => (/* binding */ _applyDecs2305),
/* harmony export */   checkInRHS: () => (/* binding */ _checkInRHS)
/* harmony export */ });
function createAddInitializerMethod(e, t) {
  return function (r) {
    assertNotFinished(t, "addInitializer"), assertCallable(r, "An initializer"), e.push(r);
  };
}
function assertInstanceIfPrivate(e, t) {
  if (!e(t)) throw new TypeError("Attempted to access private element on non-instance");
}
function memberDec(e, t, r, a, n, i, s, o, c, l, u) {
  var f;
  switch (i) {
    case 1:
      f = "accessor";
      break;
    case 2:
      f = "method";
      break;
    case 3:
      f = "getter";
      break;
    case 4:
      f = "setter";
      break;
    default:
      f = "field";
  }
  var d,
    p,
    h = {
      kind: f,
      name: o ? "#" + r : r,
      static: s,
      private: o,
      metadata: u
    },
    v = {
      v: !1
    };
  if (0 !== i && (h.addInitializer = createAddInitializerMethod(n, v)), o || 0 !== i && 2 !== i) {
    if (2 === i) d = function (e) {
      return assertInstanceIfPrivate(l, e), a.value;
    };else {
      var y = 0 === i || 1 === i;
      (y || 3 === i) && (d = o ? function (e) {
        return assertInstanceIfPrivate(l, e), a.get.call(e);
      } : function (e) {
        return a.get.call(e);
      }), (y || 4 === i) && (p = o ? function (e, t) {
        assertInstanceIfPrivate(l, e), a.set.call(e, t);
      } : function (e, t) {
        a.set.call(e, t);
      });
    }
  } else d = function (e) {
    return e[r];
  }, 0 === i && (p = function (e, t) {
    e[r] = t;
  });
  var m = o ? l.bind() : function (e) {
    return r in e;
  };
  h.access = d && p ? {
    get: d,
    set: p,
    has: m
  } : d ? {
    get: d,
    has: m
  } : {
    set: p,
    has: m
  };
  try {
    return e.call(t, c, h);
  } finally {
    v.v = !0;
  }
}
function assertNotFinished(e, t) {
  if (e.v) throw new Error("attempted to call " + t + " after decoration was finished");
}
function assertCallable(e, t) {
  if ("function" != typeof e) throw new TypeError(t + " must be a function");
}
function assertValidReturnValue(e, t) {
  var r = typeof t;
  if (1 === e) {
    if ("object" !== r || null === t) throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");
    void 0 !== t.get && assertCallable(t.get, "accessor.get"), void 0 !== t.set && assertCallable(t.set, "accessor.set"), void 0 !== t.init && assertCallable(t.init, "accessor.init");
  } else if ("function" !== r) {
    var a;
    throw a = 0 === e ? "field" : 5 === e ? "class" : "method", new TypeError(a + " decorators must return a function or void 0");
  }
}
function curryThis1(e) {
  return function () {
    return e(this);
  };
}
function curryThis2(e) {
  return function (t) {
    e(this, t);
  };
}
function applyMemberDec(e, t, r, a, n, i, s, o, c, l, u) {
  var f,
    d,
    p,
    h,
    v,
    y,
    m = r[0];
  a || Array.isArray(m) || (m = [m]), o ? f = 0 === i || 1 === i ? {
    get: curryThis1(r[3]),
    set: curryThis2(r[4])
  } : 3 === i ? {
    get: r[3]
  } : 4 === i ? {
    set: r[3]
  } : {
    value: r[3]
  } : 0 !== i && (f = Object.getOwnPropertyDescriptor(t, n)), 1 === i ? p = {
    get: f.get,
    set: f.set
  } : 2 === i ? p = f.value : 3 === i ? p = f.get : 4 === i && (p = f.set);
  for (var g = a ? 2 : 1, b = m.length - 1; b >= 0; b -= g) {
    var I;
    if (void 0 !== (h = memberDec(m[b], a ? m[b - 1] : void 0, n, f, c, i, s, o, p, l, u))) assertValidReturnValue(i, h), 0 === i ? I = h : 1 === i ? (I = h.init, v = h.get || p.get, y = h.set || p.set, p = {
      get: v,
      set: y
    }) : p = h, void 0 !== I && (void 0 === d ? d = I : "function" == typeof d ? d = [d, I] : d.push(I));
  }
  if (0 === i || 1 === i) {
    if (void 0 === d) d = function (e, t) {
      return t;
    };else if ("function" != typeof d) {
      var w = d;
      d = function (e, t) {
        for (var r = t, a = w.length - 1; a >= 0; a--) r = w[a].call(e, r);
        return r;
      };
    } else {
      var M = d;
      d = function (e, t) {
        return M.call(e, t);
      };
    }
    e.push(d);
  }
  0 !== i && (1 === i ? (f.get = p.get, f.set = p.set) : 2 === i ? f.value = p : 3 === i ? f.get = p : 4 === i && (f.set = p), o ? 1 === i ? (e.push(function (e, t) {
    return p.get.call(e, t);
  }), e.push(function (e, t) {
    return p.set.call(e, t);
  })) : 2 === i ? e.push(p) : e.push(function (e, t) {
    return p.call(e, t);
  }) : Object.defineProperty(t, n, f));
}
function applyMemberDecs(e, t, r, a) {
  for (var n, i, s, o = [], c = new Map(), l = new Map(), u = 0; u < t.length; u++) {
    var f = t[u];
    if (Array.isArray(f)) {
      var d,
        p,
        h = f[1],
        v = f[2],
        y = f.length > 3,
        m = 16 & h,
        g = !!(8 & h),
        b = r;
      if (h &= 7, g ? (d = e, 0 !== h && (p = i = i || []), y && !s && (s = function (t) {
        return _checkInRHS(t) === e;
      }), b = s) : (d = e.prototype, 0 !== h && (p = n = n || [])), 0 !== h && !y) {
        var I = g ? l : c,
          w = I.get(v) || 0;
        if (!0 === w || 3 === w && 4 !== h || 4 === w && 3 !== h) throw new Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: " + v);
        I.set(v, !(!w && h > 2) || h);
      }
      applyMemberDec(o, d, f, m, v, h, g, y, p, b, a);
    }
  }
  return pushInitializers(o, n), pushInitializers(o, i), o;
}
function pushInitializers(e, t) {
  t && e.push(function (e) {
    for (var r = 0; r < t.length; r++) t[r].call(e);
    return e;
  });
}
function applyClassDecs(e, t, r, a) {
  if (t.length) {
    for (var n = [], i = e, s = e.name, o = r ? 2 : 1, c = t.length - 1; c >= 0; c -= o) {
      var l = {
        v: !1
      };
      try {
        var u = t[c].call(r ? t[c - 1] : void 0, i, {
          kind: "class",
          name: s,
          addInitializer: createAddInitializerMethod(n, l),
          metadata: a
        });
      } finally {
        l.v = !0;
      }
      void 0 !== u && (assertValidReturnValue(5, u), i = u);
    }
    return [defineMetadata(i, a), function () {
      for (var e = 0; e < n.length; e++) n[e].call(i);
    }];
  }
}
function defineMetadata(e, t) {
  return Object.defineProperty(e, Symbol.metadata || Symbol.for("Symbol.metadata"), {
    configurable: !0,
    enumerable: !0,
    value: t
  });
}
function _applyDecs2305(e, t, r, a, n, i) {
  if (arguments.length >= 6) var s = i[Symbol.metadata || Symbol.for("Symbol.metadata")];
  var o = Object.create(void 0 === s ? null : s),
    c = applyMemberDecs(e, t, n, o);
  return r.length || defineMetadata(e, o), {
    e: c,
    get c() {
      return applyClassDecs(e, r, a, o);
    }
  };
}
function _checkInRHS(e) {
  if (Object(e) !== e) throw TypeError("right-hand side of 'in' should be an object, got " + (null !== e ? typeof e : "null"));
  return e;
}




/***/ }),

/***/ "./node_modules/@shopify/draggable/build/esm/index.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/index.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseEvent: () => (/* reexport safe */ _shared_AbstractEvent_AbstractEvent_mjs__WEBPACK_IMPORTED_MODULE_0__.AbstractEvent),
/* harmony export */   BasePlugin: () => (/* reexport safe */ _shared_AbstractPlugin_AbstractPlugin_mjs__WEBPACK_IMPORTED_MODULE_1__.AbstractPlugin),
/* harmony export */   Draggable: () => (/* reexport safe */ _Draggable_Draggable_mjs__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   Droppable: () => (/* reexport safe */ _Droppable_Droppable_mjs__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   Plugins: () => (/* reexport module object */ _Plugins_index_mjs__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   Sensors: () => (/* reexport module object */ _Draggable_Sensors_index_mjs__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   Sortable: () => (/* reexport safe */ _Sortable_Sortable_mjs__WEBPACK_IMPORTED_MODULE_13__["default"]),
/* harmony export */   Swappable: () => (/* reexport safe */ _Swappable_Swappable_mjs__WEBPACK_IMPORTED_MODULE_11__["default"])
/* harmony export */ });
/* harmony import */ var _shared_AbstractEvent_AbstractEvent_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/AbstractEvent/AbstractEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/shared/AbstractEvent/AbstractEvent.mjs");
/* harmony import */ var _shared_AbstractPlugin_AbstractPlugin_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/AbstractPlugin/AbstractPlugin.mjs */ "./node_modules/@shopify/draggable/build/esm/shared/AbstractPlugin/AbstractPlugin.mjs");
/* harmony import */ var _Draggable_Sensors_index_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Draggable/Sensors/index.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Sensors/index.mjs");
/* harmony import */ var _Plugins_index_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Plugins/index.mjs */ "./node_modules/@shopify/draggable/build/esm/Plugins/index.mjs");
/* harmony import */ var _Draggable_Draggable_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Draggable/Draggable.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Draggable.mjs");
/* harmony import */ var _Draggable_DragEvent_DragEvent_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Draggable/DragEvent/DragEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/DragEvent/DragEvent.mjs");
/* harmony import */ var _Draggable_DraggableEvent_DraggableEvent_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Draggable/DraggableEvent/DraggableEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/DraggableEvent/DraggableEvent.mjs");
/* harmony import */ var _Draggable_Plugins_Announcement_Announcement_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Draggable/Plugins/Announcement/Announcement.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Plugins/Announcement/Announcement.mjs");
/* harmony import */ var _Draggable_Plugins_Mirror_MirrorEvent_MirrorEvent_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Draggable/Plugins/Mirror/MirrorEvent/MirrorEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Plugins/Mirror/MirrorEvent/MirrorEvent.mjs");
/* harmony import */ var _Droppable_Droppable_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Droppable/Droppable.mjs */ "./node_modules/@shopify/draggable/build/esm/Droppable/Droppable.mjs");
/* harmony import */ var _Droppable_DroppableEvent_DroppableEvent_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Droppable/DroppableEvent/DroppableEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/Droppable/DroppableEvent/DroppableEvent.mjs");
/* harmony import */ var _Swappable_Swappable_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Swappable/Swappable.mjs */ "./node_modules/@shopify/draggable/build/esm/Swappable/Swappable.mjs");
/* harmony import */ var _Swappable_SwappableEvent_SwappableEvent_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Swappable/SwappableEvent/SwappableEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/Swappable/SwappableEvent/SwappableEvent.mjs");
/* harmony import */ var _Sortable_Sortable_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Sortable/Sortable.mjs */ "./node_modules/@shopify/draggable/build/esm/Sortable/Sortable.mjs");
/* harmony import */ var _Sortable_SortableEvent_SortableEvent_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Sortable/SortableEvent/SortableEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/Sortable/SortableEvent/SortableEvent.mjs");



















/***/ }),

/***/ "./node_modules/@shopify/draggable/build/esm/shared/AbstractEvent/AbstractEvent.mjs":
/*!******************************************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/shared/AbstractEvent/AbstractEvent.mjs ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractEvent: () => (/* binding */ AbstractEvent)
/* harmony export */ });
class AbstractEvent {

  constructor(data) {

    this._canceled = false;
    this.data = data;
  }

  get type() {
    return this.constructor.type;
  }

  get cancelable() {
    return this.constructor.cancelable;
  }

  cancel() {
    this._canceled = true;
  }

  canceled() {
    return this._canceled;
  }

  clone(data) {
    return new this.constructor({
      ...this.data,
      ...data
    });
  }
}

AbstractEvent.type = 'event';

AbstractEvent.cancelable = false;




/***/ }),

/***/ "./node_modules/@shopify/draggable/build/esm/shared/AbstractPlugin/AbstractPlugin.mjs":
/*!********************************************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/shared/AbstractPlugin/AbstractPlugin.mjs ***!
  \********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractPlugin: () => (/* binding */ AbstractPlugin)
/* harmony export */ });
class AbstractPlugin {

  constructor(draggable) {
    this.draggable = draggable;
  }

  attach() {
    throw new Error('Not Implemented');
  }

  detach() {
    throw new Error('Not Implemented');
  }
}




/***/ }),

/***/ "./node_modules/@shopify/draggable/build/esm/shared/utils/closest/closest.mjs":
/*!************************************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/shared/utils/closest/closest.mjs ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ closest)
/* harmony export */ });
function closest(node, value) {
  if (node == null) {
    return null;
  }
  function conditionFn(currentNode) {
    if (currentNode == null || value == null) {
      return false;
    } else if (isSelector(value)) {
      return Element.prototype.matches.call(currentNode, value);
    } else if (isNodeList(value)) {
      return [...value].includes(currentNode);
    } else if (isElement(value)) {
      return value === currentNode;
    } else if (isFunction(value)) {
      return value(currentNode);
    } else {
      return false;
    }
  }
  let current = node;
  do {
    current = current.correspondingUseElement || current.correspondingElement || current;
    if (conditionFn(current)) {
      return current;
    }
    current = current?.parentNode || null;
  } while (current != null && current !== document.body && current !== document);
  return null;
}
function isSelector(value) {
  return Boolean(typeof value === 'string');
}
function isNodeList(value) {
  return Boolean(value instanceof NodeList || value instanceof Array);
}
function isElement(value) {
  return Boolean(value instanceof Node);
}
function isFunction(value) {
  return Boolean(typeof value === 'function');
}




/***/ }),

/***/ "./node_modules/@shopify/draggable/build/esm/shared/utils/decorators/AutoBind.mjs":
/*!****************************************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/shared/utils/decorators/AutoBind.mjs ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AutoBind: () => (/* binding */ AutoBind)
/* harmony export */ });
function AutoBind(originalMethod, {
  name,
  addInitializer
}) {
  addInitializer(function () {

    this[name] = originalMethod.bind(this);

  });
}




/***/ }),

/***/ "./node_modules/@shopify/draggable/build/esm/shared/utils/distance/distance.mjs":
/*!**************************************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/shared/utils/distance/distance.mjs ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ distance)
/* harmony export */ });
function distance(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}




/***/ }),

/***/ "./node_modules/@shopify/draggable/build/esm/shared/utils/requestNextAnimationFrame/requestNextAnimationFrame.mjs":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/shared/utils/requestNextAnimationFrame/requestNextAnimationFrame.mjs ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requestNextAnimationFrame)
/* harmony export */ });
function requestNextAnimationFrame(callback) {
  return requestAnimationFrame(() => {
    requestAnimationFrame(callback);
  });
}




/***/ }),

/***/ "./node_modules/@shopify/draggable/build/esm/shared/utils/touchCoords/touchCoords.mjs":
/*!********************************************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/shared/utils/touchCoords/touchCoords.mjs ***!
  \********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ touchCoords)
/* harmony export */ });
function touchCoords(event) {
  const {
    touches,
    changedTouches
  } = event;
  return touches && touches[0] || changedTouches && changedTouches[0];
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apikey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apikey.js */ "./src/js/apikey.js");
/* harmony import */ var _shopify_draggable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/draggable */ "./node_modules/@shopify/draggable/build/esm/index.mjs");




let currentCities = localStorage.getItem('cities') ? JSON.parse(localStorage.getItem('cities')) : []

currentCities.forEach(async city => {
    await CreateWeatherElements(city)
})

// Functions that fetch data
async function GetSearchData(searchQuery) {
    searchQuery = searchQuery == '' ? ' ' : searchQuery
    const response = await fetch(`https://api.weatherapi.com/v1/search.json?key=${_apikey_js__WEBPACK_IMPORTED_MODULE_0__["default"]}&q=${searchQuery}`, { mode: 'cors' });
    const cityData = await response.json();
    return cityData
}

async function GetWeatherData(searchQuery) {
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${_apikey_js__WEBPACK_IMPORTED_MODULE_0__["default"]}&q=${searchQuery}&aqi=yes&days=3`, { mode: 'cors' });
    const weatherData = await response.json();
    return weatherData;
}

async function CreateWeatherElements(searchQuery) {
    let weatherData = await GetWeatherData(searchQuery)

    AddCitiesElement({
        cityName: weatherData.location.name,
        cityRegion: weatherData.location.region,
        cityCountry: weatherData.location.country,
        cityWeather: weatherData.current.temp_c,
        cityTime: ChangeTo12HourFormat(weatherData.location.localtime.split(" ")[1]),
        cityWeatherCondition: weatherData.current.condition.text,
        cityHighTemp: weatherData.forecast["forecastday"][0].day.maxtemp_c,
        cityLowTemp: weatherData.forecast["forecastday"][0].day.mintemp_c,
    });
}

function AddCitiesElement({ cityName, cityRegion, cityCountry, cityTime, cityWeatherCondition, cityWeather, cityHighTemp, cityLowTemp }) {
    const cityElement = document.createElement('button')
    cityElement.classList.add('home-city-button')
    cityElement.setAttribute('data-city', `${cityName}${cityRegion ? ', ' + cityRegion : ''}, ${cityCountry}`)

    cityElement.addEventListener('click', () => {
        document.getElementById('weather-section').classList.add('weather-section-opened')
    })

    const cityNameElement = document.createElement('h2')
    cityNameElement.textContent = cityName
    cityNameElement.classList.add('home-city-name')

    const cityTimeElement = document.createElement('h2')
    cityTimeElement.textContent = cityTime
    cityTimeElement.classList.add('home-city-time')

    const cityWeatherConditionElement = document.createElement('h2')
    cityWeatherConditionElement.textContent = cityWeatherCondition
    cityWeatherConditionElement.classList.add('home-city-weather-condition')

    const cityWeatherElement = document.createElement('h2')
    cityWeatherElement.textContent = `${Number(cityWeather).toFixed(1)}°C`
    cityWeatherElement.classList.add('home-city-weather')

    const cityHighLowTempsElement = document.createElement('div')
    cityHighLowTempsElement.classList.add('home-city-high-low-temps')

    const cityHighTempElement = document.createElement('h2')
    cityHighTempElement.textContent = `H:${Number(cityHighTemp).toFixed(1)}°C`
    cityHighTempElement.classList.add('home-city-high-temp')

    const cityLowTempElement = document.createElement('h2')
    cityLowTempElement.textContent = `L:${Number(cityLowTemp).toFixed(1)}°C`
    cityLowTempElement.classList.add('home-city-low-temp')

    cityHighLowTempsElement.append(cityHighTempElement, cityLowTempElement)

    cityElement.append(cityNameElement, cityTimeElement, cityWeatherConditionElement, cityWeatherElement, cityHighLowTempsElement)

    document.getElementById('added-cities').appendChild(cityElement)
}

function ChangeWeatherSection(param) {
    const result = document.getElementById('result')
    result.innerHTML = param
}

// other Functions
function ChangeTo12HourFormat(timeString) {
    // Split the time string into hours and minutes
    const [hours, minutes] = timeString.split(':');

    // Convert hours to a 12-hour format
    const convertedHours = hours % 12 || 12;

    // Add AM/PM indicator
    const period = hours < 12 ? 'AM' : 'PM';

    // Return the formatted time string
    return `${convertedHours}:${minutes} ${period}`;
}

// DOM Elements
const searchBox = document.getElementById('search-box')
const searchOptions = document.getElementById('search-options')
const closeSearchIcon = document.getElementById('close-search-icon')
const editButton = document.getElementById('edit-button')
const editMenu = document.getElementById('edit-menu')
const editContextMenu = document.getElementById('edit-context-menu')
const editList = document.getElementById('edit-context-menu-edit-list')
const editMenuBackdrop = document.getElementById('edit-menu-backdrop')

editButton.addEventListener('click', () => {
    editContextMenu.classList.toggle('edit-context-menu-closed')
    editMenu.classList.toggle('edit-menu-opened')
})

editMenuBackdrop.addEventListener('click', () => {
    editContextMenu.classList.add('edit-context-menu-closed')
    editMenu.classList.remove('edit-menu-opened')
})

closeSearchIcon.addEventListener('click', () => {
    searchBox.value = ''
    searchOptions.innerHTML = ''
})

searchBox.addEventListener('focusin', () => {
    searchOptions.classList.remove('hidden')
})

searchBox.addEventListener('input', async e => {
    let searchResults = await GetSearchData(searchBox.value)
    searchOptions.innerHTML = ''
    for (let i = 0; i < searchResults.length; i++) {
        const searchOption = document.createElement('button')
        searchOption.textContent = `${searchResults[i].name}${searchResults[i].region ? ', ' + searchResults[i].region : ''}, ${searchResults[i].country}`
        searchOption.addEventListener('click', () => {
            OnSearchEnter(searchResults[i])
        })
        searchOption.addEventListener('click', e => {
            searchOptions.classList.add('hidden')
        })
        searchOptions.appendChild(searchOption)
    }
})

function OnSearchEnter(searchResults) {
    if (currentCities.includes(`${searchResults.name}${searchResults.region ? ', ' + searchResults.region : ''}, ${searchResults.country}`)) {
        return;
    }

    currentCities.push(`${searchResults.name}${searchResults.region ? ', ' + searchResults.region : ''}, ${searchResults.country}`)
    localStorage.setItem('cities', JSON.stringify(currentCities))

    CreateWeatherElements(`${searchResults.name}${searchResults.region ? ', ' + searchResults.region : ''}, ${searchResults.country}`)
}

const swappable = new _shopify_draggable__WEBPACK_IMPORTED_MODULE_1__.Swappable(document.getElementById('added-cities'), {
    draggable: 'button',
    delay: {
        mouse: 300,
        drag: 0,
        touch: 300,
    }
});

swappable.on('swappable:start', e => { });
swappable.on('swappable:swapped', e => { });
swappable.on('swappable:stop', e => {
    setTimeout(() => {
        currentCities = []
        Array.from(document.getElementById('added-cities').children).forEach(child => {
            currentCities.push(child.getAttribute('data-city'))
        });
        localStorage.setItem('cities', JSON.stringify(currentCities))
    }, 0);
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFa0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzR2dDOztBQUVuRjtBQUNBOztBQUVBOztBQUVBLHdCQUF3QixxRkFBYzs7QUFFdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWdDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkVtRDtBQUMrRTs7QUFFbEs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxRkFBYzs7QUFFbkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLDJFQUFpQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyw0RUFBa0I7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLG9DQUFvQyw2RUFBbUI7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyx5RUFBZTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixtQ0FBbUMsNEVBQWtCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsMEVBQWdCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLE9BQU87QUFDUDtBQUNBLFFBQVE7QUFDUjtBQUNBLE9BQU87QUFDUDtBQUNBLElBQUk7QUFDSjtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKLDRDQUE0QyxRQUFRO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSwwQ0FBMEMsUUFBUTtBQUNsRDtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNB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LHNCQUFzQjtBQUN6STtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbUJBQW1CLEVBQUUsd0RBQXdELElBQUksc0JBQXNCO0FBQ2pJO0FBQ0E7QUFDQSw2QkFBNkIsbUJBQW1CLEVBQUUsd0RBQXdELElBQUksc0JBQXNCO0FBQ3BJO0FBQ0E7QUFDQSxzQkFBc0IseURBQVM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esd0NBQXdDO0FBQ3hDLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMLENBQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXIvLi9zcmMvanMvYXBpa2V5LmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvZHJhZ2dhYmxlL2J1aWxkL2VzbS9EcmFnZ2FibGUvRHJhZ0V2ZW50L0RyYWdFdmVudC5tanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9Ac2hvcGlmeS9kcmFnZ2FibGUvYnVpbGQvZXNtL0RyYWdnYWJsZS9EcmFnZ2FibGUubWpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvZHJhZ2dhYmxlL2J1aWxkL2VzbS9EcmFnZ2FibGUvRHJhZ2dhYmxlRXZlbnQvRHJhZ2dhYmxlRXZlbnQubWpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvZHJhZ2dhYmxlL2J1aWxkL2VzbS9EcmFnZ2FibGUvRW1pdHRlci9FbWl0dGVyLm1qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL0BzaG9waWZ5L2RyYWdnYWJsZS9idWlsZC9lc20vRHJhZ2dhYmxlL1BsdWdpbnMvQW5ub3VuY2VtZW50L0Fubm91bmNlbWVudC5tanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9Ac2hvcGlmeS9kcmFnZ2FibGUvYnVpbGQvZXNtL0RyYWdnYWJsZS9QbHVnaW5zL0ZvY3VzYWJsZS9Gb2N1c2FibGUubWpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvZHJhZ2dhYmxlL2J1aWxkL2VzbS9EcmFnZ2FibGUvUGx1Z2lucy9NaXJyb3IvTWlycm9yLm1qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL0BzaG9waWZ5L2RyYWdnYWJsZS9idWlsZC9lc20vRHJhZ2dhYmxlL1BsdWdpbnMvTWlycm9yL01pcnJvckV2ZW50L01pcnJvckV2ZW50Lm1qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL0BzaG9waWZ5L2RyYWdnYWJsZS9idWlsZC9lc20vRHJhZ2dhYmxlL1BsdWdpbnMvU2Nyb2xsYWJsZS9TY3JvbGxhYmxlLm1qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL0BzaG9waWZ5L2RyYWdnYWJsZS9idWlsZC9lc20vRHJhZ2dhYmxlL1NlbnNvcnMvRHJhZ1NlbnNvci9EcmFnU2Vuc29yLm1qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL0BzaG9waWZ5L2RyYWdnYWJsZS9idWlsZC9lc20vRHJhZ2dhYmxlL1NlbnNvcnMvRm9yY2VUb3VjaFNlbnNvci9Gb3JjZVRvdWNoU2Vuc29yLm1qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL0BzaG9waWZ5L2RyYWdnYWJsZS9idWlsZC9lc20vRHJhZ2dhYmxlL1NlbnNvcnMvTW91c2VTZW5zb3IvTW91c2VTZW5zb3IubWpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvZHJhZ2dhYmxlL2J1aWxkL2VzbS9EcmFnZ2FibGUvU2Vuc29ycy9TZW5zb3JFdmVudC9TZW5zb3JFdmVudC5tanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9Ac2hvcGlmeS9kcmFnZ2FibGUvYnVpbGQvZXNtL0RyYWdnYWJsZS9TZW5zb3JzL1NlbnNvci9TZW5zb3IubWpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvZHJhZ2dhYmxlL2J1aWxkL2VzbS9EcmFnZ2FibGUvU2Vuc29ycy9Ub3VjaFNlbnNvci9Ub3VjaFNlbnNvci5tanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9Ac2hvcGlmeS9kcmFnZ2FibGUvYnVpbGQvZXNtL0RyYWdnYWJsZS9TZW5zb3JzL2luZGV4Lm1qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL0BzaG9waWZ5L2RyYWdnYWJsZS9idWlsZC9lc20vRHJvcHBhYmxlL0Ryb3BwYWJsZS5tanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9Ac2hvcGlmeS9kcmFnZ2FibGUvYnVpbGQvZXNtL0Ryb3BwYWJsZS9Ecm9wcGFibGVFdmVudC9Ecm9wcGFibGVFdmVudC5tanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9Ac2hvcGlmeS9kcmFnZ2FibGUvYnVpbGQvZXNtL1BsdWdpbnMvQ29sbGlkYWJsZS9Db2xsaWRhYmxlLm1qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL0BzaG9waWZ5L2RyYWdnYWJsZS9idWlsZC9lc20vUGx1Z2lucy9Db2xsaWRhYmxlL0NvbGxpZGFibGVFdmVudC9Db2xsaWRhYmxlRXZlbnQubWpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvZHJhZ2dhYmxlL2J1aWxkL2VzbS9QbHVnaW5zL1Jlc2l6ZU1pcnJvci9SZXNpemVNaXJyb3IubWpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvZHJhZ2dhYmxlL2J1aWxkL2VzbS9QbHVnaW5zL1NuYXBwYWJsZS9TbmFwcGFibGUubWpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvZHJhZ2dhYmxlL2J1aWxkL2VzbS9QbHVnaW5zL1NuYXBwYWJsZS9TbmFwcGFibGVFdmVudC9TbmFwcGFibGVFdmVudC5tanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9Ac2hvcGlmeS9kcmFnZ2FibGUvYnVpbGQvZXNtL1BsdWdpbnMvU29ydEFuaW1hdGlvbi9Tb3J0QW5pbWF0aW9uLm1qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL0BzaG9waWZ5L2RyYWdnYWJsZS9idWlsZC9lc20vUGx1Z2lucy9Td2FwQW5pbWF0aW9uL1N3YXBBbmltYXRpb24ubWpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvZHJhZ2dhYmxlL2J1aWxkL2VzbS9QbHVnaW5zL2luZGV4Lm1qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL0BzaG9waWZ5L2RyYWdnYWJsZS9idWlsZC9lc20vU29ydGFibGUvU29ydGFibGUubWpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvZHJhZ2dhYmxlL2J1aWxkL2VzbS9Tb3J0YWJsZS9Tb3J0YWJsZUV2ZW50L1NvcnRhYmxlRXZlbnQubWpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvZHJhZ2dhYmxlL2J1aWxkL2VzbS9Td2FwcGFibGUvU3dhcHBhYmxlLm1qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL0BzaG9waWZ5L2RyYWdnYWJsZS9idWlsZC9lc20vU3dhcHBhYmxlL1N3YXBwYWJsZUV2ZW50L1N3YXBwYWJsZUV2ZW50Lm1qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL0BzaG9waWZ5L2RyYWdnYWJsZS9idWlsZC9lc20vX3ZpcnR1YWwvX3JvbGx1cFBsdWdpbkJhYmVsSGVscGVycy5tanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9Ac2hvcGlmeS9kcmFnZ2FibGUvYnVpbGQvZXNtL2luZGV4Lm1qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL0BzaG9waWZ5L2RyYWdnYWJsZS9idWlsZC9lc20vc2hhcmVkL0Fic3RyYWN0RXZlbnQvQWJzdHJhY3RFdmVudC5tanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9Ac2hvcGlmeS9kcmFnZ2FibGUvYnVpbGQvZXNtL3NoYXJlZC9BYnN0cmFjdFBsdWdpbi9BYnN0cmFjdFBsdWdpbi5tanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9Ac2hvcGlmeS9kcmFnZ2FibGUvYnVpbGQvZXNtL3NoYXJlZC91dGlscy9jbG9zZXN0L2Nsb3Nlc3QubWpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvZHJhZ2dhYmxlL2J1aWxkL2VzbS9zaGFyZWQvdXRpbHMvZGVjb3JhdG9ycy9BdXRvQmluZC5tanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9Ac2hvcGlmeS9kcmFnZ2FibGUvYnVpbGQvZXNtL3NoYXJlZC91dGlscy9kaXN0YW5jZS9kaXN0YW5jZS5tanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9Ac2hvcGlmeS9kcmFnZ2FibGUvYnVpbGQvZXNtL3NoYXJlZC91dGlscy9yZXF1ZXN0TmV4dEFuaW1hdGlvbkZyYW1lL3JlcXVlc3ROZXh0QW5pbWF0aW9uRnJhbWUubWpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvZHJhZ2dhYmxlL2J1aWxkL2VzbS9zaGFyZWQvdXRpbHMvdG91Y2hDb29yZHMvdG91Y2hDb29yZHMubWpzIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2pzL3NjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBXRUFUSEVSX0FQSSA9IFwiNjI4ZmE3NTZmYjZhNDBmNTk0ODIyNTYyNzI0MTUwNlwiO1xyXG5leHBvcnQgZGVmYXVsdCBXRUFUSEVSX0FQSTtcclxuIiwiaW1wb3J0IHsgQWJzdHJhY3RFdmVudCB9IGZyb20gJy4uLy4uL3NoYXJlZC9BYnN0cmFjdEV2ZW50L0Fic3RyYWN0RXZlbnQubWpzJztcblxuY2xhc3MgRHJhZ0V2ZW50IGV4dGVuZHMgQWJzdHJhY3RFdmVudCB7XG5cbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIHN1cGVyKGRhdGEpO1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gIH1cblxuICBnZXQgc291cmNlKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEuc291cmNlO1xuICB9XG5cbiAgZ2V0IG9yaWdpbmFsU291cmNlKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEub3JpZ2luYWxTb3VyY2U7XG4gIH1cblxuICBnZXQgbWlycm9yKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEubWlycm9yO1xuICB9XG5cbiAgZ2V0IHNvdXJjZUNvbnRhaW5lcigpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLnNvdXJjZUNvbnRhaW5lcjtcbiAgfVxuXG4gIGdldCBzZW5zb3JFdmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLnNlbnNvckV2ZW50O1xuICB9XG5cbiAgZ2V0IG9yaWdpbmFsRXZlbnQoKSB7XG4gICAgaWYgKHRoaXMuc2Vuc29yRXZlbnQpIHtcbiAgICAgIHJldHVybiB0aGlzLnNlbnNvckV2ZW50Lm9yaWdpbmFsRXZlbnQ7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbkRyYWdFdmVudC50eXBlID0gJ2RyYWcnO1xuY2xhc3MgRHJhZ1N0YXJ0RXZlbnQgZXh0ZW5kcyBEcmFnRXZlbnQge31cblxuRHJhZ1N0YXJ0RXZlbnQudHlwZSA9ICdkcmFnOnN0YXJ0JztcbkRyYWdTdGFydEV2ZW50LmNhbmNlbGFibGUgPSB0cnVlO1xuY2xhc3MgRHJhZ01vdmVFdmVudCBleHRlbmRzIERyYWdFdmVudCB7fVxuXG5EcmFnTW92ZUV2ZW50LnR5cGUgPSAnZHJhZzptb3ZlJztcblxuY2xhc3MgRHJhZ092ZXJFdmVudCBleHRlbmRzIERyYWdFdmVudCB7XG5cbiAgZ2V0IG92ZXJDb250YWluZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5vdmVyQ29udGFpbmVyO1xuICB9XG5cbiAgZ2V0IG92ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5vdmVyO1xuICB9XG59XG5EcmFnT3ZlckV2ZW50LnR5cGUgPSAnZHJhZzpvdmVyJztcbkRyYWdPdmVyRXZlbnQuY2FuY2VsYWJsZSA9IHRydWU7XG5mdW5jdGlvbiBpc0RyYWdPdmVyRXZlbnQoZXZlbnQpIHtcbiAgcmV0dXJuIGV2ZW50LnR5cGUgPT09IERyYWdPdmVyRXZlbnQudHlwZTtcbn1cblxuY2xhc3MgRHJhZ091dEV2ZW50IGV4dGVuZHMgRHJhZ0V2ZW50IHtcblxuICBnZXQgb3ZlckNvbnRhaW5lcigpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLm92ZXJDb250YWluZXI7XG4gIH1cblxuICBnZXQgb3ZlcigpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLm92ZXI7XG4gIH1cbn1cblxuRHJhZ091dEV2ZW50LnR5cGUgPSAnZHJhZzpvdXQnO1xuXG5jbGFzcyBEcmFnT3ZlckNvbnRhaW5lckV2ZW50IGV4dGVuZHMgRHJhZ0V2ZW50IHtcblxuICBnZXQgb3ZlckNvbnRhaW5lcigpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLm92ZXJDb250YWluZXI7XG4gIH1cbn1cblxuRHJhZ092ZXJDb250YWluZXJFdmVudC50eXBlID0gJ2RyYWc6b3Zlcjpjb250YWluZXInO1xuXG5jbGFzcyBEcmFnT3V0Q29udGFpbmVyRXZlbnQgZXh0ZW5kcyBEcmFnRXZlbnQge1xuXG4gIGdldCBvdmVyQ29udGFpbmVyKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEub3ZlckNvbnRhaW5lcjtcbiAgfVxufVxuXG5EcmFnT3V0Q29udGFpbmVyRXZlbnQudHlwZSA9ICdkcmFnOm91dDpjb250YWluZXInO1xuXG5jbGFzcyBEcmFnUHJlc3N1cmVFdmVudCBleHRlbmRzIERyYWdFdmVudCB7XG5cbiAgZ2V0IHByZXNzdXJlKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEucHJlc3N1cmU7XG4gIH1cbn1cblxuRHJhZ1ByZXNzdXJlRXZlbnQudHlwZSA9ICdkcmFnOnByZXNzdXJlJztcbmNsYXNzIERyYWdTdG9wRXZlbnQgZXh0ZW5kcyBEcmFnRXZlbnQge31cblxuRHJhZ1N0b3BFdmVudC50eXBlID0gJ2RyYWc6c3RvcCc7XG5EcmFnU3RvcEV2ZW50LmNhbmNlbGFibGUgPSB0cnVlO1xuY2xhc3MgRHJhZ1N0b3BwZWRFdmVudCBleHRlbmRzIERyYWdFdmVudCB7fVxuRHJhZ1N0b3BwZWRFdmVudC50eXBlID0gJ2RyYWc6c3RvcHBlZCc7XG5cbmV4cG9ydCB7IERyYWdFdmVudCwgRHJhZ01vdmVFdmVudCwgRHJhZ091dENvbnRhaW5lckV2ZW50LCBEcmFnT3V0RXZlbnQsIERyYWdPdmVyQ29udGFpbmVyRXZlbnQsIERyYWdPdmVyRXZlbnQsIERyYWdQcmVzc3VyZUV2ZW50LCBEcmFnU3RhcnRFdmVudCwgRHJhZ1N0b3BFdmVudCwgRHJhZ1N0b3BwZWRFdmVudCwgaXNEcmFnT3ZlckV2ZW50IH07XG4iLCJpbXBvcnQgY2xvc2VzdCBmcm9tICcuLi9zaGFyZWQvdXRpbHMvY2xvc2VzdC9jbG9zZXN0Lm1qcyc7XG5pbXBvcnQgQW5ub3VuY2VtZW50IGZyb20gJy4vUGx1Z2lucy9Bbm5vdW5jZW1lbnQvQW5ub3VuY2VtZW50Lm1qcyc7XG5pbXBvcnQgRm9jdXNhYmxlIGZyb20gJy4vUGx1Z2lucy9Gb2N1c2FibGUvRm9jdXNhYmxlLm1qcyc7XG5pbXBvcnQgTWlycm9yIGZyb20gJy4vUGx1Z2lucy9NaXJyb3IvTWlycm9yLm1qcyc7XG5pbXBvcnQgU2Nyb2xsYWJsZSBmcm9tICcuL1BsdWdpbnMvU2Nyb2xsYWJsZS9TY3JvbGxhYmxlLm1qcyc7XG5pbXBvcnQgRW1pdHRlciBmcm9tICcuL0VtaXR0ZXIvRW1pdHRlci5tanMnO1xuaW1wb3J0IE1vdXNlU2Vuc29yIGZyb20gJy4vU2Vuc29ycy9Nb3VzZVNlbnNvci9Nb3VzZVNlbnNvci5tanMnO1xuaW1wb3J0IFRvdWNoU2Vuc29yIGZyb20gJy4vU2Vuc29ycy9Ub3VjaFNlbnNvci9Ub3VjaFNlbnNvci5tanMnO1xuaW1wb3J0ICcuL1NlbnNvcnMvU2Vuc29yRXZlbnQvU2Vuc29yRXZlbnQubWpzJztcbmltcG9ydCB7IERyYWdnYWJsZUluaXRpYWxpemVkRXZlbnQsIERyYWdnYWJsZURlc3Ryb3lFdmVudCB9IGZyb20gJy4vRHJhZ2dhYmxlRXZlbnQvRHJhZ2dhYmxlRXZlbnQubWpzJztcbmltcG9ydCB7IERyYWdTdGFydEV2ZW50LCBEcmFnTW92ZUV2ZW50LCBEcmFnT3V0RXZlbnQsIERyYWdPdXRDb250YWluZXJFdmVudCwgRHJhZ092ZXJDb250YWluZXJFdmVudCwgRHJhZ092ZXJFdmVudCwgRHJhZ1N0b3BFdmVudCwgRHJhZ1N0b3BwZWRFdmVudCwgRHJhZ1ByZXNzdXJlRXZlbnQgfSBmcm9tICcuL0RyYWdFdmVudC9EcmFnRXZlbnQubWpzJztcblxuY29uc3Qgb25EcmFnU3RhcnQgPSBTeW1ib2woJ29uRHJhZ1N0YXJ0Jyk7XG5jb25zdCBvbkRyYWdNb3ZlID0gU3ltYm9sKCdvbkRyYWdNb3ZlJyk7XG5jb25zdCBvbkRyYWdTdG9wID0gU3ltYm9sKCdvbkRyYWdTdG9wJyk7XG5jb25zdCBvbkRyYWdQcmVzc3VyZSA9IFN5bWJvbCgnb25EcmFnUHJlc3N1cmUnKTtcbmNvbnN0IGRyYWdTdG9wID0gU3ltYm9sKCdkcmFnU3RvcCcpO1xuXG5jb25zdCBkZWZhdWx0QW5ub3VuY2VtZW50cyA9IHtcbiAgJ2RyYWc6c3RhcnQnOiBldmVudCA9PiBgUGlja2VkIHVwICR7ZXZlbnQuc291cmNlLnRleHRDb250ZW50LnRyaW0oKSB8fCBldmVudC5zb3VyY2UuaWQgfHwgJ2RyYWdnYWJsZSBlbGVtZW50J31gLFxuICAnZHJhZzpzdG9wJzogZXZlbnQgPT4gYFJlbGVhc2VkICR7ZXZlbnQuc291cmNlLnRleHRDb250ZW50LnRyaW0oKSB8fCBldmVudC5zb3VyY2UuaWQgfHwgJ2RyYWdnYWJsZSBlbGVtZW50J31gXG59O1xuY29uc3QgZGVmYXVsdENsYXNzZXMgPSB7XG4gICdjb250YWluZXI6ZHJhZ2dpbmcnOiAnZHJhZ2dhYmxlLWNvbnRhaW5lci0taXMtZHJhZ2dpbmcnLFxuICAnc291cmNlOmRyYWdnaW5nJzogJ2RyYWdnYWJsZS1zb3VyY2UtLWlzLWRyYWdnaW5nJyxcbiAgJ3NvdXJjZTpwbGFjZWQnOiAnZHJhZ2dhYmxlLXNvdXJjZS0tcGxhY2VkJyxcbiAgJ2NvbnRhaW5lcjpwbGFjZWQnOiAnZHJhZ2dhYmxlLWNvbnRhaW5lci0tcGxhY2VkJyxcbiAgJ2JvZHk6ZHJhZ2dpbmcnOiAnZHJhZ2dhYmxlLS1pcy1kcmFnZ2luZycsXG4gICdkcmFnZ2FibGU6b3Zlcic6ICdkcmFnZ2FibGUtLW92ZXInLFxuICAnY29udGFpbmVyOm92ZXInOiAnZHJhZ2dhYmxlLWNvbnRhaW5lci0tb3ZlcicsXG4gICdzb3VyY2U6b3JpZ2luYWwnOiAnZHJhZ2dhYmxlLS1vcmlnaW5hbCcsXG4gIG1pcnJvcjogJ2RyYWdnYWJsZS1taXJyb3InXG59O1xuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gIGRyYWdnYWJsZTogJy5kcmFnZ2FibGUtc291cmNlJyxcbiAgaGFuZGxlOiBudWxsLFxuICBkZWxheToge30sXG4gIGRpc3RhbmNlOiAwLFxuICBwbGFjZWRUaW1lb3V0OiA4MDAsXG4gIHBsdWdpbnM6IFtdLFxuICBzZW5zb3JzOiBbXSxcbiAgZXhjbHVkZToge1xuICAgIHBsdWdpbnM6IFtdLFxuICAgIHNlbnNvcnM6IFtdXG4gIH1cbn07XG5cbmNsYXNzIERyYWdnYWJsZSB7XG5cbiAgY29uc3RydWN0b3IoY29udGFpbmVycyA9IFtkb2N1bWVudC5ib2R5XSwgb3B0aW9ucyA9IHt9KSB7XG5cbiAgICBpZiAoY29udGFpbmVycyBpbnN0YW5jZW9mIE5vZGVMaXN0IHx8IGNvbnRhaW5lcnMgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgdGhpcy5jb250YWluZXJzID0gWy4uLmNvbnRhaW5lcnNdO1xuICAgIH0gZWxzZSBpZiAoY29udGFpbmVycyBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICB0aGlzLmNvbnRhaW5lcnMgPSBbY29udGFpbmVyc107XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRHJhZ2dhYmxlIGNvbnRhaW5lcnMgYXJlIGV4cGVjdGVkIHRvIGJlIG9mIHR5cGUgYE5vZGVMaXN0YCwgYEhUTUxFbGVtZW50W11gIG9yIGBIVE1MRWxlbWVudGAnKTtcbiAgICB9XG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgLi4uZGVmYXVsdE9wdGlvbnMsXG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgY2xhc3Nlczoge1xuICAgICAgICAuLi5kZWZhdWx0Q2xhc3NlcyxcbiAgICAgICAgLi4uKG9wdGlvbnMuY2xhc3NlcyB8fCB7fSlcbiAgICAgIH0sXG4gICAgICBhbm5vdW5jZW1lbnRzOiB7XG4gICAgICAgIC4uLmRlZmF1bHRBbm5vdW5jZW1lbnRzLFxuICAgICAgICAuLi4ob3B0aW9ucy5hbm5vdW5jZW1lbnRzIHx8IHt9KVxuICAgICAgfSxcbiAgICAgIGV4Y2x1ZGU6IHtcbiAgICAgICAgcGx1Z2luczogb3B0aW9ucy5leGNsdWRlICYmIG9wdGlvbnMuZXhjbHVkZS5wbHVnaW5zIHx8IFtdLFxuICAgICAgICBzZW5zb3JzOiBvcHRpb25zLmV4Y2x1ZGUgJiYgb3B0aW9ucy5leGNsdWRlLnNlbnNvcnMgfHwgW11cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5lbWl0dGVyID0gbmV3IEVtaXR0ZXIoKTtcblxuICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcblxuICAgIHRoaXMucGx1Z2lucyA9IFtdO1xuXG4gICAgdGhpcy5zZW5zb3JzID0gW107XG4gICAgdGhpc1tvbkRyYWdTdGFydF0gPSB0aGlzW29uRHJhZ1N0YXJ0XS5iaW5kKHRoaXMpO1xuICAgIHRoaXNbb25EcmFnTW92ZV0gPSB0aGlzW29uRHJhZ01vdmVdLmJpbmQodGhpcyk7XG4gICAgdGhpc1tvbkRyYWdTdG9wXSA9IHRoaXNbb25EcmFnU3RvcF0uYmluZCh0aGlzKTtcbiAgICB0aGlzW29uRHJhZ1ByZXNzdXJlXSA9IHRoaXNbb25EcmFnUHJlc3N1cmVdLmJpbmQodGhpcyk7XG4gICAgdGhpc1tkcmFnU3RvcF0gPSB0aGlzW2RyYWdTdG9wXS5iaW5kKHRoaXMpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWc6c3RhcnQnLCB0aGlzW29uRHJhZ1N0YXJ0XSwgdHJ1ZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZzptb3ZlJywgdGhpc1tvbkRyYWdNb3ZlXSwgdHJ1ZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZzpzdG9wJywgdGhpc1tvbkRyYWdTdG9wXSwgdHJ1ZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZzpwcmVzc3VyZScsIHRoaXNbb25EcmFnUHJlc3N1cmVdLCB0cnVlKTtcbiAgICBjb25zdCBkZWZhdWx0UGx1Z2lucyA9IE9iamVjdC52YWx1ZXMoRHJhZ2dhYmxlLlBsdWdpbnMpLmZpbHRlcihQbHVnaW4gPT4gIXRoaXMub3B0aW9ucy5leGNsdWRlLnBsdWdpbnMuaW5jbHVkZXMoUGx1Z2luKSk7XG4gICAgY29uc3QgZGVmYXVsdFNlbnNvcnMgPSBPYmplY3QudmFsdWVzKERyYWdnYWJsZS5TZW5zb3JzKS5maWx0ZXIoc2Vuc29yID0+ICF0aGlzLm9wdGlvbnMuZXhjbHVkZS5zZW5zb3JzLmluY2x1ZGVzKHNlbnNvcikpO1xuICAgIHRoaXMuYWRkUGx1Z2luKC4uLlsuLi5kZWZhdWx0UGx1Z2lucywgLi4udGhpcy5vcHRpb25zLnBsdWdpbnNdKTtcbiAgICB0aGlzLmFkZFNlbnNvciguLi5bLi4uZGVmYXVsdFNlbnNvcnMsIC4uLnRoaXMub3B0aW9ucy5zZW5zb3JzXSk7XG4gICAgY29uc3QgZHJhZ2dhYmxlSW5pdGlhbGl6ZWRFdmVudCA9IG5ldyBEcmFnZ2FibGVJbml0aWFsaXplZEV2ZW50KHtcbiAgICAgIGRyYWdnYWJsZTogdGhpc1xuICAgIH0pO1xuICAgIHRoaXMub24oJ21pcnJvcjpjcmVhdGVkJywgKHtcbiAgICAgIG1pcnJvclxuICAgIH0pID0+IHRoaXMubWlycm9yID0gbWlycm9yKTtcbiAgICB0aGlzLm9uKCdtaXJyb3I6ZGVzdHJveScsICgpID0+IHRoaXMubWlycm9yID0gbnVsbCk7XG4gICAgdGhpcy50cmlnZ2VyKGRyYWdnYWJsZUluaXRpYWxpemVkRXZlbnQpO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnOnN0YXJ0JywgdGhpc1tvbkRyYWdTdGFydF0sIHRydWUpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWc6bW92ZScsIHRoaXNbb25EcmFnTW92ZV0sIHRydWUpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWc6c3RvcCcsIHRoaXNbb25EcmFnU3RvcF0sIHRydWUpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWc6cHJlc3N1cmUnLCB0aGlzW29uRHJhZ1ByZXNzdXJlXSwgdHJ1ZSk7XG4gICAgY29uc3QgZHJhZ2dhYmxlRGVzdHJveUV2ZW50ID0gbmV3IERyYWdnYWJsZURlc3Ryb3lFdmVudCh7XG4gICAgICBkcmFnZ2FibGU6IHRoaXNcbiAgICB9KTtcbiAgICB0aGlzLnRyaWdnZXIoZHJhZ2dhYmxlRGVzdHJveUV2ZW50KTtcbiAgICB0aGlzLnJlbW92ZVBsdWdpbiguLi50aGlzLnBsdWdpbnMubWFwKHBsdWdpbiA9PiBwbHVnaW4uY29uc3RydWN0b3IpKTtcbiAgICB0aGlzLnJlbW92ZVNlbnNvciguLi50aGlzLnNlbnNvcnMubWFwKHNlbnNvciA9PiBzZW5zb3IuY29uc3RydWN0b3IpKTtcbiAgfVxuXG4gIGFkZFBsdWdpbiguLi5wbHVnaW5zKSB7XG4gICAgY29uc3QgYWN0aXZlUGx1Z2lucyA9IHBsdWdpbnMubWFwKFBsdWdpbiA9PiBuZXcgUGx1Z2luKHRoaXMpKTtcbiAgICBhY3RpdmVQbHVnaW5zLmZvckVhY2gocGx1Z2luID0+IHBsdWdpbi5hdHRhY2goKSk7XG4gICAgdGhpcy5wbHVnaW5zID0gWy4uLnRoaXMucGx1Z2lucywgLi4uYWN0aXZlUGx1Z2luc107XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZW1vdmVQbHVnaW4oLi4ucGx1Z2lucykge1xuICAgIGNvbnN0IHJlbW92ZWRQbHVnaW5zID0gdGhpcy5wbHVnaW5zLmZpbHRlcihwbHVnaW4gPT4gcGx1Z2lucy5pbmNsdWRlcyhwbHVnaW4uY29uc3RydWN0b3IpKTtcbiAgICByZW1vdmVkUGx1Z2lucy5mb3JFYWNoKHBsdWdpbiA9PiBwbHVnaW4uZGV0YWNoKCkpO1xuICAgIHRoaXMucGx1Z2lucyA9IHRoaXMucGx1Z2lucy5maWx0ZXIocGx1Z2luID0+ICFwbHVnaW5zLmluY2x1ZGVzKHBsdWdpbi5jb25zdHJ1Y3RvcikpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYWRkU2Vuc29yKC4uLnNlbnNvcnMpIHtcbiAgICBjb25zdCBhY3RpdmVTZW5zb3JzID0gc2Vuc29ycy5tYXAoU2Vuc29yID0+IG5ldyBTZW5zb3IodGhpcy5jb250YWluZXJzLCB0aGlzLm9wdGlvbnMpKTtcbiAgICBhY3RpdmVTZW5zb3JzLmZvckVhY2goc2Vuc29yID0+IHNlbnNvci5hdHRhY2goKSk7XG4gICAgdGhpcy5zZW5zb3JzID0gWy4uLnRoaXMuc2Vuc29ycywgLi4uYWN0aXZlU2Vuc29yc107XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZW1vdmVTZW5zb3IoLi4uc2Vuc29ycykge1xuICAgIGNvbnN0IHJlbW92ZWRTZW5zb3JzID0gdGhpcy5zZW5zb3JzLmZpbHRlcihzZW5zb3IgPT4gc2Vuc29ycy5pbmNsdWRlcyhzZW5zb3IuY29uc3RydWN0b3IpKTtcbiAgICByZW1vdmVkU2Vuc29ycy5mb3JFYWNoKHNlbnNvciA9PiBzZW5zb3IuZGV0YWNoKCkpO1xuICAgIHRoaXMuc2Vuc29ycyA9IHRoaXMuc2Vuc29ycy5maWx0ZXIoc2Vuc29yID0+ICFzZW5zb3JzLmluY2x1ZGVzKHNlbnNvci5jb25zdHJ1Y3RvcikpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYWRkQ29udGFpbmVyKC4uLmNvbnRhaW5lcnMpIHtcbiAgICB0aGlzLmNvbnRhaW5lcnMgPSBbLi4udGhpcy5jb250YWluZXJzLCAuLi5jb250YWluZXJzXTtcbiAgICB0aGlzLnNlbnNvcnMuZm9yRWFjaChzZW5zb3IgPT4gc2Vuc29yLmFkZENvbnRhaW5lciguLi5jb250YWluZXJzKSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZW1vdmVDb250YWluZXIoLi4uY29udGFpbmVycykge1xuICAgIHRoaXMuY29udGFpbmVycyA9IHRoaXMuY29udGFpbmVycy5maWx0ZXIoY29udGFpbmVyID0+ICFjb250YWluZXJzLmluY2x1ZGVzKGNvbnRhaW5lcikpO1xuICAgIHRoaXMuc2Vuc29ycy5mb3JFYWNoKHNlbnNvciA9PiBzZW5zb3IucmVtb3ZlQ29udGFpbmVyKC4uLmNvbnRhaW5lcnMpKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG9uKHR5cGUsIC4uLmNhbGxiYWNrcykge1xuICAgIHRoaXMuZW1pdHRlci5vbih0eXBlLCAuLi5jYWxsYmFja3MpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgb2ZmKHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy5lbWl0dGVyLm9mZih0eXBlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB0cmlnZ2VyKGV2ZW50KSB7XG4gICAgdGhpcy5lbWl0dGVyLnRyaWdnZXIoZXZlbnQpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0Q2xhc3NOYW1lRm9yKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDbGFzc05hbWVzRm9yKG5hbWUpWzBdO1xuICB9XG5cbiAgZ2V0Q2xhc3NOYW1lc0ZvcihuYW1lKSB7XG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IHRoaXMub3B0aW9ucy5jbGFzc2VzW25hbWVdO1xuICAgIGlmIChjbGFzc05hbWVzIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgIHJldHVybiBjbGFzc05hbWVzO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNsYXNzTmFtZXMgPT09ICdzdHJpbmcnIHx8IGNsYXNzTmFtZXMgaW5zdGFuY2VvZiBTdHJpbmcpIHtcbiAgICAgIHJldHVybiBbY2xhc3NOYW1lc107XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH1cblxuICBpc0RyYWdnaW5nKCkge1xuICAgIHJldHVybiBCb29sZWFuKHRoaXMuZHJhZ2dpbmcpO1xuICB9XG5cbiAgZ2V0RHJhZ2dhYmxlRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGFpbmVycy5yZWR1Y2UoKGN1cnJlbnQsIGNvbnRhaW5lcikgPT4ge1xuICAgICAgcmV0dXJuIFsuLi5jdXJyZW50LCAuLi50aGlzLmdldERyYWdnYWJsZUVsZW1lbnRzRm9yQ29udGFpbmVyKGNvbnRhaW5lcildO1xuICAgIH0sIFtdKTtcbiAgfVxuXG4gIGdldERyYWdnYWJsZUVsZW1lbnRzRm9yQ29udGFpbmVyKGNvbnRhaW5lcikge1xuICAgIGNvbnN0IGFsbERyYWdnYWJsZUVsZW1lbnRzID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5vcHRpb25zLmRyYWdnYWJsZSk7XG4gICAgcmV0dXJuIFsuLi5hbGxEcmFnZ2FibGVFbGVtZW50c10uZmlsdGVyKGNoaWxkRWxlbWVudCA9PiB7XG4gICAgICByZXR1cm4gY2hpbGRFbGVtZW50ICE9PSB0aGlzLm9yaWdpbmFsU291cmNlICYmIGNoaWxkRWxlbWVudCAhPT0gdGhpcy5taXJyb3I7XG4gICAgfSk7XG4gIH1cblxuICBjYW5jZWwoKSB7XG4gICAgdGhpc1tkcmFnU3RvcF0oKTtcbiAgfVxuXG4gIFtvbkRyYWdTdGFydF0oZXZlbnQpIHtcbiAgICBjb25zdCBzZW5zb3JFdmVudCA9IGdldFNlbnNvckV2ZW50KGV2ZW50KTtcbiAgICBjb25zdCB7XG4gICAgICB0YXJnZXQsXG4gICAgICBjb250YWluZXIsXG4gICAgICBvcmlnaW5hbFNvdXJjZVxuICAgIH0gPSBzZW5zb3JFdmVudDtcbiAgICBpZiAoIXRoaXMuY29udGFpbmVycy5pbmNsdWRlcyhjb250YWluZXIpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLm9wdGlvbnMuaGFuZGxlICYmIHRhcmdldCAmJiAhY2xvc2VzdCh0YXJnZXQsIHRoaXMub3B0aW9ucy5oYW5kbGUpKSB7XG4gICAgICBzZW5zb3JFdmVudC5jYW5jZWwoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5vcmlnaW5hbFNvdXJjZSA9IG9yaWdpbmFsU291cmNlO1xuICAgIHRoaXMuc291cmNlQ29udGFpbmVyID0gY29udGFpbmVyO1xuICAgIGlmICh0aGlzLmxhc3RQbGFjZWRTb3VyY2UgJiYgdGhpcy5sYXN0UGxhY2VkQ29udGFpbmVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5wbGFjZWRUaW1lb3V0SUQpO1xuICAgICAgdGhpcy5sYXN0UGxhY2VkU291cmNlLmNsYXNzTGlzdC5yZW1vdmUoLi4udGhpcy5nZXRDbGFzc05hbWVzRm9yKCdzb3VyY2U6cGxhY2VkJykpO1xuICAgICAgdGhpcy5sYXN0UGxhY2VkQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoLi4udGhpcy5nZXRDbGFzc05hbWVzRm9yKCdjb250YWluZXI6cGxhY2VkJykpO1xuICAgIH1cbiAgICB0aGlzLnNvdXJjZSA9IHRoaXMub3JpZ2luYWxTb3VyY2UuY2xvbmVOb2RlKHRydWUpO1xuICAgIHRoaXMub3JpZ2luYWxTb3VyY2UucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpcy5zb3VyY2UsIHRoaXMub3JpZ2luYWxTb3VyY2UpO1xuICAgIHRoaXMub3JpZ2luYWxTb3VyY2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBjb25zdCBkcmFnU3RhcnRFdmVudCA9IG5ldyBEcmFnU3RhcnRFdmVudCh7XG4gICAgICBzb3VyY2U6IHRoaXMuc291cmNlLFxuICAgICAgb3JpZ2luYWxTb3VyY2U6IHRoaXMub3JpZ2luYWxTb3VyY2UsXG4gICAgICBzb3VyY2VDb250YWluZXI6IGNvbnRhaW5lcixcbiAgICAgIHNlbnNvckV2ZW50XG4gICAgfSk7XG4gICAgdGhpcy50cmlnZ2VyKGRyYWdTdGFydEV2ZW50KTtcbiAgICB0aGlzLmRyYWdnaW5nID0gIWRyYWdTdGFydEV2ZW50LmNhbmNlbGVkKCk7XG4gICAgaWYgKGRyYWdTdGFydEV2ZW50LmNhbmNlbGVkKCkpIHtcbiAgICAgIHRoaXMuc291cmNlLnJlbW92ZSgpO1xuICAgICAgdGhpcy5vcmlnaW5hbFNvdXJjZS5zdHlsZS5kaXNwbGF5ID0gbnVsbDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5vcmlnaW5hbFNvdXJjZS5jbGFzc0xpc3QuYWRkKC4uLnRoaXMuZ2V0Q2xhc3NOYW1lc0Zvcignc291cmNlOm9yaWdpbmFsJykpO1xuICAgIHRoaXMuc291cmNlLmNsYXNzTGlzdC5hZGQoLi4udGhpcy5nZXRDbGFzc05hbWVzRm9yKCdzb3VyY2U6ZHJhZ2dpbmcnKSk7XG4gICAgdGhpcy5zb3VyY2VDb250YWluZXIuY2xhc3NMaXN0LmFkZCguLi50aGlzLmdldENsYXNzTmFtZXNGb3IoJ2NvbnRhaW5lcjpkcmFnZ2luZycpKTtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoLi4udGhpcy5nZXRDbGFzc05hbWVzRm9yKCdib2R5OmRyYWdnaW5nJykpO1xuICAgIGFwcGx5VXNlclNlbGVjdChkb2N1bWVudC5ib2R5LCAnbm9uZScpO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICBjb25zdCBvbGRTZW5zb3JFdmVudCA9IGdldFNlbnNvckV2ZW50KGV2ZW50KTtcbiAgICAgIGNvbnN0IG5ld1NlbnNvckV2ZW50ID0gb2xkU2Vuc29yRXZlbnQuY2xvbmUoe1xuICAgICAgICB0YXJnZXQ6IHRoaXMuc291cmNlXG4gICAgICB9KTtcbiAgICAgIHRoaXNbb25EcmFnTW92ZV0oe1xuICAgICAgICAuLi5ldmVudCxcbiAgICAgICAgZGV0YWlsOiBuZXdTZW5zb3JFdmVudFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBbb25EcmFnTW92ZV0oZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuZHJhZ2dpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc2Vuc29yRXZlbnQgPSBnZXRTZW5zb3JFdmVudChldmVudCk7XG4gICAgY29uc3Qge1xuICAgICAgY29udGFpbmVyXG4gICAgfSA9IHNlbnNvckV2ZW50O1xuICAgIGxldCB0YXJnZXQgPSBzZW5zb3JFdmVudC50YXJnZXQ7XG4gICAgY29uc3QgZHJhZ01vdmVFdmVudCA9IG5ldyBEcmFnTW92ZUV2ZW50KHtcbiAgICAgIHNvdXJjZTogdGhpcy5zb3VyY2UsXG4gICAgICBvcmlnaW5hbFNvdXJjZTogdGhpcy5vcmlnaW5hbFNvdXJjZSxcbiAgICAgIHNvdXJjZUNvbnRhaW5lcjogY29udGFpbmVyLFxuICAgICAgc2Vuc29yRXZlbnRcbiAgICB9KTtcbiAgICB0aGlzLnRyaWdnZXIoZHJhZ01vdmVFdmVudCk7XG4gICAgaWYgKGRyYWdNb3ZlRXZlbnQuY2FuY2VsZWQoKSkge1xuICAgICAgc2Vuc29yRXZlbnQuY2FuY2VsKCk7XG4gICAgfVxuICAgIHRhcmdldCA9IGNsb3Nlc3QodGFyZ2V0LCB0aGlzLm9wdGlvbnMuZHJhZ2dhYmxlKTtcbiAgICBjb25zdCB3aXRoaW5Db3JyZWN0Q29udGFpbmVyID0gY2xvc2VzdChzZW5zb3JFdmVudC50YXJnZXQsIHRoaXMuY29udGFpbmVycyk7XG4gICAgY29uc3Qgb3ZlckNvbnRhaW5lciA9IHNlbnNvckV2ZW50Lm92ZXJDb250YWluZXIgfHwgd2l0aGluQ29ycmVjdENvbnRhaW5lcjtcbiAgICBjb25zdCBpc0xlYXZpbmdDb250YWluZXIgPSB0aGlzLmN1cnJlbnRPdmVyQ29udGFpbmVyICYmIG92ZXJDb250YWluZXIgIT09IHRoaXMuY3VycmVudE92ZXJDb250YWluZXI7XG4gICAgY29uc3QgaXNMZWF2aW5nRHJhZ2dhYmxlID0gdGhpcy5jdXJyZW50T3ZlciAmJiB0YXJnZXQgIT09IHRoaXMuY3VycmVudE92ZXI7XG4gICAgY29uc3QgaXNPdmVyQ29udGFpbmVyID0gb3ZlckNvbnRhaW5lciAmJiB0aGlzLmN1cnJlbnRPdmVyQ29udGFpbmVyICE9PSBvdmVyQ29udGFpbmVyO1xuICAgIGNvbnN0IGlzT3ZlckRyYWdnYWJsZSA9IHdpdGhpbkNvcnJlY3RDb250YWluZXIgJiYgdGFyZ2V0ICYmIHRoaXMuY3VycmVudE92ZXIgIT09IHRhcmdldDtcbiAgICBpZiAoaXNMZWF2aW5nRHJhZ2dhYmxlKSB7XG4gICAgICBjb25zdCBkcmFnT3V0RXZlbnQgPSBuZXcgRHJhZ091dEV2ZW50KHtcbiAgICAgICAgc291cmNlOiB0aGlzLnNvdXJjZSxcbiAgICAgICAgb3JpZ2luYWxTb3VyY2U6IHRoaXMub3JpZ2luYWxTb3VyY2UsXG4gICAgICAgIHNvdXJjZUNvbnRhaW5lcjogY29udGFpbmVyLFxuICAgICAgICBzZW5zb3JFdmVudCxcbiAgICAgICAgb3ZlcjogdGhpcy5jdXJyZW50T3ZlcixcbiAgICAgICAgb3ZlckNvbnRhaW5lcjogdGhpcy5jdXJyZW50T3ZlckNvbnRhaW5lclxuICAgICAgfSk7XG4gICAgICB0aGlzLmN1cnJlbnRPdmVyLmNsYXNzTGlzdC5yZW1vdmUoLi4udGhpcy5nZXRDbGFzc05hbWVzRm9yKCdkcmFnZ2FibGU6b3ZlcicpKTtcbiAgICAgIHRoaXMuY3VycmVudE92ZXIgPSBudWxsO1xuICAgICAgdGhpcy50cmlnZ2VyKGRyYWdPdXRFdmVudCk7XG4gICAgfVxuICAgIGlmIChpc0xlYXZpbmdDb250YWluZXIpIHtcbiAgICAgIGNvbnN0IGRyYWdPdXRDb250YWluZXJFdmVudCA9IG5ldyBEcmFnT3V0Q29udGFpbmVyRXZlbnQoe1xuICAgICAgICBzb3VyY2U6IHRoaXMuc291cmNlLFxuICAgICAgICBvcmlnaW5hbFNvdXJjZTogdGhpcy5vcmlnaW5hbFNvdXJjZSxcbiAgICAgICAgc291cmNlQ29udGFpbmVyOiBjb250YWluZXIsXG4gICAgICAgIHNlbnNvckV2ZW50LFxuICAgICAgICBvdmVyQ29udGFpbmVyOiB0aGlzLmN1cnJlbnRPdmVyQ29udGFpbmVyXG4gICAgICB9KTtcbiAgICAgIHRoaXMuY3VycmVudE92ZXJDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSguLi50aGlzLmdldENsYXNzTmFtZXNGb3IoJ2NvbnRhaW5lcjpvdmVyJykpO1xuICAgICAgdGhpcy5jdXJyZW50T3ZlckNvbnRhaW5lciA9IG51bGw7XG4gICAgICB0aGlzLnRyaWdnZXIoZHJhZ091dENvbnRhaW5lckV2ZW50KTtcbiAgICB9XG4gICAgaWYgKGlzT3ZlckNvbnRhaW5lcikge1xuICAgICAgb3ZlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKC4uLnRoaXMuZ2V0Q2xhc3NOYW1lc0ZvcignY29udGFpbmVyOm92ZXInKSk7XG4gICAgICBjb25zdCBkcmFnT3ZlckNvbnRhaW5lckV2ZW50ID0gbmV3IERyYWdPdmVyQ29udGFpbmVyRXZlbnQoe1xuICAgICAgICBzb3VyY2U6IHRoaXMuc291cmNlLFxuICAgICAgICBvcmlnaW5hbFNvdXJjZTogdGhpcy5vcmlnaW5hbFNvdXJjZSxcbiAgICAgICAgc291cmNlQ29udGFpbmVyOiBjb250YWluZXIsXG4gICAgICAgIHNlbnNvckV2ZW50LFxuICAgICAgICBvdmVyQ29udGFpbmVyXG4gICAgICB9KTtcbiAgICAgIHRoaXMuY3VycmVudE92ZXJDb250YWluZXIgPSBvdmVyQ29udGFpbmVyO1xuICAgICAgdGhpcy50cmlnZ2VyKGRyYWdPdmVyQ29udGFpbmVyRXZlbnQpO1xuICAgIH1cbiAgICBpZiAoaXNPdmVyRHJhZ2dhYmxlKSB7XG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCguLi50aGlzLmdldENsYXNzTmFtZXNGb3IoJ2RyYWdnYWJsZTpvdmVyJykpO1xuICAgICAgY29uc3QgZHJhZ092ZXJFdmVudCA9IG5ldyBEcmFnT3ZlckV2ZW50KHtcbiAgICAgICAgc291cmNlOiB0aGlzLnNvdXJjZSxcbiAgICAgICAgb3JpZ2luYWxTb3VyY2U6IHRoaXMub3JpZ2luYWxTb3VyY2UsXG4gICAgICAgIHNvdXJjZUNvbnRhaW5lcjogY29udGFpbmVyLFxuICAgICAgICBzZW5zb3JFdmVudCxcbiAgICAgICAgb3ZlckNvbnRhaW5lcixcbiAgICAgICAgb3ZlcjogdGFyZ2V0XG4gICAgICB9KTtcbiAgICAgIHRoaXMuY3VycmVudE92ZXIgPSB0YXJnZXQ7XG4gICAgICB0aGlzLnRyaWdnZXIoZHJhZ092ZXJFdmVudCk7XG4gICAgfVxuICB9XG5cbiAgW2RyYWdTdG9wXShldmVudCkge1xuICAgIGlmICghdGhpcy5kcmFnZ2luZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG4gICAgY29uc3QgZHJhZ1N0b3BFdmVudCA9IG5ldyBEcmFnU3RvcEV2ZW50KHtcbiAgICAgIHNvdXJjZTogdGhpcy5zb3VyY2UsXG4gICAgICBvcmlnaW5hbFNvdXJjZTogdGhpcy5vcmlnaW5hbFNvdXJjZSxcbiAgICAgIHNlbnNvckV2ZW50OiBldmVudCA/IGV2ZW50LnNlbnNvckV2ZW50IDogbnVsbCxcbiAgICAgIHNvdXJjZUNvbnRhaW5lcjogdGhpcy5zb3VyY2VDb250YWluZXJcbiAgICB9KTtcbiAgICB0aGlzLnRyaWdnZXIoZHJhZ1N0b3BFdmVudCk7XG4gICAgaWYgKCFkcmFnU3RvcEV2ZW50LmNhbmNlbGVkKCkpIHRoaXMuc291cmNlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMub3JpZ2luYWxTb3VyY2UsIHRoaXMuc291cmNlKTtcbiAgICB0aGlzLnNvdXJjZS5yZW1vdmUoKTtcbiAgICB0aGlzLm9yaWdpbmFsU291cmNlLnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICB0aGlzLnNvdXJjZS5jbGFzc0xpc3QucmVtb3ZlKC4uLnRoaXMuZ2V0Q2xhc3NOYW1lc0Zvcignc291cmNlOmRyYWdnaW5nJykpO1xuICAgIHRoaXMub3JpZ2luYWxTb3VyY2UuY2xhc3NMaXN0LnJlbW92ZSguLi50aGlzLmdldENsYXNzTmFtZXNGb3IoJ3NvdXJjZTpvcmlnaW5hbCcpKTtcbiAgICB0aGlzLm9yaWdpbmFsU291cmNlLmNsYXNzTGlzdC5hZGQoLi4udGhpcy5nZXRDbGFzc05hbWVzRm9yKCdzb3VyY2U6cGxhY2VkJykpO1xuICAgIHRoaXMuc291cmNlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoLi4udGhpcy5nZXRDbGFzc05hbWVzRm9yKCdjb250YWluZXI6cGxhY2VkJykpO1xuICAgIHRoaXMuc291cmNlQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoLi4udGhpcy5nZXRDbGFzc05hbWVzRm9yKCdjb250YWluZXI6ZHJhZ2dpbmcnKSk7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKC4uLnRoaXMuZ2V0Q2xhc3NOYW1lc0ZvcignYm9keTpkcmFnZ2luZycpKTtcbiAgICBhcHBseVVzZXJTZWxlY3QoZG9jdW1lbnQuYm9keSwgJycpO1xuICAgIGlmICh0aGlzLmN1cnJlbnRPdmVyKSB7XG4gICAgICB0aGlzLmN1cnJlbnRPdmVyLmNsYXNzTGlzdC5yZW1vdmUoLi4udGhpcy5nZXRDbGFzc05hbWVzRm9yKCdkcmFnZ2FibGU6b3ZlcicpKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY3VycmVudE92ZXJDb250YWluZXIpIHtcbiAgICAgIHRoaXMuY3VycmVudE92ZXJDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSguLi50aGlzLmdldENsYXNzTmFtZXNGb3IoJ2NvbnRhaW5lcjpvdmVyJykpO1xuICAgIH1cbiAgICB0aGlzLmxhc3RQbGFjZWRTb3VyY2UgPSB0aGlzLm9yaWdpbmFsU291cmNlO1xuICAgIHRoaXMubGFzdFBsYWNlZENvbnRhaW5lciA9IHRoaXMuc291cmNlQ29udGFpbmVyO1xuICAgIHRoaXMucGxhY2VkVGltZW91dElEID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5sYXN0UGxhY2VkU291cmNlKSB7XG4gICAgICAgIHRoaXMubGFzdFBsYWNlZFNvdXJjZS5jbGFzc0xpc3QucmVtb3ZlKC4uLnRoaXMuZ2V0Q2xhc3NOYW1lc0Zvcignc291cmNlOnBsYWNlZCcpKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmxhc3RQbGFjZWRDb250YWluZXIpIHtcbiAgICAgICAgdGhpcy5sYXN0UGxhY2VkQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoLi4udGhpcy5nZXRDbGFzc05hbWVzRm9yKCdjb250YWluZXI6cGxhY2VkJykpO1xuICAgICAgfVxuICAgICAgdGhpcy5sYXN0UGxhY2VkU291cmNlID0gbnVsbDtcbiAgICAgIHRoaXMubGFzdFBsYWNlZENvbnRhaW5lciA9IG51bGw7XG4gICAgfSwgdGhpcy5vcHRpb25zLnBsYWNlZFRpbWVvdXQpO1xuICAgIGNvbnN0IGRyYWdTdG9wcGVkRXZlbnQgPSBuZXcgRHJhZ1N0b3BwZWRFdmVudCh7XG4gICAgICBzb3VyY2U6IHRoaXMuc291cmNlLFxuICAgICAgb3JpZ2luYWxTb3VyY2U6IHRoaXMub3JpZ2luYWxTb3VyY2UsXG4gICAgICBzZW5zb3JFdmVudDogZXZlbnQgPyBldmVudC5zZW5zb3JFdmVudCA6IG51bGwsXG4gICAgICBzb3VyY2VDb250YWluZXI6IHRoaXMuc291cmNlQ29udGFpbmVyXG4gICAgfSk7XG4gICAgdGhpcy50cmlnZ2VyKGRyYWdTdG9wcGVkRXZlbnQpO1xuICAgIHRoaXMuc291cmNlID0gbnVsbDtcbiAgICB0aGlzLm9yaWdpbmFsU291cmNlID0gbnVsbDtcbiAgICB0aGlzLmN1cnJlbnRPdmVyQ29udGFpbmVyID0gbnVsbDtcbiAgICB0aGlzLmN1cnJlbnRPdmVyID0gbnVsbDtcbiAgICB0aGlzLnNvdXJjZUNvbnRhaW5lciA9IG51bGw7XG4gIH1cblxuICBbb25EcmFnU3RvcF0oZXZlbnQpIHtcbiAgICB0aGlzW2RyYWdTdG9wXShldmVudCk7XG4gIH1cblxuICBbb25EcmFnUHJlc3N1cmVdKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmRyYWdnaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHNlbnNvckV2ZW50ID0gZ2V0U2Vuc29yRXZlbnQoZXZlbnQpO1xuICAgIGNvbnN0IHNvdXJjZSA9IHRoaXMuc291cmNlIHx8IGNsb3Nlc3Qoc2Vuc29yRXZlbnQub3JpZ2luYWxFdmVudC50YXJnZXQsIHRoaXMub3B0aW9ucy5kcmFnZ2FibGUpO1xuICAgIGNvbnN0IGRyYWdQcmVzc3VyZUV2ZW50ID0gbmV3IERyYWdQcmVzc3VyZUV2ZW50KHtcbiAgICAgIHNlbnNvckV2ZW50LFxuICAgICAgc291cmNlLFxuICAgICAgcHJlc3N1cmU6IHNlbnNvckV2ZW50LnByZXNzdXJlXG4gICAgfSk7XG4gICAgdGhpcy50cmlnZ2VyKGRyYWdQcmVzc3VyZUV2ZW50KTtcbiAgfVxufVxuXG5EcmFnZ2FibGUuUGx1Z2lucyA9IHtcbiAgQW5ub3VuY2VtZW50LFxuICBGb2N1c2FibGUsXG4gIE1pcnJvcixcbiAgU2Nyb2xsYWJsZVxufTtcblxuRHJhZ2dhYmxlLlNlbnNvcnMgPSB7XG4gIE1vdXNlU2Vuc29yLFxuICBUb3VjaFNlbnNvclxufTtcbmZ1bmN0aW9uIGdldFNlbnNvckV2ZW50KGV2ZW50KSB7XG4gIHJldHVybiBldmVudC5kZXRhaWw7XG59XG5mdW5jdGlvbiBhcHBseVVzZXJTZWxlY3QoZWxlbWVudCwgdmFsdWUpIHtcbiAgZWxlbWVudC5zdHlsZS53ZWJraXRVc2VyU2VsZWN0ID0gdmFsdWU7XG4gIGVsZW1lbnQuc3R5bGUubW96VXNlclNlbGVjdCA9IHZhbHVlO1xuICBlbGVtZW50LnN0eWxlLm1zVXNlclNlbGVjdCA9IHZhbHVlO1xuICBlbGVtZW50LnN0eWxlLm9Vc2VyU2VsZWN0ID0gdmFsdWU7XG4gIGVsZW1lbnQuc3R5bGUudXNlclNlbGVjdCA9IHZhbHVlO1xufVxuXG5leHBvcnQgeyBEcmFnZ2FibGUgYXMgZGVmYXVsdCwgZGVmYXVsdE9wdGlvbnMgfTtcbiIsImltcG9ydCB7IEFic3RyYWN0RXZlbnQgfSBmcm9tICcuLi8uLi9zaGFyZWQvQWJzdHJhY3RFdmVudC9BYnN0cmFjdEV2ZW50Lm1qcyc7XG5cbmNsYXNzIERyYWdnYWJsZUV2ZW50IGV4dGVuZHMgQWJzdHJhY3RFdmVudCB7XG5cbiAgZ2V0IGRyYWdnYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLmRyYWdnYWJsZTtcbiAgfVxufVxuXG5EcmFnZ2FibGVFdmVudC50eXBlID0gJ2RyYWdnYWJsZSc7XG5jbGFzcyBEcmFnZ2FibGVJbml0aWFsaXplZEV2ZW50IGV4dGVuZHMgRHJhZ2dhYmxlRXZlbnQge31cblxuRHJhZ2dhYmxlSW5pdGlhbGl6ZWRFdmVudC50eXBlID0gJ2RyYWdnYWJsZTppbml0aWFsaXplJztcbmNsYXNzIERyYWdnYWJsZURlc3Ryb3lFdmVudCBleHRlbmRzIERyYWdnYWJsZUV2ZW50IHt9XG5EcmFnZ2FibGVEZXN0cm95RXZlbnQudHlwZSA9ICdkcmFnZ2FibGU6ZGVzdHJveSc7XG5cbmV4cG9ydCB7IERyYWdnYWJsZURlc3Ryb3lFdmVudCwgRHJhZ2dhYmxlRXZlbnQsIERyYWdnYWJsZUluaXRpYWxpemVkRXZlbnQgfTtcbiIsImNsYXNzIEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNhbGxiYWNrcyA9IHt9O1xuICB9XG5cbiAgb24odHlwZSwgLi4uY2FsbGJhY2tzKSB7XG4gICAgaWYgKCF0aGlzLmNhbGxiYWNrc1t0eXBlXSkge1xuICAgICAgdGhpcy5jYWxsYmFja3NbdHlwZV0gPSBbXTtcbiAgICB9XG4gICAgdGhpcy5jYWxsYmFja3NbdHlwZV0ucHVzaCguLi5jYWxsYmFja3MpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgb2ZmKHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgaWYgKCF0aGlzLmNhbGxiYWNrc1t0eXBlXSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IGNvcHkgPSB0aGlzLmNhbGxiYWNrc1t0eXBlXS5zbGljZSgwKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvcHkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChjYWxsYmFjayA9PT0gY29weVtpXSkge1xuICAgICAgICB0aGlzLmNhbGxiYWNrc1t0eXBlXS5zcGxpY2UoaSwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdHJpZ2dlcihldmVudCkge1xuICAgIGlmICghdGhpcy5jYWxsYmFja3NbZXZlbnQudHlwZV0pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBjYWxsYmFja3MgPSBbLi4udGhpcy5jYWxsYmFja3NbZXZlbnQudHlwZV1dO1xuICAgIGNvbnN0IGNhdWdodEVycm9ycyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSBjYWxsYmFja3MubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IGNhbGxiYWNrID0gY2FsbGJhY2tzW2ldO1xuICAgICAgdHJ5IHtcbiAgICAgICAgY2FsbGJhY2soZXZlbnQpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY2F1Z2h0RXJyb3JzLnB1c2goZXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoY2F1Z2h0RXJyb3JzLmxlbmd0aCkge1xuXG4gICAgICBjb25zb2xlLmVycm9yKGBEcmFnZ2FibGUgY2F1Z2h0IGVycm9ycyB3aGlsZSB0cmlnZ2VyaW5nICcke2V2ZW50LnR5cGV9J2AsIGNhdWdodEVycm9ycyk7XG5cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5leHBvcnQgeyBFbWl0dGVyIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCB7IEFic3RyYWN0UGx1Z2luIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL0Fic3RyYWN0UGx1Z2luL0Fic3RyYWN0UGx1Z2luLm1qcyc7XG5cbmNvbnN0IG9uSW5pdGlhbGl6ZSA9IFN5bWJvbCgnb25Jbml0aWFsaXplJyk7XG5jb25zdCBvbkRlc3Ryb3kgPSBTeW1ib2woJ29uRGVzdHJveScpO1xuY29uc3QgYW5ub3VuY2VFdmVudCA9IFN5bWJvbCgnYW5ub3VuY2VFdmVudCcpO1xuY29uc3QgYW5ub3VuY2VNZXNzYWdlID0gU3ltYm9sKCdhbm5vdW5jZU1lc3NhZ2UnKTtcbmNvbnN0IEFSSUFfUkVMRVZBTlQgPSAnYXJpYS1yZWxldmFudCc7XG5jb25zdCBBUklBX0FUT01JQyA9ICdhcmlhLWF0b21pYyc7XG5jb25zdCBBUklBX0xJVkUgPSAnYXJpYS1saXZlJztcbmNvbnN0IFJPTEUgPSAncm9sZSc7XG5cbmNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICBleHBpcmU6IDcwMDBcbn07XG5cbmNsYXNzIEFubm91bmNlbWVudCBleHRlbmRzIEFic3RyYWN0UGx1Z2luIHtcblxuICBjb25zdHJ1Y3RvcihkcmFnZ2FibGUpIHtcbiAgICBzdXBlcihkcmFnZ2FibGUpO1xuXG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgLi4uZGVmYXVsdE9wdGlvbnMsXG4gICAgICAuLi50aGlzLmdldE9wdGlvbnMoKVxuICAgIH07XG5cbiAgICB0aGlzLm9yaWdpbmFsVHJpZ2dlck1ldGhvZCA9IHRoaXMuZHJhZ2dhYmxlLnRyaWdnZXI7XG4gICAgdGhpc1tvbkluaXRpYWxpemVdID0gdGhpc1tvbkluaXRpYWxpemVdLmJpbmQodGhpcyk7XG4gICAgdGhpc1tvbkRlc3Ryb3ldID0gdGhpc1tvbkRlc3Ryb3ldLmJpbmQodGhpcyk7XG4gIH1cblxuICBhdHRhY2goKSB7XG4gICAgdGhpcy5kcmFnZ2FibGUub24oJ2RyYWdnYWJsZTppbml0aWFsaXplJywgdGhpc1tvbkluaXRpYWxpemVdKTtcbiAgfVxuXG4gIGRldGFjaCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZS5vZmYoJ2RyYWdnYWJsZTpkZXN0cm95JywgdGhpc1tvbkRlc3Ryb3ldKTtcbiAgfVxuXG4gIGdldE9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlLm9wdGlvbnMuYW5ub3VuY2VtZW50cyB8fCB7fTtcbiAgfVxuXG4gIFthbm5vdW5jZUV2ZW50XShldmVudCkge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB0aGlzLm9wdGlvbnNbZXZlbnQudHlwZV07XG4gICAgaWYgKG1lc3NhZ2UgJiYgdHlwZW9mIG1lc3NhZ2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzW2Fubm91bmNlTWVzc2FnZV0obWVzc2FnZSk7XG4gICAgfVxuICAgIGlmIChtZXNzYWdlICYmIHR5cGVvZiBtZXNzYWdlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzW2Fubm91bmNlTWVzc2FnZV0obWVzc2FnZShldmVudCkpO1xuICAgIH1cbiAgfVxuXG4gIFthbm5vdW5jZU1lc3NhZ2VdKG1lc3NhZ2UpIHtcbiAgICBhbm5vdW5jZShtZXNzYWdlLCB7XG4gICAgICBleHBpcmU6IHRoaXMub3B0aW9ucy5leHBpcmVcbiAgICB9KTtcbiAgfVxuXG4gIFtvbkluaXRpYWxpemVdKCkge1xuXG4gICAgdGhpcy5kcmFnZ2FibGUudHJpZ2dlciA9IGV2ZW50ID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXNbYW5ub3VuY2VFdmVudF0oZXZlbnQpO1xuICAgICAgfSBmaW5hbGx5IHtcblxuICAgICAgICB0aGlzLm9yaWdpbmFsVHJpZ2dlck1ldGhvZC5jYWxsKHRoaXMuZHJhZ2dhYmxlLCBldmVudCk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIFtvbkRlc3Ryb3ldKCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlLnRyaWdnZXIgPSB0aGlzLm9yaWdpbmFsVHJpZ2dlck1ldGhvZDtcbiAgfVxufVxuXG5jb25zdCBsaXZlUmVnaW9uID0gY3JlYXRlUmVnaW9uKCk7XG5cbmZ1bmN0aW9uIGFubm91bmNlKG1lc3NhZ2UsIHtcbiAgZXhwaXJlXG59KSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZWxlbWVudC50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XG4gIGxpdmVSZWdpb24uYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gIHJldHVybiBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBsaXZlUmVnaW9uLnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuICB9LCBleHBpcmUpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVSZWdpb24oKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RyYWdnYWJsZS1saXZlLXJlZ2lvbicpO1xuICBlbGVtZW50LnNldEF0dHJpYnV0ZShBUklBX1JFTEVWQU5ULCAnYWRkaXRpb25zJyk7XG4gIGVsZW1lbnQuc2V0QXR0cmlidXRlKEFSSUFfQVRPTUlDLCAndHJ1ZScpO1xuICBlbGVtZW50LnNldEF0dHJpYnV0ZShBUklBX0xJVkUsICdhc3NlcnRpdmUnKTtcbiAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoUk9MRSwgJ2xvZycpO1xuICBlbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgZWxlbWVudC5zdHlsZS53aWR0aCA9ICcxcHgnO1xuICBlbGVtZW50LnN0eWxlLmhlaWdodCA9ICcxcHgnO1xuICBlbGVtZW50LnN0eWxlLnRvcCA9ICctMXB4JztcbiAgZWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaXZlUmVnaW9uKTtcbn0pO1xuXG5leHBvcnQgeyBBbm5vdW5jZW1lbnQgYXMgZGVmYXVsdCwgZGVmYXVsdE9wdGlvbnMgfTtcbiIsImltcG9ydCB7IEFic3RyYWN0UGx1Z2luIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL0Fic3RyYWN0UGx1Z2luL0Fic3RyYWN0UGx1Z2luLm1qcyc7XG5cbmNvbnN0IG9uSW5pdGlhbGl6ZSA9IFN5bWJvbCgnb25Jbml0aWFsaXplJyk7XG5jb25zdCBvbkRlc3Ryb3kgPSBTeW1ib2woJ29uRGVzdHJveScpO1xuXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuXG5jbGFzcyBGb2N1c2FibGUgZXh0ZW5kcyBBYnN0cmFjdFBsdWdpbiB7XG5cbiAgY29uc3RydWN0b3IoZHJhZ2dhYmxlKSB7XG4gICAgc3VwZXIoZHJhZ2dhYmxlKTtcblxuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIC4uLmRlZmF1bHRPcHRpb25zLFxuICAgICAgLi4udGhpcy5nZXRPcHRpb25zKClcbiAgICB9O1xuICAgIHRoaXNbb25Jbml0aWFsaXplXSA9IHRoaXNbb25Jbml0aWFsaXplXS5iaW5kKHRoaXMpO1xuICAgIHRoaXNbb25EZXN0cm95XSA9IHRoaXNbb25EZXN0cm95XS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgYXR0YWNoKCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlLm9uKCdkcmFnZ2FibGU6aW5pdGlhbGl6ZScsIHRoaXNbb25Jbml0aWFsaXplXSkub24oJ2RyYWdnYWJsZTpkZXN0cm95JywgdGhpc1tvbkRlc3Ryb3ldKTtcbiAgfVxuXG4gIGRldGFjaCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZS5vZmYoJ2RyYWdnYWJsZTppbml0aWFsaXplJywgdGhpc1tvbkluaXRpYWxpemVdKS5vZmYoJ2RyYWdnYWJsZTpkZXN0cm95JywgdGhpc1tvbkRlc3Ryb3ldKTtcblxuICAgIHRoaXNbb25EZXN0cm95XSgpO1xuICB9XG5cbiAgZ2V0T3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5kcmFnZ2FibGUub3B0aW9ucy5mb2N1c2FibGUgfHwge307XG4gIH1cblxuICBnZXRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gWy4uLnRoaXMuZHJhZ2dhYmxlLmNvbnRhaW5lcnMsIC4uLnRoaXMuZHJhZ2dhYmxlLmdldERyYWdnYWJsZUVsZW1lbnRzKCldO1xuICB9XG5cbiAgW29uSW5pdGlhbGl6ZV0oKSB7XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy5nZXRFbGVtZW50cygpLmZvckVhY2goZWxlbWVudCA9PiBkZWNvcmF0ZUVsZW1lbnQoZWxlbWVudCkpO1xuICAgIH0pO1xuICB9XG5cbiAgW29uRGVzdHJveV0oKSB7XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy5nZXRFbGVtZW50cygpLmZvckVhY2goZWxlbWVudCA9PiBzdHJpcEVsZW1lbnQoZWxlbWVudCkpO1xuICAgIH0pO1xuICB9XG59XG5cbmNvbnN0IGVsZW1lbnRzV2l0aE1pc3NpbmdUYWJJbmRleCA9IFtdO1xuXG5mdW5jdGlvbiBkZWNvcmF0ZUVsZW1lbnQoZWxlbWVudCkge1xuICBjb25zdCBoYXNNaXNzaW5nVGFiSW5kZXggPSBCb29sZWFuKCFlbGVtZW50LmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKSAmJiBlbGVtZW50LnRhYkluZGV4ID09PSAtMSk7XG4gIGlmIChoYXNNaXNzaW5nVGFiSW5kZXgpIHtcbiAgICBlbGVtZW50c1dpdGhNaXNzaW5nVGFiSW5kZXgucHVzaChlbGVtZW50KTtcbiAgICBlbGVtZW50LnRhYkluZGV4ID0gMDtcbiAgfVxufVxuXG5mdW5jdGlvbiBzdHJpcEVsZW1lbnQoZWxlbWVudCkge1xuICBjb25zdCB0YWJJbmRleEVsZW1lbnRQb3NpdGlvbiA9IGVsZW1lbnRzV2l0aE1pc3NpbmdUYWJJbmRleC5pbmRleE9mKGVsZW1lbnQpO1xuICBpZiAodGFiSW5kZXhFbGVtZW50UG9zaXRpb24gIT09IC0xKSB7XG4gICAgZWxlbWVudC50YWJJbmRleCA9IC0xO1xuICAgIGVsZW1lbnRzV2l0aE1pc3NpbmdUYWJJbmRleC5zcGxpY2UodGFiSW5kZXhFbGVtZW50UG9zaXRpb24sIDEpO1xuICB9XG59XG5cbmV4cG9ydCB7IEZvY3VzYWJsZSBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgeyBBYnN0cmFjdFBsdWdpbiB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9BYnN0cmFjdFBsdWdpbi9BYnN0cmFjdFBsdWdpbi5tanMnO1xuaW1wb3J0IHsgTWlycm9yQ3JlYXRlRXZlbnQsIE1pcnJvckNyZWF0ZWRFdmVudCwgTWlycm9yQXR0YWNoZWRFdmVudCwgTWlycm9yTW92ZUV2ZW50LCBNaXJyb3JEZXN0cm95RXZlbnQsIE1pcnJvck1vdmVkRXZlbnQgfSBmcm9tICcuL01pcnJvckV2ZW50L01pcnJvckV2ZW50Lm1qcyc7XG5cbmNvbnN0IG9uRHJhZ1N0YXJ0ID0gU3ltYm9sKCdvbkRyYWdTdGFydCcpO1xuY29uc3Qgb25EcmFnTW92ZSA9IFN5bWJvbCgnb25EcmFnTW92ZScpO1xuY29uc3Qgb25EcmFnU3RvcCA9IFN5bWJvbCgnb25EcmFnU3RvcCcpO1xuY29uc3Qgb25NaXJyb3JDcmVhdGVkID0gU3ltYm9sKCdvbk1pcnJvckNyZWF0ZWQnKTtcbmNvbnN0IG9uTWlycm9yTW92ZSA9IFN5bWJvbCgnb25NaXJyb3JNb3ZlJyk7XG5jb25zdCBvblNjcm9sbCA9IFN5bWJvbCgnb25TY3JvbGwnKTtcbmNvbnN0IGdldEFwcGVuZGFibGVDb250YWluZXIgPSBTeW1ib2woJ2dldEFwcGVuZGFibGVDb250YWluZXInKTtcblxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gIGNvbnN0cmFpbkRpbWVuc2lvbnM6IGZhbHNlLFxuICB4QXhpczogdHJ1ZSxcbiAgeUF4aXM6IHRydWUsXG4gIGN1cnNvck9mZnNldFg6IG51bGwsXG4gIGN1cnNvck9mZnNldFk6IG51bGwsXG4gIHRocmVzaG9sZFg6IG51bGwsXG4gIHRocmVzaG9sZFk6IG51bGxcbn07XG5cbmNsYXNzIE1pcnJvciBleHRlbmRzIEFic3RyYWN0UGx1Z2luIHtcblxuICBjb25zdHJ1Y3RvcihkcmFnZ2FibGUpIHtcbiAgICBzdXBlcihkcmFnZ2FibGUpO1xuXG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgLi4uZGVmYXVsdE9wdGlvbnMsXG4gICAgICAuLi50aGlzLmdldE9wdGlvbnMoKVxuICAgIH07XG5cbiAgICB0aGlzLnNjcm9sbE9mZnNldCA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwXG4gICAgfTtcblxuICAgIHRoaXMuaW5pdGlhbFNjcm9sbE9mZnNldCA9IHtcbiAgICAgIHg6IHdpbmRvdy5zY3JvbGxYLFxuICAgICAgeTogd2luZG93LnNjcm9sbFlcbiAgICB9O1xuICAgIHRoaXNbb25EcmFnU3RhcnRdID0gdGhpc1tvbkRyYWdTdGFydF0uYmluZCh0aGlzKTtcbiAgICB0aGlzW29uRHJhZ01vdmVdID0gdGhpc1tvbkRyYWdNb3ZlXS5iaW5kKHRoaXMpO1xuICAgIHRoaXNbb25EcmFnU3RvcF0gPSB0aGlzW29uRHJhZ1N0b3BdLmJpbmQodGhpcyk7XG4gICAgdGhpc1tvbk1pcnJvckNyZWF0ZWRdID0gdGhpc1tvbk1pcnJvckNyZWF0ZWRdLmJpbmQodGhpcyk7XG4gICAgdGhpc1tvbk1pcnJvck1vdmVdID0gdGhpc1tvbk1pcnJvck1vdmVdLmJpbmQodGhpcyk7XG4gICAgdGhpc1tvblNjcm9sbF0gPSB0aGlzW29uU2Nyb2xsXS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgYXR0YWNoKCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlLm9uKCdkcmFnOnN0YXJ0JywgdGhpc1tvbkRyYWdTdGFydF0pLm9uKCdkcmFnOm1vdmUnLCB0aGlzW29uRHJhZ01vdmVdKS5vbignZHJhZzpzdG9wJywgdGhpc1tvbkRyYWdTdG9wXSkub24oJ21pcnJvcjpjcmVhdGVkJywgdGhpc1tvbk1pcnJvckNyZWF0ZWRdKS5vbignbWlycm9yOm1vdmUnLCB0aGlzW29uTWlycm9yTW92ZV0pO1xuICB9XG5cbiAgZGV0YWNoKCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlLm9mZignZHJhZzpzdGFydCcsIHRoaXNbb25EcmFnU3RhcnRdKS5vZmYoJ2RyYWc6bW92ZScsIHRoaXNbb25EcmFnTW92ZV0pLm9mZignZHJhZzpzdG9wJywgdGhpc1tvbkRyYWdTdG9wXSkub2ZmKCdtaXJyb3I6Y3JlYXRlZCcsIHRoaXNbb25NaXJyb3JDcmVhdGVkXSkub2ZmKCdtaXJyb3I6bW92ZScsIHRoaXNbb25NaXJyb3JNb3ZlXSk7XG4gIH1cblxuICBnZXRPcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRyYWdnYWJsZS5vcHRpb25zLm1pcnJvciB8fCB7fTtcbiAgfVxuICBbb25EcmFnU3RhcnRdKGRyYWdFdmVudCkge1xuICAgIGlmIChkcmFnRXZlbnQuY2FuY2VsZWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gd2luZG93KSB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzW29uU2Nyb2xsXSwgdHJ1ZSk7XG4gICAgfVxuICAgIHRoaXMuaW5pdGlhbFNjcm9sbE9mZnNldCA9IHtcbiAgICAgIHg6IHdpbmRvdy5zY3JvbGxYLFxuICAgICAgeTogd2luZG93LnNjcm9sbFlcbiAgICB9O1xuICAgIGNvbnN0IHtcbiAgICAgIHNvdXJjZSxcbiAgICAgIG9yaWdpbmFsU291cmNlLFxuICAgICAgc291cmNlQ29udGFpbmVyLFxuICAgICAgc2Vuc29yRXZlbnRcbiAgICB9ID0gZHJhZ0V2ZW50O1xuXG4gICAgdGhpcy5sYXN0TWlycm9yTW92ZWRDbGllbnQgPSB7XG4gICAgICB4OiBzZW5zb3JFdmVudC5jbGllbnRYLFxuICAgICAgeTogc2Vuc29yRXZlbnQuY2xpZW50WVxuICAgIH07XG4gICAgY29uc3QgbWlycm9yQ3JlYXRlRXZlbnQgPSBuZXcgTWlycm9yQ3JlYXRlRXZlbnQoe1xuICAgICAgc291cmNlLFxuICAgICAgb3JpZ2luYWxTb3VyY2UsXG4gICAgICBzb3VyY2VDb250YWluZXIsXG4gICAgICBzZW5zb3JFdmVudCxcbiAgICAgIGRyYWdFdmVudFxuICAgIH0pO1xuICAgIHRoaXMuZHJhZ2dhYmxlLnRyaWdnZXIobWlycm9yQ3JlYXRlRXZlbnQpO1xuICAgIGlmIChpc05hdGl2ZURyYWdFdmVudChzZW5zb3JFdmVudCkgfHwgbWlycm9yQ3JlYXRlRXZlbnQuY2FuY2VsZWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBhcHBlbmRhYmxlQ29udGFpbmVyID0gdGhpc1tnZXRBcHBlbmRhYmxlQ29udGFpbmVyXShzb3VyY2UpIHx8IHNvdXJjZUNvbnRhaW5lcjtcbiAgICB0aGlzLm1pcnJvciA9IHNvdXJjZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgY29uc3QgbWlycm9yQ3JlYXRlZEV2ZW50ID0gbmV3IE1pcnJvckNyZWF0ZWRFdmVudCh7XG4gICAgICBzb3VyY2UsXG4gICAgICBvcmlnaW5hbFNvdXJjZSxcbiAgICAgIHNvdXJjZUNvbnRhaW5lcixcbiAgICAgIHNlbnNvckV2ZW50LFxuICAgICAgZHJhZ0V2ZW50LFxuICAgICAgbWlycm9yOiB0aGlzLm1pcnJvclxuICAgIH0pO1xuICAgIGNvbnN0IG1pcnJvckF0dGFjaGVkRXZlbnQgPSBuZXcgTWlycm9yQXR0YWNoZWRFdmVudCh7XG4gICAgICBzb3VyY2UsXG4gICAgICBvcmlnaW5hbFNvdXJjZSxcbiAgICAgIHNvdXJjZUNvbnRhaW5lcixcbiAgICAgIHNlbnNvckV2ZW50LFxuICAgICAgZHJhZ0V2ZW50LFxuICAgICAgbWlycm9yOiB0aGlzLm1pcnJvclxuICAgIH0pO1xuICAgIHRoaXMuZHJhZ2dhYmxlLnRyaWdnZXIobWlycm9yQ3JlYXRlZEV2ZW50KTtcbiAgICBhcHBlbmRhYmxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWlycm9yKTtcbiAgICB0aGlzLmRyYWdnYWJsZS50cmlnZ2VyKG1pcnJvckF0dGFjaGVkRXZlbnQpO1xuICB9XG4gIFtvbkRyYWdNb3ZlXShkcmFnRXZlbnQpIHtcbiAgICBpZiAoIXRoaXMubWlycm9yIHx8IGRyYWdFdmVudC5jYW5jZWxlZCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHtcbiAgICAgIHNvdXJjZSxcbiAgICAgIG9yaWdpbmFsU291cmNlLFxuICAgICAgc291cmNlQ29udGFpbmVyLFxuICAgICAgc2Vuc29yRXZlbnRcbiAgICB9ID0gZHJhZ0V2ZW50O1xuICAgIGxldCBwYXNzZWRUaHJlc2hYID0gdHJ1ZTtcbiAgICBsZXQgcGFzc2VkVGhyZXNoWSA9IHRydWU7XG4gICAgaWYgKHRoaXMub3B0aW9ucy50aHJlc2hvbGRYIHx8IHRoaXMub3B0aW9ucy50aHJlc2hvbGRZKSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIHg6IGxhc3RYLFxuICAgICAgICB5OiBsYXN0WVxuICAgICAgfSA9IHRoaXMubGFzdE1pcnJvck1vdmVkQ2xpZW50O1xuICAgICAgaWYgKE1hdGguYWJzKGxhc3RYIC0gc2Vuc29yRXZlbnQuY2xpZW50WCkgPCB0aGlzLm9wdGlvbnMudGhyZXNob2xkWCkge1xuICAgICAgICBwYXNzZWRUaHJlc2hYID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmxhc3RNaXJyb3JNb3ZlZENsaWVudC54ID0gc2Vuc29yRXZlbnQuY2xpZW50WDtcbiAgICAgIH1cbiAgICAgIGlmIChNYXRoLmFicyhsYXN0WSAtIHNlbnNvckV2ZW50LmNsaWVudFkpIDwgdGhpcy5vcHRpb25zLnRocmVzaG9sZFkpIHtcbiAgICAgICAgcGFzc2VkVGhyZXNoWSA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5sYXN0TWlycm9yTW92ZWRDbGllbnQueSA9IHNlbnNvckV2ZW50LmNsaWVudFk7XG4gICAgICB9XG4gICAgICBpZiAoIXBhc3NlZFRocmVzaFggJiYgIXBhc3NlZFRocmVzaFkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBtaXJyb3JNb3ZlRXZlbnQgPSBuZXcgTWlycm9yTW92ZUV2ZW50KHtcbiAgICAgIHNvdXJjZSxcbiAgICAgIG9yaWdpbmFsU291cmNlLFxuICAgICAgc291cmNlQ29udGFpbmVyLFxuICAgICAgc2Vuc29yRXZlbnQsXG4gICAgICBkcmFnRXZlbnQsXG4gICAgICBtaXJyb3I6IHRoaXMubWlycm9yLFxuICAgICAgcGFzc2VkVGhyZXNoWCxcbiAgICAgIHBhc3NlZFRocmVzaFlcbiAgICB9KTtcbiAgICB0aGlzLmRyYWdnYWJsZS50cmlnZ2VyKG1pcnJvck1vdmVFdmVudCk7XG4gIH1cbiAgW29uRHJhZ1N0b3BdKGRyYWdFdmVudCkge1xuICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cpIHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXNbb25TY3JvbGxdLCB0cnVlKTtcbiAgICB9XG4gICAgdGhpcy5pbml0aWFsU2Nyb2xsT2Zmc2V0ID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDBcbiAgICB9O1xuICAgIHRoaXMuc2Nyb2xsT2Zmc2V0ID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDBcbiAgICB9O1xuICAgIGlmICghdGhpcy5taXJyb3IpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qge1xuICAgICAgc291cmNlLFxuICAgICAgc291cmNlQ29udGFpbmVyLFxuICAgICAgc2Vuc29yRXZlbnRcbiAgICB9ID0gZHJhZ0V2ZW50O1xuICAgIGNvbnN0IG1pcnJvckRlc3Ryb3lFdmVudCA9IG5ldyBNaXJyb3JEZXN0cm95RXZlbnQoe1xuICAgICAgc291cmNlLFxuICAgICAgbWlycm9yOiB0aGlzLm1pcnJvcixcbiAgICAgIHNvdXJjZUNvbnRhaW5lcixcbiAgICAgIHNlbnNvckV2ZW50LFxuICAgICAgZHJhZ0V2ZW50XG4gICAgfSk7XG4gICAgdGhpcy5kcmFnZ2FibGUudHJpZ2dlcihtaXJyb3JEZXN0cm95RXZlbnQpO1xuICAgIGlmICghbWlycm9yRGVzdHJveUV2ZW50LmNhbmNlbGVkKCkpIHtcbiAgICAgIHRoaXMubWlycm9yLnJlbW92ZSgpO1xuICAgIH1cbiAgfVxuICBbb25TY3JvbGxdKCkge1xuICAgIHRoaXMuc2Nyb2xsT2Zmc2V0ID0ge1xuICAgICAgeDogd2luZG93LnNjcm9sbFggLSB0aGlzLmluaXRpYWxTY3JvbGxPZmZzZXQueCxcbiAgICAgIHk6IHdpbmRvdy5zY3JvbGxZIC0gdGhpcy5pbml0aWFsU2Nyb2xsT2Zmc2V0LnlcbiAgICB9O1xuICB9XG5cbiAgW29uTWlycm9yQ3JlYXRlZF0oe1xuICAgIG1pcnJvcixcbiAgICBzb3VyY2UsXG4gICAgc2Vuc29yRXZlbnRcbiAgfSkge1xuICAgIGNvbnN0IG1pcnJvckNsYXNzZXMgPSB0aGlzLmRyYWdnYWJsZS5nZXRDbGFzc05hbWVzRm9yKCdtaXJyb3InKTtcbiAgICBjb25zdCBzZXRTdGF0ZSA9ICh7XG4gICAgICBtaXJyb3JPZmZzZXQsXG4gICAgICBpbml0aWFsWCxcbiAgICAgIGluaXRpYWxZLFxuICAgICAgLi4uYXJnc1xuICAgIH0pID0+IHtcbiAgICAgIHRoaXMubWlycm9yT2Zmc2V0ID0gbWlycm9yT2Zmc2V0O1xuICAgICAgdGhpcy5pbml0aWFsWCA9IGluaXRpYWxYO1xuICAgICAgdGhpcy5pbml0aWFsWSA9IGluaXRpYWxZO1xuICAgICAgdGhpcy5sYXN0TW92ZWRYID0gaW5pdGlhbFg7XG4gICAgICB0aGlzLmxhc3RNb3ZlZFkgPSBpbml0aWFsWTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG1pcnJvck9mZnNldCxcbiAgICAgICAgaW5pdGlhbFgsXG4gICAgICAgIGluaXRpYWxZLFxuICAgICAgICAuLi5hcmdzXG4gICAgICB9O1xuICAgIH07XG4gICAgbWlycm9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgICAgbWlycm9yLFxuICAgICAgc291cmNlLFxuICAgICAgc2Vuc29yRXZlbnQsXG4gICAgICBtaXJyb3JDbGFzc2VzLFxuICAgICAgc2Nyb2xsT2Zmc2V0OiB0aGlzLnNjcm9sbE9mZnNldCxcbiAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyxcbiAgICAgIHBhc3NlZFRocmVzaFg6IHRydWUsXG4gICAgICBwYXNzZWRUaHJlc2hZOiB0cnVlXG4gICAgfTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGluaXRpYWxTdGF0ZSlcblxuICAgIC50aGVuKGNvbXB1dGVNaXJyb3JEaW1lbnNpb25zKS50aGVuKGNhbGN1bGF0ZU1pcnJvck9mZnNldCkudGhlbihyZXNldE1pcnJvcikudGhlbihhZGRNaXJyb3JDbGFzc2VzKS50aGVuKHBvc2l0aW9uTWlycm9yKHtcbiAgICAgIGluaXRpYWw6IHRydWVcbiAgICB9KSkudGhlbihyZW1vdmVNaXJyb3JJRCkudGhlbihzZXRTdGF0ZSk7XG4gIH1cblxuICBbb25NaXJyb3JNb3ZlXShtaXJyb3JFdmVudCkge1xuICAgIGlmIChtaXJyb3JFdmVudC5jYW5jZWxlZCgpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3Qgc2V0U3RhdGUgPSAoe1xuICAgICAgbGFzdE1vdmVkWCxcbiAgICAgIGxhc3RNb3ZlZFksXG4gICAgICAuLi5hcmdzXG4gICAgfSkgPT4ge1xuICAgICAgdGhpcy5sYXN0TW92ZWRYID0gbGFzdE1vdmVkWDtcbiAgICAgIHRoaXMubGFzdE1vdmVkWSA9IGxhc3RNb3ZlZFk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsYXN0TW92ZWRYLFxuICAgICAgICBsYXN0TW92ZWRZLFxuICAgICAgICAuLi5hcmdzXG4gICAgICB9O1xuICAgIH07XG4gICAgY29uc3QgdHJpZ2dlck1vdmVkID0gYXJncyA9PiB7XG4gICAgICBjb25zdCBtaXJyb3JNb3ZlZEV2ZW50ID0gbmV3IE1pcnJvck1vdmVkRXZlbnQoe1xuICAgICAgICBzb3VyY2U6IG1pcnJvckV2ZW50LnNvdXJjZSxcbiAgICAgICAgb3JpZ2luYWxTb3VyY2U6IG1pcnJvckV2ZW50Lm9yaWdpbmFsU291cmNlLFxuICAgICAgICBzb3VyY2VDb250YWluZXI6IG1pcnJvckV2ZW50LnNvdXJjZUNvbnRhaW5lcixcbiAgICAgICAgc2Vuc29yRXZlbnQ6IG1pcnJvckV2ZW50LnNlbnNvckV2ZW50LFxuICAgICAgICBkcmFnRXZlbnQ6IG1pcnJvckV2ZW50LmRyYWdFdmVudCxcbiAgICAgICAgbWlycm9yOiB0aGlzLm1pcnJvcixcbiAgICAgICAgcGFzc2VkVGhyZXNoWDogbWlycm9yRXZlbnQucGFzc2VkVGhyZXNoWCxcbiAgICAgICAgcGFzc2VkVGhyZXNoWTogbWlycm9yRXZlbnQucGFzc2VkVGhyZXNoWVxuICAgICAgfSk7XG4gICAgICB0aGlzLmRyYWdnYWJsZS50cmlnZ2VyKG1pcnJvck1vdmVkRXZlbnQpO1xuICAgICAgcmV0dXJuIGFyZ3M7XG4gICAgfTtcbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgICBtaXJyb3I6IG1pcnJvckV2ZW50Lm1pcnJvcixcbiAgICAgIHNlbnNvckV2ZW50OiBtaXJyb3JFdmVudC5zZW5zb3JFdmVudCxcbiAgICAgIG1pcnJvck9mZnNldDogdGhpcy5taXJyb3JPZmZzZXQsXG4gICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnMsXG4gICAgICBpbml0aWFsWDogdGhpcy5pbml0aWFsWCxcbiAgICAgIGluaXRpYWxZOiB0aGlzLmluaXRpYWxZLFxuICAgICAgc2Nyb2xsT2Zmc2V0OiB0aGlzLnNjcm9sbE9mZnNldCxcbiAgICAgIHBhc3NlZFRocmVzaFg6IG1pcnJvckV2ZW50LnBhc3NlZFRocmVzaFgsXG4gICAgICBwYXNzZWRUaHJlc2hZOiBtaXJyb3JFdmVudC5wYXNzZWRUaHJlc2hZLFxuICAgICAgbGFzdE1vdmVkWDogdGhpcy5sYXN0TW92ZWRYLFxuICAgICAgbGFzdE1vdmVkWTogdGhpcy5sYXN0TW92ZWRZXG4gICAgfTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGluaXRpYWxTdGF0ZSkudGhlbihwb3NpdGlvbk1pcnJvcih7XG4gICAgICByYWY6IHRydWVcbiAgICB9KSkudGhlbihzZXRTdGF0ZSkudGhlbih0cmlnZ2VyTW92ZWQpO1xuICB9XG5cbiAgW2dldEFwcGVuZGFibGVDb250YWluZXJdKHNvdXJjZSkge1xuICAgIGNvbnN0IGFwcGVuZFRvID0gdGhpcy5vcHRpb25zLmFwcGVuZFRvO1xuICAgIGlmICh0eXBlb2YgYXBwZW5kVG8gPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihhcHBlbmRUbyk7XG4gICAgfSBlbHNlIGlmIChhcHBlbmRUbyBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICByZXR1cm4gYXBwZW5kVG87XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgYXBwZW5kVG8gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBhcHBlbmRUbyhzb3VyY2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc291cmNlLnBhcmVudE5vZGU7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVNaXJyb3JEaW1lbnNpb25zKHtcbiAgc291cmNlLFxuICAuLi5hcmdzXG59KSB7XG4gIHJldHVybiB3aXRoUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICBjb25zdCBzb3VyY2VSZWN0ID0gc291cmNlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHJlc29sdmUoe1xuICAgICAgc291cmNlLFxuICAgICAgc291cmNlUmVjdCxcbiAgICAgIC4uLmFyZ3NcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZU1pcnJvck9mZnNldCh7XG4gIHNlbnNvckV2ZW50LFxuICBzb3VyY2VSZWN0LFxuICBvcHRpb25zLFxuICAuLi5hcmdzXG59KSB7XG4gIHJldHVybiB3aXRoUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICBjb25zdCB0b3AgPSBvcHRpb25zLmN1cnNvck9mZnNldFkgPT09IG51bGwgPyBzZW5zb3JFdmVudC5jbGllbnRZIC0gc291cmNlUmVjdC50b3AgOiBvcHRpb25zLmN1cnNvck9mZnNldFk7XG4gICAgY29uc3QgbGVmdCA9IG9wdGlvbnMuY3Vyc29yT2Zmc2V0WCA9PT0gbnVsbCA/IHNlbnNvckV2ZW50LmNsaWVudFggLSBzb3VyY2VSZWN0LmxlZnQgOiBvcHRpb25zLmN1cnNvck9mZnNldFg7XG4gICAgY29uc3QgbWlycm9yT2Zmc2V0ID0ge1xuICAgICAgdG9wLFxuICAgICAgbGVmdFxuICAgIH07XG4gICAgcmVzb2x2ZSh7XG4gICAgICBzZW5zb3JFdmVudCxcbiAgICAgIHNvdXJjZVJlY3QsXG4gICAgICBtaXJyb3JPZmZzZXQsXG4gICAgICBvcHRpb25zLFxuICAgICAgLi4uYXJnc1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVzZXRNaXJyb3Ioe1xuICBtaXJyb3IsXG4gIHNvdXJjZSxcbiAgb3B0aW9ucyxcbiAgLi4uYXJnc1xufSkge1xuICByZXR1cm4gd2l0aFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgbGV0IG9mZnNldEhlaWdodDtcbiAgICBsZXQgb2Zmc2V0V2lkdGg7XG4gICAgaWYgKG9wdGlvbnMuY29uc3RyYWluRGltZW5zaW9ucykge1xuICAgICAgY29uc3QgY29tcHV0ZWRTb3VyY2VTdHlsZXMgPSBnZXRDb21wdXRlZFN0eWxlKHNvdXJjZSk7XG4gICAgICBvZmZzZXRIZWlnaHQgPSBjb21wdXRlZFNvdXJjZVN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCdoZWlnaHQnKTtcbiAgICAgIG9mZnNldFdpZHRoID0gY29tcHV0ZWRTb3VyY2VTdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZSgnd2lkdGgnKTtcbiAgICB9XG4gICAgbWlycm9yLnN0eWxlLmRpc3BsYXkgPSBudWxsO1xuICAgIG1pcnJvci5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgbWlycm9yLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gICAgbWlycm9yLnN0eWxlLnRvcCA9IDA7XG4gICAgbWlycm9yLnN0eWxlLmxlZnQgPSAwO1xuICAgIG1pcnJvci5zdHlsZS5tYXJnaW4gPSAwO1xuICAgIGlmIChvcHRpb25zLmNvbnN0cmFpbkRpbWVuc2lvbnMpIHtcbiAgICAgIG1pcnJvci5zdHlsZS5oZWlnaHQgPSBvZmZzZXRIZWlnaHQ7XG4gICAgICBtaXJyb3Iuc3R5bGUud2lkdGggPSBvZmZzZXRXaWR0aDtcbiAgICB9XG4gICAgcmVzb2x2ZSh7XG4gICAgICBtaXJyb3IsXG4gICAgICBzb3VyY2UsXG4gICAgICBvcHRpb25zLFxuICAgICAgLi4uYXJnc1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkTWlycm9yQ2xhc3Nlcyh7XG4gIG1pcnJvcixcbiAgbWlycm9yQ2xhc3NlcyxcbiAgLi4uYXJnc1xufSkge1xuICByZXR1cm4gd2l0aFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgbWlycm9yLmNsYXNzTGlzdC5hZGQoLi4ubWlycm9yQ2xhc3Nlcyk7XG4gICAgcmVzb2x2ZSh7XG4gICAgICBtaXJyb3IsXG4gICAgICBtaXJyb3JDbGFzc2VzLFxuICAgICAgLi4uYXJnc1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlTWlycm9ySUQoe1xuICBtaXJyb3IsXG4gIC4uLmFyZ3Ncbn0pIHtcbiAgcmV0dXJuIHdpdGhQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgIG1pcnJvci5yZW1vdmVBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgZGVsZXRlIG1pcnJvci5pZDtcbiAgICByZXNvbHZlKHtcbiAgICAgIG1pcnJvcixcbiAgICAgIC4uLmFyZ3NcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHBvc2l0aW9uTWlycm9yKHtcbiAgd2l0aEZyYW1lID0gZmFsc2UsXG4gIGluaXRpYWwgPSBmYWxzZVxufSA9IHt9KSB7XG4gIHJldHVybiAoe1xuICAgIG1pcnJvcixcbiAgICBzZW5zb3JFdmVudCxcbiAgICBtaXJyb3JPZmZzZXQsXG4gICAgaW5pdGlhbFksXG4gICAgaW5pdGlhbFgsXG4gICAgc2Nyb2xsT2Zmc2V0LFxuICAgIG9wdGlvbnMsXG4gICAgcGFzc2VkVGhyZXNoWCxcbiAgICBwYXNzZWRUaHJlc2hZLFxuICAgIGxhc3RNb3ZlZFgsXG4gICAgbGFzdE1vdmVkWSxcbiAgICAuLi5hcmdzXG4gIH0pID0+IHtcbiAgICByZXR1cm4gd2l0aFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAgIG1pcnJvcixcbiAgICAgICAgc2Vuc29yRXZlbnQsXG4gICAgICAgIG1pcnJvck9mZnNldCxcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgLi4uYXJnc1xuICAgICAgfTtcbiAgICAgIGlmIChtaXJyb3JPZmZzZXQpIHtcbiAgICAgICAgY29uc3QgeCA9IHBhc3NlZFRocmVzaFggPyBNYXRoLnJvdW5kKChzZW5zb3JFdmVudC5jbGllbnRYIC0gbWlycm9yT2Zmc2V0LmxlZnQgLSBzY3JvbGxPZmZzZXQueCkgLyAob3B0aW9ucy50aHJlc2hvbGRYIHx8IDEpKSAqIChvcHRpb25zLnRocmVzaG9sZFggfHwgMSkgOiBNYXRoLnJvdW5kKGxhc3RNb3ZlZFgpO1xuICAgICAgICBjb25zdCB5ID0gcGFzc2VkVGhyZXNoWSA/IE1hdGgucm91bmQoKHNlbnNvckV2ZW50LmNsaWVudFkgLSBtaXJyb3JPZmZzZXQudG9wIC0gc2Nyb2xsT2Zmc2V0LnkpIC8gKG9wdGlvbnMudGhyZXNob2xkWSB8fCAxKSkgKiAob3B0aW9ucy50aHJlc2hvbGRZIHx8IDEpIDogTWF0aC5yb3VuZChsYXN0TW92ZWRZKTtcbiAgICAgICAgaWYgKG9wdGlvbnMueEF4aXMgJiYgb3B0aW9ucy55QXhpcyB8fCBpbml0aWFsKSB7XG4gICAgICAgICAgbWlycm9yLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgke3h9cHgsICR7eX1weCwgMClgO1xuICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbnMueEF4aXMgJiYgIW9wdGlvbnMueUF4aXMpIHtcbiAgICAgICAgICBtaXJyb3Iuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCR7eH1weCwgJHtpbml0aWFsWX1weCwgMClgO1xuICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbnMueUF4aXMgJiYgIW9wdGlvbnMueEF4aXMpIHtcbiAgICAgICAgICBtaXJyb3Iuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCR7aW5pdGlhbFh9cHgsICR7eX1weCwgMClgO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbml0aWFsKSB7XG4gICAgICAgICAgcmVzdWx0LmluaXRpYWxYID0geDtcbiAgICAgICAgICByZXN1bHQuaW5pdGlhbFkgPSB5O1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5sYXN0TW92ZWRYID0geDtcbiAgICAgICAgcmVzdWx0Lmxhc3RNb3ZlZFkgPSB5O1xuICAgICAgfVxuICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgIH0sIHtcbiAgICAgIGZyYW1lOiB3aXRoRnJhbWVcbiAgICB9KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gd2l0aFByb21pc2UoY2FsbGJhY2ssIHtcbiAgcmFmID0gZmFsc2Vcbn0gPSB7fSkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChyYWYpIHtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIGNhbGxiYWNrKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FsbGJhY2socmVzb2x2ZSwgcmVqZWN0KTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBpc05hdGl2ZURyYWdFdmVudChzZW5zb3JFdmVudCkge1xuICByZXR1cm4gL15kcmFnLy50ZXN0KHNlbnNvckV2ZW50Lm9yaWdpbmFsRXZlbnQudHlwZSk7XG59XG5cbmV4cG9ydCB7IE1pcnJvciBhcyBkZWZhdWx0LCBkZWZhdWx0T3B0aW9ucywgZ2V0QXBwZW5kYWJsZUNvbnRhaW5lciwgb25EcmFnTW92ZSwgb25EcmFnU3RhcnQsIG9uRHJhZ1N0b3AsIG9uTWlycm9yQ3JlYXRlZCwgb25NaXJyb3JNb3ZlLCBvblNjcm9sbCB9O1xuIiwiaW1wb3J0IHsgQWJzdHJhY3RFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9BYnN0cmFjdEV2ZW50L0Fic3RyYWN0RXZlbnQubWpzJztcblxuY2xhc3MgTWlycm9yRXZlbnQgZXh0ZW5kcyBBYnN0cmFjdEV2ZW50IHtcblxuICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgc3VwZXIoZGF0YSk7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgfVxuXG4gIGdldCBzb3VyY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5zb3VyY2U7XG4gIH1cblxuICBnZXQgb3JpZ2luYWxTb3VyY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5vcmlnaW5hbFNvdXJjZTtcbiAgfVxuXG4gIGdldCBzb3VyY2VDb250YWluZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5zb3VyY2VDb250YWluZXI7XG4gIH1cblxuICBnZXQgc2Vuc29yRXZlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5zZW5zb3JFdmVudDtcbiAgfVxuXG4gIGdldCBkcmFnRXZlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5kcmFnRXZlbnQ7XG4gIH1cblxuICBnZXQgb3JpZ2luYWxFdmVudCgpIHtcbiAgICBpZiAodGhpcy5zZW5zb3JFdmVudCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2Vuc29yRXZlbnQub3JpZ2luYWxFdmVudDtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuY2xhc3MgTWlycm9yQ3JlYXRlRXZlbnQgZXh0ZW5kcyBNaXJyb3JFdmVudCB7fVxuTWlycm9yQ3JlYXRlRXZlbnQudHlwZSA9ICdtaXJyb3I6Y3JlYXRlJztcblxuY2xhc3MgTWlycm9yQ3JlYXRlZEV2ZW50IGV4dGVuZHMgTWlycm9yRXZlbnQge1xuXG4gIGdldCBtaXJyb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5taXJyb3I7XG4gIH1cbn1cbk1pcnJvckNyZWF0ZWRFdmVudC50eXBlID0gJ21pcnJvcjpjcmVhdGVkJztcblxuY2xhc3MgTWlycm9yQXR0YWNoZWRFdmVudCBleHRlbmRzIE1pcnJvckV2ZW50IHtcblxuICBnZXQgbWlycm9yKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEubWlycm9yO1xuICB9XG59XG5NaXJyb3JBdHRhY2hlZEV2ZW50LnR5cGUgPSAnbWlycm9yOmF0dGFjaGVkJztcblxuY2xhc3MgTWlycm9yTW92ZUV2ZW50IGV4dGVuZHMgTWlycm9yRXZlbnQge1xuXG4gIGdldCBtaXJyb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5taXJyb3I7XG4gIH1cblxuICBnZXQgcGFzc2VkVGhyZXNoWCgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLnBhc3NlZFRocmVzaFg7XG4gIH1cblxuICBnZXQgcGFzc2VkVGhyZXNoWSgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLnBhc3NlZFRocmVzaFk7XG4gIH1cbn1cbk1pcnJvck1vdmVFdmVudC50eXBlID0gJ21pcnJvcjptb3ZlJztcbk1pcnJvck1vdmVFdmVudC5jYW5jZWxhYmxlID0gdHJ1ZTtcblxuY2xhc3MgTWlycm9yTW92ZWRFdmVudCBleHRlbmRzIE1pcnJvckV2ZW50IHtcblxuICBnZXQgbWlycm9yKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEubWlycm9yO1xuICB9XG5cbiAgZ2V0IHBhc3NlZFRocmVzaFgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5wYXNzZWRUaHJlc2hYO1xuICB9XG5cbiAgZ2V0IHBhc3NlZFRocmVzaFkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5wYXNzZWRUaHJlc2hZO1xuICB9XG59XG5NaXJyb3JNb3ZlZEV2ZW50LnR5cGUgPSAnbWlycm9yOm1vdmVkJztcblxuY2xhc3MgTWlycm9yRGVzdHJveUV2ZW50IGV4dGVuZHMgTWlycm9yRXZlbnQge1xuXG4gIGdldCBtaXJyb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5taXJyb3I7XG4gIH1cbn1cbk1pcnJvckRlc3Ryb3lFdmVudC50eXBlID0gJ21pcnJvcjpkZXN0cm95Jztcbk1pcnJvckRlc3Ryb3lFdmVudC5jYW5jZWxhYmxlID0gdHJ1ZTtcblxuZXhwb3J0IHsgTWlycm9yQXR0YWNoZWRFdmVudCwgTWlycm9yQ3JlYXRlRXZlbnQsIE1pcnJvckNyZWF0ZWRFdmVudCwgTWlycm9yRGVzdHJveUV2ZW50LCBNaXJyb3JFdmVudCwgTWlycm9yTW92ZUV2ZW50LCBNaXJyb3JNb3ZlZEV2ZW50IH07XG4iLCJpbXBvcnQgeyBBYnN0cmFjdFBsdWdpbiB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9BYnN0cmFjdFBsdWdpbi9BYnN0cmFjdFBsdWdpbi5tanMnO1xuaW1wb3J0IGNsb3Nlc3QgZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3V0aWxzL2Nsb3Nlc3QvY2xvc2VzdC5tanMnO1xuXG5jb25zdCBvbkRyYWdTdGFydCA9IFN5bWJvbCgnb25EcmFnU3RhcnQnKTtcbmNvbnN0IG9uRHJhZ01vdmUgPSBTeW1ib2woJ29uRHJhZ01vdmUnKTtcbmNvbnN0IG9uRHJhZ1N0b3AgPSBTeW1ib2woJ29uRHJhZ1N0b3AnKTtcbmNvbnN0IHNjcm9sbCA9IFN5bWJvbCgnc2Nyb2xsJyk7XG5cbmNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICBzcGVlZDogNixcbiAgc2Vuc2l0aXZpdHk6IDUwLFxuICBzY3JvbGxhYmxlRWxlbWVudHM6IFtdXG59O1xuXG5jbGFzcyBTY3JvbGxhYmxlIGV4dGVuZHMgQWJzdHJhY3RQbHVnaW4ge1xuXG4gIGNvbnN0cnVjdG9yKGRyYWdnYWJsZSkge1xuICAgIHN1cGVyKGRyYWdnYWJsZSk7XG5cbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICAuLi5kZWZhdWx0T3B0aW9ucyxcbiAgICAgIC4uLnRoaXMuZ2V0T3B0aW9ucygpXG4gICAgfTtcblxuICAgIHRoaXMuY3VycmVudE1vdXNlUG9zaXRpb24gPSBudWxsO1xuXG4gICAgdGhpcy5zY3JvbGxBbmltYXRpb25GcmFtZSA9IG51bGw7XG5cbiAgICB0aGlzLnNjcm9sbGFibGVFbGVtZW50ID0gbnVsbDtcblxuICAgIHRoaXMuZmluZFNjcm9sbGFibGVFbGVtZW50RnJhbWUgPSBudWxsO1xuICAgIHRoaXNbb25EcmFnU3RhcnRdID0gdGhpc1tvbkRyYWdTdGFydF0uYmluZCh0aGlzKTtcbiAgICB0aGlzW29uRHJhZ01vdmVdID0gdGhpc1tvbkRyYWdNb3ZlXS5iaW5kKHRoaXMpO1xuICAgIHRoaXNbb25EcmFnU3RvcF0gPSB0aGlzW29uRHJhZ1N0b3BdLmJpbmQodGhpcyk7XG4gICAgdGhpc1tzY3JvbGxdID0gdGhpc1tzY3JvbGxdLmJpbmQodGhpcyk7XG4gIH1cblxuICBhdHRhY2goKSB7XG4gICAgdGhpcy5kcmFnZ2FibGUub24oJ2RyYWc6c3RhcnQnLCB0aGlzW29uRHJhZ1N0YXJ0XSkub24oJ2RyYWc6bW92ZScsIHRoaXNbb25EcmFnTW92ZV0pLm9uKCdkcmFnOnN0b3AnLCB0aGlzW29uRHJhZ1N0b3BdKTtcbiAgfVxuXG4gIGRldGFjaCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZS5vZmYoJ2RyYWc6c3RhcnQnLCB0aGlzW29uRHJhZ1N0YXJ0XSkub2ZmKCdkcmFnOm1vdmUnLCB0aGlzW29uRHJhZ01vdmVdKS5vZmYoJ2RyYWc6c3RvcCcsIHRoaXNbb25EcmFnU3RvcF0pO1xuICB9XG5cbiAgZ2V0T3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5kcmFnZ2FibGUub3B0aW9ucy5zY3JvbGxhYmxlIHx8IHt9O1xuICB9XG5cbiAgZ2V0U2Nyb2xsYWJsZUVsZW1lbnQodGFyZ2V0KSB7XG4gICAgaWYgKHRoaXMuaGFzRGVmaW5lZFNjcm9sbGFibGVFbGVtZW50cygpKSB7XG4gICAgICByZXR1cm4gY2xvc2VzdCh0YXJnZXQsIHRoaXMub3B0aW9ucy5zY3JvbGxhYmxlRWxlbWVudHMpIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNsb3Nlc3RTY3JvbGxhYmxlRWxlbWVudCh0YXJnZXQpO1xuICAgIH1cbiAgfVxuXG4gIGhhc0RlZmluZWRTY3JvbGxhYmxlRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4odGhpcy5vcHRpb25zLnNjcm9sbGFibGVFbGVtZW50cy5sZW5ndGggIT09IDApO1xuICB9XG5cbiAgW29uRHJhZ1N0YXJ0XShkcmFnRXZlbnQpIHtcbiAgICB0aGlzLmZpbmRTY3JvbGxhYmxlRWxlbWVudEZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHRoaXMuc2Nyb2xsYWJsZUVsZW1lbnQgPSB0aGlzLmdldFNjcm9sbGFibGVFbGVtZW50KGRyYWdFdmVudC5zb3VyY2UpO1xuICAgIH0pO1xuICB9XG5cbiAgW29uRHJhZ01vdmVdKGRyYWdFdmVudCkge1xuICAgIHRoaXMuZmluZFNjcm9sbGFibGVFbGVtZW50RnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy5zY3JvbGxhYmxlRWxlbWVudCA9IHRoaXMuZ2V0U2Nyb2xsYWJsZUVsZW1lbnQoZHJhZ0V2ZW50LnNlbnNvckV2ZW50LnRhcmdldCk7XG4gICAgfSk7XG4gICAgaWYgKCF0aGlzLnNjcm9sbGFibGVFbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHNlbnNvckV2ZW50ID0gZHJhZ0V2ZW50LnNlbnNvckV2ZW50O1xuICAgIGNvbnN0IHNjcm9sbE9mZnNldCA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwXG4gICAgfTtcbiAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gd2luZG93KSB7XG4gICAgICBzY3JvbGxPZmZzZXQueSA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wIHx8IDA7XG4gICAgICBzY3JvbGxPZmZzZXQueCA9IHdpbmRvdy5wYWdlWE9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQgfHwgMDtcbiAgICB9XG4gICAgdGhpcy5jdXJyZW50TW91c2VQb3NpdGlvbiA9IHtcbiAgICAgIGNsaWVudFg6IHNlbnNvckV2ZW50LmNsaWVudFggLSBzY3JvbGxPZmZzZXQueCxcbiAgICAgIGNsaWVudFk6IHNlbnNvckV2ZW50LmNsaWVudFkgLSBzY3JvbGxPZmZzZXQueVxuICAgIH07XG4gICAgdGhpcy5zY3JvbGxBbmltYXRpb25GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzW3Njcm9sbF0pO1xuICB9XG5cbiAgW29uRHJhZ1N0b3BdKCkge1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuc2Nyb2xsQW5pbWF0aW9uRnJhbWUpO1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuZmluZFNjcm9sbGFibGVFbGVtZW50RnJhbWUpO1xuICAgIHRoaXMuc2Nyb2xsYWJsZUVsZW1lbnQgPSBudWxsO1xuICAgIHRoaXMuc2Nyb2xsQW5pbWF0aW9uRnJhbWUgPSBudWxsO1xuICAgIHRoaXMuZmluZFNjcm9sbGFibGVFbGVtZW50RnJhbWUgPSBudWxsO1xuICAgIHRoaXMuY3VycmVudE1vdXNlUG9zaXRpb24gPSBudWxsO1xuICB9XG5cbiAgW3Njcm9sbF0oKSB7XG4gICAgaWYgKCF0aGlzLnNjcm9sbGFibGVFbGVtZW50IHx8ICF0aGlzLmN1cnJlbnRNb3VzZVBvc2l0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuc2Nyb2xsQW5pbWF0aW9uRnJhbWUpO1xuICAgIGNvbnN0IHtcbiAgICAgIHNwZWVkLFxuICAgICAgc2Vuc2l0aXZpdHlcbiAgICB9ID0gdGhpcy5vcHRpb25zO1xuICAgIGNvbnN0IHJlY3QgPSB0aGlzLnNjcm9sbGFibGVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IGJvdHRvbUN1dE9mZiA9IHJlY3QuYm90dG9tID4gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIGNvbnN0IHRvcEN1dE9mZiA9IHJlY3QudG9wIDwgMDtcbiAgICBjb25zdCBjdXRPZmYgPSB0b3BDdXRPZmYgfHwgYm90dG9tQ3V0T2ZmO1xuICAgIGNvbnN0IGRvY3VtZW50U2Nyb2xsaW5nRWxlbWVudCA9IGdldERvY3VtZW50U2Nyb2xsaW5nRWxlbWVudCgpO1xuICAgIGNvbnN0IHNjcm9sbGFibGVFbGVtZW50ID0gdGhpcy5zY3JvbGxhYmxlRWxlbWVudDtcbiAgICBjb25zdCBjbGllbnRYID0gdGhpcy5jdXJyZW50TW91c2VQb3NpdGlvbi5jbGllbnRYO1xuICAgIGNvbnN0IGNsaWVudFkgPSB0aGlzLmN1cnJlbnRNb3VzZVBvc2l0aW9uLmNsaWVudFk7XG4gICAgaWYgKHNjcm9sbGFibGVFbGVtZW50ICE9PSBkb2N1bWVudC5ib2R5ICYmIHNjcm9sbGFibGVFbGVtZW50ICE9PSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgIWN1dE9mZikge1xuICAgICAgY29uc3Qge1xuICAgICAgICBvZmZzZXRIZWlnaHQsXG4gICAgICAgIG9mZnNldFdpZHRoXG4gICAgICB9ID0gc2Nyb2xsYWJsZUVsZW1lbnQ7XG4gICAgICBpZiAocmVjdC50b3AgKyBvZmZzZXRIZWlnaHQgLSBjbGllbnRZIDwgc2Vuc2l0aXZpdHkpIHtcbiAgICAgICAgc2Nyb2xsYWJsZUVsZW1lbnQuc2Nyb2xsVG9wICs9IHNwZWVkO1xuICAgICAgfSBlbHNlIGlmIChjbGllbnRZIC0gcmVjdC50b3AgPCBzZW5zaXRpdml0eSkge1xuICAgICAgICBzY3JvbGxhYmxlRWxlbWVudC5zY3JvbGxUb3AgLT0gc3BlZWQ7XG4gICAgICB9XG4gICAgICBpZiAocmVjdC5sZWZ0ICsgb2Zmc2V0V2lkdGggLSBjbGllbnRYIDwgc2Vuc2l0aXZpdHkpIHtcbiAgICAgICAgc2Nyb2xsYWJsZUVsZW1lbnQuc2Nyb2xsTGVmdCArPSBzcGVlZDtcbiAgICAgIH0gZWxzZSBpZiAoY2xpZW50WCAtIHJlY3QubGVmdCA8IHNlbnNpdGl2aXR5KSB7XG4gICAgICAgIHNjcm9sbGFibGVFbGVtZW50LnNjcm9sbExlZnQgLT0gc3BlZWQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgaW5uZXJIZWlnaHQsXG4gICAgICAgIGlubmVyV2lkdGhcbiAgICAgIH0gPSB3aW5kb3c7XG4gICAgICBpZiAoY2xpZW50WSA8IHNlbnNpdGl2aXR5KSB7XG4gICAgICAgIGRvY3VtZW50U2Nyb2xsaW5nRWxlbWVudC5zY3JvbGxUb3AgLT0gc3BlZWQ7XG4gICAgICB9IGVsc2UgaWYgKGlubmVySGVpZ2h0IC0gY2xpZW50WSA8IHNlbnNpdGl2aXR5KSB7XG4gICAgICAgIGRvY3VtZW50U2Nyb2xsaW5nRWxlbWVudC5zY3JvbGxUb3AgKz0gc3BlZWQ7XG4gICAgICB9XG4gICAgICBpZiAoY2xpZW50WCA8IHNlbnNpdGl2aXR5KSB7XG4gICAgICAgIGRvY3VtZW50U2Nyb2xsaW5nRWxlbWVudC5zY3JvbGxMZWZ0IC09IHNwZWVkO1xuICAgICAgfSBlbHNlIGlmIChpbm5lcldpZHRoIC0gY2xpZW50WCA8IHNlbnNpdGl2aXR5KSB7XG4gICAgICAgIGRvY3VtZW50U2Nyb2xsaW5nRWxlbWVudC5zY3JvbGxMZWZ0ICs9IHNwZWVkO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNjcm9sbEFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXNbc2Nyb2xsXSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFzT3ZlcmZsb3coZWxlbWVudCkge1xuICBjb25zdCBvdmVyZmxvd1JlZ2V4ID0gLyhhdXRvfHNjcm9sbCkvO1xuICBjb25zdCBjb21wdXRlZFN0eWxlcyA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCwgbnVsbCk7XG4gIGNvbnN0IG92ZXJmbG93ID0gY29tcHV0ZWRTdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZSgnb3ZlcmZsb3cnKSArIGNvbXB1dGVkU3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJ292ZXJmbG93LXknKSArIGNvbXB1dGVkU3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJ292ZXJmbG93LXgnKTtcbiAgcmV0dXJuIG92ZXJmbG93UmVnZXgudGVzdChvdmVyZmxvdyk7XG59XG5cbmZ1bmN0aW9uIGlzU3RhdGljYWxseVBvc2l0aW9uZWQoZWxlbWVudCkge1xuICBjb25zdCBwb3NpdGlvbiA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZSgncG9zaXRpb24nKTtcbiAgcmV0dXJuIHBvc2l0aW9uID09PSAnc3RhdGljJztcbn1cblxuZnVuY3Rpb24gY2xvc2VzdFNjcm9sbGFibGVFbGVtZW50KGVsZW1lbnQpIHtcbiAgaWYgKCFlbGVtZW50KSB7XG4gICAgcmV0dXJuIGdldERvY3VtZW50U2Nyb2xsaW5nRWxlbWVudCgpO1xuICB9XG4gIGNvbnN0IHBvc2l0aW9uID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKCdwb3NpdGlvbicpO1xuICBjb25zdCBleGNsdWRlU3RhdGljUGFyZW50cyA9IHBvc2l0aW9uID09PSAnYWJzb2x1dGUnO1xuICBjb25zdCBzY3JvbGxhYmxlRWxlbWVudCA9IGNsb3Nlc3QoZWxlbWVudCwgcGFyZW50ID0+IHtcbiAgICBpZiAoZXhjbHVkZVN0YXRpY1BhcmVudHMgJiYgaXNTdGF0aWNhbGx5UG9zaXRpb25lZChwYXJlbnQpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBoYXNPdmVyZmxvdyhwYXJlbnQpO1xuICB9KTtcbiAgaWYgKHBvc2l0aW9uID09PSAnZml4ZWQnIHx8ICFzY3JvbGxhYmxlRWxlbWVudCkge1xuICAgIHJldHVybiBnZXREb2N1bWVudFNjcm9sbGluZ0VsZW1lbnQoKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gc2Nyb2xsYWJsZUVsZW1lbnQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RG9jdW1lbnRTY3JvbGxpbmdFbGVtZW50KCkge1xuICByZXR1cm4gZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG59XG5cbmV4cG9ydCB7IFNjcm9sbGFibGUgYXMgZGVmYXVsdCwgZGVmYXVsdE9wdGlvbnMsIG9uRHJhZ01vdmUsIG9uRHJhZ1N0YXJ0LCBvbkRyYWdTdG9wLCBzY3JvbGwgfTtcbiIsImltcG9ydCBjbG9zZXN0IGZyb20gJy4uLy4uLy4uL3NoYXJlZC91dGlscy9jbG9zZXN0L2Nsb3Nlc3QubWpzJztcbmltcG9ydCBTZW5zb3IgZnJvbSAnLi4vU2Vuc29yL1NlbnNvci5tanMnO1xuaW1wb3J0IHsgRHJhZ1N0YXJ0U2Vuc29yRXZlbnQsIERyYWdNb3ZlU2Vuc29yRXZlbnQsIERyYWdTdG9wU2Vuc29yRXZlbnQgfSBmcm9tICcuLi9TZW5zb3JFdmVudC9TZW5zb3JFdmVudC5tanMnO1xuXG5jb25zdCBvbk1vdXNlRG93biA9IFN5bWJvbCgnb25Nb3VzZURvd24nKTtcbmNvbnN0IG9uTW91c2VVcCA9IFN5bWJvbCgnb25Nb3VzZVVwJyk7XG5jb25zdCBvbkRyYWdTdGFydCA9IFN5bWJvbCgnb25EcmFnU3RhcnQnKTtcbmNvbnN0IG9uRHJhZ092ZXIgPSBTeW1ib2woJ29uRHJhZ092ZXInKTtcbmNvbnN0IG9uRHJhZ0VuZCA9IFN5bWJvbCgnb25EcmFnRW5kJyk7XG5jb25zdCBvbkRyb3AgPSBTeW1ib2woJ29uRHJvcCcpO1xuY29uc3QgcmVzZXQgPSBTeW1ib2woJ3Jlc2V0Jyk7XG5cbmNsYXNzIERyYWdTZW5zb3IgZXh0ZW5kcyBTZW5zb3Ige1xuXG4gIGNvbnN0cnVjdG9yKGNvbnRhaW5lcnMgPSBbXSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgc3VwZXIoY29udGFpbmVycywgb3B0aW9ucyk7XG5cbiAgICB0aGlzLm1vdXNlRG93blRpbWVvdXQgPSBudWxsO1xuXG4gICAgdGhpcy5kcmFnZ2FibGVFbGVtZW50ID0gbnVsbDtcblxuICAgIHRoaXMubmF0aXZlRHJhZ2dhYmxlRWxlbWVudCA9IG51bGw7XG4gICAgdGhpc1tvbk1vdXNlRG93bl0gPSB0aGlzW29uTW91c2VEb3duXS5iaW5kKHRoaXMpO1xuICAgIHRoaXNbb25Nb3VzZVVwXSA9IHRoaXNbb25Nb3VzZVVwXS5iaW5kKHRoaXMpO1xuICAgIHRoaXNbb25EcmFnU3RhcnRdID0gdGhpc1tvbkRyYWdTdGFydF0uYmluZCh0aGlzKTtcbiAgICB0aGlzW29uRHJhZ092ZXJdID0gdGhpc1tvbkRyYWdPdmVyXS5iaW5kKHRoaXMpO1xuICAgIHRoaXNbb25EcmFnRW5kXSA9IHRoaXNbb25EcmFnRW5kXS5iaW5kKHRoaXMpO1xuICAgIHRoaXNbb25Ecm9wXSA9IHRoaXNbb25Ecm9wXS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgYXR0YWNoKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXNbb25Nb3VzZURvd25dLCB0cnVlKTtcbiAgfVxuXG4gIGRldGFjaCgpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzW29uTW91c2VEb3duXSwgdHJ1ZSk7XG4gIH1cblxuICBbb25EcmFnU3RhcnRdKGV2ZW50KSB7XG5cbiAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dCcsICcnKTtcbiAgICBldmVudC5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9IHRoaXMub3B0aW9ucy50eXBlO1xuICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSk7XG4gICAgY29uc3Qgb3JpZ2luYWxTb3VyY2UgPSB0aGlzLmRyYWdnYWJsZUVsZW1lbnQ7XG4gICAgaWYgKCFvcmlnaW5hbFNvdXJjZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBkcmFnU3RhcnRFdmVudCA9IG5ldyBEcmFnU3RhcnRTZW5zb3JFdmVudCh7XG4gICAgICBjbGllbnRYOiBldmVudC5jbGllbnRYLFxuICAgICAgY2xpZW50WTogZXZlbnQuY2xpZW50WSxcbiAgICAgIHRhcmdldCxcbiAgICAgIG9yaWdpbmFsU291cmNlLFxuICAgICAgY29udGFpbmVyOiB0aGlzLmN1cnJlbnRDb250YWluZXIsXG4gICAgICBvcmlnaW5hbEV2ZW50OiBldmVudFxuICAgIH0pO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnRyaWdnZXIodGhpcy5jdXJyZW50Q29udGFpbmVyLCBkcmFnU3RhcnRFdmVudCk7XG4gICAgICBpZiAoZHJhZ1N0YXJ0RXZlbnQuY2FuY2VsZWQoKSkge1xuICAgICAgICB0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRyYWdnaW5nID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCAwKTtcbiAgfVxuXG4gIFtvbkRyYWdPdmVyXShldmVudCkge1xuICAgIGlmICghdGhpcy5kcmFnZ2luZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY3VycmVudENvbnRhaW5lcjtcbiAgICBjb25zdCBkcmFnTW92ZUV2ZW50ID0gbmV3IERyYWdNb3ZlU2Vuc29yRXZlbnQoe1xuICAgICAgY2xpZW50WDogZXZlbnQuY2xpZW50WCxcbiAgICAgIGNsaWVudFk6IGV2ZW50LmNsaWVudFksXG4gICAgICB0YXJnZXQsXG4gICAgICBjb250YWluZXIsXG4gICAgICBvcmlnaW5hbEV2ZW50OiBldmVudFxuICAgIH0pO1xuICAgIHRoaXMudHJpZ2dlcihjb250YWluZXIsIGRyYWdNb3ZlRXZlbnQpO1xuICAgIGlmICghZHJhZ01vdmVFdmVudC5jYW5jZWxlZCgpKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSB0aGlzLm9wdGlvbnMudHlwZTtcbiAgICB9XG4gIH1cblxuICBbb25EcmFnRW5kXShldmVudCkge1xuICAgIGlmICghdGhpcy5kcmFnZ2luZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpc1tvbk1vdXNlVXBdLCB0cnVlKTtcbiAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY3VycmVudENvbnRhaW5lcjtcbiAgICBjb25zdCBkcmFnU3RvcEV2ZW50ID0gbmV3IERyYWdTdG9wU2Vuc29yRXZlbnQoe1xuICAgICAgY2xpZW50WDogZXZlbnQuY2xpZW50WCxcbiAgICAgIGNsaWVudFk6IGV2ZW50LmNsaWVudFksXG4gICAgICB0YXJnZXQsXG4gICAgICBjb250YWluZXIsXG4gICAgICBvcmlnaW5hbEV2ZW50OiBldmVudFxuICAgIH0pO1xuICAgIHRoaXMudHJpZ2dlcihjb250YWluZXIsIGRyYWdTdG9wRXZlbnQpO1xuICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcbiAgICB0aGlzLnN0YXJ0RXZlbnQgPSBudWxsO1xuICAgIHRoaXNbcmVzZXRdKCk7XG4gIH1cblxuICBbb25Ecm9wXShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBbb25Nb3VzZURvd25dKGV2ZW50KSB7XG5cbiAgICBpZiAoZXZlbnQudGFyZ2V0ICYmIChldmVudC50YXJnZXQuZm9ybSB8fCBldmVudC50YXJnZXQuY29udGVudGVkaXRhYmxlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgdGhpcy5jdXJyZW50Q29udGFpbmVyID0gY2xvc2VzdCh0YXJnZXQsIHRoaXMuY29udGFpbmVycyk7XG4gICAgaWYgKCF0aGlzLmN1cnJlbnRDb250YWluZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMub3B0aW9ucy5oYW5kbGUgJiYgdGFyZ2V0ICYmICFjbG9zZXN0KHRhcmdldCwgdGhpcy5vcHRpb25zLmhhbmRsZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgb3JpZ2luYWxTb3VyY2UgPSBjbG9zZXN0KHRhcmdldCwgdGhpcy5vcHRpb25zLmRyYWdnYWJsZSk7XG4gICAgaWYgKCFvcmlnaW5hbFNvdXJjZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBuYXRpdmVEcmFnZ2FibGVFbGVtZW50ID0gY2xvc2VzdChldmVudC50YXJnZXQsIGVsZW1lbnQgPT4gZWxlbWVudC5kcmFnZ2FibGUpO1xuICAgIGlmIChuYXRpdmVEcmFnZ2FibGVFbGVtZW50KSB7XG4gICAgICBuYXRpdmVEcmFnZ2FibGVFbGVtZW50LmRyYWdnYWJsZSA9IGZhbHNlO1xuICAgICAgdGhpcy5uYXRpdmVEcmFnZ2FibGVFbGVtZW50ID0gbmF0aXZlRHJhZ2dhYmxlRWxlbWVudDtcbiAgICB9XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXNbb25Nb3VzZVVwXSwgdHJ1ZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgdGhpc1tvbkRyYWdTdGFydF0sIGZhbHNlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXNbb25EcmFnT3Zlcl0sIGZhbHNlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgdGhpc1tvbkRyYWdFbmRdLCBmYWxzZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIHRoaXNbb25Ecm9wXSwgZmFsc2UpO1xuICAgIHRoaXMuc3RhcnRFdmVudCA9IGV2ZW50O1xuICAgIHRoaXMubW91c2VEb3duVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgb3JpZ2luYWxTb3VyY2UuZHJhZ2dhYmxlID0gdHJ1ZTtcbiAgICAgIHRoaXMuZHJhZ2dhYmxlRWxlbWVudCA9IG9yaWdpbmFsU291cmNlO1xuICAgIH0sIHRoaXMuZGVsYXkuZHJhZyk7XG4gIH1cblxuICBbb25Nb3VzZVVwXSgpIHtcbiAgICB0aGlzW3Jlc2V0XSgpO1xuICB9XG5cbiAgW3Jlc2V0XSgpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5tb3VzZURvd25UaW1lb3V0KTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpc1tvbk1vdXNlVXBdLCB0cnVlKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCB0aGlzW29uRHJhZ1N0YXJ0XSwgZmFsc2UpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgdGhpc1tvbkRyYWdPdmVyXSwgZmFsc2UpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCB0aGlzW29uRHJhZ0VuZF0sIGZhbHNlKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpc1tvbkRyb3BdLCBmYWxzZSk7XG4gICAgaWYgKHRoaXMubmF0aXZlRHJhZ2dhYmxlRWxlbWVudCkge1xuICAgICAgdGhpcy5uYXRpdmVEcmFnZ2FibGVFbGVtZW50LmRyYWdnYWJsZSA9IHRydWU7XG4gICAgICB0aGlzLm5hdGl2ZURyYWdnYWJsZUVsZW1lbnQgPSBudWxsO1xuICAgIH1cbiAgICBpZiAodGhpcy5kcmFnZ2FibGVFbGVtZW50KSB7XG4gICAgICB0aGlzLmRyYWdnYWJsZUVsZW1lbnQuZHJhZ2dhYmxlID0gZmFsc2U7XG4gICAgICB0aGlzLmRyYWdnYWJsZUVsZW1lbnQgPSBudWxsO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgeyBEcmFnU2Vuc29yIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCBjbG9zZXN0IGZyb20gJy4uLy4uLy4uL3NoYXJlZC91dGlscy9jbG9zZXN0L2Nsb3Nlc3QubWpzJztcbmltcG9ydCBTZW5zb3IgZnJvbSAnLi4vU2Vuc29yL1NlbnNvci5tanMnO1xuaW1wb3J0IHsgRHJhZ1N0YXJ0U2Vuc29yRXZlbnQsIERyYWdTdG9wU2Vuc29yRXZlbnQsIERyYWdNb3ZlU2Vuc29yRXZlbnQsIERyYWdQcmVzc3VyZVNlbnNvckV2ZW50IH0gZnJvbSAnLi4vU2Vuc29yRXZlbnQvU2Vuc29yRXZlbnQubWpzJztcblxuY29uc3Qgb25Nb3VzZUZvcmNlV2lsbEJlZ2luID0gU3ltYm9sKCdvbk1vdXNlRm9yY2VXaWxsQmVnaW4nKTtcbmNvbnN0IG9uTW91c2VGb3JjZURvd24gPSBTeW1ib2woJ29uTW91c2VGb3JjZURvd24nKTtcbmNvbnN0IG9uTW91c2VEb3duID0gU3ltYm9sKCdvbk1vdXNlRG93bicpO1xuY29uc3Qgb25Nb3VzZUZvcmNlQ2hhbmdlID0gU3ltYm9sKCdvbk1vdXNlRm9yY2VDaGFuZ2UnKTtcbmNvbnN0IG9uTW91c2VNb3ZlID0gU3ltYm9sKCdvbk1vdXNlTW92ZScpO1xuY29uc3Qgb25Nb3VzZVVwID0gU3ltYm9sKCdvbk1vdXNlVXAnKTtcbmNvbnN0IG9uTW91c2VGb3JjZUdsb2JhbENoYW5nZSA9IFN5bWJvbCgnb25Nb3VzZUZvcmNlR2xvYmFsQ2hhbmdlJyk7XG5cbmNsYXNzIEZvcmNlVG91Y2hTZW5zb3IgZXh0ZW5kcyBTZW5zb3Ige1xuXG4gIGNvbnN0cnVjdG9yKGNvbnRhaW5lcnMgPSBbXSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgc3VwZXIoY29udGFpbmVycywgb3B0aW9ucyk7XG5cbiAgICB0aGlzLm1pZ2h0RHJhZyA9IGZhbHNlO1xuICAgIHRoaXNbb25Nb3VzZUZvcmNlV2lsbEJlZ2luXSA9IHRoaXNbb25Nb3VzZUZvcmNlV2lsbEJlZ2luXS5iaW5kKHRoaXMpO1xuICAgIHRoaXNbb25Nb3VzZUZvcmNlRG93bl0gPSB0aGlzW29uTW91c2VGb3JjZURvd25dLmJpbmQodGhpcyk7XG4gICAgdGhpc1tvbk1vdXNlRG93bl0gPSB0aGlzW29uTW91c2VEb3duXS5iaW5kKHRoaXMpO1xuICAgIHRoaXNbb25Nb3VzZUZvcmNlQ2hhbmdlXSA9IHRoaXNbb25Nb3VzZUZvcmNlQ2hhbmdlXS5iaW5kKHRoaXMpO1xuICAgIHRoaXNbb25Nb3VzZU1vdmVdID0gdGhpc1tvbk1vdXNlTW92ZV0uYmluZCh0aGlzKTtcbiAgICB0aGlzW29uTW91c2VVcF0gPSB0aGlzW29uTW91c2VVcF0uYmluZCh0aGlzKTtcbiAgfVxuXG4gIGF0dGFjaCgpIHtcbiAgICBmb3IgKGNvbnN0IGNvbnRhaW5lciBvZiB0aGlzLmNvbnRhaW5lcnMpIHtcbiAgICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCd3ZWJraXRtb3VzZWZvcmNld2lsbGJlZ2luJywgdGhpc1tvbk1vdXNlRm9yY2VXaWxsQmVnaW5dLCBmYWxzZSk7XG4gICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignd2Via2l0bW91c2Vmb3JjZWRvd24nLCB0aGlzW29uTW91c2VGb3JjZURvd25dLCBmYWxzZSk7XG4gICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpc1tvbk1vdXNlRG93bl0sIHRydWUpO1xuICAgICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3dlYmtpdG1vdXNlZm9yY2VjaGFuZ2VkJywgdGhpc1tvbk1vdXNlRm9yY2VDaGFuZ2VdLCBmYWxzZSk7XG4gICAgfVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXNbb25Nb3VzZU1vdmVdKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpc1tvbk1vdXNlVXBdKTtcbiAgfVxuXG4gIGRldGFjaCgpIHtcbiAgICBmb3IgKGNvbnN0IGNvbnRhaW5lciBvZiB0aGlzLmNvbnRhaW5lcnMpIHtcbiAgICAgIGNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCd3ZWJraXRtb3VzZWZvcmNld2lsbGJlZ2luJywgdGhpc1tvbk1vdXNlRm9yY2VXaWxsQmVnaW5dLCBmYWxzZSk7XG4gICAgICBjb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2Via2l0bW91c2Vmb3JjZWRvd24nLCB0aGlzW29uTW91c2VGb3JjZURvd25dLCBmYWxzZSk7XG4gICAgICBjb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpc1tvbk1vdXNlRG93bl0sIHRydWUpO1xuICAgICAgY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3dlYmtpdG1vdXNlZm9yY2VjaGFuZ2VkJywgdGhpc1tvbk1vdXNlRm9yY2VDaGFuZ2VdLCBmYWxzZSk7XG4gICAgfVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXNbb25Nb3VzZU1vdmVdKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpc1tvbk1vdXNlVXBdKTtcbiAgfVxuXG4gIFtvbk1vdXNlRm9yY2VXaWxsQmVnaW5dKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLm1pZ2h0RHJhZyA9IHRydWU7XG4gIH1cblxuICBbb25Nb3VzZUZvcmNlRG93bl0oZXZlbnQpIHtcbiAgICBpZiAodGhpcy5kcmFnZ2luZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5oYW5kbGUgJiYgdGFyZ2V0ICYmICFjbG9zZXN0KHRhcmdldCwgdGhpcy5vcHRpb25zLmhhbmRsZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgb3JpZ2luYWxTb3VyY2UgPSBjbG9zZXN0KHRhcmdldCwgdGhpcy5vcHRpb25zLmRyYWdnYWJsZSk7XG4gICAgaWYgKCFvcmlnaW5hbFNvdXJjZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBkcmFnU3RhcnRFdmVudCA9IG5ldyBEcmFnU3RhcnRTZW5zb3JFdmVudCh7XG4gICAgICBjbGllbnRYOiBldmVudC5jbGllbnRYLFxuICAgICAgY2xpZW50WTogZXZlbnQuY2xpZW50WSxcbiAgICAgIHRhcmdldCxcbiAgICAgIGNvbnRhaW5lcixcbiAgICAgIG9yaWdpbmFsU291cmNlLFxuICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnRcbiAgICB9KTtcbiAgICB0aGlzLnRyaWdnZXIoY29udGFpbmVyLCBkcmFnU3RhcnRFdmVudCk7XG4gICAgdGhpcy5jdXJyZW50Q29udGFpbmVyID0gY29udGFpbmVyO1xuICAgIHRoaXMuZHJhZ2dpbmcgPSAhZHJhZ1N0YXJ0RXZlbnQuY2FuY2VsZWQoKTtcbiAgICB0aGlzLm1pZ2h0RHJhZyA9IGZhbHNlO1xuICB9XG5cbiAgW29uTW91c2VVcF0oZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuZHJhZ2dpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZHJhZ1N0b3BFdmVudCA9IG5ldyBEcmFnU3RvcFNlbnNvckV2ZW50KHtcbiAgICAgIGNsaWVudFg6IGV2ZW50LmNsaWVudFgsXG4gICAgICBjbGllbnRZOiBldmVudC5jbGllbnRZLFxuICAgICAgdGFyZ2V0OiBudWxsLFxuICAgICAgY29udGFpbmVyOiB0aGlzLmN1cnJlbnRDb250YWluZXIsXG4gICAgICBvcmlnaW5hbEV2ZW50OiBldmVudFxuICAgIH0pO1xuICAgIHRoaXMudHJpZ2dlcih0aGlzLmN1cnJlbnRDb250YWluZXIsIGRyYWdTdG9wRXZlbnQpO1xuICAgIHRoaXMuY3VycmVudENvbnRhaW5lciA9IG51bGw7XG4gICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuICAgIHRoaXMubWlnaHREcmFnID0gZmFsc2U7XG4gIH1cblxuICBbb25Nb3VzZURvd25dKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLm1pZ2h0RHJhZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBbb25Nb3VzZU1vdmVdKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmRyYWdnaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSk7XG4gICAgY29uc3QgZHJhZ01vdmVFdmVudCA9IG5ldyBEcmFnTW92ZVNlbnNvckV2ZW50KHtcbiAgICAgIGNsaWVudFg6IGV2ZW50LmNsaWVudFgsXG4gICAgICBjbGllbnRZOiBldmVudC5jbGllbnRZLFxuICAgICAgdGFyZ2V0LFxuICAgICAgY29udGFpbmVyOiB0aGlzLmN1cnJlbnRDb250YWluZXIsXG4gICAgICBvcmlnaW5hbEV2ZW50OiBldmVudFxuICAgIH0pO1xuICAgIHRoaXMudHJpZ2dlcih0aGlzLmN1cnJlbnRDb250YWluZXIsIGRyYWdNb3ZlRXZlbnQpO1xuICB9XG5cbiAgW29uTW91c2VGb3JjZUNoYW5nZV0oZXZlbnQpIHtcbiAgICBpZiAodGhpcy5kcmFnZ2luZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgY29uc3QgY29udGFpbmVyID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICBjb25zdCBkcmFnUHJlc3N1cmVFdmVudCA9IG5ldyBEcmFnUHJlc3N1cmVTZW5zb3JFdmVudCh7XG4gICAgICBwcmVzc3VyZTogZXZlbnQud2Via2l0Rm9yY2UsXG4gICAgICBjbGllbnRYOiBldmVudC5jbGllbnRYLFxuICAgICAgY2xpZW50WTogZXZlbnQuY2xpZW50WSxcbiAgICAgIHRhcmdldCxcbiAgICAgIGNvbnRhaW5lcixcbiAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50XG4gICAgfSk7XG4gICAgdGhpcy50cmlnZ2VyKGNvbnRhaW5lciwgZHJhZ1ByZXNzdXJlRXZlbnQpO1xuICB9XG5cbiAgW29uTW91c2VGb3JjZUdsb2JhbENoYW5nZV0oZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuZHJhZ2dpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgIGNvbnN0IGRyYWdQcmVzc3VyZUV2ZW50ID0gbmV3IERyYWdQcmVzc3VyZVNlbnNvckV2ZW50KHtcbiAgICAgIHByZXNzdXJlOiBldmVudC53ZWJraXRGb3JjZSxcbiAgICAgIGNsaWVudFg6IGV2ZW50LmNsaWVudFgsXG4gICAgICBjbGllbnRZOiBldmVudC5jbGllbnRZLFxuICAgICAgdGFyZ2V0LFxuICAgICAgY29udGFpbmVyOiB0aGlzLmN1cnJlbnRDb250YWluZXIsXG4gICAgICBvcmlnaW5hbEV2ZW50OiBldmVudFxuICAgIH0pO1xuICAgIHRoaXMudHJpZ2dlcih0aGlzLmN1cnJlbnRDb250YWluZXIsIGRyYWdQcmVzc3VyZUV2ZW50KTtcbiAgfVxufVxuXG5leHBvcnQgeyBGb3JjZVRvdWNoU2Vuc29yIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCBjbG9zZXN0IGZyb20gJy4uLy4uLy4uL3NoYXJlZC91dGlscy9jbG9zZXN0L2Nsb3Nlc3QubWpzJztcbmltcG9ydCBkaXN0YW5jZSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvdXRpbHMvZGlzdGFuY2UvZGlzdGFuY2UubWpzJztcbmltcG9ydCBTZW5zb3IgZnJvbSAnLi4vU2Vuc29yL1NlbnNvci5tanMnO1xuaW1wb3J0IHsgRHJhZ1N0YXJ0U2Vuc29yRXZlbnQsIERyYWdNb3ZlU2Vuc29yRXZlbnQsIERyYWdTdG9wU2Vuc29yRXZlbnQgfSBmcm9tICcuLi9TZW5zb3JFdmVudC9TZW5zb3JFdmVudC5tanMnO1xuXG5jb25zdCBvbkNvbnRleHRNZW51V2hpbGVEcmFnZ2luZyA9IFN5bWJvbCgnb25Db250ZXh0TWVudVdoaWxlRHJhZ2dpbmcnKTtcbmNvbnN0IG9uTW91c2VEb3duID0gU3ltYm9sKCdvbk1vdXNlRG93bicpO1xuY29uc3Qgb25Nb3VzZU1vdmUgPSBTeW1ib2woJ29uTW91c2VNb3ZlJyk7XG5jb25zdCBvbk1vdXNlVXAgPSBTeW1ib2woJ29uTW91c2VVcCcpO1xuY29uc3Qgc3RhcnREcmFnID0gU3ltYm9sKCdzdGFydERyYWcnKTtcbmNvbnN0IG9uRGlzdGFuY2VDaGFuZ2UgPSBTeW1ib2woJ29uRGlzdGFuY2VDaGFuZ2UnKTtcblxuY2xhc3MgTW91c2VTZW5zb3IgZXh0ZW5kcyBTZW5zb3Ige1xuXG4gIGNvbnN0cnVjdG9yKGNvbnRhaW5lcnMgPSBbXSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgc3VwZXIoY29udGFpbmVycywgb3B0aW9ucyk7XG5cbiAgICB0aGlzLm1vdXNlRG93blRpbWVvdXQgPSBudWxsO1xuXG4gICAgdGhpcy5wYWdlWCA9IG51bGw7XG5cbiAgICB0aGlzLnBhZ2VZID0gbnVsbDtcbiAgICB0aGlzW29uQ29udGV4dE1lbnVXaGlsZURyYWdnaW5nXSA9IHRoaXNbb25Db250ZXh0TWVudVdoaWxlRHJhZ2dpbmddLmJpbmQodGhpcyk7XG4gICAgdGhpc1tvbk1vdXNlRG93bl0gPSB0aGlzW29uTW91c2VEb3duXS5iaW5kKHRoaXMpO1xuICAgIHRoaXNbb25Nb3VzZU1vdmVdID0gdGhpc1tvbk1vdXNlTW92ZV0uYmluZCh0aGlzKTtcbiAgICB0aGlzW29uTW91c2VVcF0gPSB0aGlzW29uTW91c2VVcF0uYmluZCh0aGlzKTtcbiAgICB0aGlzW3N0YXJ0RHJhZ10gPSB0aGlzW3N0YXJ0RHJhZ10uYmluZCh0aGlzKTtcbiAgICB0aGlzW29uRGlzdGFuY2VDaGFuZ2VdID0gdGhpc1tvbkRpc3RhbmNlQ2hhbmdlXS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgYXR0YWNoKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXNbb25Nb3VzZURvd25dLCB0cnVlKTtcbiAgfVxuXG4gIGRldGFjaCgpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzW29uTW91c2VEb3duXSwgdHJ1ZSk7XG4gIH1cblxuICBbb25Nb3VzZURvd25dKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmJ1dHRvbiAhPT0gMCB8fCBldmVudC5jdHJsS2V5IHx8IGV2ZW50Lm1ldGFLZXkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY29udGFpbmVyID0gY2xvc2VzdChldmVudC50YXJnZXQsIHRoaXMuY29udGFpbmVycyk7XG4gICAgaWYgKCFjb250YWluZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMub3B0aW9ucy5oYW5kbGUgJiYgZXZlbnQudGFyZ2V0ICYmICFjbG9zZXN0KGV2ZW50LnRhcmdldCwgdGhpcy5vcHRpb25zLmhhbmRsZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgb3JpZ2luYWxTb3VyY2UgPSBjbG9zZXN0KGV2ZW50LnRhcmdldCwgdGhpcy5vcHRpb25zLmRyYWdnYWJsZSk7XG4gICAgaWYgKCFvcmlnaW5hbFNvdXJjZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB7XG4gICAgICBkZWxheVxuICAgIH0gPSB0aGlzO1xuICAgIGNvbnN0IHtcbiAgICAgIHBhZ2VYLFxuICAgICAgcGFnZVlcbiAgICB9ID0gZXZlbnQ7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7XG4gICAgICBwYWdlWCxcbiAgICAgIHBhZ2VZXG4gICAgfSk7XG4gICAgdGhpcy5vbk1vdXNlRG93bkF0ID0gRGF0ZS5ub3coKTtcbiAgICB0aGlzLnN0YXJ0RXZlbnQgPSBldmVudDtcbiAgICB0aGlzLmN1cnJlbnRDb250YWluZXIgPSBjb250YWluZXI7XG4gICAgdGhpcy5vcmlnaW5hbFNvdXJjZSA9IG9yaWdpbmFsU291cmNlO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzW29uTW91c2VVcF0pO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHByZXZlbnROYXRpdmVEcmFnU3RhcnQpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXNbb25EaXN0YW5jZUNoYW5nZV0pO1xuICAgIHRoaXMubW91c2VEb3duVGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXNbb25EaXN0YW5jZUNoYW5nZV0oe1xuICAgICAgICBwYWdlWDogdGhpcy5wYWdlWCxcbiAgICAgICAgcGFnZVk6IHRoaXMucGFnZVlcbiAgICAgIH0pO1xuICAgIH0sIGRlbGF5Lm1vdXNlKTtcbiAgfVxuXG4gIFtzdGFydERyYWddKCkge1xuICAgIGNvbnN0IHN0YXJ0RXZlbnQgPSB0aGlzLnN0YXJ0RXZlbnQ7XG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5jdXJyZW50Q29udGFpbmVyO1xuICAgIGNvbnN0IG9yaWdpbmFsU291cmNlID0gdGhpcy5vcmlnaW5hbFNvdXJjZTtcbiAgICBjb25zdCBkcmFnU3RhcnRFdmVudCA9IG5ldyBEcmFnU3RhcnRTZW5zb3JFdmVudCh7XG4gICAgICBjbGllbnRYOiBzdGFydEV2ZW50LmNsaWVudFgsXG4gICAgICBjbGllbnRZOiBzdGFydEV2ZW50LmNsaWVudFksXG4gICAgICB0YXJnZXQ6IHN0YXJ0RXZlbnQudGFyZ2V0LFxuICAgICAgY29udGFpbmVyLFxuICAgICAgb3JpZ2luYWxTb3VyY2UsXG4gICAgICBvcmlnaW5hbEV2ZW50OiBzdGFydEV2ZW50XG4gICAgfSk7XG4gICAgdGhpcy50cmlnZ2VyKHRoaXMuY3VycmVudENvbnRhaW5lciwgZHJhZ1N0YXJ0RXZlbnQpO1xuICAgIHRoaXMuZHJhZ2dpbmcgPSAhZHJhZ1N0YXJ0RXZlbnQuY2FuY2VsZWQoKTtcbiAgICBpZiAodGhpcy5kcmFnZ2luZykge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dG1lbnUnLCB0aGlzW29uQ29udGV4dE1lbnVXaGlsZURyYWdnaW5nXSwgdHJ1ZSk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzW29uTW91c2VNb3ZlXSk7XG4gICAgfVxuICB9XG5cbiAgW29uRGlzdGFuY2VDaGFuZ2VdKGV2ZW50KSB7XG4gICAgY29uc3Qge1xuICAgICAgcGFnZVgsXG4gICAgICBwYWdlWVxuICAgIH0gPSBldmVudDtcbiAgICBjb25zdCB7XG4gICAgICBkaXN0YW5jZTogZGlzdGFuY2UkMVxuICAgIH0gPSB0aGlzLm9wdGlvbnM7XG4gICAgY29uc3Qge1xuICAgICAgc3RhcnRFdmVudCxcbiAgICAgIGRlbGF5XG4gICAgfSA9IHRoaXM7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7XG4gICAgICBwYWdlWCxcbiAgICAgIHBhZ2VZXG4gICAgfSk7XG4gICAgaWYgKCF0aGlzLmN1cnJlbnRDb250YWluZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdGltZUVsYXBzZWQgPSBEYXRlLm5vdygpIC0gdGhpcy5vbk1vdXNlRG93bkF0O1xuICAgIGNvbnN0IGRpc3RhbmNlVHJhdmVsbGVkID0gZGlzdGFuY2Uoc3RhcnRFdmVudC5wYWdlWCwgc3RhcnRFdmVudC5wYWdlWSwgcGFnZVgsIHBhZ2VZKSB8fCAwO1xuICAgIGNsZWFyVGltZW91dCh0aGlzLm1vdXNlRG93blRpbWVvdXQpO1xuICAgIGlmICh0aW1lRWxhcHNlZCA8IGRlbGF5Lm1vdXNlKSB7XG5cbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXNbb25EaXN0YW5jZUNoYW5nZV0pO1xuICAgIH0gZWxzZSBpZiAoZGlzdGFuY2VUcmF2ZWxsZWQgPj0gZGlzdGFuY2UkMSkge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpc1tvbkRpc3RhbmNlQ2hhbmdlXSk7XG4gICAgICB0aGlzW3N0YXJ0RHJhZ10oKTtcbiAgICB9XG4gIH1cblxuICBbb25Nb3VzZU1vdmVdKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmRyYWdnaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSk7XG4gICAgY29uc3QgZHJhZ01vdmVFdmVudCA9IG5ldyBEcmFnTW92ZVNlbnNvckV2ZW50KHtcbiAgICAgIGNsaWVudFg6IGV2ZW50LmNsaWVudFgsXG4gICAgICBjbGllbnRZOiBldmVudC5jbGllbnRZLFxuICAgICAgdGFyZ2V0LFxuICAgICAgY29udGFpbmVyOiB0aGlzLmN1cnJlbnRDb250YWluZXIsXG4gICAgICBvcmlnaW5hbEV2ZW50OiBldmVudFxuICAgIH0pO1xuICAgIHRoaXMudHJpZ2dlcih0aGlzLmN1cnJlbnRDb250YWluZXIsIGRyYWdNb3ZlRXZlbnQpO1xuICB9XG5cbiAgW29uTW91c2VVcF0oZXZlbnQpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5tb3VzZURvd25UaW1lb3V0KTtcbiAgICBpZiAoZXZlbnQuYnV0dG9uICE9PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzW29uTW91c2VVcF0pO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHByZXZlbnROYXRpdmVEcmFnU3RhcnQpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXNbb25EaXN0YW5jZUNoYW5nZV0pO1xuICAgIGlmICghdGhpcy5kcmFnZ2luZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xuICAgIGNvbnN0IGRyYWdTdG9wRXZlbnQgPSBuZXcgRHJhZ1N0b3BTZW5zb3JFdmVudCh7XG4gICAgICBjbGllbnRYOiBldmVudC5jbGllbnRYLFxuICAgICAgY2xpZW50WTogZXZlbnQuY2xpZW50WSxcbiAgICAgIHRhcmdldCxcbiAgICAgIGNvbnRhaW5lcjogdGhpcy5jdXJyZW50Q29udGFpbmVyLFxuICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnRcbiAgICB9KTtcbiAgICB0aGlzLnRyaWdnZXIodGhpcy5jdXJyZW50Q29udGFpbmVyLCBkcmFnU3RvcEV2ZW50KTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjb250ZXh0bWVudScsIHRoaXNbb25Db250ZXh0TWVudVdoaWxlRHJhZ2dpbmddLCB0cnVlKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzW29uTW91c2VNb3ZlXSk7XG4gICAgdGhpcy5jdXJyZW50Q29udGFpbmVyID0gbnVsbDtcbiAgICB0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG4gICAgdGhpcy5zdGFydEV2ZW50ID0gbnVsbDtcbiAgfVxuXG4gIFtvbkNvbnRleHRNZW51V2hpbGVEcmFnZ2luZ10oZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG59XG5mdW5jdGlvbiBwcmV2ZW50TmF0aXZlRHJhZ1N0YXJ0KGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59XG5cbmV4cG9ydCB7IE1vdXNlU2Vuc29yIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCB7IEFic3RyYWN0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvQWJzdHJhY3RFdmVudC9BYnN0cmFjdEV2ZW50Lm1qcyc7XG5cbmNsYXNzIFNlbnNvckV2ZW50IGV4dGVuZHMgQWJzdHJhY3RFdmVudCB7XG5cbiAgZ2V0IG9yaWdpbmFsRXZlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5vcmlnaW5hbEV2ZW50O1xuICB9XG5cbiAgZ2V0IGNsaWVudFgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5jbGllbnRYO1xuICB9XG5cbiAgZ2V0IGNsaWVudFkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5jbGllbnRZO1xuICB9XG5cbiAgZ2V0IHRhcmdldCgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLnRhcmdldDtcbiAgfVxuXG4gIGdldCBjb250YWluZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5jb250YWluZXI7XG4gIH1cblxuICBnZXQgb3JpZ2luYWxTb3VyY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5vcmlnaW5hbFNvdXJjZTtcbiAgfVxuXG4gIGdldCBwcmVzc3VyZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLnByZXNzdXJlO1xuICB9XG59XG5cbmNsYXNzIERyYWdTdGFydFNlbnNvckV2ZW50IGV4dGVuZHMgU2Vuc29yRXZlbnQge31cblxuRHJhZ1N0YXJ0U2Vuc29yRXZlbnQudHlwZSA9ICdkcmFnOnN0YXJ0JztcbmNsYXNzIERyYWdNb3ZlU2Vuc29yRXZlbnQgZXh0ZW5kcyBTZW5zb3JFdmVudCB7fVxuXG5EcmFnTW92ZVNlbnNvckV2ZW50LnR5cGUgPSAnZHJhZzptb3ZlJztcbmNsYXNzIERyYWdTdG9wU2Vuc29yRXZlbnQgZXh0ZW5kcyBTZW5zb3JFdmVudCB7fVxuXG5EcmFnU3RvcFNlbnNvckV2ZW50LnR5cGUgPSAnZHJhZzpzdG9wJztcbmNsYXNzIERyYWdQcmVzc3VyZVNlbnNvckV2ZW50IGV4dGVuZHMgU2Vuc29yRXZlbnQge31cbkRyYWdQcmVzc3VyZVNlbnNvckV2ZW50LnR5cGUgPSAnZHJhZzpwcmVzc3VyZSc7XG5cbmV4cG9ydCB7IERyYWdNb3ZlU2Vuc29yRXZlbnQsIERyYWdQcmVzc3VyZVNlbnNvckV2ZW50LCBEcmFnU3RhcnRTZW5zb3JFdmVudCwgRHJhZ1N0b3BTZW5zb3JFdmVudCwgU2Vuc29yRXZlbnQgfTtcbiIsImNvbnN0IGRlZmF1bHREZWxheSA9IHtcbiAgbW91c2U6IDAsXG4gIGRyYWc6IDAsXG4gIHRvdWNoOiAxMDBcbn07XG5cbmNsYXNzIFNlbnNvciB7XG5cbiAgY29uc3RydWN0b3IoY29udGFpbmVycyA9IFtdLCBvcHRpb25zID0ge30pIHtcblxuICAgIHRoaXMuY29udGFpbmVycyA9IFsuLi5jb250YWluZXJzXTtcblxuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIC4uLm9wdGlvbnNcbiAgICB9O1xuXG4gICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuXG4gICAgdGhpcy5jdXJyZW50Q29udGFpbmVyID0gbnVsbDtcblxuICAgIHRoaXMub3JpZ2luYWxTb3VyY2UgPSBudWxsO1xuXG4gICAgdGhpcy5zdGFydEV2ZW50ID0gbnVsbDtcblxuICAgIHRoaXMuZGVsYXkgPSBjYWxjRGVsYXkob3B0aW9ucy5kZWxheSk7XG4gIH1cblxuICBhdHRhY2goKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBkZXRhY2goKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhZGRDb250YWluZXIoLi4uY29udGFpbmVycykge1xuICAgIHRoaXMuY29udGFpbmVycyA9IFsuLi50aGlzLmNvbnRhaW5lcnMsIC4uLmNvbnRhaW5lcnNdO1xuICB9XG5cbiAgcmVtb3ZlQ29udGFpbmVyKC4uLmNvbnRhaW5lcnMpIHtcbiAgICB0aGlzLmNvbnRhaW5lcnMgPSB0aGlzLmNvbnRhaW5lcnMuZmlsdGVyKGNvbnRhaW5lciA9PiAhY29udGFpbmVycy5pbmNsdWRlcyhjb250YWluZXIpKTtcbiAgfVxuXG4gIHRyaWdnZXIoZWxlbWVudCwgc2Vuc29yRXZlbnQpIHtcbiAgICBjb25zdCBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xuICAgIGV2ZW50LmRldGFpbCA9IHNlbnNvckV2ZW50O1xuICAgIGV2ZW50LmluaXRFdmVudChzZW5zb3JFdmVudC50eXBlLCB0cnVlLCB0cnVlKTtcbiAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgIHRoaXMubGFzdEV2ZW50ID0gc2Vuc29yRXZlbnQ7XG4gICAgcmV0dXJuIHNlbnNvckV2ZW50O1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbGNEZWxheShvcHRpb25zRGVsYXkpIHtcbiAgY29uc3QgZGVsYXkgPSB7fTtcbiAgaWYgKG9wdGlvbnNEZWxheSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmRlZmF1bHREZWxheVxuICAgIH07XG4gIH1cbiAgaWYgKHR5cGVvZiBvcHRpb25zRGVsYXkgPT09ICdudW1iZXInKSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gZGVmYXVsdERlbGF5KSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGRlZmF1bHREZWxheSwga2V5KSkge1xuICAgICAgICBkZWxheVtrZXldID0gb3B0aW9uc0RlbGF5O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGVsYXk7XG4gIH1cbiAgZm9yIChjb25zdCBrZXkgaW4gZGVmYXVsdERlbGF5KSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChkZWZhdWx0RGVsYXksIGtleSkpIHtcbiAgICAgIGlmIChvcHRpb25zRGVsYXlba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGRlbGF5W2tleV0gPSBkZWZhdWx0RGVsYXlba2V5XTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlbGF5W2tleV0gPSBvcHRpb25zRGVsYXlba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRlbGF5O1xufVxuXG5leHBvcnQgeyBTZW5zb3IgYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IGNsb3Nlc3QgZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3V0aWxzL2Nsb3Nlc3QvY2xvc2VzdC5tanMnO1xuaW1wb3J0IGRpc3RhbmNlIGZyb20gJy4uLy4uLy4uL3NoYXJlZC91dGlscy9kaXN0YW5jZS9kaXN0YW5jZS5tanMnO1xuaW1wb3J0IHRvdWNoQ29vcmRzIGZyb20gJy4uLy4uLy4uL3NoYXJlZC91dGlscy90b3VjaENvb3Jkcy90b3VjaENvb3Jkcy5tanMnO1xuaW1wb3J0IFNlbnNvciBmcm9tICcuLi9TZW5zb3IvU2Vuc29yLm1qcyc7XG5pbXBvcnQgeyBEcmFnU3RhcnRTZW5zb3JFdmVudCwgRHJhZ01vdmVTZW5zb3JFdmVudCwgRHJhZ1N0b3BTZW5zb3JFdmVudCB9IGZyb20gJy4uL1NlbnNvckV2ZW50L1NlbnNvckV2ZW50Lm1qcyc7XG5cbmNvbnN0IG9uVG91Y2hTdGFydCA9IFN5bWJvbCgnb25Ub3VjaFN0YXJ0Jyk7XG5jb25zdCBvblRvdWNoRW5kID0gU3ltYm9sKCdvblRvdWNoRW5kJyk7XG5jb25zdCBvblRvdWNoTW92ZSA9IFN5bWJvbCgnb25Ub3VjaE1vdmUnKTtcbmNvbnN0IHN0YXJ0RHJhZyA9IFN5bWJvbCgnc3RhcnREcmFnJyk7XG5jb25zdCBvbkRpc3RhbmNlQ2hhbmdlID0gU3ltYm9sKCdvbkRpc3RhbmNlQ2hhbmdlJyk7XG5cbmxldCBwcmV2ZW50U2Nyb2xsaW5nID0gZmFsc2U7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBldmVudCA9PiB7XG4gIGlmICghcHJldmVudFNjcm9sbGluZykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59LCB7XG4gIHBhc3NpdmU6IGZhbHNlXG59KTtcblxuY2xhc3MgVG91Y2hTZW5zb3IgZXh0ZW5kcyBTZW5zb3Ige1xuXG4gIGNvbnN0cnVjdG9yKGNvbnRhaW5lcnMgPSBbXSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgc3VwZXIoY29udGFpbmVycywgb3B0aW9ucyk7XG5cbiAgICB0aGlzLmN1cnJlbnRTY3JvbGxhYmxlUGFyZW50ID0gbnVsbDtcblxuICAgIHRoaXMudGFwVGltZW91dCA9IG51bGw7XG5cbiAgICB0aGlzLnRvdWNoTW92ZWQgPSBmYWxzZTtcblxuICAgIHRoaXMucGFnZVggPSBudWxsO1xuXG4gICAgdGhpcy5wYWdlWSA9IG51bGw7XG4gICAgdGhpc1tvblRvdWNoU3RhcnRdID0gdGhpc1tvblRvdWNoU3RhcnRdLmJpbmQodGhpcyk7XG4gICAgdGhpc1tvblRvdWNoRW5kXSA9IHRoaXNbb25Ub3VjaEVuZF0uYmluZCh0aGlzKTtcbiAgICB0aGlzW29uVG91Y2hNb3ZlXSA9IHRoaXNbb25Ub3VjaE1vdmVdLmJpbmQodGhpcyk7XG4gICAgdGhpc1tzdGFydERyYWddID0gdGhpc1tzdGFydERyYWddLmJpbmQodGhpcyk7XG4gICAgdGhpc1tvbkRpc3RhbmNlQ2hhbmdlXSA9IHRoaXNbb25EaXN0YW5jZUNoYW5nZV0uYmluZCh0aGlzKTtcbiAgfVxuXG4gIGF0dGFjaCgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpc1tvblRvdWNoU3RhcnRdKTtcbiAgfVxuXG4gIGRldGFjaCgpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpc1tvblRvdWNoU3RhcnRdKTtcbiAgfVxuXG4gIFtvblRvdWNoU3RhcnRdKGV2ZW50KSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gY2xvc2VzdChldmVudC50YXJnZXQsIHRoaXMuY29udGFpbmVycyk7XG4gICAgaWYgKCFjb250YWluZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMub3B0aW9ucy5oYW5kbGUgJiYgZXZlbnQudGFyZ2V0ICYmICFjbG9zZXN0KGV2ZW50LnRhcmdldCwgdGhpcy5vcHRpb25zLmhhbmRsZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgb3JpZ2luYWxTb3VyY2UgPSBjbG9zZXN0KGV2ZW50LnRhcmdldCwgdGhpcy5vcHRpb25zLmRyYWdnYWJsZSk7XG4gICAgaWYgKCFvcmlnaW5hbFNvdXJjZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB7XG4gICAgICBkaXN0YW5jZSA9IDBcbiAgICB9ID0gdGhpcy5vcHRpb25zO1xuICAgIGNvbnN0IHtcbiAgICAgIGRlbGF5XG4gICAgfSA9IHRoaXM7XG4gICAgY29uc3Qge1xuICAgICAgcGFnZVgsXG4gICAgICBwYWdlWVxuICAgIH0gPSB0b3VjaENvb3JkcyhldmVudCk7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7XG4gICAgICBwYWdlWCxcbiAgICAgIHBhZ2VZXG4gICAgfSk7XG4gICAgdGhpcy5vblRvdWNoU3RhcnRBdCA9IERhdGUubm93KCk7XG4gICAgdGhpcy5zdGFydEV2ZW50ID0gZXZlbnQ7XG4gICAgdGhpcy5jdXJyZW50Q29udGFpbmVyID0gY29udGFpbmVyO1xuICAgIHRoaXMub3JpZ2luYWxTb3VyY2UgPSBvcmlnaW5hbFNvdXJjZTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXNbb25Ub3VjaEVuZF0pO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgdGhpc1tvblRvdWNoRW5kXSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpc1tvbkRpc3RhbmNlQ2hhbmdlXSk7XG4gICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRleHRtZW51Jywgb25Db250ZXh0TWVudSk7XG4gICAgaWYgKGRpc3RhbmNlKSB7XG4gICAgICBwcmV2ZW50U2Nyb2xsaW5nID0gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcy50YXBUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpc1tvbkRpc3RhbmNlQ2hhbmdlXSh7XG4gICAgICAgIHRvdWNoZXM6IFt7XG4gICAgICAgICAgcGFnZVg6IHRoaXMucGFnZVgsXG4gICAgICAgICAgcGFnZVk6IHRoaXMucGFnZVlcbiAgICAgICAgfV1cbiAgICAgIH0pO1xuICAgIH0sIGRlbGF5LnRvdWNoKTtcbiAgfVxuXG4gIFtzdGFydERyYWddKCkge1xuICAgIGNvbnN0IHN0YXJ0RXZlbnQgPSB0aGlzLnN0YXJ0RXZlbnQ7XG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5jdXJyZW50Q29udGFpbmVyO1xuICAgIGNvbnN0IHRvdWNoID0gdG91Y2hDb29yZHMoc3RhcnRFdmVudCk7XG4gICAgY29uc3Qgb3JpZ2luYWxTb3VyY2UgPSB0aGlzLm9yaWdpbmFsU291cmNlO1xuICAgIGNvbnN0IGRyYWdTdGFydEV2ZW50ID0gbmV3IERyYWdTdGFydFNlbnNvckV2ZW50KHtcbiAgICAgIGNsaWVudFg6IHRvdWNoLnBhZ2VYLFxuICAgICAgY2xpZW50WTogdG91Y2gucGFnZVksXG4gICAgICB0YXJnZXQ6IHN0YXJ0RXZlbnQudGFyZ2V0LFxuICAgICAgY29udGFpbmVyLFxuICAgICAgb3JpZ2luYWxTb3VyY2UsXG4gICAgICBvcmlnaW5hbEV2ZW50OiBzdGFydEV2ZW50XG4gICAgfSk7XG4gICAgdGhpcy50cmlnZ2VyKHRoaXMuY3VycmVudENvbnRhaW5lciwgZHJhZ1N0YXJ0RXZlbnQpO1xuICAgIHRoaXMuZHJhZ2dpbmcgPSAhZHJhZ1N0YXJ0RXZlbnQuY2FuY2VsZWQoKTtcbiAgICBpZiAodGhpcy5kcmFnZ2luZykge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpc1tvblRvdWNoTW92ZV0pO1xuICAgIH1cbiAgICBwcmV2ZW50U2Nyb2xsaW5nID0gdGhpcy5kcmFnZ2luZztcbiAgfVxuXG4gIFtvbkRpc3RhbmNlQ2hhbmdlXShldmVudCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGRpc3RhbmNlOiBkaXN0YW5jZSQxXG4gICAgfSA9IHRoaXMub3B0aW9ucztcbiAgICBjb25zdCB7XG4gICAgICBzdGFydEV2ZW50LFxuICAgICAgZGVsYXlcbiAgICB9ID0gdGhpcztcbiAgICBjb25zdCBzdGFydCA9IHRvdWNoQ29vcmRzKHN0YXJ0RXZlbnQpO1xuICAgIGNvbnN0IGN1cnJlbnQgPSB0b3VjaENvb3JkcyhldmVudCk7XG4gICAgY29uc3QgdGltZUVsYXBzZWQgPSBEYXRlLm5vdygpIC0gdGhpcy5vblRvdWNoU3RhcnRBdDtcbiAgICBjb25zdCBkaXN0YW5jZVRyYXZlbGxlZCA9IGRpc3RhbmNlKHN0YXJ0LnBhZ2VYLCBzdGFydC5wYWdlWSwgY3VycmVudC5wYWdlWCwgY3VycmVudC5wYWdlWSk7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjdXJyZW50KTtcbiAgICBjbGVhclRpbWVvdXQodGhpcy50YXBUaW1lb3V0KTtcbiAgICBpZiAodGltZUVsYXBzZWQgPCBkZWxheS50b3VjaCkge1xuXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzW29uRGlzdGFuY2VDaGFuZ2VdKTtcbiAgICB9IGVsc2UgaWYgKGRpc3RhbmNlVHJhdmVsbGVkID49IGRpc3RhbmNlJDEpIHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXNbb25EaXN0YW5jZUNoYW5nZV0pO1xuICAgICAgdGhpc1tzdGFydERyYWddKCk7XG4gICAgfVxuICB9XG5cbiAgW29uVG91Y2hNb3ZlXShldmVudCkge1xuICAgIGlmICghdGhpcy5kcmFnZ2luZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB7XG4gICAgICBwYWdlWCxcbiAgICAgIHBhZ2VZXG4gICAgfSA9IHRvdWNoQ29vcmRzKGV2ZW50KTtcbiAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KHBhZ2VYIC0gd2luZG93LnNjcm9sbFgsIHBhZ2VZIC0gd2luZG93LnNjcm9sbFkpO1xuICAgIGNvbnN0IGRyYWdNb3ZlRXZlbnQgPSBuZXcgRHJhZ01vdmVTZW5zb3JFdmVudCh7XG4gICAgICBjbGllbnRYOiBwYWdlWCxcbiAgICAgIGNsaWVudFk6IHBhZ2VZLFxuICAgICAgdGFyZ2V0LFxuICAgICAgY29udGFpbmVyOiB0aGlzLmN1cnJlbnRDb250YWluZXIsXG4gICAgICBvcmlnaW5hbEV2ZW50OiBldmVudFxuICAgIH0pO1xuICAgIHRoaXMudHJpZ2dlcih0aGlzLmN1cnJlbnRDb250YWluZXIsIGRyYWdNb3ZlRXZlbnQpO1xuICB9XG5cbiAgW29uVG91Y2hFbmRdKGV2ZW50KSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGFwVGltZW91dCk7XG4gICAgcHJldmVudFNjcm9sbGluZyA9IGZhbHNlO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpc1tvblRvdWNoRW5kXSk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCB0aGlzW29uVG91Y2hFbmRdKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzW29uRGlzdGFuY2VDaGFuZ2VdKTtcbiAgICBpZiAodGhpcy5jdXJyZW50Q29udGFpbmVyKSB7XG4gICAgICB0aGlzLmN1cnJlbnRDb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignY29udGV4dG1lbnUnLCBvbkNvbnRleHRNZW51KTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmRyYWdnaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXNbb25Ub3VjaE1vdmVdKTtcbiAgICBjb25zdCB7XG4gICAgICBwYWdlWCxcbiAgICAgIHBhZ2VZXG4gICAgfSA9IHRvdWNoQ29vcmRzKGV2ZW50KTtcbiAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KHBhZ2VYIC0gd2luZG93LnNjcm9sbFgsIHBhZ2VZIC0gd2luZG93LnNjcm9sbFkpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZHJhZ1N0b3BFdmVudCA9IG5ldyBEcmFnU3RvcFNlbnNvckV2ZW50KHtcbiAgICAgIGNsaWVudFg6IHBhZ2VYLFxuICAgICAgY2xpZW50WTogcGFnZVksXG4gICAgICB0YXJnZXQsXG4gICAgICBjb250YWluZXI6IHRoaXMuY3VycmVudENvbnRhaW5lcixcbiAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50XG4gICAgfSk7XG4gICAgdGhpcy50cmlnZ2VyKHRoaXMuY3VycmVudENvbnRhaW5lciwgZHJhZ1N0b3BFdmVudCk7XG4gICAgdGhpcy5jdXJyZW50Q29udGFpbmVyID0gbnVsbDtcbiAgICB0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG4gICAgdGhpcy5zdGFydEV2ZW50ID0gbnVsbDtcbiAgfVxufVxuZnVuY3Rpb24gb25Db250ZXh0TWVudShldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbn1cblxuZXhwb3J0IHsgVG91Y2hTZW5zb3IgYXMgZGVmYXVsdCB9O1xuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBTZW5zb3IgfSBmcm9tICcuL1NlbnNvci9TZW5zb3IubWpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTW91c2VTZW5zb3IgfSBmcm9tICcuL01vdXNlU2Vuc29yL01vdXNlU2Vuc29yLm1qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFRvdWNoU2Vuc29yIH0gZnJvbSAnLi9Ub3VjaFNlbnNvci9Ub3VjaFNlbnNvci5tanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBEcmFnU2Vuc29yIH0gZnJvbSAnLi9EcmFnU2Vuc29yL0RyYWdTZW5zb3IubWpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRm9yY2VUb3VjaFNlbnNvciB9IGZyb20gJy4vRm9yY2VUb3VjaFNlbnNvci9Gb3JjZVRvdWNoU2Vuc29yLm1qcyc7XG5leHBvcnQgeyBEcmFnTW92ZVNlbnNvckV2ZW50LCBEcmFnUHJlc3N1cmVTZW5zb3JFdmVudCwgRHJhZ1N0YXJ0U2Vuc29yRXZlbnQsIERyYWdTdG9wU2Vuc29yRXZlbnQsIFNlbnNvckV2ZW50IH0gZnJvbSAnLi9TZW5zb3JFdmVudC9TZW5zb3JFdmVudC5tanMnO1xuIiwiaW1wb3J0IGNsb3Nlc3QgZnJvbSAnLi4vc2hhcmVkL3V0aWxzL2Nsb3Nlc3QvY2xvc2VzdC5tanMnO1xuaW1wb3J0IERyYWdnYWJsZSBmcm9tICcuLi9EcmFnZ2FibGUvRHJhZ2dhYmxlLm1qcyc7XG5pbXBvcnQgJy4uL0RyYWdnYWJsZS9EcmFnRXZlbnQvRHJhZ0V2ZW50Lm1qcyc7XG5pbXBvcnQgJy4uL0RyYWdnYWJsZS9EcmFnZ2FibGVFdmVudC9EcmFnZ2FibGVFdmVudC5tanMnO1xuaW1wb3J0ICcuLi9EcmFnZ2FibGUvUGx1Z2lucy9Bbm5vdW5jZW1lbnQvQW5ub3VuY2VtZW50Lm1qcyc7XG5pbXBvcnQgJy4uL0RyYWdnYWJsZS9QbHVnaW5zL01pcnJvci9NaXJyb3JFdmVudC9NaXJyb3JFdmVudC5tanMnO1xuaW1wb3J0ICcuLi9EcmFnZ2FibGUvU2Vuc29ycy9TZW5zb3JFdmVudC9TZW5zb3JFdmVudC5tanMnO1xuaW1wb3J0ICcuLi9EcmFnZ2FibGUvU2Vuc29ycy9Ub3VjaFNlbnNvci9Ub3VjaFNlbnNvci5tanMnO1xuaW1wb3J0IHsgRHJvcHBhYmxlU3RhcnRFdmVudCwgRHJvcHBhYmxlU3RvcEV2ZW50LCBEcm9wcGFibGVEcm9wcGVkRXZlbnQsIERyb3BwYWJsZVJldHVybmVkRXZlbnQgfSBmcm9tICcuL0Ryb3BwYWJsZUV2ZW50L0Ryb3BwYWJsZUV2ZW50Lm1qcyc7XG5cbmNvbnN0IG9uRHJhZ1N0YXJ0ID0gU3ltYm9sKCdvbkRyYWdTdGFydCcpO1xuY29uc3Qgb25EcmFnTW92ZSA9IFN5bWJvbCgnb25EcmFnTW92ZScpO1xuY29uc3Qgb25EcmFnU3RvcCA9IFN5bWJvbCgnb25EcmFnU3RvcCcpO1xuY29uc3QgZHJvcEluRHJvcHpvbmUgPSBTeW1ib2woJ2Ryb3BJbkRyb3Bab25lJyk7XG5jb25zdCByZXR1cm5Ub09yaWdpbmFsRHJvcHpvbmUgPSBTeW1ib2woJ3JldHVyblRvT3JpZ2luYWxEcm9wem9uZScpO1xuY29uc3QgY2xvc2VzdERyb3B6b25lID0gU3ltYm9sKCdjbG9zZXN0RHJvcHpvbmUnKTtcbmNvbnN0IGdldERyb3B6b25lcyA9IFN5bWJvbCgnZ2V0RHJvcHpvbmVzJyk7XG5cbmZ1bmN0aW9uIG9uRHJvcHBhYmxlRHJvcHBlZERlZmF1bHRBbm5vdW5jZW1lbnQoe1xuICBkcmFnRXZlbnQsXG4gIGRyb3B6b25lXG59KSB7XG4gIGNvbnN0IHNvdXJjZVRleHQgPSBkcmFnRXZlbnQuc291cmNlLnRleHRDb250ZW50LnRyaW0oKSB8fCBkcmFnRXZlbnQuc291cmNlLmlkIHx8ICdkcmFnZ2FibGUgZWxlbWVudCc7XG4gIGNvbnN0IGRyb3B6b25lVGV4dCA9IGRyb3B6b25lLnRleHRDb250ZW50LnRyaW0oKSB8fCBkcm9wem9uZS5pZCB8fCAnZHJvcHBhYmxlIGVsZW1lbnQnO1xuICByZXR1cm4gYERyb3BwZWQgJHtzb3VyY2VUZXh0fSBpbnRvICR7ZHJvcHpvbmVUZXh0fWA7XG59XG5cbmZ1bmN0aW9uIG9uRHJvcHBhYmxlUmV0dXJuZWREZWZhdWx0QW5ub3VuY2VtZW50KHtcbiAgZHJhZ0V2ZW50LFxuICBkcm9wem9uZVxufSkge1xuICBjb25zdCBzb3VyY2VUZXh0ID0gZHJhZ0V2ZW50LnNvdXJjZS50ZXh0Q29udGVudC50cmltKCkgfHwgZHJhZ0V2ZW50LnNvdXJjZS5pZCB8fCAnZHJhZ2dhYmxlIGVsZW1lbnQnO1xuICBjb25zdCBkcm9wem9uZVRleHQgPSBkcm9wem9uZS50ZXh0Q29udGVudC50cmltKCkgfHwgZHJvcHpvbmUuaWQgfHwgJ2Ryb3BwYWJsZSBlbGVtZW50JztcbiAgcmV0dXJuIGBSZXR1cm5lZCAke3NvdXJjZVRleHR9IGZyb20gJHtkcm9wem9uZVRleHR9YDtcbn1cblxuY29uc3QgZGVmYXVsdEFubm91bmNlbWVudHMgPSB7XG4gICdkcm9wcGFibGU6ZHJvcHBlZCc6IG9uRHJvcHBhYmxlRHJvcHBlZERlZmF1bHRBbm5vdW5jZW1lbnQsXG4gICdkcm9wcGFibGU6cmV0dXJuZWQnOiBvbkRyb3BwYWJsZVJldHVybmVkRGVmYXVsdEFubm91bmNlbWVudFxufTtcbmNvbnN0IGRlZmF1bHRDbGFzc2VzID0ge1xuICAnZHJvcHBhYmxlOmFjdGl2ZSc6ICdkcmFnZ2FibGUtZHJvcHpvbmUtLWFjdGl2ZScsXG4gICdkcm9wcGFibGU6b2NjdXBpZWQnOiAnZHJhZ2dhYmxlLWRyb3B6b25lLS1vY2N1cGllZCdcbn07XG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgZHJvcHpvbmU6ICcuZHJhZ2dhYmxlLWRyb3BwYWJsZSdcbn07XG5cbmNsYXNzIERyb3BwYWJsZSBleHRlbmRzIERyYWdnYWJsZSB7XG5cbiAgY29uc3RydWN0b3IoY29udGFpbmVycyA9IFtdLCBvcHRpb25zID0ge30pIHtcbiAgICBzdXBlcihjb250YWluZXJzLCB7XG4gICAgICAuLi5kZWZhdWx0T3B0aW9ucyxcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgICBjbGFzc2VzOiB7XG4gICAgICAgIC4uLmRlZmF1bHRDbGFzc2VzLFxuICAgICAgICAuLi4ob3B0aW9ucy5jbGFzc2VzIHx8IHt9KVxuICAgICAgfSxcbiAgICAgIGFubm91bmNlbWVudHM6IHtcbiAgICAgICAgLi4uZGVmYXVsdEFubm91bmNlbWVudHMsXG4gICAgICAgIC4uLihvcHRpb25zLmFubm91bmNlbWVudHMgfHwge30pXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmRyb3B6b25lcyA9IG51bGw7XG5cbiAgICB0aGlzLmxhc3REcm9wem9uZSA9IG51bGw7XG5cbiAgICB0aGlzLmluaXRpYWxEcm9wem9uZSA9IG51bGw7XG4gICAgdGhpc1tvbkRyYWdTdGFydF0gPSB0aGlzW29uRHJhZ1N0YXJ0XS5iaW5kKHRoaXMpO1xuICAgIHRoaXNbb25EcmFnTW92ZV0gPSB0aGlzW29uRHJhZ01vdmVdLmJpbmQodGhpcyk7XG4gICAgdGhpc1tvbkRyYWdTdG9wXSA9IHRoaXNbb25EcmFnU3RvcF0uYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uKCdkcmFnOnN0YXJ0JywgdGhpc1tvbkRyYWdTdGFydF0pLm9uKCdkcmFnOm1vdmUnLCB0aGlzW29uRHJhZ01vdmVdKS5vbignZHJhZzpzdG9wJywgdGhpc1tvbkRyYWdTdG9wXSk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHN1cGVyLmRlc3Ryb3koKTtcbiAgICB0aGlzLm9mZignZHJhZzpzdGFydCcsIHRoaXNbb25EcmFnU3RhcnRdKS5vZmYoJ2RyYWc6bW92ZScsIHRoaXNbb25EcmFnTW92ZV0pLm9mZignZHJhZzpzdG9wJywgdGhpc1tvbkRyYWdTdG9wXSk7XG4gIH1cblxuICBbb25EcmFnU3RhcnRdKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmNhbmNlbGVkKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5kcm9wem9uZXMgPSBbLi4udGhpc1tnZXREcm9wem9uZXNdKCldO1xuICAgIGNvbnN0IGRyb3B6b25lID0gY2xvc2VzdChldmVudC5zZW5zb3JFdmVudC50YXJnZXQsIHRoaXMub3B0aW9ucy5kcm9wem9uZSk7XG4gICAgaWYgKCFkcm9wem9uZSkge1xuICAgICAgZXZlbnQuY2FuY2VsKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGRyb3BwYWJsZVN0YXJ0RXZlbnQgPSBuZXcgRHJvcHBhYmxlU3RhcnRFdmVudCh7XG4gICAgICBkcmFnRXZlbnQ6IGV2ZW50LFxuICAgICAgZHJvcHpvbmVcbiAgICB9KTtcbiAgICB0aGlzLnRyaWdnZXIoZHJvcHBhYmxlU3RhcnRFdmVudCk7XG4gICAgaWYgKGRyb3BwYWJsZVN0YXJ0RXZlbnQuY2FuY2VsZWQoKSkge1xuICAgICAgZXZlbnQuY2FuY2VsKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuaW5pdGlhbERyb3B6b25lID0gZHJvcHpvbmU7XG4gICAgZm9yIChjb25zdCBkcm9wem9uZUVsZW1lbnQgb2YgdGhpcy5kcm9wem9uZXMpIHtcbiAgICAgIGlmIChkcm9wem9uZUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuZ2V0Q2xhc3NOYW1lRm9yKCdkcm9wcGFibGU6b2NjdXBpZWQnKSkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBkcm9wem9uZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCguLi50aGlzLmdldENsYXNzTmFtZXNGb3IoJ2Ryb3BwYWJsZTphY3RpdmUnKSk7XG4gICAgfVxuICB9XG5cbiAgW29uRHJhZ01vdmVdKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmNhbmNlbGVkKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZHJvcHpvbmUgPSB0aGlzW2Nsb3Nlc3REcm9wem9uZV0oZXZlbnQuc2Vuc29yRXZlbnQudGFyZ2V0KTtcbiAgICBjb25zdCBvdmVyRW1wdHlEcm9wem9uZSA9IGRyb3B6b25lICYmICFkcm9wem9uZS5jbGFzc0xpc3QuY29udGFpbnModGhpcy5nZXRDbGFzc05hbWVGb3IoJ2Ryb3BwYWJsZTpvY2N1cGllZCcpKTtcbiAgICBpZiAob3ZlckVtcHR5RHJvcHpvbmUgJiYgdGhpc1tkcm9wSW5Ecm9wem9uZV0oZXZlbnQsIGRyb3B6b25lKSkge1xuICAgICAgdGhpcy5sYXN0RHJvcHpvbmUgPSBkcm9wem9uZTtcbiAgICB9IGVsc2UgaWYgKCghZHJvcHpvbmUgfHwgZHJvcHpvbmUgPT09IHRoaXMuaW5pdGlhbERyb3B6b25lKSAmJiB0aGlzLmxhc3REcm9wem9uZSkge1xuICAgICAgdGhpc1tyZXR1cm5Ub09yaWdpbmFsRHJvcHpvbmVdKGV2ZW50KTtcbiAgICAgIHRoaXMubGFzdERyb3B6b25lID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBbb25EcmFnU3RvcF0oZXZlbnQpIHtcbiAgICBjb25zdCBkcm9wcGFibGVTdG9wRXZlbnQgPSBuZXcgRHJvcHBhYmxlU3RvcEV2ZW50KHtcbiAgICAgIGRyYWdFdmVudDogZXZlbnQsXG4gICAgICBkcm9wem9uZTogdGhpcy5sYXN0RHJvcHpvbmUgfHwgdGhpcy5pbml0aWFsRHJvcHpvbmVcbiAgICB9KTtcbiAgICB0aGlzLnRyaWdnZXIoZHJvcHBhYmxlU3RvcEV2ZW50KTtcbiAgICBjb25zdCBvY2N1cGllZENsYXNzZXMgPSB0aGlzLmdldENsYXNzTmFtZXNGb3IoJ2Ryb3BwYWJsZTpvY2N1cGllZCcpO1xuICAgIGZvciAoY29uc3QgZHJvcHpvbmUgb2YgdGhpcy5kcm9wem9uZXMpIHtcbiAgICAgIGRyb3B6b25lLmNsYXNzTGlzdC5yZW1vdmUoLi4udGhpcy5nZXRDbGFzc05hbWVzRm9yKCdkcm9wcGFibGU6YWN0aXZlJykpO1xuICAgIH1cbiAgICBpZiAodGhpcy5sYXN0RHJvcHpvbmUgJiYgdGhpcy5sYXN0RHJvcHpvbmUgIT09IHRoaXMuaW5pdGlhbERyb3B6b25lKSB7XG4gICAgICB0aGlzLmluaXRpYWxEcm9wem9uZS5jbGFzc0xpc3QucmVtb3ZlKC4uLm9jY3VwaWVkQ2xhc3Nlcyk7XG4gICAgfVxuICAgIHRoaXMuZHJvcHpvbmVzID0gbnVsbDtcbiAgICB0aGlzLmxhc3REcm9wem9uZSA9IG51bGw7XG4gICAgdGhpcy5pbml0aWFsRHJvcHpvbmUgPSBudWxsO1xuICB9XG5cbiAgW2Ryb3BJbkRyb3B6b25lXShldmVudCwgZHJvcHpvbmUpIHtcbiAgICBjb25zdCBkcm9wcGFibGVEcm9wcGVkRXZlbnQgPSBuZXcgRHJvcHBhYmxlRHJvcHBlZEV2ZW50KHtcbiAgICAgIGRyYWdFdmVudDogZXZlbnQsXG4gICAgICBkcm9wem9uZVxuICAgIH0pO1xuICAgIHRoaXMudHJpZ2dlcihkcm9wcGFibGVEcm9wcGVkRXZlbnQpO1xuICAgIGlmIChkcm9wcGFibGVEcm9wcGVkRXZlbnQuY2FuY2VsZWQoKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBvY2N1cGllZENsYXNzZXMgPSB0aGlzLmdldENsYXNzTmFtZXNGb3IoJ2Ryb3BwYWJsZTpvY2N1cGllZCcpO1xuICAgIGlmICh0aGlzLmxhc3REcm9wem9uZSkge1xuICAgICAgdGhpcy5sYXN0RHJvcHpvbmUuY2xhc3NMaXN0LnJlbW92ZSguLi5vY2N1cGllZENsYXNzZXMpO1xuICAgIH1cbiAgICBkcm9wem9uZS5hcHBlbmRDaGlsZChldmVudC5zb3VyY2UpO1xuICAgIGRyb3B6b25lLmNsYXNzTGlzdC5hZGQoLi4ub2NjdXBpZWRDbGFzc2VzKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIFtyZXR1cm5Ub09yaWdpbmFsRHJvcHpvbmVdKGV2ZW50KSB7XG4gICAgY29uc3QgZHJvcHBhYmxlUmV0dXJuZWRFdmVudCA9IG5ldyBEcm9wcGFibGVSZXR1cm5lZEV2ZW50KHtcbiAgICAgIGRyYWdFdmVudDogZXZlbnQsXG4gICAgICBkcm9wem9uZTogdGhpcy5sYXN0RHJvcHpvbmVcbiAgICB9KTtcbiAgICB0aGlzLnRyaWdnZXIoZHJvcHBhYmxlUmV0dXJuZWRFdmVudCk7XG4gICAgaWYgKGRyb3BwYWJsZVJldHVybmVkRXZlbnQuY2FuY2VsZWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmluaXRpYWxEcm9wem9uZS5hcHBlbmRDaGlsZChldmVudC5zb3VyY2UpO1xuICAgIHRoaXMubGFzdERyb3B6b25lLmNsYXNzTGlzdC5yZW1vdmUoLi4udGhpcy5nZXRDbGFzc05hbWVzRm9yKCdkcm9wcGFibGU6b2NjdXBpZWQnKSk7XG4gIH1cblxuICBbY2xvc2VzdERyb3B6b25lXSh0YXJnZXQpIHtcbiAgICBpZiAoIXRoaXMuZHJvcHpvbmVzKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNsb3Nlc3QodGFyZ2V0LCB0aGlzLmRyb3B6b25lcyk7XG4gIH1cblxuICBbZ2V0RHJvcHpvbmVzXSgpIHtcbiAgICBjb25zdCBkcm9wem9uZSA9IHRoaXMub3B0aW9ucy5kcm9wem9uZTtcbiAgICBpZiAodHlwZW9mIGRyb3B6b25lID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZHJvcHpvbmUpO1xuICAgIH0gZWxzZSBpZiAoZHJvcHpvbmUgaW5zdGFuY2VvZiBOb2RlTGlzdCB8fCBkcm9wem9uZSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICByZXR1cm4gZHJvcHpvbmU7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZHJvcHpvbmUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBkcm9wem9uZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7IERyb3BwYWJsZSBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgeyBBYnN0cmFjdEV2ZW50IH0gZnJvbSAnLi4vLi4vc2hhcmVkL0Fic3RyYWN0RXZlbnQvQWJzdHJhY3RFdmVudC5tanMnO1xuXG5jbGFzcyBEcm9wcGFibGVFdmVudCBleHRlbmRzIEFic3RyYWN0RXZlbnQge1xuXG4gIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICBzdXBlcihkYXRhKTtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICB9XG5cbiAgZ2V0IGRyYWdFdmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLmRyYWdFdmVudDtcbiAgfVxufVxuRHJvcHBhYmxlRXZlbnQudHlwZSA9ICdkcm9wcGFibGUnO1xuXG5jbGFzcyBEcm9wcGFibGVTdGFydEV2ZW50IGV4dGVuZHMgRHJvcHBhYmxlRXZlbnQge1xuXG4gIGdldCBkcm9wem9uZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLmRyb3B6b25lO1xuICB9XG59XG5Ecm9wcGFibGVTdGFydEV2ZW50LnR5cGUgPSAnZHJvcHBhYmxlOnN0YXJ0JztcbkRyb3BwYWJsZVN0YXJ0RXZlbnQuY2FuY2VsYWJsZSA9IHRydWU7XG5cbmNsYXNzIERyb3BwYWJsZURyb3BwZWRFdmVudCBleHRlbmRzIERyb3BwYWJsZUV2ZW50IHtcblxuICBnZXQgZHJvcHpvbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5kcm9wem9uZTtcbiAgfVxufVxuRHJvcHBhYmxlRHJvcHBlZEV2ZW50LnR5cGUgPSAnZHJvcHBhYmxlOmRyb3BwZWQnO1xuRHJvcHBhYmxlRHJvcHBlZEV2ZW50LmNhbmNlbGFibGUgPSB0cnVlO1xuXG5jbGFzcyBEcm9wcGFibGVSZXR1cm5lZEV2ZW50IGV4dGVuZHMgRHJvcHBhYmxlRXZlbnQge1xuXG4gIGdldCBkcm9wem9uZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLmRyb3B6b25lO1xuICB9XG59XG5Ecm9wcGFibGVSZXR1cm5lZEV2ZW50LnR5cGUgPSAnZHJvcHBhYmxlOnJldHVybmVkJztcbkRyb3BwYWJsZVJldHVybmVkRXZlbnQuY2FuY2VsYWJsZSA9IHRydWU7XG5cbmNsYXNzIERyb3BwYWJsZVN0b3BFdmVudCBleHRlbmRzIERyb3BwYWJsZUV2ZW50IHtcblxuICBnZXQgZHJvcHpvbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5kcm9wem9uZTtcbiAgfVxufVxuRHJvcHBhYmxlU3RvcEV2ZW50LnR5cGUgPSAnZHJvcHBhYmxlOnN0b3AnO1xuRHJvcHBhYmxlU3RvcEV2ZW50LmNhbmNlbGFibGUgPSB0cnVlO1xuXG5leHBvcnQgeyBEcm9wcGFibGVEcm9wcGVkRXZlbnQsIERyb3BwYWJsZUV2ZW50LCBEcm9wcGFibGVSZXR1cm5lZEV2ZW50LCBEcm9wcGFibGVTdGFydEV2ZW50LCBEcm9wcGFibGVTdG9wRXZlbnQgfTtcbiIsImltcG9ydCB7IEFic3RyYWN0UGx1Z2luIH0gZnJvbSAnLi4vLi4vc2hhcmVkL0Fic3RyYWN0UGx1Z2luL0Fic3RyYWN0UGx1Z2luLm1qcyc7XG5pbXBvcnQgY2xvc2VzdCBmcm9tICcuLi8uLi9zaGFyZWQvdXRpbHMvY2xvc2VzdC9jbG9zZXN0Lm1qcyc7XG5pbXBvcnQgeyBDb2xsaWRhYmxlSW5FdmVudCwgQ29sbGlkYWJsZU91dEV2ZW50IH0gZnJvbSAnLi9Db2xsaWRhYmxlRXZlbnQvQ29sbGlkYWJsZUV2ZW50Lm1qcyc7XG5cbmNvbnN0IG9uRHJhZ01vdmUgPSBTeW1ib2woJ29uRHJhZ01vdmUnKTtcbmNvbnN0IG9uRHJhZ1N0b3AgPSBTeW1ib2woJ29uRHJhZ1N0b3AnKTtcbmNvbnN0IG9uUmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gU3ltYm9sKCdvblJlcXVlc3RBbmltYXRpb25GcmFtZScpO1xuXG5jbGFzcyBDb2xsaWRhYmxlIGV4dGVuZHMgQWJzdHJhY3RQbHVnaW4ge1xuXG4gIGNvbnN0cnVjdG9yKGRyYWdnYWJsZSkge1xuICAgIHN1cGVyKGRyYWdnYWJsZSk7XG5cbiAgICB0aGlzLmN1cnJlbnRseUNvbGxpZGluZ0VsZW1lbnQgPSBudWxsO1xuXG4gICAgdGhpcy5sYXN0Q29sbGlkaW5nRWxlbWVudCA9IG51bGw7XG5cbiAgICB0aGlzLmN1cnJlbnRBbmltYXRpb25GcmFtZSA9IG51bGw7XG4gICAgdGhpc1tvbkRyYWdNb3ZlXSA9IHRoaXNbb25EcmFnTW92ZV0uYmluZCh0aGlzKTtcbiAgICB0aGlzW29uRHJhZ1N0b3BdID0gdGhpc1tvbkRyYWdTdG9wXS5iaW5kKHRoaXMpO1xuICAgIHRoaXNbb25SZXF1ZXN0QW5pbWF0aW9uRnJhbWVdID0gdGhpc1tvblJlcXVlc3RBbmltYXRpb25GcmFtZV0uYmluZCh0aGlzKTtcbiAgfVxuXG4gIGF0dGFjaCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZS5vbignZHJhZzptb3ZlJywgdGhpc1tvbkRyYWdNb3ZlXSkub24oJ2RyYWc6c3RvcCcsIHRoaXNbb25EcmFnU3RvcF0pO1xuICB9XG5cbiAgZGV0YWNoKCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlLm9mZignZHJhZzptb3ZlJywgdGhpc1tvbkRyYWdNb3ZlXSkub2ZmKCdkcmFnOnN0b3AnLCB0aGlzW29uRHJhZ1N0b3BdKTtcbiAgfVxuXG4gIGdldENvbGxpZGFibGVzKCkge1xuICAgIGNvbnN0IGNvbGxpZGFibGVzID0gdGhpcy5kcmFnZ2FibGUub3B0aW9ucy5jb2xsaWRhYmxlcztcbiAgICBpZiAodHlwZW9mIGNvbGxpZGFibGVzID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoY29sbGlkYWJsZXMpKTtcbiAgICB9IGVsc2UgaWYgKGNvbGxpZGFibGVzIGluc3RhbmNlb2YgTm9kZUxpc3QgfHwgY29sbGlkYWJsZXMgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGNvbGxpZGFibGVzKTtcbiAgICB9IGVsc2UgaWYgKGNvbGxpZGFibGVzIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgIHJldHVybiBbY29sbGlkYWJsZXNdO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbGxpZGFibGVzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gY29sbGlkYWJsZXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgfVxuXG4gIFtvbkRyYWdNb3ZlXShldmVudCkge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnNlbnNvckV2ZW50LnRhcmdldDtcbiAgICB0aGlzLmN1cnJlbnRBbmltYXRpb25GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzW29uUmVxdWVzdEFuaW1hdGlvbkZyYW1lXSh0YXJnZXQpKTtcbiAgICBpZiAodGhpcy5jdXJyZW50bHlDb2xsaWRpbmdFbGVtZW50KSB7XG4gICAgICBldmVudC5jYW5jZWwoKTtcbiAgICB9XG4gICAgY29uc3QgY29sbGlkYWJsZUluRXZlbnQgPSBuZXcgQ29sbGlkYWJsZUluRXZlbnQoe1xuICAgICAgZHJhZ0V2ZW50OiBldmVudCxcbiAgICAgIGNvbGxpZGluZ0VsZW1lbnQ6IHRoaXMuY3VycmVudGx5Q29sbGlkaW5nRWxlbWVudFxuICAgIH0pO1xuICAgIGNvbnN0IGNvbGxpZGFibGVPdXRFdmVudCA9IG5ldyBDb2xsaWRhYmxlT3V0RXZlbnQoe1xuICAgICAgZHJhZ0V2ZW50OiBldmVudCxcbiAgICAgIGNvbGxpZGluZ0VsZW1lbnQ6IHRoaXMubGFzdENvbGxpZGluZ0VsZW1lbnRcbiAgICB9KTtcbiAgICBjb25zdCBlbnRlcmluZ0NvbGxpZGFibGUgPSBCb29sZWFuKHRoaXMuY3VycmVudGx5Q29sbGlkaW5nRWxlbWVudCAmJiB0aGlzLmxhc3RDb2xsaWRpbmdFbGVtZW50ICE9PSB0aGlzLmN1cnJlbnRseUNvbGxpZGluZ0VsZW1lbnQpO1xuICAgIGNvbnN0IGxlYXZpbmdDb2xsaWRhYmxlID0gQm9vbGVhbighdGhpcy5jdXJyZW50bHlDb2xsaWRpbmdFbGVtZW50ICYmIHRoaXMubGFzdENvbGxpZGluZ0VsZW1lbnQpO1xuICAgIGlmIChlbnRlcmluZ0NvbGxpZGFibGUpIHtcbiAgICAgIGlmICh0aGlzLmxhc3RDb2xsaWRpbmdFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuZHJhZ2dhYmxlLnRyaWdnZXIoY29sbGlkYWJsZU91dEV2ZW50KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZHJhZ2dhYmxlLnRyaWdnZXIoY29sbGlkYWJsZUluRXZlbnQpO1xuICAgIH0gZWxzZSBpZiAobGVhdmluZ0NvbGxpZGFibGUpIHtcbiAgICAgIHRoaXMuZHJhZ2dhYmxlLnRyaWdnZXIoY29sbGlkYWJsZU91dEV2ZW50KTtcbiAgICB9XG4gICAgdGhpcy5sYXN0Q29sbGlkaW5nRWxlbWVudCA9IHRoaXMuY3VycmVudGx5Q29sbGlkaW5nRWxlbWVudDtcbiAgfVxuXG4gIFtvbkRyYWdTdG9wXShldmVudCkge1xuICAgIGNvbnN0IGxhc3RDb2xsaWRpbmdFbGVtZW50ID0gdGhpcy5jdXJyZW50bHlDb2xsaWRpbmdFbGVtZW50IHx8IHRoaXMubGFzdENvbGxpZGluZ0VsZW1lbnQ7XG4gICAgY29uc3QgY29sbGlkYWJsZU91dEV2ZW50ID0gbmV3IENvbGxpZGFibGVPdXRFdmVudCh7XG4gICAgICBkcmFnRXZlbnQ6IGV2ZW50LFxuICAgICAgY29sbGlkaW5nRWxlbWVudDogbGFzdENvbGxpZGluZ0VsZW1lbnRcbiAgICB9KTtcbiAgICBpZiAobGFzdENvbGxpZGluZ0VsZW1lbnQpIHtcbiAgICAgIHRoaXMuZHJhZ2dhYmxlLnRyaWdnZXIoY29sbGlkYWJsZU91dEV2ZW50KTtcbiAgICB9XG4gICAgdGhpcy5sYXN0Q29sbGlkaW5nRWxlbWVudCA9IG51bGw7XG4gICAgdGhpcy5jdXJyZW50bHlDb2xsaWRpbmdFbGVtZW50ID0gbnVsbDtcbiAgfVxuXG4gIFtvblJlcXVlc3RBbmltYXRpb25GcmFtZV0odGFyZ2V0KSB7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IGNvbGxpZGFibGVzID0gdGhpcy5nZXRDb2xsaWRhYmxlcygpO1xuICAgICAgdGhpcy5jdXJyZW50bHlDb2xsaWRpbmdFbGVtZW50ID0gY2xvc2VzdCh0YXJnZXQsIGVsZW1lbnQgPT4gY29sbGlkYWJsZXMuaW5jbHVkZXMoZWxlbWVudCkpO1xuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IHsgQ29sbGlkYWJsZSBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgeyBBYnN0cmFjdEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL0Fic3RyYWN0RXZlbnQvQWJzdHJhY3RFdmVudC5tanMnO1xuXG5jbGFzcyBDb2xsaWRhYmxlRXZlbnQgZXh0ZW5kcyBBYnN0cmFjdEV2ZW50IHtcblxuICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgc3VwZXIoZGF0YSk7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgfVxuXG4gIGdldCBkcmFnRXZlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5kcmFnRXZlbnQ7XG4gIH1cbn1cbkNvbGxpZGFibGVFdmVudC50eXBlID0gJ2NvbGxpZGFibGUnO1xuXG5jbGFzcyBDb2xsaWRhYmxlSW5FdmVudCBleHRlbmRzIENvbGxpZGFibGVFdmVudCB7XG5cbiAgZ2V0IGNvbGxpZGluZ0VsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5jb2xsaWRpbmdFbGVtZW50O1xuICB9XG59XG5Db2xsaWRhYmxlSW5FdmVudC50eXBlID0gJ2NvbGxpZGFibGU6aW4nO1xuXG5jbGFzcyBDb2xsaWRhYmxlT3V0RXZlbnQgZXh0ZW5kcyBDb2xsaWRhYmxlRXZlbnQge1xuXG4gIGdldCBjb2xsaWRpbmdFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEuY29sbGlkaW5nRWxlbWVudDtcbiAgfVxufVxuQ29sbGlkYWJsZU91dEV2ZW50LnR5cGUgPSAnY29sbGlkYWJsZTpvdXQnO1xuXG5leHBvcnQgeyBDb2xsaWRhYmxlRXZlbnQsIENvbGxpZGFibGVJbkV2ZW50LCBDb2xsaWRhYmxlT3V0RXZlbnQgfTtcbiIsImltcG9ydCB7IGFwcGx5RGVjczIzMDUgYXMgX2FwcGx5RGVjczIzMDUgfSBmcm9tICcuLi8uLi9fdmlydHVhbC9fcm9sbHVwUGx1Z2luQmFiZWxIZWxwZXJzLm1qcyc7XG5pbXBvcnQgeyBBYnN0cmFjdFBsdWdpbiB9IGZyb20gJy4uLy4uL3NoYXJlZC9BYnN0cmFjdFBsdWdpbi9BYnN0cmFjdFBsdWdpbi5tanMnO1xuaW1wb3J0IHsgQXV0b0JpbmQgfSBmcm9tICcuLi8uLi9zaGFyZWQvdXRpbHMvZGVjb3JhdG9ycy9BdXRvQmluZC5tanMnO1xuaW1wb3J0IHJlcXVlc3ROZXh0QW5pbWF0aW9uRnJhbWUgZnJvbSAnLi4vLi4vc2hhcmVkL3V0aWxzL3JlcXVlc3ROZXh0QW5pbWF0aW9uRnJhbWUvcmVxdWVzdE5leHRBbmltYXRpb25GcmFtZS5tanMnO1xuaW1wb3J0IHsgaXNEcmFnT3ZlckV2ZW50IH0gZnJvbSAnLi4vLi4vRHJhZ2dhYmxlL0RyYWdFdmVudC9EcmFnRXZlbnQubWpzJztcblxudmFyIF9pbml0UHJvdG8sIF9jbGFzcztcblxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7fTtcblxuY2xhc3MgUmVzaXplTWlycm9yIGV4dGVuZHMgQWJzdHJhY3RQbHVnaW4ge1xuXG4gIGNvbnN0cnVjdG9yKGRyYWdnYWJsZSkge1xuICAgIF9pbml0UHJvdG8oc3VwZXIoZHJhZ2dhYmxlKSk7XG5cbiAgICB0aGlzLmxhc3RXaWR0aCA9IDA7XG5cbiAgICB0aGlzLmxhc3RIZWlnaHQgPSAwO1xuXG4gICAgdGhpcy5taXJyb3IgPSBudWxsO1xuICB9XG5cbiAgYXR0YWNoKCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlLm9uKCdtaXJyb3I6Y3JlYXRlZCcsIHRoaXMub25NaXJyb3JDcmVhdGVkKS5vbignZHJhZzpvdmVyJywgdGhpcy5vbkRyYWdPdmVyKS5vbignZHJhZzpvdmVyOmNvbnRhaW5lcicsIHRoaXMub25EcmFnT3Zlcik7XG4gIH1cblxuICBkZXRhY2goKSB7XG4gICAgdGhpcy5kcmFnZ2FibGUub2ZmKCdtaXJyb3I6Y3JlYXRlZCcsIHRoaXMub25NaXJyb3JDcmVhdGVkKS5vZmYoJ21pcnJvcjpkZXN0cm95JywgdGhpcy5vbk1pcnJvckRlc3Ryb3kpLm9mZignZHJhZzpvdmVyJywgdGhpcy5vbkRyYWdPdmVyKS5vZmYoJ2RyYWc6b3Zlcjpjb250YWluZXInLCB0aGlzLm9uRHJhZ092ZXIpO1xuICB9XG5cbiAgZ2V0T3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5kcmFnZ2FibGUub3B0aW9ucy5yZXNpemVNaXJyb3IgfHwge307XG4gIH1cblxuICBvbk1pcnJvckNyZWF0ZWQoe1xuICAgIG1pcnJvclxuICB9KSB7XG4gICAgdGhpcy5taXJyb3IgPSBtaXJyb3I7XG4gIH1cblxuICBvbk1pcnJvckRlc3Ryb3koKSB7XG4gICAgdGhpcy5taXJyb3IgPSBudWxsO1xuICB9XG5cbiAgb25EcmFnT3ZlcihkcmFnRXZlbnQpIHtcbiAgICB0aGlzLnJlc2l6ZShkcmFnRXZlbnQpO1xuICB9XG5cbiAgcmVzaXplKGRyYWdFdmVudCkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICBsZXQgb3ZlciA9IG51bGw7XG4gICAgICBjb25zdCB7XG4gICAgICAgIG92ZXJDb250YWluZXJcbiAgICAgIH0gPSBkcmFnRXZlbnQ7XG4gICAgICBpZiAodGhpcy5taXJyb3IgPT0gbnVsbCB8fCB0aGlzLm1pcnJvci5wYXJlbnROb2RlID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMubWlycm9yLnBhcmVudE5vZGUgIT09IG92ZXJDb250YWluZXIpIHtcbiAgICAgICAgb3ZlckNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1pcnJvcik7XG4gICAgICB9XG4gICAgICBpZiAoaXNEcmFnT3ZlckV2ZW50KGRyYWdFdmVudCkpIHtcbiAgICAgICAgb3ZlciA9IGRyYWdFdmVudC5vdmVyO1xuICAgICAgfVxuICAgICAgY29uc3Qgb3ZlckVsZW1lbnQgPSBvdmVyIHx8IHRoaXMuZHJhZ2dhYmxlLmdldERyYWdnYWJsZUVsZW1lbnRzRm9yQ29udGFpbmVyKG92ZXJDb250YWluZXIpWzBdO1xuICAgICAgaWYgKCFvdmVyRWxlbWVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICByZXF1ZXN0TmV4dEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgY29uc3Qgb3ZlclJlY3QgPSBvdmVyRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgaWYgKHRoaXMubWlycm9yID09IG51bGwgfHwgdGhpcy5sYXN0SGVpZ2h0ID09PSBvdmVyUmVjdC5oZWlnaHQgJiYgdGhpcy5sYXN0V2lkdGggPT09IG92ZXJSZWN0LndpZHRoKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubWlycm9yLnN0eWxlLndpZHRoID0gYCR7b3ZlclJlY3Qud2lkdGh9cHhgO1xuICAgICAgICB0aGlzLm1pcnJvci5zdHlsZS5oZWlnaHQgPSBgJHtvdmVyUmVjdC5oZWlnaHR9cHhgO1xuICAgICAgICB0aGlzLmxhc3RXaWR0aCA9IG92ZXJSZWN0LndpZHRoO1xuICAgICAgICB0aGlzLmxhc3RIZWlnaHQgPSBvdmVyUmVjdC5oZWlnaHQ7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuX2NsYXNzID0gUmVzaXplTWlycm9yO1xuW19pbml0UHJvdG9dID0gX2FwcGx5RGVjczIzMDUoX2NsYXNzLCBbW0F1dG9CaW5kLCAyLCBcIm9uTWlycm9yQ3JlYXRlZFwiXSwgW0F1dG9CaW5kLCAyLCBcIm9uTWlycm9yRGVzdHJveVwiXSwgW0F1dG9CaW5kLCAyLCBcIm9uRHJhZ092ZXJcIl1dLCBbXSwgMCwgdm9pZCAwLCBBYnN0cmFjdFBsdWdpbikuZTtcblxuZXhwb3J0IHsgUmVzaXplTWlycm9yIGFzIGRlZmF1bHQsIGRlZmF1bHRPcHRpb25zIH07XG4iLCJpbXBvcnQgeyBBYnN0cmFjdFBsdWdpbiB9IGZyb20gJy4uLy4uL3NoYXJlZC9BYnN0cmFjdFBsdWdpbi9BYnN0cmFjdFBsdWdpbi5tanMnO1xuaW1wb3J0IHsgU25hcEluRXZlbnQsIFNuYXBPdXRFdmVudCB9IGZyb20gJy4vU25hcHBhYmxlRXZlbnQvU25hcHBhYmxlRXZlbnQubWpzJztcblxuY29uc3Qgb25EcmFnU3RhcnQgPSBTeW1ib2woJ29uRHJhZ1N0YXJ0Jyk7XG5jb25zdCBvbkRyYWdTdG9wID0gU3ltYm9sKCdvbkRyYWdTdG9wJyk7XG5jb25zdCBvbkRyYWdPdmVyID0gU3ltYm9sKCdvbkRyYWdPdmVyJyk7XG5jb25zdCBvbkRyYWdPdXQgPSBTeW1ib2woJ29uRHJhZ091dCcpO1xuY29uc3Qgb25NaXJyb3JDcmVhdGVkID0gU3ltYm9sKCdvbk1pcnJvckNyZWF0ZWQnKTtcbmNvbnN0IG9uTWlycm9yRGVzdHJveSA9IFN5bWJvbCgnb25NaXJyb3JEZXN0cm95Jyk7XG5cbmNsYXNzIFNuYXBwYWJsZSBleHRlbmRzIEFic3RyYWN0UGx1Z2luIHtcblxuICBjb25zdHJ1Y3RvcihkcmFnZ2FibGUpIHtcbiAgICBzdXBlcihkcmFnZ2FibGUpO1xuXG4gICAgdGhpcy5maXJzdFNvdXJjZSA9IG51bGw7XG5cbiAgICB0aGlzLm1pcnJvciA9IG51bGw7XG4gICAgdGhpc1tvbkRyYWdTdGFydF0gPSB0aGlzW29uRHJhZ1N0YXJ0XS5iaW5kKHRoaXMpO1xuICAgIHRoaXNbb25EcmFnU3RvcF0gPSB0aGlzW29uRHJhZ1N0b3BdLmJpbmQodGhpcyk7XG4gICAgdGhpc1tvbkRyYWdPdmVyXSA9IHRoaXNbb25EcmFnT3Zlcl0uYmluZCh0aGlzKTtcbiAgICB0aGlzW29uRHJhZ091dF0gPSB0aGlzW29uRHJhZ091dF0uYmluZCh0aGlzKTtcbiAgICB0aGlzW29uTWlycm9yQ3JlYXRlZF0gPSB0aGlzW29uTWlycm9yQ3JlYXRlZF0uYmluZCh0aGlzKTtcbiAgICB0aGlzW29uTWlycm9yRGVzdHJveV0gPSB0aGlzW29uTWlycm9yRGVzdHJveV0uYmluZCh0aGlzKTtcbiAgfVxuXG4gIGF0dGFjaCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZS5vbignZHJhZzpzdGFydCcsIHRoaXNbb25EcmFnU3RhcnRdKS5vbignZHJhZzpzdG9wJywgdGhpc1tvbkRyYWdTdG9wXSkub24oJ2RyYWc6b3ZlcicsIHRoaXNbb25EcmFnT3Zlcl0pLm9uKCdkcmFnOm91dCcsIHRoaXNbb25EcmFnT3V0XSkub24oJ2Ryb3BwYWJsZTpvdmVyJywgdGhpc1tvbkRyYWdPdmVyXSkub24oJ2Ryb3BwYWJsZTpvdXQnLCB0aGlzW29uRHJhZ091dF0pLm9uKCdtaXJyb3I6Y3JlYXRlZCcsIHRoaXNbb25NaXJyb3JDcmVhdGVkXSkub24oJ21pcnJvcjpkZXN0cm95JywgdGhpc1tvbk1pcnJvckRlc3Ryb3ldKTtcbiAgfVxuXG4gIGRldGFjaCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZS5vZmYoJ2RyYWc6c3RhcnQnLCB0aGlzW29uRHJhZ1N0YXJ0XSkub2ZmKCdkcmFnOnN0b3AnLCB0aGlzW29uRHJhZ1N0b3BdKS5vZmYoJ2RyYWc6b3ZlcicsIHRoaXNbb25EcmFnT3Zlcl0pLm9mZignZHJhZzpvdXQnLCB0aGlzW29uRHJhZ091dF0pLm9mZignZHJvcHBhYmxlOm92ZXInLCB0aGlzW29uRHJhZ092ZXJdKS5vZmYoJ2Ryb3BwYWJsZTpvdXQnLCB0aGlzW29uRHJhZ091dF0pLm9mZignbWlycm9yOmNyZWF0ZWQnLCB0aGlzW29uTWlycm9yQ3JlYXRlZF0pLm9mZignbWlycm9yOmRlc3Ryb3knLCB0aGlzW29uTWlycm9yRGVzdHJveV0pO1xuICB9XG5cbiAgW29uRHJhZ1N0YXJ0XShldmVudCkge1xuICAgIGlmIChldmVudC5jYW5jZWxlZCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZmlyc3RTb3VyY2UgPSBldmVudC5zb3VyY2U7XG4gIH1cblxuICBbb25EcmFnU3RvcF0oKSB7XG4gICAgdGhpcy5maXJzdFNvdXJjZSA9IG51bGw7XG4gIH1cblxuICBbb25EcmFnT3Zlcl0oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuY2FuY2VsZWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzb3VyY2UgPSBldmVudC5zb3VyY2UgfHwgZXZlbnQuZHJhZ0V2ZW50LnNvdXJjZTtcbiAgICBpZiAoc291cmNlID09PSB0aGlzLmZpcnN0U291cmNlKSB7XG4gICAgICB0aGlzLmZpcnN0U291cmNlID0gbnVsbDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc25hcEluRXZlbnQgPSBuZXcgU25hcEluRXZlbnQoe1xuICAgICAgZHJhZ0V2ZW50OiBldmVudCxcbiAgICAgIHNuYXBwYWJsZTogZXZlbnQub3ZlciB8fCBldmVudC5kcm9wcGFibGVcbiAgICB9KTtcbiAgICB0aGlzLmRyYWdnYWJsZS50cmlnZ2VyKHNuYXBJbkV2ZW50KTtcbiAgICBpZiAoc25hcEluRXZlbnQuY2FuY2VsZWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5taXJyb3IpIHtcbiAgICAgIHRoaXMubWlycm9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuICAgIHNvdXJjZS5jbGFzc0xpc3QucmVtb3ZlKC4uLnRoaXMuZHJhZ2dhYmxlLmdldENsYXNzTmFtZXNGb3IoJ3NvdXJjZTpkcmFnZ2luZycpKTtcbiAgICBzb3VyY2UuY2xhc3NMaXN0LmFkZCguLi50aGlzLmRyYWdnYWJsZS5nZXRDbGFzc05hbWVzRm9yKCdzb3VyY2U6cGxhY2VkJykpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzb3VyY2UuY2xhc3NMaXN0LnJlbW92ZSguLi50aGlzLmRyYWdnYWJsZS5nZXRDbGFzc05hbWVzRm9yKCdzb3VyY2U6cGxhY2VkJykpO1xuICAgIH0sIHRoaXMuZHJhZ2dhYmxlLm9wdGlvbnMucGxhY2VkVGltZW91dCk7XG4gIH1cblxuICBbb25EcmFnT3V0XShldmVudCkge1xuICAgIGlmIChldmVudC5jYW5jZWxlZCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHNvdXJjZSA9IGV2ZW50LnNvdXJjZSB8fCBldmVudC5kcmFnRXZlbnQuc291cmNlO1xuICAgIGNvbnN0IHNuYXBPdXRFdmVudCA9IG5ldyBTbmFwT3V0RXZlbnQoe1xuICAgICAgZHJhZ0V2ZW50OiBldmVudCxcbiAgICAgIHNuYXBwYWJsZTogZXZlbnQub3ZlciB8fCBldmVudC5kcm9wcGFibGVcbiAgICB9KTtcbiAgICB0aGlzLmRyYWdnYWJsZS50cmlnZ2VyKHNuYXBPdXRFdmVudCk7XG4gICAgaWYgKHNuYXBPdXRFdmVudC5jYW5jZWxlZCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLm1pcnJvcikge1xuICAgICAgdGhpcy5taXJyb3Iuc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgIH1cbiAgICBzb3VyY2UuY2xhc3NMaXN0LmFkZCguLi50aGlzLmRyYWdnYWJsZS5nZXRDbGFzc05hbWVzRm9yKCdzb3VyY2U6ZHJhZ2dpbmcnKSk7XG4gIH1cblxuICBbb25NaXJyb3JDcmVhdGVkXSh7XG4gICAgbWlycm9yXG4gIH0pIHtcbiAgICB0aGlzLm1pcnJvciA9IG1pcnJvcjtcbiAgfVxuXG4gIFtvbk1pcnJvckRlc3Ryb3ldKCkge1xuICAgIHRoaXMubWlycm9yID0gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgeyBTbmFwcGFibGUgYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IHsgQWJzdHJhY3RFdmVudCB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9BYnN0cmFjdEV2ZW50L0Fic3RyYWN0RXZlbnQubWpzJztcblxuY2xhc3MgU25hcEV2ZW50IGV4dGVuZHMgQWJzdHJhY3RFdmVudCB7XG5cbiAgZ2V0IGRyYWdFdmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLmRyYWdFdmVudDtcbiAgfVxuXG4gIGdldCBzbmFwcGFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5zbmFwcGFibGU7XG4gIH1cbn1cblxuU25hcEV2ZW50LnR5cGUgPSAnc25hcCc7XG5jbGFzcyBTbmFwSW5FdmVudCBleHRlbmRzIFNuYXBFdmVudCB7fVxuXG5TbmFwSW5FdmVudC50eXBlID0gJ3NuYXA6aW4nO1xuU25hcEluRXZlbnQuY2FuY2VsYWJsZSA9IHRydWU7XG5jbGFzcyBTbmFwT3V0RXZlbnQgZXh0ZW5kcyBTbmFwRXZlbnQge31cblNuYXBPdXRFdmVudC50eXBlID0gJ3NuYXA6b3V0JztcblNuYXBPdXRFdmVudC5jYW5jZWxhYmxlID0gdHJ1ZTtcblxuZXhwb3J0IHsgU25hcEV2ZW50LCBTbmFwSW5FdmVudCwgU25hcE91dEV2ZW50IH07XG4iLCJpbXBvcnQgeyBBYnN0cmFjdFBsdWdpbiB9IGZyb20gJy4uLy4uL3NoYXJlZC9BYnN0cmFjdFBsdWdpbi9BYnN0cmFjdFBsdWdpbi5tanMnO1xuXG5jb25zdCBvblNvcnRhYmxlU29ydGVkID0gU3ltYm9sKCdvblNvcnRhYmxlU29ydGVkJyk7XG5jb25zdCBvblNvcnRhYmxlU29ydCA9IFN5bWJvbCgnb25Tb3J0YWJsZVNvcnQnKTtcblxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gIGR1cmF0aW9uOiAxNTAsXG4gIGVhc2luZ0Z1bmN0aW9uOiAnZWFzZS1pbi1vdXQnXG59O1xuXG5jbGFzcyBTb3J0QW5pbWF0aW9uIGV4dGVuZHMgQWJzdHJhY3RQbHVnaW4ge1xuXG4gIGNvbnN0cnVjdG9yKGRyYWdnYWJsZSkge1xuICAgIHN1cGVyKGRyYWdnYWJsZSk7XG5cbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICAuLi5kZWZhdWx0T3B0aW9ucyxcbiAgICAgIC4uLnRoaXMuZ2V0T3B0aW9ucygpXG4gICAgfTtcblxuICAgIHRoaXMubGFzdEFuaW1hdGlvbkZyYW1lID0gbnVsbDtcbiAgICB0aGlzLmxhc3RFbGVtZW50cyA9IFtdO1xuICAgIHRoaXNbb25Tb3J0YWJsZVNvcnRlZF0gPSB0aGlzW29uU29ydGFibGVTb3J0ZWRdLmJpbmQodGhpcyk7XG4gICAgdGhpc1tvblNvcnRhYmxlU29ydF0gPSB0aGlzW29uU29ydGFibGVTb3J0XS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgYXR0YWNoKCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlLm9uKCdzb3J0YWJsZTpzb3J0JywgdGhpc1tvblNvcnRhYmxlU29ydF0pO1xuICAgIHRoaXMuZHJhZ2dhYmxlLm9uKCdzb3J0YWJsZTpzb3J0ZWQnLCB0aGlzW29uU29ydGFibGVTb3J0ZWRdKTtcbiAgfVxuXG4gIGRldGFjaCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZS5vZmYoJ3NvcnRhYmxlOnNvcnQnLCB0aGlzW29uU29ydGFibGVTb3J0XSk7XG4gICAgdGhpcy5kcmFnZ2FibGUub2ZmKCdzb3J0YWJsZTpzb3J0ZWQnLCB0aGlzW29uU29ydGFibGVTb3J0ZWRdKTtcbiAgfVxuXG4gIGdldE9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlLm9wdGlvbnMuc29ydEFuaW1hdGlvbiB8fCB7fTtcbiAgfVxuXG4gIFtvblNvcnRhYmxlU29ydF0oe1xuICAgIGRyYWdFdmVudFxuICB9KSB7XG4gICAgY29uc3Qge1xuICAgICAgc291cmNlQ29udGFpbmVyXG4gICAgfSA9IGRyYWdFdmVudDtcbiAgICBjb25zdCBlbGVtZW50cyA9IHRoaXMuZHJhZ2dhYmxlLmdldERyYWdnYWJsZUVsZW1lbnRzRm9yQ29udGFpbmVyKHNvdXJjZUNvbnRhaW5lcik7XG4gICAgdGhpcy5sYXN0RWxlbWVudHMgPSBBcnJheS5mcm9tKGVsZW1lbnRzKS5tYXAoZWwgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZG9tRWw6IGVsLFxuICAgICAgICBvZmZzZXRUb3A6IGVsLm9mZnNldFRvcCxcbiAgICAgICAgb2Zmc2V0TGVmdDogZWwub2Zmc2V0TGVmdFxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIFtvblNvcnRhYmxlU29ydGVkXSh7XG4gICAgb2xkSW5kZXgsXG4gICAgbmV3SW5kZXhcbiAgfSkge1xuICAgIGlmIChvbGRJbmRleCA9PT0gbmV3SW5kZXgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZWZmZWN0ZWRFbGVtZW50cyA9IFtdO1xuICAgIGxldCBzdGFydDtcbiAgICBsZXQgZW5kO1xuICAgIGxldCBudW07XG4gICAgaWYgKG9sZEluZGV4ID4gbmV3SW5kZXgpIHtcbiAgICAgIHN0YXJ0ID0gbmV3SW5kZXg7XG4gICAgICBlbmQgPSBvbGRJbmRleCAtIDE7XG4gICAgICBudW0gPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGFydCA9IG9sZEluZGV4ICsgMTtcbiAgICAgIGVuZCA9IG5ld0luZGV4O1xuICAgICAgbnVtID0gLTE7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8PSBlbmQ7IGkrKykge1xuICAgICAgY29uc3QgZnJvbSA9IHRoaXMubGFzdEVsZW1lbnRzW2ldO1xuICAgICAgY29uc3QgdG8gPSB0aGlzLmxhc3RFbGVtZW50c1tpICsgbnVtXTtcbiAgICAgIGVmZmVjdGVkRWxlbWVudHMucHVzaCh7XG4gICAgICAgIGZyb20sXG4gICAgICAgIHRvXG4gICAgICB9KTtcbiAgICB9XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5sYXN0QW5pbWF0aW9uRnJhbWUpO1xuXG4gICAgdGhpcy5sYXN0QW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgZWZmZWN0ZWRFbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4gYW5pbWF0ZShlbGVtZW50LCB0aGlzLm9wdGlvbnMpKTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhbmltYXRlKHtcbiAgZnJvbSxcbiAgdG9cbn0sIHtcbiAgZHVyYXRpb24sXG4gIGVhc2luZ0Z1bmN0aW9uXG59KSB7XG4gIGNvbnN0IGRvbUVsID0gZnJvbS5kb21FbDtcbiAgY29uc3QgeCA9IGZyb20ub2Zmc2V0TGVmdCAtIHRvLm9mZnNldExlZnQ7XG4gIGNvbnN0IHkgPSBmcm9tLm9mZnNldFRvcCAtIHRvLm9mZnNldFRvcDtcbiAgZG9tRWwuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgZG9tRWwuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCR7eH1weCwgJHt5fXB4LCAwKWA7XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgZG9tRWwuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHJlc2V0RWxlbWVudE9uVHJhbnNpdGlvbkVuZCk7XG4gICAgZG9tRWwuc3R5bGUudHJhbnNpdGlvbiA9IGB0cmFuc2Zvcm0gJHtkdXJhdGlvbn1tcyAke2Vhc2luZ0Z1bmN0aW9ufWA7XG4gICAgZG9tRWwuc3R5bGUudHJhbnNmb3JtID0gJyc7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZXNldEVsZW1lbnRPblRyYW5zaXRpb25FbmQoZXZlbnQpIHtcbiAgZXZlbnQudGFyZ2V0LnN0eWxlLnRyYW5zaXRpb24gPSAnJztcbiAgZXZlbnQudGFyZ2V0LnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnJztcbiAgZXZlbnQudGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCByZXNldEVsZW1lbnRPblRyYW5zaXRpb25FbmQpO1xufVxuXG5leHBvcnQgeyBTb3J0QW5pbWF0aW9uIGFzIGRlZmF1bHQsIGRlZmF1bHRPcHRpb25zIH07XG4iLCJpbXBvcnQgeyBhcHBseURlY3MyMzA1IGFzIF9hcHBseURlY3MyMzA1IH0gZnJvbSAnLi4vLi4vX3ZpcnR1YWwvX3JvbGx1cFBsdWdpbkJhYmVsSGVscGVycy5tanMnO1xuaW1wb3J0IHsgQWJzdHJhY3RQbHVnaW4gfSBmcm9tICcuLi8uLi9zaGFyZWQvQWJzdHJhY3RQbHVnaW4vQWJzdHJhY3RQbHVnaW4ubWpzJztcbmltcG9ydCB7IEF1dG9CaW5kIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3V0aWxzL2RlY29yYXRvcnMvQXV0b0JpbmQubWpzJztcblxudmFyIF9pbml0UHJvdG8sIF9jbGFzcztcblxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gIGR1cmF0aW9uOiAxNTAsXG4gIGVhc2luZ0Z1bmN0aW9uOiAnZWFzZS1pbi1vdXQnLFxuICBob3Jpem9udGFsOiBmYWxzZVxufTtcblxuY2xhc3MgU3dhcEFuaW1hdGlvbiBleHRlbmRzIEFic3RyYWN0UGx1Z2luIHtcblxuICBjb25zdHJ1Y3RvcihkcmFnZ2FibGUpIHtcbiAgICBfaW5pdFByb3RvKHN1cGVyKGRyYWdnYWJsZSkpO1xuXG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgLi4uZGVmYXVsdE9wdGlvbnMsXG4gICAgICAuLi50aGlzLmdldE9wdGlvbnMoKVxuICAgIH07XG5cbiAgICB0aGlzLmxhc3RBbmltYXRpb25GcmFtZSA9IG51bGw7XG4gIH1cblxuICBhdHRhY2goKSB7XG4gICAgdGhpcy5kcmFnZ2FibGUub24oJ3NvcnRhYmxlOnNvcnRlZCcsIHRoaXMub25Tb3J0YWJsZVNvcnRlZCk7XG4gIH1cblxuICBkZXRhY2goKSB7XG4gICAgdGhpcy5kcmFnZ2FibGUub2ZmKCdzb3J0YWJsZTpzb3J0ZWQnLCB0aGlzLm9uU29ydGFibGVTb3J0ZWQpO1xuICB9XG5cbiAgZ2V0T3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5kcmFnZ2FibGUub3B0aW9ucy5zd2FwQW5pbWF0aW9uIHx8IHt9O1xuICB9XG5cbiAgb25Tb3J0YWJsZVNvcnRlZCh7XG4gICAgb2xkSW5kZXgsXG4gICAgbmV3SW5kZXgsXG4gICAgZHJhZ0V2ZW50XG4gIH0pIHtcbiAgICBjb25zdCB7XG4gICAgICBzb3VyY2UsXG4gICAgICBvdmVyXG4gICAgfSA9IGRyYWdFdmVudDtcbiAgICBpZiAodGhpcy5sYXN0QW5pbWF0aW9uRnJhbWUpIHtcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMubGFzdEFuaW1hdGlvbkZyYW1lKTtcbiAgICB9XG5cbiAgICB0aGlzLmxhc3RBbmltYXRpb25GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICBpZiAob2xkSW5kZXggPj0gbmV3SW5kZXgpIHtcbiAgICAgICAgYW5pbWF0ZShzb3VyY2UsIG92ZXIsIHRoaXMub3B0aW9ucyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbmltYXRlKG92ZXIsIHNvdXJjZSwgdGhpcy5vcHRpb25zKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5fY2xhc3MgPSBTd2FwQW5pbWF0aW9uO1xuW19pbml0UHJvdG9dID0gX2FwcGx5RGVjczIzMDUoX2NsYXNzLCBbW0F1dG9CaW5kLCAyLCBcIm9uU29ydGFibGVTb3J0ZWRcIl1dLCBbXSwgMCwgdm9pZCAwLCBBYnN0cmFjdFBsdWdpbikuZTtcbmZ1bmN0aW9uIGFuaW1hdGUoZnJvbSwgdG8sIHtcbiAgZHVyYXRpb24sXG4gIGVhc2luZ0Z1bmN0aW9uLFxuICBob3Jpem9udGFsXG59KSB7XG4gIGZvciAoY29uc3QgZWxlbWVudCBvZiBbZnJvbSwgdG9dKSB7XG4gICAgZWxlbWVudC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICB9XG4gIGlmIChob3Jpem9udGFsKSB7XG4gICAgY29uc3Qgd2lkdGggPSBmcm9tLm9mZnNldFdpZHRoO1xuICAgIGZyb20uc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCR7d2lkdGh9cHgsIDAsIDApYDtcbiAgICB0by5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoLSR7d2lkdGh9cHgsIDAsIDApYDtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBoZWlnaHQgPSBmcm9tLm9mZnNldEhlaWdodDtcbiAgICBmcm9tLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgwLCAke2hlaWdodH1weCwgMClgO1xuICAgIHRvLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgwLCAtJHtoZWlnaHR9cHgsIDApYDtcbiAgfVxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBbZnJvbSwgdG9dKSB7XG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCByZXNldEVsZW1lbnRPblRyYW5zaXRpb25FbmQpO1xuICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uID0gYHRyYW5zZm9ybSAke2R1cmF0aW9ufW1zICR7ZWFzaW5nRnVuY3Rpb259YDtcbiAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gJyc7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVzZXRFbGVtZW50T25UcmFuc2l0aW9uRW5kKGV2ZW50KSB7XG4gIGlmIChldmVudC50YXJnZXQgPT0gbnVsbCB8fCAhaXNIVE1MRWxlbWVudChldmVudC50YXJnZXQpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGV2ZW50LnRhcmdldC5zdHlsZS50cmFuc2l0aW9uID0gJyc7XG4gIGV2ZW50LnRhcmdldC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJyc7XG4gIGV2ZW50LnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgcmVzZXRFbGVtZW50T25UcmFuc2l0aW9uRW5kKTtcbn1cbmZ1bmN0aW9uIGlzSFRNTEVsZW1lbnQoZXZlbnRUYXJnZXQpIHtcbiAgcmV0dXJuIEJvb2xlYW4oJ3N0eWxlJyBpbiBldmVudFRhcmdldCk7XG59XG5cbmV4cG9ydCB7IFN3YXBBbmltYXRpb24gYXMgZGVmYXVsdCwgZGVmYXVsdE9wdGlvbnMgfTtcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgQ29sbGlkYWJsZSB9IGZyb20gJy4vQ29sbGlkYWJsZS9Db2xsaWRhYmxlLm1qcyc7XG5pbXBvcnQgJy4vQ29sbGlkYWJsZS9Db2xsaWRhYmxlRXZlbnQvQ29sbGlkYWJsZUV2ZW50Lm1qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFJlc2l6ZU1pcnJvciwgZGVmYXVsdE9wdGlvbnMgYXMgZGVmYXVsdFJlc2l6ZU1pcnJvck9wdGlvbnMgfSBmcm9tICcuL1Jlc2l6ZU1pcnJvci9SZXNpemVNaXJyb3IubWpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU25hcHBhYmxlIH0gZnJvbSAnLi9TbmFwcGFibGUvU25hcHBhYmxlLm1qcyc7XG5pbXBvcnQgJy4vU25hcHBhYmxlL1NuYXBwYWJsZUV2ZW50L1NuYXBwYWJsZUV2ZW50Lm1qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFN3YXBBbmltYXRpb24sIGRlZmF1bHRPcHRpb25zIGFzIGRlZmF1bHRTd2FwQW5pbWF0aW9uT3B0aW9ucyB9IGZyb20gJy4vU3dhcEFuaW1hdGlvbi9Td2FwQW5pbWF0aW9uLm1qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNvcnRBbmltYXRpb24sIGRlZmF1bHRPcHRpb25zIGFzIGRlZmF1bHRTb3J0QW5pbWF0aW9uT3B0aW9ucyB9IGZyb20gJy4vU29ydEFuaW1hdGlvbi9Tb3J0QW5pbWF0aW9uLm1qcyc7XG4iLCJpbXBvcnQgRHJhZ2dhYmxlIGZyb20gJy4uL0RyYWdnYWJsZS9EcmFnZ2FibGUubWpzJztcbmltcG9ydCAnLi4vRHJhZ2dhYmxlL0RyYWdFdmVudC9EcmFnRXZlbnQubWpzJztcbmltcG9ydCAnLi4vRHJhZ2dhYmxlL0RyYWdnYWJsZUV2ZW50L0RyYWdnYWJsZUV2ZW50Lm1qcyc7XG5pbXBvcnQgJy4uL0RyYWdnYWJsZS9QbHVnaW5zL0Fubm91bmNlbWVudC9Bbm5vdW5jZW1lbnQubWpzJztcbmltcG9ydCAnLi4vRHJhZ2dhYmxlL1BsdWdpbnMvTWlycm9yL01pcnJvckV2ZW50L01pcnJvckV2ZW50Lm1qcyc7XG5pbXBvcnQgJy4uL0RyYWdnYWJsZS9TZW5zb3JzL1NlbnNvckV2ZW50L1NlbnNvckV2ZW50Lm1qcyc7XG5pbXBvcnQgJy4uL0RyYWdnYWJsZS9TZW5zb3JzL1RvdWNoU2Vuc29yL1RvdWNoU2Vuc29yLm1qcyc7XG5pbXBvcnQgeyBTb3J0YWJsZVN0YXJ0RXZlbnQsIFNvcnRhYmxlU29ydEV2ZW50LCBTb3J0YWJsZVNvcnRlZEV2ZW50LCBTb3J0YWJsZVN0b3BFdmVudCB9IGZyb20gJy4vU29ydGFibGVFdmVudC9Tb3J0YWJsZUV2ZW50Lm1qcyc7XG5cbmNvbnN0IG9uRHJhZ1N0YXJ0ID0gU3ltYm9sKCdvbkRyYWdTdGFydCcpO1xuY29uc3Qgb25EcmFnT3ZlckNvbnRhaW5lciA9IFN5bWJvbCgnb25EcmFnT3ZlckNvbnRhaW5lcicpO1xuY29uc3Qgb25EcmFnT3ZlciA9IFN5bWJvbCgnb25EcmFnT3ZlcicpO1xuY29uc3Qgb25EcmFnU3RvcCA9IFN5bWJvbCgnb25EcmFnU3RvcCcpO1xuXG5mdW5jdGlvbiBvblNvcnRhYmxlU29ydGVkRGVmYXVsdEFubm91bmNlbWVudCh7XG4gIGRyYWdFdmVudFxufSkge1xuICBjb25zdCBzb3VyY2VUZXh0ID0gZHJhZ0V2ZW50LnNvdXJjZS50ZXh0Q29udGVudC50cmltKCkgfHwgZHJhZ0V2ZW50LnNvdXJjZS5pZCB8fCAnc29ydGFibGUgZWxlbWVudCc7XG4gIGlmIChkcmFnRXZlbnQub3Zlcikge1xuICAgIGNvbnN0IG92ZXJUZXh0ID0gZHJhZ0V2ZW50Lm92ZXIudGV4dENvbnRlbnQudHJpbSgpIHx8IGRyYWdFdmVudC5vdmVyLmlkIHx8ICdzb3J0YWJsZSBlbGVtZW50JztcbiAgICBjb25zdCBpc0ZvbGxvd2luZyA9IGRyYWdFdmVudC5zb3VyY2UuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZHJhZ0V2ZW50Lm92ZXIpICYgTm9kZS5ET0NVTUVOVF9QT1NJVElPTl9GT0xMT1dJTkc7XG4gICAgaWYgKGlzRm9sbG93aW5nKSB7XG4gICAgICByZXR1cm4gYFBsYWNlZCAke3NvdXJjZVRleHR9IGFmdGVyICR7b3ZlclRleHR9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGBQbGFjZWQgJHtzb3VyY2VUZXh0fSBiZWZvcmUgJHtvdmVyVGV4dH1gO1xuICAgIH1cbiAgfSBlbHNlIHtcblxuICAgIHJldHVybiBgUGxhY2VkICR7c291cmNlVGV4dH0gaW50byBhIGRpZmZlcmVudCBjb250YWluZXJgO1xuICB9XG59XG5cbmNvbnN0IGRlZmF1bHRBbm5vdW5jZW1lbnRzID0ge1xuICAnc29ydGFibGU6c29ydGVkJzogb25Tb3J0YWJsZVNvcnRlZERlZmF1bHRBbm5vdW5jZW1lbnRcbn07XG5cbmNsYXNzIFNvcnRhYmxlIGV4dGVuZHMgRHJhZ2dhYmxlIHtcblxuICBjb25zdHJ1Y3Rvcihjb250YWluZXJzID0gW10sIG9wdGlvbnMgPSB7fSkge1xuICAgIHN1cGVyKGNvbnRhaW5lcnMsIHtcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgICBhbm5vdW5jZW1lbnRzOiB7XG4gICAgICAgIC4uLmRlZmF1bHRBbm5vdW5jZW1lbnRzLFxuICAgICAgICAuLi4ob3B0aW9ucy5hbm5vdW5jZW1lbnRzIHx8IHt9KVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5zdGFydEluZGV4ID0gbnVsbDtcblxuICAgIHRoaXMuc3RhcnRDb250YWluZXIgPSBudWxsO1xuICAgIHRoaXNbb25EcmFnU3RhcnRdID0gdGhpc1tvbkRyYWdTdGFydF0uYmluZCh0aGlzKTtcbiAgICB0aGlzW29uRHJhZ092ZXJDb250YWluZXJdID0gdGhpc1tvbkRyYWdPdmVyQ29udGFpbmVyXS5iaW5kKHRoaXMpO1xuICAgIHRoaXNbb25EcmFnT3Zlcl0gPSB0aGlzW29uRHJhZ092ZXJdLmJpbmQodGhpcyk7XG4gICAgdGhpc1tvbkRyYWdTdG9wXSA9IHRoaXNbb25EcmFnU3RvcF0uYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uKCdkcmFnOnN0YXJ0JywgdGhpc1tvbkRyYWdTdGFydF0pLm9uKCdkcmFnOm92ZXI6Y29udGFpbmVyJywgdGhpc1tvbkRyYWdPdmVyQ29udGFpbmVyXSkub24oJ2RyYWc6b3ZlcicsIHRoaXNbb25EcmFnT3Zlcl0pLm9uKCdkcmFnOnN0b3AnLCB0aGlzW29uRHJhZ1N0b3BdKTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgc3VwZXIuZGVzdHJveSgpO1xuICAgIHRoaXMub2ZmKCdkcmFnOnN0YXJ0JywgdGhpc1tvbkRyYWdTdGFydF0pLm9mZignZHJhZzpvdmVyOmNvbnRhaW5lcicsIHRoaXNbb25EcmFnT3ZlckNvbnRhaW5lcl0pLm9mZignZHJhZzpvdmVyJywgdGhpc1tvbkRyYWdPdmVyXSkub2ZmKCdkcmFnOnN0b3AnLCB0aGlzW29uRHJhZ1N0b3BdKTtcbiAgfVxuXG4gIGluZGV4KGVsZW1lbnQpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTb3J0YWJsZUVsZW1lbnRzRm9yQ29udGFpbmVyKGVsZW1lbnQucGFyZW50Tm9kZSkuaW5kZXhPZihlbGVtZW50KTtcbiAgfVxuXG4gIGdldFNvcnRhYmxlRWxlbWVudHNGb3JDb250YWluZXIoY29udGFpbmVyKSB7XG4gICAgY29uc3QgYWxsU29ydGFibGVFbGVtZW50cyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKHRoaXMub3B0aW9ucy5kcmFnZ2FibGUpO1xuICAgIHJldHVybiBbLi4uYWxsU29ydGFibGVFbGVtZW50c10uZmlsdGVyKGNoaWxkRWxlbWVudCA9PiB7XG4gICAgICByZXR1cm4gY2hpbGRFbGVtZW50ICE9PSB0aGlzLm9yaWdpbmFsU291cmNlICYmIGNoaWxkRWxlbWVudCAhPT0gdGhpcy5taXJyb3IgJiYgY2hpbGRFbGVtZW50LnBhcmVudE5vZGUgPT09IGNvbnRhaW5lcjtcbiAgICB9KTtcbiAgfVxuXG4gIFtvbkRyYWdTdGFydF0oZXZlbnQpIHtcbiAgICB0aGlzLnN0YXJ0Q29udGFpbmVyID0gZXZlbnQuc291cmNlLnBhcmVudE5vZGU7XG4gICAgdGhpcy5zdGFydEluZGV4ID0gdGhpcy5pbmRleChldmVudC5zb3VyY2UpO1xuICAgIGNvbnN0IHNvcnRhYmxlU3RhcnRFdmVudCA9IG5ldyBTb3J0YWJsZVN0YXJ0RXZlbnQoe1xuICAgICAgZHJhZ0V2ZW50OiBldmVudCxcbiAgICAgIHN0YXJ0SW5kZXg6IHRoaXMuc3RhcnRJbmRleCxcbiAgICAgIHN0YXJ0Q29udGFpbmVyOiB0aGlzLnN0YXJ0Q29udGFpbmVyXG4gICAgfSk7XG4gICAgdGhpcy50cmlnZ2VyKHNvcnRhYmxlU3RhcnRFdmVudCk7XG4gICAgaWYgKHNvcnRhYmxlU3RhcnRFdmVudC5jYW5jZWxlZCgpKSB7XG4gICAgICBldmVudC5jYW5jZWwoKTtcbiAgICB9XG4gIH1cblxuICBbb25EcmFnT3ZlckNvbnRhaW5lcl0oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuY2FuY2VsZWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB7XG4gICAgICBzb3VyY2UsXG4gICAgICBvdmVyLFxuICAgICAgb3ZlckNvbnRhaW5lclxuICAgIH0gPSBldmVudDtcbiAgICBjb25zdCBvbGRJbmRleCA9IHRoaXMuaW5kZXgoc291cmNlKTtcbiAgICBjb25zdCBzb3J0YWJsZVNvcnRFdmVudCA9IG5ldyBTb3J0YWJsZVNvcnRFdmVudCh7XG4gICAgICBkcmFnRXZlbnQ6IGV2ZW50LFxuICAgICAgY3VycmVudEluZGV4OiBvbGRJbmRleCxcbiAgICAgIHNvdXJjZSxcbiAgICAgIG92ZXJcbiAgICB9KTtcbiAgICB0aGlzLnRyaWdnZXIoc29ydGFibGVTb3J0RXZlbnQpO1xuICAgIGlmIChzb3J0YWJsZVNvcnRFdmVudC5jYW5jZWxlZCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5nZXRTb3J0YWJsZUVsZW1lbnRzRm9yQ29udGFpbmVyKG92ZXJDb250YWluZXIpO1xuICAgIGNvbnN0IG1vdmVzID0gbW92ZSh7XG4gICAgICBzb3VyY2UsXG4gICAgICBvdmVyLFxuICAgICAgb3ZlckNvbnRhaW5lcixcbiAgICAgIGNoaWxkcmVuXG4gICAgfSk7XG4gICAgaWYgKCFtb3Zlcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB7XG4gICAgICBvbGRDb250YWluZXIsXG4gICAgICBuZXdDb250YWluZXJcbiAgICB9ID0gbW92ZXM7XG4gICAgY29uc3QgbmV3SW5kZXggPSB0aGlzLmluZGV4KGV2ZW50LnNvdXJjZSk7XG4gICAgY29uc3Qgc29ydGFibGVTb3J0ZWRFdmVudCA9IG5ldyBTb3J0YWJsZVNvcnRlZEV2ZW50KHtcbiAgICAgIGRyYWdFdmVudDogZXZlbnQsXG4gICAgICBvbGRJbmRleCxcbiAgICAgIG5ld0luZGV4LFxuICAgICAgb2xkQ29udGFpbmVyLFxuICAgICAgbmV3Q29udGFpbmVyXG4gICAgfSk7XG4gICAgdGhpcy50cmlnZ2VyKHNvcnRhYmxlU29ydGVkRXZlbnQpO1xuICB9XG5cbiAgW29uRHJhZ092ZXJdKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50Lm92ZXIgPT09IGV2ZW50Lm9yaWdpbmFsU291cmNlIHx8IGV2ZW50Lm92ZXIgPT09IGV2ZW50LnNvdXJjZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB7XG4gICAgICBzb3VyY2UsXG4gICAgICBvdmVyLFxuICAgICAgb3ZlckNvbnRhaW5lclxuICAgIH0gPSBldmVudDtcbiAgICBjb25zdCBvbGRJbmRleCA9IHRoaXMuaW5kZXgoc291cmNlKTtcbiAgICBjb25zdCBzb3J0YWJsZVNvcnRFdmVudCA9IG5ldyBTb3J0YWJsZVNvcnRFdmVudCh7XG4gICAgICBkcmFnRXZlbnQ6IGV2ZW50LFxuICAgICAgY3VycmVudEluZGV4OiBvbGRJbmRleCxcbiAgICAgIHNvdXJjZSxcbiAgICAgIG92ZXJcbiAgICB9KTtcbiAgICB0aGlzLnRyaWdnZXIoc29ydGFibGVTb3J0RXZlbnQpO1xuICAgIGlmIChzb3J0YWJsZVNvcnRFdmVudC5jYW5jZWxlZCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5nZXREcmFnZ2FibGVFbGVtZW50c0ZvckNvbnRhaW5lcihvdmVyQ29udGFpbmVyKTtcbiAgICBjb25zdCBtb3ZlcyA9IG1vdmUoe1xuICAgICAgc291cmNlLFxuICAgICAgb3ZlcixcbiAgICAgIG92ZXJDb250YWluZXIsXG4gICAgICBjaGlsZHJlblxuICAgIH0pO1xuICAgIGlmICghbW92ZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qge1xuICAgICAgb2xkQ29udGFpbmVyLFxuICAgICAgbmV3Q29udGFpbmVyXG4gICAgfSA9IG1vdmVzO1xuICAgIGNvbnN0IG5ld0luZGV4ID0gdGhpcy5pbmRleChzb3VyY2UpO1xuICAgIGNvbnN0IHNvcnRhYmxlU29ydGVkRXZlbnQgPSBuZXcgU29ydGFibGVTb3J0ZWRFdmVudCh7XG4gICAgICBkcmFnRXZlbnQ6IGV2ZW50LFxuICAgICAgb2xkSW5kZXgsXG4gICAgICBuZXdJbmRleCxcbiAgICAgIG9sZENvbnRhaW5lcixcbiAgICAgIG5ld0NvbnRhaW5lclxuICAgIH0pO1xuICAgIHRoaXMudHJpZ2dlcihzb3J0YWJsZVNvcnRlZEV2ZW50KTtcbiAgfVxuXG4gIFtvbkRyYWdTdG9wXShldmVudCkge1xuICAgIGNvbnN0IHNvcnRhYmxlU3RvcEV2ZW50ID0gbmV3IFNvcnRhYmxlU3RvcEV2ZW50KHtcbiAgICAgIGRyYWdFdmVudDogZXZlbnQsXG4gICAgICBvbGRJbmRleDogdGhpcy5zdGFydEluZGV4LFxuICAgICAgbmV3SW5kZXg6IHRoaXMuaW5kZXgoZXZlbnQuc291cmNlKSxcbiAgICAgIG9sZENvbnRhaW5lcjogdGhpcy5zdGFydENvbnRhaW5lcixcbiAgICAgIG5ld0NvbnRhaW5lcjogZXZlbnQuc291cmNlLnBhcmVudE5vZGVcbiAgICB9KTtcbiAgICB0aGlzLnRyaWdnZXIoc29ydGFibGVTdG9wRXZlbnQpO1xuICAgIHRoaXMuc3RhcnRJbmRleCA9IG51bGw7XG4gICAgdGhpcy5zdGFydENvbnRhaW5lciA9IG51bGw7XG4gIH1cbn1cbmZ1bmN0aW9uIGluZGV4KGVsZW1lbnQpIHtcbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoZWxlbWVudC5wYXJlbnROb2RlLmNoaWxkcmVuLCBlbGVtZW50KTtcbn1cbmZ1bmN0aW9uIG1vdmUoe1xuICBzb3VyY2UsXG4gIG92ZXIsXG4gIG92ZXJDb250YWluZXIsXG4gIGNoaWxkcmVuXG59KSB7XG4gIGNvbnN0IGVtcHR5T3ZlckNvbnRhaW5lciA9ICFjaGlsZHJlbi5sZW5ndGg7XG4gIGNvbnN0IGRpZmZlcmVudENvbnRhaW5lciA9IHNvdXJjZS5wYXJlbnROb2RlICE9PSBvdmVyQ29udGFpbmVyO1xuICBjb25zdCBzYW1lQ29udGFpbmVyID0gb3ZlciAmJiBzb3VyY2UucGFyZW50Tm9kZSA9PT0gb3Zlci5wYXJlbnROb2RlO1xuICBpZiAoZW1wdHlPdmVyQ29udGFpbmVyKSB7XG4gICAgcmV0dXJuIG1vdmVJbnNpZGVFbXB0eUNvbnRhaW5lcihzb3VyY2UsIG92ZXJDb250YWluZXIpO1xuICB9IGVsc2UgaWYgKHNhbWVDb250YWluZXIpIHtcbiAgICByZXR1cm4gbW92ZVdpdGhpbkNvbnRhaW5lcihzb3VyY2UsIG92ZXIpO1xuICB9IGVsc2UgaWYgKGRpZmZlcmVudENvbnRhaW5lcikge1xuICAgIHJldHVybiBtb3ZlT3V0c2lkZUNvbnRhaW5lcihzb3VyY2UsIG92ZXIsIG92ZXJDb250YWluZXIpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5mdW5jdGlvbiBtb3ZlSW5zaWRlRW1wdHlDb250YWluZXIoc291cmNlLCBvdmVyQ29udGFpbmVyKSB7XG4gIGNvbnN0IG9sZENvbnRhaW5lciA9IHNvdXJjZS5wYXJlbnROb2RlO1xuICBvdmVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHNvdXJjZSk7XG4gIHJldHVybiB7XG4gICAgb2xkQ29udGFpbmVyLFxuICAgIG5ld0NvbnRhaW5lcjogb3ZlckNvbnRhaW5lclxuICB9O1xufVxuZnVuY3Rpb24gbW92ZVdpdGhpbkNvbnRhaW5lcihzb3VyY2UsIG92ZXIpIHtcbiAgY29uc3Qgb2xkSW5kZXggPSBpbmRleChzb3VyY2UpO1xuICBjb25zdCBuZXdJbmRleCA9IGluZGV4KG92ZXIpO1xuICBpZiAob2xkSW5kZXggPCBuZXdJbmRleCkge1xuICAgIHNvdXJjZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzb3VyY2UsIG92ZXIubmV4dEVsZW1lbnRTaWJsaW5nKTtcbiAgfSBlbHNlIHtcbiAgICBzb3VyY2UucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc291cmNlLCBvdmVyKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG9sZENvbnRhaW5lcjogc291cmNlLnBhcmVudE5vZGUsXG4gICAgbmV3Q29udGFpbmVyOiBzb3VyY2UucGFyZW50Tm9kZVxuICB9O1xufVxuZnVuY3Rpb24gbW92ZU91dHNpZGVDb250YWluZXIoc291cmNlLCBvdmVyLCBvdmVyQ29udGFpbmVyKSB7XG4gIGNvbnN0IG9sZENvbnRhaW5lciA9IHNvdXJjZS5wYXJlbnROb2RlO1xuICBpZiAob3Zlcikge1xuICAgIG92ZXIucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc291cmNlLCBvdmVyKTtcbiAgfSBlbHNlIHtcblxuICAgIG92ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoc291cmNlKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG9sZENvbnRhaW5lcixcbiAgICBuZXdDb250YWluZXI6IHNvdXJjZS5wYXJlbnROb2RlXG4gIH07XG59XG5cbmV4cG9ydCB7IFNvcnRhYmxlIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCB7IEFic3RyYWN0RXZlbnQgfSBmcm9tICcuLi8uLi9zaGFyZWQvQWJzdHJhY3RFdmVudC9BYnN0cmFjdEV2ZW50Lm1qcyc7XG5cbmNsYXNzIFNvcnRhYmxlRXZlbnQgZXh0ZW5kcyBBYnN0cmFjdEV2ZW50IHtcblxuICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgc3VwZXIoZGF0YSk7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgfVxuXG4gIGdldCBkcmFnRXZlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5kcmFnRXZlbnQ7XG4gIH1cbn1cblNvcnRhYmxlRXZlbnQudHlwZSA9ICdzb3J0YWJsZSc7XG5cbmNsYXNzIFNvcnRhYmxlU3RhcnRFdmVudCBleHRlbmRzIFNvcnRhYmxlRXZlbnQge1xuXG4gIGdldCBzdGFydEluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEuc3RhcnRJbmRleDtcbiAgfVxuXG4gIGdldCBzdGFydENvbnRhaW5lcigpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLnN0YXJ0Q29udGFpbmVyO1xuICB9XG59XG5Tb3J0YWJsZVN0YXJ0RXZlbnQudHlwZSA9ICdzb3J0YWJsZTpzdGFydCc7XG5Tb3J0YWJsZVN0YXJ0RXZlbnQuY2FuY2VsYWJsZSA9IHRydWU7XG5cbmNsYXNzIFNvcnRhYmxlU29ydEV2ZW50IGV4dGVuZHMgU29ydGFibGVFdmVudCB7XG5cbiAgZ2V0IGN1cnJlbnRJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLmN1cnJlbnRJbmRleDtcbiAgfVxuXG4gIGdldCBvdmVyKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEub3ZlcjtcbiAgfVxuXG4gIGdldCBvdmVyQ29udGFpbmVyKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEuZHJhZ0V2ZW50Lm92ZXJDb250YWluZXI7XG4gIH1cbn1cblNvcnRhYmxlU29ydEV2ZW50LnR5cGUgPSAnc29ydGFibGU6c29ydCc7XG5Tb3J0YWJsZVNvcnRFdmVudC5jYW5jZWxhYmxlID0gdHJ1ZTtcblxuY2xhc3MgU29ydGFibGVTb3J0ZWRFdmVudCBleHRlbmRzIFNvcnRhYmxlRXZlbnQge1xuXG4gIGdldCBvbGRJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLm9sZEluZGV4O1xuICB9XG5cbiAgZ2V0IG5ld0luZGV4KCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEubmV3SW5kZXg7XG4gIH1cblxuICBnZXQgb2xkQ29udGFpbmVyKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEub2xkQ29udGFpbmVyO1xuICB9XG5cbiAgZ2V0IG5ld0NvbnRhaW5lcigpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLm5ld0NvbnRhaW5lcjtcbiAgfVxufVxuU29ydGFibGVTb3J0ZWRFdmVudC50eXBlID0gJ3NvcnRhYmxlOnNvcnRlZCc7XG5cbmNsYXNzIFNvcnRhYmxlU3RvcEV2ZW50IGV4dGVuZHMgU29ydGFibGVFdmVudCB7XG5cbiAgZ2V0IG9sZEluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEub2xkSW5kZXg7XG4gIH1cblxuICBnZXQgbmV3SW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5uZXdJbmRleDtcbiAgfVxuXG4gIGdldCBvbGRDb250YWluZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5vbGRDb250YWluZXI7XG4gIH1cblxuICBnZXQgbmV3Q29udGFpbmVyKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEubmV3Q29udGFpbmVyO1xuICB9XG59XG5Tb3J0YWJsZVN0b3BFdmVudC50eXBlID0gJ3NvcnRhYmxlOnN0b3AnO1xuXG5leHBvcnQgeyBTb3J0YWJsZUV2ZW50LCBTb3J0YWJsZVNvcnRFdmVudCwgU29ydGFibGVTb3J0ZWRFdmVudCwgU29ydGFibGVTdGFydEV2ZW50LCBTb3J0YWJsZVN0b3BFdmVudCB9O1xuIiwiaW1wb3J0IERyYWdnYWJsZSBmcm9tICcuLi9EcmFnZ2FibGUvRHJhZ2dhYmxlLm1qcyc7XG5pbXBvcnQgJy4uL0RyYWdnYWJsZS9EcmFnRXZlbnQvRHJhZ0V2ZW50Lm1qcyc7XG5pbXBvcnQgJy4uL0RyYWdnYWJsZS9EcmFnZ2FibGVFdmVudC9EcmFnZ2FibGVFdmVudC5tanMnO1xuaW1wb3J0ICcuLi9EcmFnZ2FibGUvUGx1Z2lucy9Bbm5vdW5jZW1lbnQvQW5ub3VuY2VtZW50Lm1qcyc7XG5pbXBvcnQgJy4uL0RyYWdnYWJsZS9QbHVnaW5zL01pcnJvci9NaXJyb3JFdmVudC9NaXJyb3JFdmVudC5tanMnO1xuaW1wb3J0ICcuLi9EcmFnZ2FibGUvU2Vuc29ycy9TZW5zb3JFdmVudC9TZW5zb3JFdmVudC5tanMnO1xuaW1wb3J0ICcuLi9EcmFnZ2FibGUvU2Vuc29ycy9Ub3VjaFNlbnNvci9Ub3VjaFNlbnNvci5tanMnO1xuaW1wb3J0IHsgU3dhcHBhYmxlU3RhcnRFdmVudCwgU3dhcHBhYmxlU3dhcEV2ZW50LCBTd2FwcGFibGVTd2FwcGVkRXZlbnQsIFN3YXBwYWJsZVN0b3BFdmVudCB9IGZyb20gJy4vU3dhcHBhYmxlRXZlbnQvU3dhcHBhYmxlRXZlbnQubWpzJztcblxuY29uc3Qgb25EcmFnU3RhcnQgPSBTeW1ib2woJ29uRHJhZ1N0YXJ0Jyk7XG5jb25zdCBvbkRyYWdPdmVyID0gU3ltYm9sKCdvbkRyYWdPdmVyJyk7XG5jb25zdCBvbkRyYWdTdG9wID0gU3ltYm9sKCdvbkRyYWdTdG9wJyk7XG5cbmZ1bmN0aW9uIG9uU3dhcHBhYmxlU3dhcHBlZERlZmF1bHRBbm5vdW5jZW1lbnQoe1xuICBkcmFnRXZlbnQsXG4gIHN3YXBwZWRFbGVtZW50XG59KSB7XG4gIGNvbnN0IHNvdXJjZVRleHQgPSBkcmFnRXZlbnQuc291cmNlLnRleHRDb250ZW50LnRyaW0oKSB8fCBkcmFnRXZlbnQuc291cmNlLmlkIHx8ICdzd2FwcGFibGUgZWxlbWVudCc7XG4gIGNvbnN0IG92ZXJUZXh0ID0gc3dhcHBlZEVsZW1lbnQudGV4dENvbnRlbnQudHJpbSgpIHx8IHN3YXBwZWRFbGVtZW50LmlkIHx8ICdzd2FwcGFibGUgZWxlbWVudCc7XG4gIHJldHVybiBgU3dhcHBlZCAke3NvdXJjZVRleHR9IHdpdGggJHtvdmVyVGV4dH1gO1xufVxuXG5jb25zdCBkZWZhdWx0QW5ub3VuY2VtZW50cyA9IHtcbiAgJ3N3YXBwYWJsZWQ6c3dhcHBlZCc6IG9uU3dhcHBhYmxlU3dhcHBlZERlZmF1bHRBbm5vdW5jZW1lbnRcbn07XG5cbmNsYXNzIFN3YXBwYWJsZSBleHRlbmRzIERyYWdnYWJsZSB7XG5cbiAgY29uc3RydWN0b3IoY29udGFpbmVycyA9IFtdLCBvcHRpb25zID0ge30pIHtcbiAgICBzdXBlcihjb250YWluZXJzLCB7XG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgYW5ub3VuY2VtZW50czoge1xuICAgICAgICAuLi5kZWZhdWx0QW5ub3VuY2VtZW50cyxcbiAgICAgICAgLi4uKG9wdGlvbnMuYW5ub3VuY2VtZW50cyB8fCB7fSlcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMubGFzdE92ZXIgPSBudWxsO1xuICAgIHRoaXNbb25EcmFnU3RhcnRdID0gdGhpc1tvbkRyYWdTdGFydF0uYmluZCh0aGlzKTtcbiAgICB0aGlzW29uRHJhZ092ZXJdID0gdGhpc1tvbkRyYWdPdmVyXS5iaW5kKHRoaXMpO1xuICAgIHRoaXNbb25EcmFnU3RvcF0gPSB0aGlzW29uRHJhZ1N0b3BdLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbignZHJhZzpzdGFydCcsIHRoaXNbb25EcmFnU3RhcnRdKS5vbignZHJhZzpvdmVyJywgdGhpc1tvbkRyYWdPdmVyXSkub24oJ2RyYWc6c3RvcCcsIHRoaXNbb25EcmFnU3RvcF0pO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBzdXBlci5kZXN0cm95KCk7XG4gICAgdGhpcy5vZmYoJ2RyYWc6c3RhcnQnLCB0aGlzLl9vbkRyYWdTdGFydCkub2ZmKCdkcmFnOm92ZXInLCB0aGlzLl9vbkRyYWdPdmVyKS5vZmYoJ2RyYWc6c3RvcCcsIHRoaXMuX29uRHJhZ1N0b3ApO1xuICB9XG5cbiAgW29uRHJhZ1N0YXJ0XShldmVudCkge1xuICAgIGNvbnN0IHN3YXBwYWJsZVN0YXJ0RXZlbnQgPSBuZXcgU3dhcHBhYmxlU3RhcnRFdmVudCh7XG4gICAgICBkcmFnRXZlbnQ6IGV2ZW50XG4gICAgfSk7XG4gICAgdGhpcy50cmlnZ2VyKHN3YXBwYWJsZVN0YXJ0RXZlbnQpO1xuICAgIGlmIChzd2FwcGFibGVTdGFydEV2ZW50LmNhbmNlbGVkKCkpIHtcbiAgICAgIGV2ZW50LmNhbmNlbCgpO1xuICAgIH1cbiAgfVxuXG4gIFtvbkRyYWdPdmVyXShldmVudCkge1xuICAgIGlmIChldmVudC5vdmVyID09PSBldmVudC5vcmlnaW5hbFNvdXJjZSB8fCBldmVudC5vdmVyID09PSBldmVudC5zb3VyY2UgfHwgZXZlbnQuY2FuY2VsZWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzd2FwcGFibGVTd2FwRXZlbnQgPSBuZXcgU3dhcHBhYmxlU3dhcEV2ZW50KHtcbiAgICAgIGRyYWdFdmVudDogZXZlbnQsXG4gICAgICBvdmVyOiBldmVudC5vdmVyLFxuICAgICAgb3ZlckNvbnRhaW5lcjogZXZlbnQub3ZlckNvbnRhaW5lclxuICAgIH0pO1xuICAgIHRoaXMudHJpZ2dlcihzd2FwcGFibGVTd2FwRXZlbnQpO1xuICAgIGlmIChzd2FwcGFibGVTd2FwRXZlbnQuY2FuY2VsZWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmxhc3RPdmVyICYmIHRoaXMubGFzdE92ZXIgIT09IGV2ZW50Lm92ZXIpIHtcbiAgICAgIHN3YXAodGhpcy5sYXN0T3ZlciwgZXZlbnQuc291cmNlKTtcbiAgICB9XG4gICAgaWYgKHRoaXMubGFzdE92ZXIgPT09IGV2ZW50Lm92ZXIpIHtcbiAgICAgIHRoaXMubGFzdE92ZXIgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxhc3RPdmVyID0gZXZlbnQub3ZlcjtcbiAgICB9XG4gICAgc3dhcChldmVudC5zb3VyY2UsIGV2ZW50Lm92ZXIpO1xuICAgIGNvbnN0IHN3YXBwYWJsZVN3YXBwZWRFdmVudCA9IG5ldyBTd2FwcGFibGVTd2FwcGVkRXZlbnQoe1xuICAgICAgZHJhZ0V2ZW50OiBldmVudCxcbiAgICAgIHN3YXBwZWRFbGVtZW50OiBldmVudC5vdmVyXG4gICAgfSk7XG4gICAgdGhpcy50cmlnZ2VyKHN3YXBwYWJsZVN3YXBwZWRFdmVudCk7XG4gIH1cblxuICBbb25EcmFnU3RvcF0oZXZlbnQpIHtcbiAgICBjb25zdCBzd2FwcGFibGVTdG9wRXZlbnQgPSBuZXcgU3dhcHBhYmxlU3RvcEV2ZW50KHtcbiAgICAgIGRyYWdFdmVudDogZXZlbnRcbiAgICB9KTtcbiAgICB0aGlzLnRyaWdnZXIoc3dhcHBhYmxlU3RvcEV2ZW50KTtcbiAgICB0aGlzLmxhc3RPdmVyID0gbnVsbDtcbiAgfVxufVxuZnVuY3Rpb24gd2l0aFRlbXBFbGVtZW50KGNhbGxiYWNrKSB7XG4gIGNvbnN0IHRtcEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2FsbGJhY2sodG1wRWxlbWVudCk7XG4gIHRtcEVsZW1lbnQucmVtb3ZlKCk7XG59XG5mdW5jdGlvbiBzd2FwKHNvdXJjZSwgb3Zlcikge1xuICBjb25zdCBvdmVyUGFyZW50ID0gb3Zlci5wYXJlbnROb2RlO1xuICBjb25zdCBzb3VyY2VQYXJlbnQgPSBzb3VyY2UucGFyZW50Tm9kZTtcbiAgd2l0aFRlbXBFbGVtZW50KHRtcEVsZW1lbnQgPT4ge1xuICAgIHNvdXJjZVBhcmVudC5pbnNlcnRCZWZvcmUodG1wRWxlbWVudCwgc291cmNlKTtcbiAgICBvdmVyUGFyZW50Lmluc2VydEJlZm9yZShzb3VyY2UsIG92ZXIpO1xuICAgIHNvdXJjZVBhcmVudC5pbnNlcnRCZWZvcmUob3ZlciwgdG1wRWxlbWVudCk7XG4gIH0pO1xufVxuXG5leHBvcnQgeyBTd2FwcGFibGUgYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IHsgQWJzdHJhY3RFdmVudCB9IGZyb20gJy4uLy4uL3NoYXJlZC9BYnN0cmFjdEV2ZW50L0Fic3RyYWN0RXZlbnQubWpzJztcblxuY2xhc3MgU3dhcHBhYmxlRXZlbnQgZXh0ZW5kcyBBYnN0cmFjdEV2ZW50IHtcblxuICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgc3VwZXIoZGF0YSk7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgfVxuXG4gIGdldCBkcmFnRXZlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5kcmFnRXZlbnQ7XG4gIH1cbn1cblxuU3dhcHBhYmxlRXZlbnQudHlwZSA9ICdzd2FwcGFibGUnO1xuY2xhc3MgU3dhcHBhYmxlU3RhcnRFdmVudCBleHRlbmRzIFN3YXBwYWJsZUV2ZW50IHt9XG5Td2FwcGFibGVTdGFydEV2ZW50LnR5cGUgPSAnc3dhcHBhYmxlOnN0YXJ0JztcblN3YXBwYWJsZVN0YXJ0RXZlbnQuY2FuY2VsYWJsZSA9IHRydWU7XG5cbmNsYXNzIFN3YXBwYWJsZVN3YXBFdmVudCBleHRlbmRzIFN3YXBwYWJsZUV2ZW50IHtcblxuICBnZXQgb3ZlcigpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLm92ZXI7XG4gIH1cblxuICBnZXQgb3ZlckNvbnRhaW5lcigpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLm92ZXJDb250YWluZXI7XG4gIH1cbn1cblN3YXBwYWJsZVN3YXBFdmVudC50eXBlID0gJ3N3YXBwYWJsZTpzd2FwJztcblN3YXBwYWJsZVN3YXBFdmVudC5jYW5jZWxhYmxlID0gdHJ1ZTtcblxuY2xhc3MgU3dhcHBhYmxlU3dhcHBlZEV2ZW50IGV4dGVuZHMgU3dhcHBhYmxlRXZlbnQge1xuXG4gIGdldCBzd2FwcGVkRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLnN3YXBwZWRFbGVtZW50O1xuICB9XG59XG5cblN3YXBwYWJsZVN3YXBwZWRFdmVudC50eXBlID0gJ3N3YXBwYWJsZTpzd2FwcGVkJztcbmNsYXNzIFN3YXBwYWJsZVN0b3BFdmVudCBleHRlbmRzIFN3YXBwYWJsZUV2ZW50IHt9XG5Td2FwcGFibGVTdG9wRXZlbnQudHlwZSA9ICdzd2FwcGFibGU6c3RvcCc7XG5cbmV4cG9ydCB7IFN3YXBwYWJsZUV2ZW50LCBTd2FwcGFibGVTdGFydEV2ZW50LCBTd2FwcGFibGVTdG9wRXZlbnQsIFN3YXBwYWJsZVN3YXBFdmVudCwgU3dhcHBhYmxlU3dhcHBlZEV2ZW50IH07XG4iLCJmdW5jdGlvbiBjcmVhdGVBZGRJbml0aWFsaXplck1ldGhvZChlLCB0KSB7XG4gIHJldHVybiBmdW5jdGlvbiAocikge1xuICAgIGFzc2VydE5vdEZpbmlzaGVkKHQsIFwiYWRkSW5pdGlhbGl6ZXJcIiksIGFzc2VydENhbGxhYmxlKHIsIFwiQW4gaW5pdGlhbGl6ZXJcIiksIGUucHVzaChyKTtcbiAgfTtcbn1cbmZ1bmN0aW9uIGFzc2VydEluc3RhbmNlSWZQcml2YXRlKGUsIHQpIHtcbiAgaWYgKCFlKHQpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQXR0ZW1wdGVkIHRvIGFjY2VzcyBwcml2YXRlIGVsZW1lbnQgb24gbm9uLWluc3RhbmNlXCIpO1xufVxuZnVuY3Rpb24gbWVtYmVyRGVjKGUsIHQsIHIsIGEsIG4sIGksIHMsIG8sIGMsIGwsIHUpIHtcbiAgdmFyIGY7XG4gIHN3aXRjaCAoaSkge1xuICAgIGNhc2UgMTpcbiAgICAgIGYgPSBcImFjY2Vzc29yXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDI6XG4gICAgICBmID0gXCJtZXRob2RcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzpcbiAgICAgIGYgPSBcImdldHRlclwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA0OlxuICAgICAgZiA9IFwic2V0dGVyXCI7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgZiA9IFwiZmllbGRcIjtcbiAgfVxuICB2YXIgZCxcbiAgICBwLFxuICAgIGggPSB7XG4gICAgICBraW5kOiBmLFxuICAgICAgbmFtZTogbyA/IFwiI1wiICsgciA6IHIsXG4gICAgICBzdGF0aWM6IHMsXG4gICAgICBwcml2YXRlOiBvLFxuICAgICAgbWV0YWRhdGE6IHVcbiAgICB9LFxuICAgIHYgPSB7XG4gICAgICB2OiAhMVxuICAgIH07XG4gIGlmICgwICE9PSBpICYmIChoLmFkZEluaXRpYWxpemVyID0gY3JlYXRlQWRkSW5pdGlhbGl6ZXJNZXRob2QobiwgdikpLCBvIHx8IDAgIT09IGkgJiYgMiAhPT0gaSkge1xuICAgIGlmICgyID09PSBpKSBkID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiBhc3NlcnRJbnN0YW5jZUlmUHJpdmF0ZShsLCBlKSwgYS52YWx1ZTtcbiAgICB9O2Vsc2Uge1xuICAgICAgdmFyIHkgPSAwID09PSBpIHx8IDEgPT09IGk7XG4gICAgICAoeSB8fCAzID09PSBpKSAmJiAoZCA9IG8gPyBmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gYXNzZXJ0SW5zdGFuY2VJZlByaXZhdGUobCwgZSksIGEuZ2V0LmNhbGwoZSk7XG4gICAgICB9IDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIGEuZ2V0LmNhbGwoZSk7XG4gICAgICB9KSwgKHkgfHwgNCA9PT0gaSkgJiYgKHAgPSBvID8gZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgYXNzZXJ0SW5zdGFuY2VJZlByaXZhdGUobCwgZSksIGEuc2V0LmNhbGwoZSwgdCk7XG4gICAgICB9IDogZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgYS5zZXQuY2FsbChlLCB0KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSBlbHNlIGQgPSBmdW5jdGlvbiAoZSkge1xuICAgIHJldHVybiBlW3JdO1xuICB9LCAwID09PSBpICYmIChwID0gZnVuY3Rpb24gKGUsIHQpIHtcbiAgICBlW3JdID0gdDtcbiAgfSk7XG4gIHZhciBtID0gbyA/IGwuYmluZCgpIDogZnVuY3Rpb24gKGUpIHtcbiAgICByZXR1cm4gciBpbiBlO1xuICB9O1xuICBoLmFjY2VzcyA9IGQgJiYgcCA/IHtcbiAgICBnZXQ6IGQsXG4gICAgc2V0OiBwLFxuICAgIGhhczogbVxuICB9IDogZCA/IHtcbiAgICBnZXQ6IGQsXG4gICAgaGFzOiBtXG4gIH0gOiB7XG4gICAgc2V0OiBwLFxuICAgIGhhczogbVxuICB9O1xuICB0cnkge1xuICAgIHJldHVybiBlLmNhbGwodCwgYywgaCk7XG4gIH0gZmluYWxseSB7XG4gICAgdi52ID0gITA7XG4gIH1cbn1cbmZ1bmN0aW9uIGFzc2VydE5vdEZpbmlzaGVkKGUsIHQpIHtcbiAgaWYgKGUudikgdGhyb3cgbmV3IEVycm9yKFwiYXR0ZW1wdGVkIHRvIGNhbGwgXCIgKyB0ICsgXCIgYWZ0ZXIgZGVjb3JhdGlvbiB3YXMgZmluaXNoZWRcIik7XG59XG5mdW5jdGlvbiBhc3NlcnRDYWxsYWJsZShlLCB0KSB7XG4gIGlmIChcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIGUpIHRocm93IG5ldyBUeXBlRXJyb3IodCArIFwiIG11c3QgYmUgYSBmdW5jdGlvblwiKTtcbn1cbmZ1bmN0aW9uIGFzc2VydFZhbGlkUmV0dXJuVmFsdWUoZSwgdCkge1xuICB2YXIgciA9IHR5cGVvZiB0O1xuICBpZiAoMSA9PT0gZSkge1xuICAgIGlmIChcIm9iamVjdFwiICE9PSByIHx8IG51bGwgPT09IHQpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhY2Nlc3NvciBkZWNvcmF0b3JzIG11c3QgcmV0dXJuIGFuIG9iamVjdCB3aXRoIGdldCwgc2V0LCBvciBpbml0IHByb3BlcnRpZXMgb3Igdm9pZCAwXCIpO1xuICAgIHZvaWQgMCAhPT0gdC5nZXQgJiYgYXNzZXJ0Q2FsbGFibGUodC5nZXQsIFwiYWNjZXNzb3IuZ2V0XCIpLCB2b2lkIDAgIT09IHQuc2V0ICYmIGFzc2VydENhbGxhYmxlKHQuc2V0LCBcImFjY2Vzc29yLnNldFwiKSwgdm9pZCAwICE9PSB0LmluaXQgJiYgYXNzZXJ0Q2FsbGFibGUodC5pbml0LCBcImFjY2Vzc29yLmluaXRcIik7XG4gIH0gZWxzZSBpZiAoXCJmdW5jdGlvblwiICE9PSByKSB7XG4gICAgdmFyIGE7XG4gICAgdGhyb3cgYSA9IDAgPT09IGUgPyBcImZpZWxkXCIgOiA1ID09PSBlID8gXCJjbGFzc1wiIDogXCJtZXRob2RcIiwgbmV3IFR5cGVFcnJvcihhICsgXCIgZGVjb3JhdG9ycyBtdXN0IHJldHVybiBhIGZ1bmN0aW9uIG9yIHZvaWQgMFwiKTtcbiAgfVxufVxuZnVuY3Rpb24gY3VycnlUaGlzMShlKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGUodGhpcyk7XG4gIH07XG59XG5mdW5jdGlvbiBjdXJyeVRoaXMyKGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0KSB7XG4gICAgZSh0aGlzLCB0KTtcbiAgfTtcbn1cbmZ1bmN0aW9uIGFwcGx5TWVtYmVyRGVjKGUsIHQsIHIsIGEsIG4sIGksIHMsIG8sIGMsIGwsIHUpIHtcbiAgdmFyIGYsXG4gICAgZCxcbiAgICBwLFxuICAgIGgsXG4gICAgdixcbiAgICB5LFxuICAgIG0gPSByWzBdO1xuICBhIHx8IEFycmF5LmlzQXJyYXkobSkgfHwgKG0gPSBbbV0pLCBvID8gZiA9IDAgPT09IGkgfHwgMSA9PT0gaSA/IHtcbiAgICBnZXQ6IGN1cnJ5VGhpczEoclszXSksXG4gICAgc2V0OiBjdXJyeVRoaXMyKHJbNF0pXG4gIH0gOiAzID09PSBpID8ge1xuICAgIGdldDogclszXVxuICB9IDogNCA9PT0gaSA/IHtcbiAgICBzZXQ6IHJbM11cbiAgfSA6IHtcbiAgICB2YWx1ZTogclszXVxuICB9IDogMCAhPT0gaSAmJiAoZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodCwgbikpLCAxID09PSBpID8gcCA9IHtcbiAgICBnZXQ6IGYuZ2V0LFxuICAgIHNldDogZi5zZXRcbiAgfSA6IDIgPT09IGkgPyBwID0gZi52YWx1ZSA6IDMgPT09IGkgPyBwID0gZi5nZXQgOiA0ID09PSBpICYmIChwID0gZi5zZXQpO1xuICBmb3IgKHZhciBnID0gYSA/IDIgOiAxLCBiID0gbS5sZW5ndGggLSAxOyBiID49IDA7IGIgLT0gZykge1xuICAgIHZhciBJO1xuICAgIGlmICh2b2lkIDAgIT09IChoID0gbWVtYmVyRGVjKG1bYl0sIGEgPyBtW2IgLSAxXSA6IHZvaWQgMCwgbiwgZiwgYywgaSwgcywgbywgcCwgbCwgdSkpKSBhc3NlcnRWYWxpZFJldHVyblZhbHVlKGksIGgpLCAwID09PSBpID8gSSA9IGggOiAxID09PSBpID8gKEkgPSBoLmluaXQsIHYgPSBoLmdldCB8fCBwLmdldCwgeSA9IGguc2V0IHx8IHAuc2V0LCBwID0ge1xuICAgICAgZ2V0OiB2LFxuICAgICAgc2V0OiB5XG4gICAgfSkgOiBwID0gaCwgdm9pZCAwICE9PSBJICYmICh2b2lkIDAgPT09IGQgPyBkID0gSSA6IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZCA/IGQgPSBbZCwgSV0gOiBkLnB1c2goSSkpO1xuICB9XG4gIGlmICgwID09PSBpIHx8IDEgPT09IGkpIHtcbiAgICBpZiAodm9pZCAwID09PSBkKSBkID0gZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgIHJldHVybiB0O1xuICAgIH07ZWxzZSBpZiAoXCJmdW5jdGlvblwiICE9IHR5cGVvZiBkKSB7XG4gICAgICB2YXIgdyA9IGQ7XG4gICAgICBkID0gZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgZm9yICh2YXIgciA9IHQsIGEgPSB3Lmxlbmd0aCAtIDE7IGEgPj0gMDsgYS0tKSByID0gd1thXS5jYWxsKGUsIHIpO1xuICAgICAgICByZXR1cm4gcjtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBNID0gZDtcbiAgICAgIGQgPSBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICByZXR1cm4gTS5jYWxsKGUsIHQpO1xuICAgICAgfTtcbiAgICB9XG4gICAgZS5wdXNoKGQpO1xuICB9XG4gIDAgIT09IGkgJiYgKDEgPT09IGkgPyAoZi5nZXQgPSBwLmdldCwgZi5zZXQgPSBwLnNldCkgOiAyID09PSBpID8gZi52YWx1ZSA9IHAgOiAzID09PSBpID8gZi5nZXQgPSBwIDogNCA9PT0gaSAmJiAoZi5zZXQgPSBwKSwgbyA/IDEgPT09IGkgPyAoZS5wdXNoKGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgcmV0dXJuIHAuZ2V0LmNhbGwoZSwgdCk7XG4gIH0pLCBlLnB1c2goZnVuY3Rpb24gKGUsIHQpIHtcbiAgICByZXR1cm4gcC5zZXQuY2FsbChlLCB0KTtcbiAgfSkpIDogMiA9PT0gaSA/IGUucHVzaChwKSA6IGUucHVzaChmdW5jdGlvbiAoZSwgdCkge1xuICAgIHJldHVybiBwLmNhbGwoZSwgdCk7XG4gIH0pIDogT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsIG4sIGYpKTtcbn1cbmZ1bmN0aW9uIGFwcGx5TWVtYmVyRGVjcyhlLCB0LCByLCBhKSB7XG4gIGZvciAodmFyIG4sIGksIHMsIG8gPSBbXSwgYyA9IG5ldyBNYXAoKSwgbCA9IG5ldyBNYXAoKSwgdSA9IDA7IHUgPCB0Lmxlbmd0aDsgdSsrKSB7XG4gICAgdmFyIGYgPSB0W3VdO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGYpKSB7XG4gICAgICB2YXIgZCxcbiAgICAgICAgcCxcbiAgICAgICAgaCA9IGZbMV0sXG4gICAgICAgIHYgPSBmWzJdLFxuICAgICAgICB5ID0gZi5sZW5ndGggPiAzLFxuICAgICAgICBtID0gMTYgJiBoLFxuICAgICAgICBnID0gISEoOCAmIGgpLFxuICAgICAgICBiID0gcjtcbiAgICAgIGlmIChoICY9IDcsIGcgPyAoZCA9IGUsIDAgIT09IGggJiYgKHAgPSBpID0gaSB8fCBbXSksIHkgJiYgIXMgJiYgKHMgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gX2NoZWNrSW5SSFModCkgPT09IGU7XG4gICAgICB9KSwgYiA9IHMpIDogKGQgPSBlLnByb3RvdHlwZSwgMCAhPT0gaCAmJiAocCA9IG4gPSBuIHx8IFtdKSksIDAgIT09IGggJiYgIXkpIHtcbiAgICAgICAgdmFyIEkgPSBnID8gbCA6IGMsXG4gICAgICAgICAgdyA9IEkuZ2V0KHYpIHx8IDA7XG4gICAgICAgIGlmICghMCA9PT0gdyB8fCAzID09PSB3ICYmIDQgIT09IGggfHwgNCA9PT0gdyAmJiAzICE9PSBoKSB0aHJvdyBuZXcgRXJyb3IoXCJBdHRlbXB0ZWQgdG8gZGVjb3JhdGUgYSBwdWJsaWMgbWV0aG9kL2FjY2Vzc29yIHRoYXQgaGFzIHRoZSBzYW1lIG5hbWUgYXMgYSBwcmV2aW91c2x5IGRlY29yYXRlZCBwdWJsaWMgbWV0aG9kL2FjY2Vzc29yLiBUaGlzIGlzIG5vdCBjdXJyZW50bHkgc3VwcG9ydGVkIGJ5IHRoZSBkZWNvcmF0b3JzIHBsdWdpbi4gUHJvcGVydHkgbmFtZSB3YXM6IFwiICsgdik7XG4gICAgICAgIEkuc2V0KHYsICEoIXcgJiYgaCA+IDIpIHx8IGgpO1xuICAgICAgfVxuICAgICAgYXBwbHlNZW1iZXJEZWMobywgZCwgZiwgbSwgdiwgaCwgZywgeSwgcCwgYiwgYSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBwdXNoSW5pdGlhbGl6ZXJzKG8sIG4pLCBwdXNoSW5pdGlhbGl6ZXJzKG8sIGkpLCBvO1xufVxuZnVuY3Rpb24gcHVzaEluaXRpYWxpemVycyhlLCB0KSB7XG4gIHQgJiYgZS5wdXNoKGZ1bmN0aW9uIChlKSB7XG4gICAgZm9yICh2YXIgciA9IDA7IHIgPCB0Lmxlbmd0aDsgcisrKSB0W3JdLmNhbGwoZSk7XG4gICAgcmV0dXJuIGU7XG4gIH0pO1xufVxuZnVuY3Rpb24gYXBwbHlDbGFzc0RlY3MoZSwgdCwgciwgYSkge1xuICBpZiAodC5sZW5ndGgpIHtcbiAgICBmb3IgKHZhciBuID0gW10sIGkgPSBlLCBzID0gZS5uYW1lLCBvID0gciA/IDIgOiAxLCBjID0gdC5sZW5ndGggLSAxOyBjID49IDA7IGMgLT0gbykge1xuICAgICAgdmFyIGwgPSB7XG4gICAgICAgIHY6ICExXG4gICAgICB9O1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIHUgPSB0W2NdLmNhbGwociA/IHRbYyAtIDFdIDogdm9pZCAwLCBpLCB7XG4gICAgICAgICAga2luZDogXCJjbGFzc1wiLFxuICAgICAgICAgIG5hbWU6IHMsXG4gICAgICAgICAgYWRkSW5pdGlhbGl6ZXI6IGNyZWF0ZUFkZEluaXRpYWxpemVyTWV0aG9kKG4sIGwpLFxuICAgICAgICAgIG1ldGFkYXRhOiBhXG4gICAgICAgIH0pO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgbC52ID0gITA7XG4gICAgICB9XG4gICAgICB2b2lkIDAgIT09IHUgJiYgKGFzc2VydFZhbGlkUmV0dXJuVmFsdWUoNSwgdSksIGkgPSB1KTtcbiAgICB9XG4gICAgcmV0dXJuIFtkZWZpbmVNZXRhZGF0YShpLCBhKSwgZnVuY3Rpb24gKCkge1xuICAgICAgZm9yICh2YXIgZSA9IDA7IGUgPCBuLmxlbmd0aDsgZSsrKSBuW2VdLmNhbGwoaSk7XG4gICAgfV07XG4gIH1cbn1cbmZ1bmN0aW9uIGRlZmluZU1ldGFkYXRhKGUsIHQpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCBTeW1ib2wubWV0YWRhdGEgfHwgU3ltYm9sLmZvcihcIlN5bWJvbC5tZXRhZGF0YVwiKSwge1xuICAgIGNvbmZpZ3VyYWJsZTogITAsXG4gICAgZW51bWVyYWJsZTogITAsXG4gICAgdmFsdWU6IHRcbiAgfSk7XG59XG5mdW5jdGlvbiBfYXBwbHlEZWNzMjMwNShlLCB0LCByLCBhLCBuLCBpKSB7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID49IDYpIHZhciBzID0gaVtTeW1ib2wubWV0YWRhdGEgfHwgU3ltYm9sLmZvcihcIlN5bWJvbC5tZXRhZGF0YVwiKV07XG4gIHZhciBvID0gT2JqZWN0LmNyZWF0ZSh2b2lkIDAgPT09IHMgPyBudWxsIDogcyksXG4gICAgYyA9IGFwcGx5TWVtYmVyRGVjcyhlLCB0LCBuLCBvKTtcbiAgcmV0dXJuIHIubGVuZ3RoIHx8IGRlZmluZU1ldGFkYXRhKGUsIG8pLCB7XG4gICAgZTogYyxcbiAgICBnZXQgYygpIHtcbiAgICAgIHJldHVybiBhcHBseUNsYXNzRGVjcyhlLCByLCBhLCBvKTtcbiAgICB9XG4gIH07XG59XG5mdW5jdGlvbiBfY2hlY2tJblJIUyhlKSB7XG4gIGlmIChPYmplY3QoZSkgIT09IGUpIHRocm93IFR5cGVFcnJvcihcInJpZ2h0LWhhbmQgc2lkZSBvZiAnaW4nIHNob3VsZCBiZSBhbiBvYmplY3QsIGdvdCBcIiArIChudWxsICE9PSBlID8gdHlwZW9mIGUgOiBcIm51bGxcIikpO1xuICByZXR1cm4gZTtcbn1cblxuZXhwb3J0IHsgX2FwcGx5RGVjczIzMDUgYXMgYXBwbHlEZWNzMjMwNSwgX2NoZWNrSW5SSFMgYXMgY2hlY2tJblJIUyB9O1xuIiwiZXhwb3J0IHsgQWJzdHJhY3RFdmVudCBhcyBCYXNlRXZlbnQgfSBmcm9tICcuL3NoYXJlZC9BYnN0cmFjdEV2ZW50L0Fic3RyYWN0RXZlbnQubWpzJztcbmV4cG9ydCB7IEFic3RyYWN0UGx1Z2luIGFzIEJhc2VQbHVnaW4gfSBmcm9tICcuL3NoYXJlZC9BYnN0cmFjdFBsdWdpbi9BYnN0cmFjdFBsdWdpbi5tanMnO1xuaW1wb3J0ICogYXMgaW5kZXggZnJvbSAnLi9EcmFnZ2FibGUvU2Vuc29ycy9pbmRleC5tanMnO1xuZXhwb3J0IHsgaW5kZXggYXMgU2Vuc29ycyB9O1xuaW1wb3J0ICogYXMgaW5kZXgkMSBmcm9tICcuL1BsdWdpbnMvaW5kZXgubWpzJztcbmV4cG9ydCB7IGluZGV4JDEgYXMgUGx1Z2lucyB9O1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBEcmFnZ2FibGUgfSBmcm9tICcuL0RyYWdnYWJsZS9EcmFnZ2FibGUubWpzJztcbmltcG9ydCAnLi9EcmFnZ2FibGUvRHJhZ0V2ZW50L0RyYWdFdmVudC5tanMnO1xuaW1wb3J0ICcuL0RyYWdnYWJsZS9EcmFnZ2FibGVFdmVudC9EcmFnZ2FibGVFdmVudC5tanMnO1xuaW1wb3J0ICcuL0RyYWdnYWJsZS9QbHVnaW5zL0Fubm91bmNlbWVudC9Bbm5vdW5jZW1lbnQubWpzJztcbmltcG9ydCAnLi9EcmFnZ2FibGUvUGx1Z2lucy9NaXJyb3IvTWlycm9yRXZlbnQvTWlycm9yRXZlbnQubWpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRHJvcHBhYmxlIH0gZnJvbSAnLi9Ecm9wcGFibGUvRHJvcHBhYmxlLm1qcyc7XG5pbXBvcnQgJy4vRHJvcHBhYmxlL0Ryb3BwYWJsZUV2ZW50L0Ryb3BwYWJsZUV2ZW50Lm1qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFN3YXBwYWJsZSB9IGZyb20gJy4vU3dhcHBhYmxlL1N3YXBwYWJsZS5tanMnO1xuaW1wb3J0ICcuL1N3YXBwYWJsZS9Td2FwcGFibGVFdmVudC9Td2FwcGFibGVFdmVudC5tanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTb3J0YWJsZSB9IGZyb20gJy4vU29ydGFibGUvU29ydGFibGUubWpzJztcbmltcG9ydCAnLi9Tb3J0YWJsZS9Tb3J0YWJsZUV2ZW50L1NvcnRhYmxlRXZlbnQubWpzJztcbiIsImNsYXNzIEFic3RyYWN0RXZlbnQge1xuXG4gIGNvbnN0cnVjdG9yKGRhdGEpIHtcblxuICAgIHRoaXMuX2NhbmNlbGVkID0gZmFsc2U7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgfVxuXG4gIGdldCB0eXBlKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLnR5cGU7XG4gIH1cblxuICBnZXQgY2FuY2VsYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5jYW5jZWxhYmxlO1xuICB9XG5cbiAgY2FuY2VsKCkge1xuICAgIHRoaXMuX2NhbmNlbGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGNhbmNlbGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9jYW5jZWxlZDtcbiAgfVxuXG4gIGNsb25lKGRhdGEpIHtcbiAgICByZXR1cm4gbmV3IHRoaXMuY29uc3RydWN0b3Ioe1xuICAgICAgLi4udGhpcy5kYXRhLFxuICAgICAgLi4uZGF0YVxuICAgIH0pO1xuICB9XG59XG5cbkFic3RyYWN0RXZlbnQudHlwZSA9ICdldmVudCc7XG5cbkFic3RyYWN0RXZlbnQuY2FuY2VsYWJsZSA9IGZhbHNlO1xuXG5leHBvcnQgeyBBYnN0cmFjdEV2ZW50IH07XG4iLCJjbGFzcyBBYnN0cmFjdFBsdWdpbiB7XG5cbiAgY29uc3RydWN0b3IoZHJhZ2dhYmxlKSB7XG4gICAgdGhpcy5kcmFnZ2FibGUgPSBkcmFnZ2FibGU7XG4gIH1cblxuICBhdHRhY2goKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgSW1wbGVtZW50ZWQnKTtcbiAgfVxuXG4gIGRldGFjaCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBJbXBsZW1lbnRlZCcpO1xuICB9XG59XG5cbmV4cG9ydCB7IEFic3RyYWN0UGx1Z2luIH07XG4iLCJmdW5jdGlvbiBjbG9zZXN0KG5vZGUsIHZhbHVlKSB7XG4gIGlmIChub2RlID09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBmdW5jdGlvbiBjb25kaXRpb25GbihjdXJyZW50Tm9kZSkge1xuICAgIGlmIChjdXJyZW50Tm9kZSA9PSBudWxsIHx8IHZhbHVlID09IG51bGwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKGlzU2VsZWN0b3IodmFsdWUpKSB7XG4gICAgICByZXR1cm4gRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcy5jYWxsKGN1cnJlbnROb2RlLCB2YWx1ZSk7XG4gICAgfSBlbHNlIGlmIChpc05vZGVMaXN0KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIFsuLi52YWx1ZV0uaW5jbHVkZXMoY3VycmVudE5vZGUpO1xuICAgIH0gZWxzZSBpZiAoaXNFbGVtZW50KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlID09PSBjdXJyZW50Tm9kZTtcbiAgICB9IGVsc2UgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgICByZXR1cm4gdmFsdWUoY3VycmVudE5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGxldCBjdXJyZW50ID0gbm9kZTtcbiAgZG8ge1xuICAgIGN1cnJlbnQgPSBjdXJyZW50LmNvcnJlc3BvbmRpbmdVc2VFbGVtZW50IHx8IGN1cnJlbnQuY29ycmVzcG9uZGluZ0VsZW1lbnQgfHwgY3VycmVudDtcbiAgICBpZiAoY29uZGl0aW9uRm4oY3VycmVudCkpIHtcbiAgICAgIHJldHVybiBjdXJyZW50O1xuICAgIH1cbiAgICBjdXJyZW50ID0gY3VycmVudD8ucGFyZW50Tm9kZSB8fCBudWxsO1xuICB9IHdoaWxlIChjdXJyZW50ICE9IG51bGwgJiYgY3VycmVudCAhPT0gZG9jdW1lbnQuYm9keSAmJiBjdXJyZW50ICE9PSBkb2N1bWVudCk7XG4gIHJldHVybiBudWxsO1xufVxuZnVuY3Rpb24gaXNTZWxlY3Rvcih2YWx1ZSkge1xuICByZXR1cm4gQm9vbGVhbih0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKTtcbn1cbmZ1bmN0aW9uIGlzTm9kZUxpc3QodmFsdWUpIHtcbiAgcmV0dXJuIEJvb2xlYW4odmFsdWUgaW5zdGFuY2VvZiBOb2RlTGlzdCB8fCB2YWx1ZSBpbnN0YW5jZW9mIEFycmF5KTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudCh2YWx1ZSkge1xuICByZXR1cm4gQm9vbGVhbih2YWx1ZSBpbnN0YW5jZW9mIE5vZGUpO1xufVxuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gQm9vbGVhbih0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpO1xufVxuXG5leHBvcnQgeyBjbG9zZXN0IGFzIGRlZmF1bHQgfTtcbiIsImZ1bmN0aW9uIEF1dG9CaW5kKG9yaWdpbmFsTWV0aG9kLCB7XG4gIG5hbWUsXG4gIGFkZEluaXRpYWxpemVyXG59KSB7XG4gIGFkZEluaXRpYWxpemVyKGZ1bmN0aW9uICgpIHtcblxuICAgIHRoaXNbbmFtZV0gPSBvcmlnaW5hbE1ldGhvZC5iaW5kKHRoaXMpO1xuXG4gIH0pO1xufVxuXG5leHBvcnQgeyBBdXRvQmluZCB9O1xuIiwiZnVuY3Rpb24gZGlzdGFuY2UoeDEsIHkxLCB4MiwgeTIpIHtcbiAgcmV0dXJuIE1hdGguc3FydCgoeDIgLSB4MSkgKiogMiArICh5MiAtIHkxKSAqKiAyKTtcbn1cblxuZXhwb3J0IHsgZGlzdGFuY2UgYXMgZGVmYXVsdCB9O1xuIiwiZnVuY3Rpb24gcmVxdWVzdE5leHRBbmltYXRpb25GcmFtZShjYWxsYmFjaykge1xuICByZXR1cm4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2spO1xuICB9KTtcbn1cblxuZXhwb3J0IHsgcmVxdWVzdE5leHRBbmltYXRpb25GcmFtZSBhcyBkZWZhdWx0IH07XG4iLCJmdW5jdGlvbiB0b3VjaENvb3JkcyhldmVudCkge1xuICBjb25zdCB7XG4gICAgdG91Y2hlcyxcbiAgICBjaGFuZ2VkVG91Y2hlc1xuICB9ID0gZXZlbnQ7XG4gIHJldHVybiB0b3VjaGVzICYmIHRvdWNoZXNbMF0gfHwgY2hhbmdlZFRvdWNoZXMgJiYgY2hhbmdlZFRvdWNoZXNbMF07XG59XG5cbmV4cG9ydCB7IHRvdWNoQ29vcmRzIGFzIGRlZmF1bHQgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFdFQVRIRVJfQVBJIGZyb20gJy4vYXBpa2V5LmpzJ1xyXG5cclxuaW1wb3J0IHsgRHJhZ2dhYmxlLCBTd2FwcGFibGUgfSBmcm9tICdAc2hvcGlmeS9kcmFnZ2FibGUnXHJcblxyXG5sZXQgY3VycmVudENpdGllcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjaXRpZXMnKSA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NpdGllcycpKSA6IFtdXHJcblxyXG5jdXJyZW50Q2l0aWVzLmZvckVhY2goYXN5bmMgY2l0eSA9PiB7XHJcbiAgICBhd2FpdCBDcmVhdGVXZWF0aGVyRWxlbWVudHMoY2l0eSlcclxufSlcclxuXHJcbi8vIEZ1bmN0aW9ucyB0aGF0IGZldGNoIGRhdGFcclxuYXN5bmMgZnVuY3Rpb24gR2V0U2VhcmNoRGF0YShzZWFyY2hRdWVyeSkge1xyXG4gICAgc2VhcmNoUXVlcnkgPSBzZWFyY2hRdWVyeSA9PSAnJyA/ICfCoCcgOiBzZWFyY2hRdWVyeVxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvc2VhcmNoLmpzb24/a2V5PSR7V0VBVEhFUl9BUEl9JnE9JHtzZWFyY2hRdWVyeX1gLCB7IG1vZGU6ICdjb3JzJyB9KTtcclxuICAgIGNvbnN0IGNpdHlEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgcmV0dXJuIGNpdHlEYXRhXHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIEdldFdlYXRoZXJEYXRhKHNlYXJjaFF1ZXJ5KSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0ke1dFQVRIRVJfQVBJfSZxPSR7c2VhcmNoUXVlcnl9JmFxaT15ZXMmZGF5cz0zYCwgeyBtb2RlOiAnY29ycycgfSk7XHJcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHJldHVybiB3ZWF0aGVyRGF0YTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gQ3JlYXRlV2VhdGhlckVsZW1lbnRzKHNlYXJjaFF1ZXJ5KSB7XHJcbiAgICBsZXQgd2VhdGhlckRhdGEgPSBhd2FpdCBHZXRXZWF0aGVyRGF0YShzZWFyY2hRdWVyeSlcclxuXHJcbiAgICBBZGRDaXRpZXNFbGVtZW50KHtcclxuICAgICAgICBjaXR5TmFtZTogd2VhdGhlckRhdGEubG9jYXRpb24ubmFtZSxcclxuICAgICAgICBjaXR5UmVnaW9uOiB3ZWF0aGVyRGF0YS5sb2NhdGlvbi5yZWdpb24sXHJcbiAgICAgICAgY2l0eUNvdW50cnk6IHdlYXRoZXJEYXRhLmxvY2F0aW9uLmNvdW50cnksXHJcbiAgICAgICAgY2l0eVdlYXRoZXI6IHdlYXRoZXJEYXRhLmN1cnJlbnQudGVtcF9jLFxyXG4gICAgICAgIGNpdHlUaW1lOiBDaGFuZ2VUbzEySG91ckZvcm1hdCh3ZWF0aGVyRGF0YS5sb2NhdGlvbi5sb2NhbHRpbWUuc3BsaXQoXCIgXCIpWzFdKSxcclxuICAgICAgICBjaXR5V2VhdGhlckNvbmRpdGlvbjogd2VhdGhlckRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dCxcclxuICAgICAgICBjaXR5SGlnaFRlbXA6IHdlYXRoZXJEYXRhLmZvcmVjYXN0W1wiZm9yZWNhc3RkYXlcIl1bMF0uZGF5Lm1heHRlbXBfYyxcclxuICAgICAgICBjaXR5TG93VGVtcDogd2VhdGhlckRhdGEuZm9yZWNhc3RbXCJmb3JlY2FzdGRheVwiXVswXS5kYXkubWludGVtcF9jLFxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEFkZENpdGllc0VsZW1lbnQoeyBjaXR5TmFtZSwgY2l0eVJlZ2lvbiwgY2l0eUNvdW50cnksIGNpdHlUaW1lLCBjaXR5V2VhdGhlckNvbmRpdGlvbiwgY2l0eVdlYXRoZXIsIGNpdHlIaWdoVGVtcCwgY2l0eUxvd1RlbXAgfSkge1xyXG4gICAgY29uc3QgY2l0eUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgY2l0eUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaG9tZS1jaXR5LWJ1dHRvbicpXHJcbiAgICBjaXR5RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY2l0eScsIGAke2NpdHlOYW1lfSR7Y2l0eVJlZ2lvbiA/ICcsICcgKyBjaXR5UmVnaW9uIDogJyd9LCAke2NpdHlDb3VudHJ5fWApXHJcblxyXG4gICAgY2l0eUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlYXRoZXItc2VjdGlvbicpLmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItc2VjdGlvbi1vcGVuZWQnKVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBjaXR5TmFtZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXHJcbiAgICBjaXR5TmFtZUVsZW1lbnQudGV4dENvbnRlbnQgPSBjaXR5TmFtZVxyXG4gICAgY2l0eU5hbWVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hvbWUtY2l0eS1uYW1lJylcclxuXHJcbiAgICBjb25zdCBjaXR5VGltZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXHJcbiAgICBjaXR5VGltZUVsZW1lbnQudGV4dENvbnRlbnQgPSBjaXR5VGltZVxyXG4gICAgY2l0eVRpbWVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hvbWUtY2l0eS10aW1lJylcclxuXHJcbiAgICBjb25zdCBjaXR5V2VhdGhlckNvbmRpdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXHJcbiAgICBjaXR5V2VhdGhlckNvbmRpdGlvbkVsZW1lbnQudGV4dENvbnRlbnQgPSBjaXR5V2VhdGhlckNvbmRpdGlvblxyXG4gICAgY2l0eVdlYXRoZXJDb25kaXRpb25FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hvbWUtY2l0eS13ZWF0aGVyLWNvbmRpdGlvbicpXHJcblxyXG4gICAgY29uc3QgY2l0eVdlYXRoZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxyXG4gICAgY2l0eVdlYXRoZXJFbGVtZW50LnRleHRDb250ZW50ID0gYCR7TnVtYmVyKGNpdHlXZWF0aGVyKS50b0ZpeGVkKDEpfcKwQ2BcclxuICAgIGNpdHlXZWF0aGVyRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdob21lLWNpdHktd2VhdGhlcicpXHJcblxyXG4gICAgY29uc3QgY2l0eUhpZ2hMb3dUZW1wc0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY2l0eUhpZ2hMb3dUZW1wc0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaG9tZS1jaXR5LWhpZ2gtbG93LXRlbXBzJylcclxuXHJcbiAgICBjb25zdCBjaXR5SGlnaFRlbXBFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxyXG4gICAgY2l0eUhpZ2hUZW1wRWxlbWVudC50ZXh0Q29udGVudCA9IGBIOiR7TnVtYmVyKGNpdHlIaWdoVGVtcCkudG9GaXhlZCgxKX3CsENgXHJcbiAgICBjaXR5SGlnaFRlbXBFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hvbWUtY2l0eS1oaWdoLXRlbXAnKVxyXG5cclxuICAgIGNvbnN0IGNpdHlMb3dUZW1wRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcclxuICAgIGNpdHlMb3dUZW1wRWxlbWVudC50ZXh0Q29udGVudCA9IGBMOiR7TnVtYmVyKGNpdHlMb3dUZW1wKS50b0ZpeGVkKDEpfcKwQ2BcclxuICAgIGNpdHlMb3dUZW1wRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdob21lLWNpdHktbG93LXRlbXAnKVxyXG5cclxuICAgIGNpdHlIaWdoTG93VGVtcHNFbGVtZW50LmFwcGVuZChjaXR5SGlnaFRlbXBFbGVtZW50LCBjaXR5TG93VGVtcEVsZW1lbnQpXHJcblxyXG4gICAgY2l0eUVsZW1lbnQuYXBwZW5kKGNpdHlOYW1lRWxlbWVudCwgY2l0eVRpbWVFbGVtZW50LCBjaXR5V2VhdGhlckNvbmRpdGlvbkVsZW1lbnQsIGNpdHlXZWF0aGVyRWxlbWVudCwgY2l0eUhpZ2hMb3dUZW1wc0VsZW1lbnQpXHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZGVkLWNpdGllcycpLmFwcGVuZENoaWxkKGNpdHlFbGVtZW50KVxyXG59XHJcblxyXG5mdW5jdGlvbiBDaGFuZ2VXZWF0aGVyU2VjdGlvbihwYXJhbSkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdCcpXHJcbiAgICByZXN1bHQuaW5uZXJIVE1MID0gcGFyYW1cclxufVxyXG5cclxuLy8gb3RoZXIgRnVuY3Rpb25zXHJcbmZ1bmN0aW9uIENoYW5nZVRvMTJIb3VyRm9ybWF0KHRpbWVTdHJpbmcpIHtcclxuICAgIC8vIFNwbGl0IHRoZSB0aW1lIHN0cmluZyBpbnRvIGhvdXJzIGFuZCBtaW51dGVzXHJcbiAgICBjb25zdCBbaG91cnMsIG1pbnV0ZXNdID0gdGltZVN0cmluZy5zcGxpdCgnOicpO1xyXG5cclxuICAgIC8vIENvbnZlcnQgaG91cnMgdG8gYSAxMi1ob3VyIGZvcm1hdFxyXG4gICAgY29uc3QgY29udmVydGVkSG91cnMgPSBob3VycyAlIDEyIHx8IDEyO1xyXG5cclxuICAgIC8vIEFkZCBBTS9QTSBpbmRpY2F0b3JcclxuICAgIGNvbnN0IHBlcmlvZCA9IGhvdXJzIDwgMTIgPyAnQU0nIDogJ1BNJztcclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIGZvcm1hdHRlZCB0aW1lIHN0cmluZ1xyXG4gICAgcmV0dXJuIGAke2NvbnZlcnRlZEhvdXJzfToke21pbnV0ZXN9ICR7cGVyaW9kfWA7XHJcbn1cclxuXHJcbi8vIERPTSBFbGVtZW50c1xyXG5jb25zdCBzZWFyY2hCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWJveCcpXHJcbmNvbnN0IHNlYXJjaE9wdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLW9wdGlvbnMnKVxyXG5jb25zdCBjbG9zZVNlYXJjaEljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2Utc2VhcmNoLWljb24nKVxyXG5jb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtYnV0dG9uJylcclxuY29uc3QgZWRpdE1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1tZW51JylcclxuY29uc3QgZWRpdENvbnRleHRNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtY29udGV4dC1tZW51JylcclxuY29uc3QgZWRpdExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1jb250ZXh0LW1lbnUtZWRpdC1saXN0JylcclxuY29uc3QgZWRpdE1lbnVCYWNrZHJvcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LW1lbnUtYmFja2Ryb3AnKVxyXG5cclxuZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGVkaXRDb250ZXh0TWVudS5jbGFzc0xpc3QudG9nZ2xlKCdlZGl0LWNvbnRleHQtbWVudS1jbG9zZWQnKVxyXG4gICAgZWRpdE1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnZWRpdC1tZW51LW9wZW5lZCcpXHJcbn0pXHJcblxyXG5lZGl0TWVudUJhY2tkcm9wLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgZWRpdENvbnRleHRNZW51LmNsYXNzTGlzdC5hZGQoJ2VkaXQtY29udGV4dC1tZW51LWNsb3NlZCcpXHJcbiAgICBlZGl0TWVudS5jbGFzc0xpc3QucmVtb3ZlKCdlZGl0LW1lbnUtb3BlbmVkJylcclxufSlcclxuXHJcbmNsb3NlU2VhcmNoSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHNlYXJjaEJveC52YWx1ZSA9ICcnXHJcbiAgICBzZWFyY2hPcHRpb25zLmlubmVySFRNTCA9ICcnXHJcbn0pXHJcblxyXG5zZWFyY2hCb3guYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsICgpID0+IHtcclxuICAgIHNlYXJjaE9wdGlvbnMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcclxufSlcclxuXHJcbnNlYXJjaEJveC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGFzeW5jIGUgPT4ge1xyXG4gICAgbGV0IHNlYXJjaFJlc3VsdHMgPSBhd2FpdCBHZXRTZWFyY2hEYXRhKHNlYXJjaEJveC52YWx1ZSlcclxuICAgIHNlYXJjaE9wdGlvbnMuaW5uZXJIVE1MID0gJydcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VhcmNoUmVzdWx0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IHNlYXJjaE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgc2VhcmNoT3B0aW9uLnRleHRDb250ZW50ID0gYCR7c2VhcmNoUmVzdWx0c1tpXS5uYW1lfSR7c2VhcmNoUmVzdWx0c1tpXS5yZWdpb24gPyAnLCAnICsgc2VhcmNoUmVzdWx0c1tpXS5yZWdpb24gOiAnJ30sICR7c2VhcmNoUmVzdWx0c1tpXS5jb3VudHJ5fWBcclxuICAgICAgICBzZWFyY2hPcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIE9uU2VhcmNoRW50ZXIoc2VhcmNoUmVzdWx0c1tpXSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIHNlYXJjaE9wdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgICAgICBzZWFyY2hPcHRpb25zLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBzZWFyY2hPcHRpb25zLmFwcGVuZENoaWxkKHNlYXJjaE9wdGlvbilcclxuICAgIH1cclxufSlcclxuXHJcbmZ1bmN0aW9uIE9uU2VhcmNoRW50ZXIoc2VhcmNoUmVzdWx0cykge1xyXG4gICAgaWYgKGN1cnJlbnRDaXRpZXMuaW5jbHVkZXMoYCR7c2VhcmNoUmVzdWx0cy5uYW1lfSR7c2VhcmNoUmVzdWx0cy5yZWdpb24gPyAnLCAnICsgc2VhcmNoUmVzdWx0cy5yZWdpb24gOiAnJ30sICR7c2VhcmNoUmVzdWx0cy5jb3VudHJ5fWApKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGN1cnJlbnRDaXRpZXMucHVzaChgJHtzZWFyY2hSZXN1bHRzLm5hbWV9JHtzZWFyY2hSZXN1bHRzLnJlZ2lvbiA/ICcsICcgKyBzZWFyY2hSZXN1bHRzLnJlZ2lvbiA6ICcnfSwgJHtzZWFyY2hSZXN1bHRzLmNvdW50cnl9YClcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjaXRpZXMnLCBKU09OLnN0cmluZ2lmeShjdXJyZW50Q2l0aWVzKSlcclxuXHJcbiAgICBDcmVhdGVXZWF0aGVyRWxlbWVudHMoYCR7c2VhcmNoUmVzdWx0cy5uYW1lfSR7c2VhcmNoUmVzdWx0cy5yZWdpb24gPyAnLCAnICsgc2VhcmNoUmVzdWx0cy5yZWdpb24gOiAnJ30sICR7c2VhcmNoUmVzdWx0cy5jb3VudHJ5fWApXHJcbn1cclxuXHJcbmNvbnN0IHN3YXBwYWJsZSA9IG5ldyBTd2FwcGFibGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZGVkLWNpdGllcycpLCB7XHJcbiAgICBkcmFnZ2FibGU6ICdidXR0b24nLFxyXG4gICAgZGVsYXk6IHtcclxuICAgICAgICBtb3VzZTogMzAwLFxyXG4gICAgICAgIGRyYWc6IDAsXHJcbiAgICAgICAgdG91Y2g6IDMwMCxcclxuICAgIH1cclxufSk7XHJcblxyXG5zd2FwcGFibGUub24oJ3N3YXBwYWJsZTpzdGFydCcsIGUgPT4geyB9KTtcclxuc3dhcHBhYmxlLm9uKCdzd2FwcGFibGU6c3dhcHBlZCcsIGUgPT4geyB9KTtcclxuc3dhcHBhYmxlLm9uKCdzd2FwcGFibGU6c3RvcCcsIGUgPT4ge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgY3VycmVudENpdGllcyA9IFtdXHJcbiAgICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkZWQtY2l0aWVzJykuY2hpbGRyZW4pLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgICAgICBjdXJyZW50Q2l0aWVzLnB1c2goY2hpbGQuZ2V0QXR0cmlidXRlKCdkYXRhLWNpdHknKSlcclxuICAgICAgICB9KTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2l0aWVzJywgSlNPTi5zdHJpbmdpZnkoY3VycmVudENpdGllcykpXHJcbiAgICB9LCAwKTtcclxufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9