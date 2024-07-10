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




// Home Section DOM
const searchBox = document.getElementById('search-box')
const searchOptions = document.getElementById('search-options')
const closeSearchIcon = document.getElementById('close-search-icon')
const editButton = document.getElementById('edit-button')
const editMenu = document.getElementById('edit-menu')
const editContextMenu = document.getElementById('edit-context-menu')
const editList = document.getElementById('edit-context-menu-edit-list')
const editMenuBackdrop = document.getElementById('edit-menu-backdrop')
const editContextMenuCelsius = document.getElementById('edit-context-menu-celsius')
const editContextMenuFahrenheit = document.getElementById('edit-context-menu-fahrenheit')
const trashCan = document.getElementById('trash-can')
const trashCanLid = document.getElementById('trash-can-lid')
// Weather Section DOM
const weatherSectionToggle = document.getElementById('weather-section-toggle')
const weatherSectionLocation = document.getElementById('weather-section-location')
const weatherSectionTime = document.getElementById('weather-section-time')
const weatherSectionTemp = document.getElementById('weather-section-temp')


let currentCities = localStorage.getItem('cities') ? JSON.parse(localStorage.getItem('cities')) : []
let userTempPreference = localStorage.getItem('userTempPreference') ? localStorage.getItem('userTempPreference') : 'c'

// Loading Initial start
if (userTempPreference == 'f') {
    editContextMenuCelsius.classList.remove('edit-context-menu-temp-active')
    editContextMenuFahrenheit.classList.add('edit-context-menu-temp-active')
}

let InitialCurrentCitiesIndex = 0
LoadInitialCities()

async function LoadInitialCities() {
    if (currentCities.length == 0) return

    await CreateWeatherElements(currentCities[InitialCurrentCitiesIndex])
    InitialCurrentCitiesIndex++
    if (InitialCurrentCitiesIndex < currentCities.length) {
        LoadInitialCities()
    }
}

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

    AddCitiesElement(weatherData);
    return weatherData.location.name;
}

function AddCitiesElement(weatherData) {
    const cityElement = document.createElement('button')
    cityElement.classList.add('home-city-button')
    cityElement.setAttribute('data-city', `${weatherData.location.name}${weatherData.location.region ? ', ' + weatherData.location.region : ''}, ${weatherData.location.country}`)

    cityElement.addEventListener('click', () => {
        ChangeWeatherSection(weatherData)
        document.getElementById('weather-section').classList.add('weather-section-opened')
    })

    const cityNameElement = document.createElement('h2')
    cityNameElement.textContent = weatherData.location.name
    cityNameElement.classList.add('home-city-name')

    const cityTimeElement = document.createElement('h2')
    cityTimeElement.textContent = ChangeTo12HourFormat(weatherData.location.localtime.split(" ")[1])
    cityTimeElement.classList.add('home-city-time')

    const cityWeatherConditionElement = document.createElement('h2')
    cityWeatherConditionElement.textContent = weatherData.current.condition.text
    cityWeatherConditionElement.classList.add('home-city-weather-condition')

    const cityWeatherElement = document.createElement('h2')
    cityWeatherElement.innerHTML = `<span class="temp_in_${userTempPreference}">${Number(weatherData.current['temp_' + userTempPreference]).toFixed(1)}</span>°<span class="temp_in_${userTempPreference}_symbol">${userTempPreference.toUpperCase()}</span>`
    cityWeatherElement.classList.add('home-city-weather')

    const cityHighLowTempsElement = document.createElement('div')
    cityHighLowTempsElement.classList.add('home-city-high-low-temps')

    const cityHighTempElement = document.createElement('h2')
    cityHighTempElement.innerHTML = `H: <span class="temp_in_${userTempPreference}">${Number(weatherData.forecast["forecastday"][0].day['maxtemp_' + userTempPreference]).toFixed(1)}</span>°<span class="temp_in_${userTempPreference}_symbol">${userTempPreference.toUpperCase()}</span>`
    cityHighTempElement.classList.add('home-city-high-temp')

    const cityLowTempElement = document.createElement('h2')
    cityLowTempElement.innerHTML = `L: <span class="temp_in_${userTempPreference}">${Number(weatherData.forecast["forecastday"][0].day['mintemp_' + userTempPreference]).toFixed(1)}</span>°<span class="temp_in_${userTempPreference}_symbol">${userTempPreference.toUpperCase()}</span>`
    cityLowTempElement.classList.add('home-city-low-temp')

    cityHighLowTempsElement.append(cityHighTempElement, cityLowTempElement)

    cityElement.append(cityNameElement, cityTimeElement, cityWeatherConditionElement, cityWeatherElement, cityHighLowTempsElement)

    document.getElementById('added-cities').appendChild(cityElement)
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

function ChangeToCelsius() {
    userTempPreference = 'c'
    localStorage.setItem('userTempPreference', 'c')

    editContextMenuFahrenheit.classList.remove('edit-context-menu-temp-active')
    editContextMenuCelsius.classList.add('edit-context-menu-temp-active')

    document.querySelectorAll('.temp_in_f').forEach(temp => {
        temp.classList.remove('temp_in_f')
        temp.classList.add('temp_in_c')
        temp.textContent = ((Number(temp.textContent) - 32) * 5 / 9).toFixed(1);
    })

    document.querySelectorAll('.temp_in_f_symbol').forEach(symbol => {
        symbol.classList.remove('temp_in_f_symbol')
        symbol.classList.add('temp_in_c_symbol')
        symbol.textContent = 'C'
    })
}

function ChangeToFahrenheit() {
    userTempPreference = 'f'
    localStorage.setItem('userTempPreference', 'f')

    editContextMenuCelsius.classList.remove('edit-context-menu-temp-active')
    editContextMenuFahrenheit.classList.add('edit-context-menu-temp-active')

    document.querySelectorAll('.temp_in_c').forEach(temp => {
        temp.classList.remove('temp_in_c')
        temp.classList.add('temp_in_f')
        temp.textContent = ((Number(temp.textContent) * 9 / 5) + 32).toFixed(1);
    })

    document.querySelectorAll('.temp_in_c_symbol').forEach(symbol => {
        symbol.classList.remove('temp_in_c_symbol')
        symbol.classList.add('temp_in_f_symbol')
        symbol.textContent = 'F'
    })
}

// Home Section DOM
editContextMenuCelsius.addEventListener('click', ChangeToCelsius)
editContextMenuFahrenheit.addEventListener('click', ChangeToFahrenheit)

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

let isDragActive = false
let isCanDelete = false

swappable.on('swappable:start', e => { isDragActive = true; trashCan.classList.add('trash-can-reveal') });
swappable.on('swappable:swapped', e => { });
swappable.on('swappable:stop', e => {
    setTimeout(() => {
        currentCities = []
        Array.from(document.getElementById('added-cities').children).forEach(child => {
            currentCities.push(child.getAttribute('data-city'))
        });
        localStorage.setItem('cities', JSON.stringify(currentCities))

        if (isCanDelete) {
            currentCities = currentCities.filter((element) => element !== e.dragEvent.source.getAttribute('data-city'))
            localStorage.setItem('cities', JSON.stringify(currentCities))
            document.getElementById('added-cities').removeChild(e.dragEvent.originalSource);
        }
        trashCan.classList.remove('trash-can-reveal')
        trashCanLid.classList.remove('trash-can-lid-open')
        isDragActive = false
        isCanDelete = false
    }, 0);
});

document.addEventListener('touchmove', e => {
    if (e.touches[0].clientX > trashCan.getBoundingClientRect().x &&
        e.touches[0].clientX < trashCan.getBoundingClientRect().x + trashCan.getBoundingClientRect().width &&
        e.touches[0].clientY > trashCan.getBoundingClientRect().y &&
        e.touches[0].clientY < trashCan.getBoundingClientRect().y + trashCan.getBoundingClientRect().height
    ) {
        if (isDragActive) {
            trashCanLid.classList.add('trash-can-lid-open')
            isCanDelete = true
        }
    } else {
        trashCanLid.classList.remove('trash-can-lid-open')
        isCanDelete = false
    }
})

trashCan.addEventListener('mouseover', e => {
    if (isDragActive) {
        trashCanLid.classList.add('trash-can-lid-open')
        isCanDelete = true
    }
})

trashCan.addEventListener('mouseleave', e => {
    trashCanLid.classList.remove('trash-can-lid-open')
    isCanDelete = false
})

weatherSectionToggle.addEventListener('click', e => {
    document.getElementById('weather-section').classList.remove('weather-section-opened')
})

function ChangeWeatherSection(weatherData) {
    weatherSectionLocation.textContent = `${weatherData.location.name}${weatherData.location.region ? ', ' + weatherData.location.region : ''}, ${weatherData.location.country}`
    weatherSectionTime.textContent = ChangeTo12HourFormat(weatherData.location.localtime.split(" ")[1])
    weatherSectionTemp.textContent = `${Number(weatherData.current.temp_c).toFixed(1)}°C`
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFa0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzR2dDOztBQUVuRjtBQUNBOztBQUVBOztBQUVBLHdCQUF3QixxRkFBYzs7QUFFdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWdDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkVtRDtBQUMrRTs7QUFFbEs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxRkFBYzs7QUFFbkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLDJFQUFpQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyw0RUFBa0I7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLG9DQUFvQyw2RUFBbUI7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyx5RUFBZTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixtQ0FBbUMsNEVBQWtCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsMEVBQWdCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLE9BQU87QUFDUDtBQUNBLFFBQVE7QUFDUjtBQUNBLE9BQU87QUFDUDtBQUNBLElBQUk7QUFDSjtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKLDRDQUE0QyxRQUFRO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSwwQ0FBMEMsUUFBUTtBQUNsRDtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNB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QUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLDRDQUE0QywwQkFBMEIsRUFBRSxzRUFBc0UsSUFBSSw2QkFBNkI7QUFDL0s7QUFDQSx3Q0FBd0MsOENBQThDO0FBQ3RGLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2pzL2FwaWtleS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL0BzaG9waWZ5L2RyYWdnYWJsZS9idWlsZC9lc20vRHJhZ2dhYmxlL0RyYWdFdmVudC9EcmFnRXZlbnQubWpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvZHJhZ2dhYmxlL2J1aWxkL2VzbS9EcmFnZ2FibGUvRHJhZ2dhYmxlLm1qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL0BzaG9waWZ5L2RyYWdnYWJsZS9idWlsZC9lc20vRHJhZ2dhYmxlL0RyYWdnYWJsZUV2ZW50L0RyYWdnYWJsZUV2ZW50Lm1qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL0BzaG9waWZ5L2RyYWdnYWJsZS9idWlsZC9lc20vRHJhZ2dhYmxlL0VtaXR0ZXIvRW1pdHRlci5tanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9Ac2hvcGlmeS9kcmFnZ2FibGUvYnVpbGQvZXNtL0RyYWdnYWJsZS9QbHVnaW5zL0Fubm91bmNlbWVudC9Bbm5vdW5jZW1lbnQubWpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvZHJhZ2dhYmxlL2J1aWxkL2VzbS9EcmFnZ2FibGUvUGx1Z2lucy9Gb2N1c2FibGUvRm9jdXNhYmxlLm1qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL0BzaG9waWZ5L2RyYWdnYWJsZS9idWlsZC9lc20vRHJhZ2dhYmxlL1BsdWdpbnMvTWlycm9yL01pcnJvci5tanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9Ac2hvcGlmeS9kcmFnZ2FibGUvYnVpbGQvZXNtL0RyYWdnYWJsZS9QbHVnaW5zL01pcnJvci9NaXJyb3JFdmVudC9NaXJyb3JFdmVudC5tanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9Ac2hvcGlmeS9kcmFnZ2FibGUvYnVpbGQvZXNtL0RyYWdnYWJsZS9QbHVnaW5zL1Njcm9sbGFibGUvU2Nyb2xsYWJsZS5tanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9Ac2hvcGlmeS9kcmFnZ2FibGUvYnVpbGQvZXNtL0RyYWdnYWJsZS9TZW5zb3JzL0RyYWdTZW5zb3IvRHJhZ1NlbnNvci5tanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9Ac2hvcGlmeS9kcmFnZ2FibGUvYnVpbGQvZXNtL0RyYWdnYWJsZS9TZW5zb3JzL0ZvcmNlVG91Y2hTZW5zb3IvRm9yY2VUb3VjaFNlbnNvci5tanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9Ac2hvcGlmeS9kcmFnZ2FibGUvYnVpbGQvZXNtL0RyYWdnYWJsZS9TZW5zb3JzL01vdXNlU2Vuc29yL01vdXNlU2Vuc29yLm1qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL0BzaG9waWZ5L2RyYWdnYWJsZS9idWlsZC9lc20vRHJhZ2dhYmxlL1NlbnNvcnMvU2Vuc29yRXZlbnQvU2Vuc29yRXZlbnQubWpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvZHJhZ2dhYmxlL2J1aWxkL2VzbS9EcmFnZ2FibGUvU2Vuc29ycy9TZW5zb3IvU2Vuc29yLm1qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL0BzaG9waWZ5L2RyYWdnYWJsZS9idWlsZC9lc20vRHJhZ2dhYmxlL1NlbnNvcnMvVG91Y2hTZW5zb3IvVG91Y2hTZW5zb3IubWpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvZHJhZ2dhYmxlL2J1aWxkL2VzbS9EcmFnZ2FibGUvU2Vuc29ycy9pbmRleC5tanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9Ac2hvcGlmeS9kcmFnZ2FibGUvYnVpbGQvZXNtL0Ryb3BwYWJsZS9Ecm9wcGFibGUubWpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvZHJhZ2dhYmxlL2J1aWxkL2VzbS9Ecm9wcGFibGUvRHJvcHBhYmxlRXZlbnQvRHJvcHBhYmxlRXZlbnQubWpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvZHJhZ2dhYmxlL2J1aWxkL2VzbS9QbHVnaW5zL0NvbGxpZGFibGUvQ29sbGlkYWJsZS5tanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9Ac2hvcGlmeS9kcmFnZ2FibGUvYnVpbGQvZXNtL1BsdWdpbnMvQ29sbGlkYWJsZS9Db2xsaWRhYmxlRXZlbnQvQ29sbGlkYWJsZUV2ZW50Lm1qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL0BzaG9waWZ5L2RyYWdnYWJsZS9idWlsZC9lc20vUGx1Z2lucy9SZXNpemVNaXJyb3IvUmVzaXplTWlycm9yLm1qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL0BzaG9waWZ5L2RyYWdnYWJsZS9idWlsZC9lc20vUGx1Z2lucy9TbmFwcGFibGUvU25hcHBhYmxlLm1qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL0BzaG9waWZ5L2RyYWdnYWJsZS9idWlsZC9lc20vUGx1Z2lucy9TbmFwcGFibGUvU25hcHBhYmxlRXZlbnQvU25hcHBhYmxlRXZlbnQubWpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvZHJhZ2dhYmxlL2J1aWxkL2VzbS9QbHVnaW5zL1NvcnRBbmltYXRpb24vU29ydEFuaW1hdGlvbi5tanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9Ac2hvcGlmeS9kcmFnZ2FibGUvYnVpbGQvZXNtL1BsdWdpbnMvU3dhcEFuaW1hdGlvbi9Td2FwQW5pbWF0aW9uLm1qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL0BzaG9waWZ5L2RyYWdnYWJsZS9idWlsZC9lc20vUGx1Z2lucy9pbmRleC5tanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9Ac2hvcGlmeS9kcmFnZ2FibGUvYnVpbGQvZXNtL1NvcnRhYmxlL1NvcnRhYmxlLm1qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL0BzaG9waWZ5L2RyYWdnYWJsZS9idWlsZC9lc20vU29ydGFibGUvU29ydGFibGVFdmVudC9Tb3J0YWJsZUV2ZW50Lm1qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL0BzaG9waWZ5L2RyYWdnYWJsZS9idWlsZC9lc20vU3dhcHBhYmxlL1N3YXBwYWJsZS5tanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9Ac2hvcGlmeS9kcmFnZ2FibGUvYnVpbGQvZXNtL1N3YXBwYWJsZS9Td2FwcGFibGVFdmVudC9Td2FwcGFibGVFdmVudC5tanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9Ac2hvcGlmeS9kcmFnZ2FibGUvYnVpbGQvZXNtL192aXJ0dWFsL19yb2xsdXBQbHVnaW5CYWJlbEhlbHBlcnMubWpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvZHJhZ2dhYmxlL2J1aWxkL2VzbS9pbmRleC5tanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9Ac2hvcGlmeS9kcmFnZ2FibGUvYnVpbGQvZXNtL3NoYXJlZC9BYnN0cmFjdEV2ZW50L0Fic3RyYWN0RXZlbnQubWpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvZHJhZ2dhYmxlL2J1aWxkL2VzbS9zaGFyZWQvQWJzdHJhY3RQbHVnaW4vQWJzdHJhY3RQbHVnaW4ubWpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvZHJhZ2dhYmxlL2J1aWxkL2VzbS9zaGFyZWQvdXRpbHMvY2xvc2VzdC9jbG9zZXN0Lm1qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL0BzaG9waWZ5L2RyYWdnYWJsZS9idWlsZC9lc20vc2hhcmVkL3V0aWxzL2RlY29yYXRvcnMvQXV0b0JpbmQubWpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvZHJhZ2dhYmxlL2J1aWxkL2VzbS9zaGFyZWQvdXRpbHMvZGlzdGFuY2UvZGlzdGFuY2UubWpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvZHJhZ2dhYmxlL2J1aWxkL2VzbS9zaGFyZWQvdXRpbHMvcmVxdWVzdE5leHRBbmltYXRpb25GcmFtZS9yZXF1ZXN0TmV4dEFuaW1hdGlvbkZyYW1lLm1qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL0BzaG9waWZ5L2RyYWdnYWJsZS9idWlsZC9lc20vc2hhcmVkL3V0aWxzL3RvdWNoQ29vcmRzL3RvdWNoQ29vcmRzLm1qcyIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9qcy9zY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgV0VBVEhFUl9BUEkgPSBcIjYyOGZhNzU2ZmI2YTQwZjU5NDgyMjU2MjcyNDE1MDZcIjtcclxuZXhwb3J0IGRlZmF1bHQgV0VBVEhFUl9BUEk7XHJcbiIsImltcG9ydCB7IEFic3RyYWN0RXZlbnQgfSBmcm9tICcuLi8uLi9zaGFyZWQvQWJzdHJhY3RFdmVudC9BYnN0cmFjdEV2ZW50Lm1qcyc7XG5cbmNsYXNzIERyYWdFdmVudCBleHRlbmRzIEFic3RyYWN0RXZlbnQge1xuXG4gIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICBzdXBlcihkYXRhKTtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICB9XG5cbiAgZ2V0IHNvdXJjZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLnNvdXJjZTtcbiAgfVxuXG4gIGdldCBvcmlnaW5hbFNvdXJjZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLm9yaWdpbmFsU291cmNlO1xuICB9XG5cbiAgZ2V0IG1pcnJvcigpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLm1pcnJvcjtcbiAgfVxuXG4gIGdldCBzb3VyY2VDb250YWluZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5zb3VyY2VDb250YWluZXI7XG4gIH1cblxuICBnZXQgc2Vuc29yRXZlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5zZW5zb3JFdmVudDtcbiAgfVxuXG4gIGdldCBvcmlnaW5hbEV2ZW50KCkge1xuICAgIGlmICh0aGlzLnNlbnNvckV2ZW50KSB7XG4gICAgICByZXR1cm4gdGhpcy5zZW5zb3JFdmVudC5vcmlnaW5hbEV2ZW50O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5EcmFnRXZlbnQudHlwZSA9ICdkcmFnJztcbmNsYXNzIERyYWdTdGFydEV2ZW50IGV4dGVuZHMgRHJhZ0V2ZW50IHt9XG5cbkRyYWdTdGFydEV2ZW50LnR5cGUgPSAnZHJhZzpzdGFydCc7XG5EcmFnU3RhcnRFdmVudC5jYW5jZWxhYmxlID0gdHJ1ZTtcbmNsYXNzIERyYWdNb3ZlRXZlbnQgZXh0ZW5kcyBEcmFnRXZlbnQge31cblxuRHJhZ01vdmVFdmVudC50eXBlID0gJ2RyYWc6bW92ZSc7XG5cbmNsYXNzIERyYWdPdmVyRXZlbnQgZXh0ZW5kcyBEcmFnRXZlbnQge1xuXG4gIGdldCBvdmVyQ29udGFpbmVyKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEub3ZlckNvbnRhaW5lcjtcbiAgfVxuXG4gIGdldCBvdmVyKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEub3ZlcjtcbiAgfVxufVxuRHJhZ092ZXJFdmVudC50eXBlID0gJ2RyYWc6b3Zlcic7XG5EcmFnT3ZlckV2ZW50LmNhbmNlbGFibGUgPSB0cnVlO1xuZnVuY3Rpb24gaXNEcmFnT3ZlckV2ZW50KGV2ZW50KSB7XG4gIHJldHVybiBldmVudC50eXBlID09PSBEcmFnT3ZlckV2ZW50LnR5cGU7XG59XG5cbmNsYXNzIERyYWdPdXRFdmVudCBleHRlbmRzIERyYWdFdmVudCB7XG5cbiAgZ2V0IG92ZXJDb250YWluZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5vdmVyQ29udGFpbmVyO1xuICB9XG5cbiAgZ2V0IG92ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5vdmVyO1xuICB9XG59XG5cbkRyYWdPdXRFdmVudC50eXBlID0gJ2RyYWc6b3V0JztcblxuY2xhc3MgRHJhZ092ZXJDb250YWluZXJFdmVudCBleHRlbmRzIERyYWdFdmVudCB7XG5cbiAgZ2V0IG92ZXJDb250YWluZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5vdmVyQ29udGFpbmVyO1xuICB9XG59XG5cbkRyYWdPdmVyQ29udGFpbmVyRXZlbnQudHlwZSA9ICdkcmFnOm92ZXI6Y29udGFpbmVyJztcblxuY2xhc3MgRHJhZ091dENvbnRhaW5lckV2ZW50IGV4dGVuZHMgRHJhZ0V2ZW50IHtcblxuICBnZXQgb3ZlckNvbnRhaW5lcigpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLm92ZXJDb250YWluZXI7XG4gIH1cbn1cblxuRHJhZ091dENvbnRhaW5lckV2ZW50LnR5cGUgPSAnZHJhZzpvdXQ6Y29udGFpbmVyJztcblxuY2xhc3MgRHJhZ1ByZXNzdXJlRXZlbnQgZXh0ZW5kcyBEcmFnRXZlbnQge1xuXG4gIGdldCBwcmVzc3VyZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLnByZXNzdXJlO1xuICB9XG59XG5cbkRyYWdQcmVzc3VyZUV2ZW50LnR5cGUgPSAnZHJhZzpwcmVzc3VyZSc7XG5jbGFzcyBEcmFnU3RvcEV2ZW50IGV4dGVuZHMgRHJhZ0V2ZW50IHt9XG5cbkRyYWdTdG9wRXZlbnQudHlwZSA9ICdkcmFnOnN0b3AnO1xuRHJhZ1N0b3BFdmVudC5jYW5jZWxhYmxlID0gdHJ1ZTtcbmNsYXNzIERyYWdTdG9wcGVkRXZlbnQgZXh0ZW5kcyBEcmFnRXZlbnQge31cbkRyYWdTdG9wcGVkRXZlbnQudHlwZSA9ICdkcmFnOnN0b3BwZWQnO1xuXG5leHBvcnQgeyBEcmFnRXZlbnQsIERyYWdNb3ZlRXZlbnQsIERyYWdPdXRDb250YWluZXJFdmVudCwgRHJhZ091dEV2ZW50LCBEcmFnT3ZlckNvbnRhaW5lckV2ZW50LCBEcmFnT3ZlckV2ZW50LCBEcmFnUHJlc3N1cmVFdmVudCwgRHJhZ1N0YXJ0RXZlbnQsIERyYWdTdG9wRXZlbnQsIERyYWdTdG9wcGVkRXZlbnQsIGlzRHJhZ092ZXJFdmVudCB9O1xuIiwiaW1wb3J0IGNsb3Nlc3QgZnJvbSAnLi4vc2hhcmVkL3V0aWxzL2Nsb3Nlc3QvY2xvc2VzdC5tanMnO1xuaW1wb3J0IEFubm91bmNlbWVudCBmcm9tICcuL1BsdWdpbnMvQW5ub3VuY2VtZW50L0Fubm91bmNlbWVudC5tanMnO1xuaW1wb3J0IEZvY3VzYWJsZSBmcm9tICcuL1BsdWdpbnMvRm9jdXNhYmxlL0ZvY3VzYWJsZS5tanMnO1xuaW1wb3J0IE1pcnJvciBmcm9tICcuL1BsdWdpbnMvTWlycm9yL01pcnJvci5tanMnO1xuaW1wb3J0IFNjcm9sbGFibGUgZnJvbSAnLi9QbHVnaW5zL1Njcm9sbGFibGUvU2Nyb2xsYWJsZS5tanMnO1xuaW1wb3J0IEVtaXR0ZXIgZnJvbSAnLi9FbWl0dGVyL0VtaXR0ZXIubWpzJztcbmltcG9ydCBNb3VzZVNlbnNvciBmcm9tICcuL1NlbnNvcnMvTW91c2VTZW5zb3IvTW91c2VTZW5zb3IubWpzJztcbmltcG9ydCBUb3VjaFNlbnNvciBmcm9tICcuL1NlbnNvcnMvVG91Y2hTZW5zb3IvVG91Y2hTZW5zb3IubWpzJztcbmltcG9ydCAnLi9TZW5zb3JzL1NlbnNvckV2ZW50L1NlbnNvckV2ZW50Lm1qcyc7XG5pbXBvcnQgeyBEcmFnZ2FibGVJbml0aWFsaXplZEV2ZW50LCBEcmFnZ2FibGVEZXN0cm95RXZlbnQgfSBmcm9tICcuL0RyYWdnYWJsZUV2ZW50L0RyYWdnYWJsZUV2ZW50Lm1qcyc7XG5pbXBvcnQgeyBEcmFnU3RhcnRFdmVudCwgRHJhZ01vdmVFdmVudCwgRHJhZ091dEV2ZW50LCBEcmFnT3V0Q29udGFpbmVyRXZlbnQsIERyYWdPdmVyQ29udGFpbmVyRXZlbnQsIERyYWdPdmVyRXZlbnQsIERyYWdTdG9wRXZlbnQsIERyYWdTdG9wcGVkRXZlbnQsIERyYWdQcmVzc3VyZUV2ZW50IH0gZnJvbSAnLi9EcmFnRXZlbnQvRHJhZ0V2ZW50Lm1qcyc7XG5cbmNvbnN0IG9uRHJhZ1N0YXJ0ID0gU3ltYm9sKCdvbkRyYWdTdGFydCcpO1xuY29uc3Qgb25EcmFnTW92ZSA9IFN5bWJvbCgnb25EcmFnTW92ZScpO1xuY29uc3Qgb25EcmFnU3RvcCA9IFN5bWJvbCgnb25EcmFnU3RvcCcpO1xuY29uc3Qgb25EcmFnUHJlc3N1cmUgPSBTeW1ib2woJ29uRHJhZ1ByZXNzdXJlJyk7XG5jb25zdCBkcmFnU3RvcCA9IFN5bWJvbCgnZHJhZ1N0b3AnKTtcblxuY29uc3QgZGVmYXVsdEFubm91bmNlbWVudHMgPSB7XG4gICdkcmFnOnN0YXJ0JzogZXZlbnQgPT4gYFBpY2tlZCB1cCAke2V2ZW50LnNvdXJjZS50ZXh0Q29udGVudC50cmltKCkgfHwgZXZlbnQuc291cmNlLmlkIHx8ICdkcmFnZ2FibGUgZWxlbWVudCd9YCxcbiAgJ2RyYWc6c3RvcCc6IGV2ZW50ID0+IGBSZWxlYXNlZCAke2V2ZW50LnNvdXJjZS50ZXh0Q29udGVudC50cmltKCkgfHwgZXZlbnQuc291cmNlLmlkIHx8ICdkcmFnZ2FibGUgZWxlbWVudCd9YFxufTtcbmNvbnN0IGRlZmF1bHRDbGFzc2VzID0ge1xuICAnY29udGFpbmVyOmRyYWdnaW5nJzogJ2RyYWdnYWJsZS1jb250YWluZXItLWlzLWRyYWdnaW5nJyxcbiAgJ3NvdXJjZTpkcmFnZ2luZyc6ICdkcmFnZ2FibGUtc291cmNlLS1pcy1kcmFnZ2luZycsXG4gICdzb3VyY2U6cGxhY2VkJzogJ2RyYWdnYWJsZS1zb3VyY2UtLXBsYWNlZCcsXG4gICdjb250YWluZXI6cGxhY2VkJzogJ2RyYWdnYWJsZS1jb250YWluZXItLXBsYWNlZCcsXG4gICdib2R5OmRyYWdnaW5nJzogJ2RyYWdnYWJsZS0taXMtZHJhZ2dpbmcnLFxuICAnZHJhZ2dhYmxlOm92ZXInOiAnZHJhZ2dhYmxlLS1vdmVyJyxcbiAgJ2NvbnRhaW5lcjpvdmVyJzogJ2RyYWdnYWJsZS1jb250YWluZXItLW92ZXInLFxuICAnc291cmNlOm9yaWdpbmFsJzogJ2RyYWdnYWJsZS0tb3JpZ2luYWwnLFxuICBtaXJyb3I6ICdkcmFnZ2FibGUtbWlycm9yJ1xufTtcbmNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICBkcmFnZ2FibGU6ICcuZHJhZ2dhYmxlLXNvdXJjZScsXG4gIGhhbmRsZTogbnVsbCxcbiAgZGVsYXk6IHt9LFxuICBkaXN0YW5jZTogMCxcbiAgcGxhY2VkVGltZW91dDogODAwLFxuICBwbHVnaW5zOiBbXSxcbiAgc2Vuc29yczogW10sXG4gIGV4Y2x1ZGU6IHtcbiAgICBwbHVnaW5zOiBbXSxcbiAgICBzZW5zb3JzOiBbXVxuICB9XG59O1xuXG5jbGFzcyBEcmFnZ2FibGUge1xuXG4gIGNvbnN0cnVjdG9yKGNvbnRhaW5lcnMgPSBbZG9jdW1lbnQuYm9keV0sIG9wdGlvbnMgPSB7fSkge1xuXG4gICAgaWYgKGNvbnRhaW5lcnMgaW5zdGFuY2VvZiBOb2RlTGlzdCB8fCBjb250YWluZXJzIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgIHRoaXMuY29udGFpbmVycyA9IFsuLi5jb250YWluZXJzXTtcbiAgICB9IGVsc2UgaWYgKGNvbnRhaW5lcnMgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgdGhpcy5jb250YWluZXJzID0gW2NvbnRhaW5lcnNdO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0RyYWdnYWJsZSBjb250YWluZXJzIGFyZSBleHBlY3RlZCB0byBiZSBvZiB0eXBlIGBOb2RlTGlzdGAsIGBIVE1MRWxlbWVudFtdYCBvciBgSFRNTEVsZW1lbnRgJyk7XG4gICAgfVxuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIC4uLmRlZmF1bHRPcHRpb25zLFxuICAgICAgLi4ub3B0aW9ucyxcbiAgICAgIGNsYXNzZXM6IHtcbiAgICAgICAgLi4uZGVmYXVsdENsYXNzZXMsXG4gICAgICAgIC4uLihvcHRpb25zLmNsYXNzZXMgfHwge30pXG4gICAgICB9LFxuICAgICAgYW5ub3VuY2VtZW50czoge1xuICAgICAgICAuLi5kZWZhdWx0QW5ub3VuY2VtZW50cyxcbiAgICAgICAgLi4uKG9wdGlvbnMuYW5ub3VuY2VtZW50cyB8fCB7fSlcbiAgICAgIH0sXG4gICAgICBleGNsdWRlOiB7XG4gICAgICAgIHBsdWdpbnM6IG9wdGlvbnMuZXhjbHVkZSAmJiBvcHRpb25zLmV4Y2x1ZGUucGx1Z2lucyB8fCBbXSxcbiAgICAgICAgc2Vuc29yczogb3B0aW9ucy5leGNsdWRlICYmIG9wdGlvbnMuZXhjbHVkZS5zZW5zb3JzIHx8IFtdXG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuZW1pdHRlciA9IG5ldyBFbWl0dGVyKCk7XG5cbiAgICB0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG5cbiAgICB0aGlzLnBsdWdpbnMgPSBbXTtcblxuICAgIHRoaXMuc2Vuc29ycyA9IFtdO1xuICAgIHRoaXNbb25EcmFnU3RhcnRdID0gdGhpc1tvbkRyYWdTdGFydF0uYmluZCh0aGlzKTtcbiAgICB0aGlzW29uRHJhZ01vdmVdID0gdGhpc1tvbkRyYWdNb3ZlXS5iaW5kKHRoaXMpO1xuICAgIHRoaXNbb25EcmFnU3RvcF0gPSB0aGlzW29uRHJhZ1N0b3BdLmJpbmQodGhpcyk7XG4gICAgdGhpc1tvbkRyYWdQcmVzc3VyZV0gPSB0aGlzW29uRHJhZ1ByZXNzdXJlXS5iaW5kKHRoaXMpO1xuICAgIHRoaXNbZHJhZ1N0b3BdID0gdGhpc1tkcmFnU3RvcF0uYmluZCh0aGlzKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnOnN0YXJ0JywgdGhpc1tvbkRyYWdTdGFydF0sIHRydWUpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWc6bW92ZScsIHRoaXNbb25EcmFnTW92ZV0sIHRydWUpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWc6c3RvcCcsIHRoaXNbb25EcmFnU3RvcF0sIHRydWUpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWc6cHJlc3N1cmUnLCB0aGlzW29uRHJhZ1ByZXNzdXJlXSwgdHJ1ZSk7XG4gICAgY29uc3QgZGVmYXVsdFBsdWdpbnMgPSBPYmplY3QudmFsdWVzKERyYWdnYWJsZS5QbHVnaW5zKS5maWx0ZXIoUGx1Z2luID0+ICF0aGlzLm9wdGlvbnMuZXhjbHVkZS5wbHVnaW5zLmluY2x1ZGVzKFBsdWdpbikpO1xuICAgIGNvbnN0IGRlZmF1bHRTZW5zb3JzID0gT2JqZWN0LnZhbHVlcyhEcmFnZ2FibGUuU2Vuc29ycykuZmlsdGVyKHNlbnNvciA9PiAhdGhpcy5vcHRpb25zLmV4Y2x1ZGUuc2Vuc29ycy5pbmNsdWRlcyhzZW5zb3IpKTtcbiAgICB0aGlzLmFkZFBsdWdpbiguLi5bLi4uZGVmYXVsdFBsdWdpbnMsIC4uLnRoaXMub3B0aW9ucy5wbHVnaW5zXSk7XG4gICAgdGhpcy5hZGRTZW5zb3IoLi4uWy4uLmRlZmF1bHRTZW5zb3JzLCAuLi50aGlzLm9wdGlvbnMuc2Vuc29yc10pO1xuICAgIGNvbnN0IGRyYWdnYWJsZUluaXRpYWxpemVkRXZlbnQgPSBuZXcgRHJhZ2dhYmxlSW5pdGlhbGl6ZWRFdmVudCh7XG4gICAgICBkcmFnZ2FibGU6IHRoaXNcbiAgICB9KTtcbiAgICB0aGlzLm9uKCdtaXJyb3I6Y3JlYXRlZCcsICh7XG4gICAgICBtaXJyb3JcbiAgICB9KSA9PiB0aGlzLm1pcnJvciA9IG1pcnJvcik7XG4gICAgdGhpcy5vbignbWlycm9yOmRlc3Ryb3knLCAoKSA9PiB0aGlzLm1pcnJvciA9IG51bGwpO1xuICAgIHRoaXMudHJpZ2dlcihkcmFnZ2FibGVJbml0aWFsaXplZEV2ZW50KTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZzpzdGFydCcsIHRoaXNbb25EcmFnU3RhcnRdLCB0cnVlKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnOm1vdmUnLCB0aGlzW29uRHJhZ01vdmVdLCB0cnVlKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnOnN0b3AnLCB0aGlzW29uRHJhZ1N0b3BdLCB0cnVlKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnOnByZXNzdXJlJywgdGhpc1tvbkRyYWdQcmVzc3VyZV0sIHRydWUpO1xuICAgIGNvbnN0IGRyYWdnYWJsZURlc3Ryb3lFdmVudCA9IG5ldyBEcmFnZ2FibGVEZXN0cm95RXZlbnQoe1xuICAgICAgZHJhZ2dhYmxlOiB0aGlzXG4gICAgfSk7XG4gICAgdGhpcy50cmlnZ2VyKGRyYWdnYWJsZURlc3Ryb3lFdmVudCk7XG4gICAgdGhpcy5yZW1vdmVQbHVnaW4oLi4udGhpcy5wbHVnaW5zLm1hcChwbHVnaW4gPT4gcGx1Z2luLmNvbnN0cnVjdG9yKSk7XG4gICAgdGhpcy5yZW1vdmVTZW5zb3IoLi4udGhpcy5zZW5zb3JzLm1hcChzZW5zb3IgPT4gc2Vuc29yLmNvbnN0cnVjdG9yKSk7XG4gIH1cblxuICBhZGRQbHVnaW4oLi4ucGx1Z2lucykge1xuICAgIGNvbnN0IGFjdGl2ZVBsdWdpbnMgPSBwbHVnaW5zLm1hcChQbHVnaW4gPT4gbmV3IFBsdWdpbih0aGlzKSk7XG4gICAgYWN0aXZlUGx1Z2lucy5mb3JFYWNoKHBsdWdpbiA9PiBwbHVnaW4uYXR0YWNoKCkpO1xuICAgIHRoaXMucGx1Z2lucyA9IFsuLi50aGlzLnBsdWdpbnMsIC4uLmFjdGl2ZVBsdWdpbnNdO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVtb3ZlUGx1Z2luKC4uLnBsdWdpbnMpIHtcbiAgICBjb25zdCByZW1vdmVkUGx1Z2lucyA9IHRoaXMucGx1Z2lucy5maWx0ZXIocGx1Z2luID0+IHBsdWdpbnMuaW5jbHVkZXMocGx1Z2luLmNvbnN0cnVjdG9yKSk7XG4gICAgcmVtb3ZlZFBsdWdpbnMuZm9yRWFjaChwbHVnaW4gPT4gcGx1Z2luLmRldGFjaCgpKTtcbiAgICB0aGlzLnBsdWdpbnMgPSB0aGlzLnBsdWdpbnMuZmlsdGVyKHBsdWdpbiA9PiAhcGx1Z2lucy5pbmNsdWRlcyhwbHVnaW4uY29uc3RydWN0b3IpKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFkZFNlbnNvciguLi5zZW5zb3JzKSB7XG4gICAgY29uc3QgYWN0aXZlU2Vuc29ycyA9IHNlbnNvcnMubWFwKFNlbnNvciA9PiBuZXcgU2Vuc29yKHRoaXMuY29udGFpbmVycywgdGhpcy5vcHRpb25zKSk7XG4gICAgYWN0aXZlU2Vuc29ycy5mb3JFYWNoKHNlbnNvciA9PiBzZW5zb3IuYXR0YWNoKCkpO1xuICAgIHRoaXMuc2Vuc29ycyA9IFsuLi50aGlzLnNlbnNvcnMsIC4uLmFjdGl2ZVNlbnNvcnNdO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVtb3ZlU2Vuc29yKC4uLnNlbnNvcnMpIHtcbiAgICBjb25zdCByZW1vdmVkU2Vuc29ycyA9IHRoaXMuc2Vuc29ycy5maWx0ZXIoc2Vuc29yID0+IHNlbnNvcnMuaW5jbHVkZXMoc2Vuc29yLmNvbnN0cnVjdG9yKSk7XG4gICAgcmVtb3ZlZFNlbnNvcnMuZm9yRWFjaChzZW5zb3IgPT4gc2Vuc29yLmRldGFjaCgpKTtcbiAgICB0aGlzLnNlbnNvcnMgPSB0aGlzLnNlbnNvcnMuZmlsdGVyKHNlbnNvciA9PiAhc2Vuc29ycy5pbmNsdWRlcyhzZW5zb3IuY29uc3RydWN0b3IpKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFkZENvbnRhaW5lciguLi5jb250YWluZXJzKSB7XG4gICAgdGhpcy5jb250YWluZXJzID0gWy4uLnRoaXMuY29udGFpbmVycywgLi4uY29udGFpbmVyc107XG4gICAgdGhpcy5zZW5zb3JzLmZvckVhY2goc2Vuc29yID0+IHNlbnNvci5hZGRDb250YWluZXIoLi4uY29udGFpbmVycykpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVtb3ZlQ29udGFpbmVyKC4uLmNvbnRhaW5lcnMpIHtcbiAgICB0aGlzLmNvbnRhaW5lcnMgPSB0aGlzLmNvbnRhaW5lcnMuZmlsdGVyKGNvbnRhaW5lciA9PiAhY29udGFpbmVycy5pbmNsdWRlcyhjb250YWluZXIpKTtcbiAgICB0aGlzLnNlbnNvcnMuZm9yRWFjaChzZW5zb3IgPT4gc2Vuc29yLnJlbW92ZUNvbnRhaW5lciguLi5jb250YWluZXJzKSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBvbih0eXBlLCAuLi5jYWxsYmFja3MpIHtcbiAgICB0aGlzLmVtaXR0ZXIub24odHlwZSwgLi4uY2FsbGJhY2tzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG9mZih0eXBlLCBjYWxsYmFjaykge1xuICAgIHRoaXMuZW1pdHRlci5vZmYodHlwZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdHJpZ2dlcihldmVudCkge1xuICAgIHRoaXMuZW1pdHRlci50cmlnZ2VyKGV2ZW50KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldENsYXNzTmFtZUZvcihuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q2xhc3NOYW1lc0ZvcihuYW1lKVswXTtcbiAgfVxuXG4gIGdldENsYXNzTmFtZXNGb3IobmFtZSkge1xuICAgIGNvbnN0IGNsYXNzTmFtZXMgPSB0aGlzLm9wdGlvbnMuY2xhc3Nlc1tuYW1lXTtcbiAgICBpZiAoY2xhc3NOYW1lcyBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICByZXR1cm4gY2xhc3NOYW1lcztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjbGFzc05hbWVzID09PSAnc3RyaW5nJyB8fCBjbGFzc05hbWVzIGluc3RhbmNlb2YgU3RyaW5nKSB7XG4gICAgICByZXR1cm4gW2NsYXNzTmFtZXNdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9XG5cbiAgaXNEcmFnZ2luZygpIHtcbiAgICByZXR1cm4gQm9vbGVhbih0aGlzLmRyYWdnaW5nKTtcbiAgfVxuXG4gIGdldERyYWdnYWJsZUVsZW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcnMucmVkdWNlKChjdXJyZW50LCBjb250YWluZXIpID0+IHtcbiAgICAgIHJldHVybiBbLi4uY3VycmVudCwgLi4udGhpcy5nZXREcmFnZ2FibGVFbGVtZW50c0ZvckNvbnRhaW5lcihjb250YWluZXIpXTtcbiAgICB9LCBbXSk7XG4gIH1cblxuICBnZXREcmFnZ2FibGVFbGVtZW50c0ZvckNvbnRhaW5lcihjb250YWluZXIpIHtcbiAgICBjb25zdCBhbGxEcmFnZ2FibGVFbGVtZW50cyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKHRoaXMub3B0aW9ucy5kcmFnZ2FibGUpO1xuICAgIHJldHVybiBbLi4uYWxsRHJhZ2dhYmxlRWxlbWVudHNdLmZpbHRlcihjaGlsZEVsZW1lbnQgPT4ge1xuICAgICAgcmV0dXJuIGNoaWxkRWxlbWVudCAhPT0gdGhpcy5vcmlnaW5hbFNvdXJjZSAmJiBjaGlsZEVsZW1lbnQgIT09IHRoaXMubWlycm9yO1xuICAgIH0pO1xuICB9XG5cbiAgY2FuY2VsKCkge1xuICAgIHRoaXNbZHJhZ1N0b3BdKCk7XG4gIH1cblxuICBbb25EcmFnU3RhcnRdKGV2ZW50KSB7XG4gICAgY29uc3Qgc2Vuc29yRXZlbnQgPSBnZXRTZW5zb3JFdmVudChldmVudCk7XG4gICAgY29uc3Qge1xuICAgICAgdGFyZ2V0LFxuICAgICAgY29udGFpbmVyLFxuICAgICAgb3JpZ2luYWxTb3VyY2VcbiAgICB9ID0gc2Vuc29yRXZlbnQ7XG4gICAgaWYgKCF0aGlzLmNvbnRhaW5lcnMuaW5jbHVkZXMoY29udGFpbmVyKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5vcHRpb25zLmhhbmRsZSAmJiB0YXJnZXQgJiYgIWNsb3Nlc3QodGFyZ2V0LCB0aGlzLm9wdGlvbnMuaGFuZGxlKSkge1xuICAgICAgc2Vuc29yRXZlbnQuY2FuY2VsKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMub3JpZ2luYWxTb3VyY2UgPSBvcmlnaW5hbFNvdXJjZTtcbiAgICB0aGlzLnNvdXJjZUNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICBpZiAodGhpcy5sYXN0UGxhY2VkU291cmNlICYmIHRoaXMubGFzdFBsYWNlZENvbnRhaW5lcikge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMucGxhY2VkVGltZW91dElEKTtcbiAgICAgIHRoaXMubGFzdFBsYWNlZFNvdXJjZS5jbGFzc0xpc3QucmVtb3ZlKC4uLnRoaXMuZ2V0Q2xhc3NOYW1lc0Zvcignc291cmNlOnBsYWNlZCcpKTtcbiAgICAgIHRoaXMubGFzdFBsYWNlZENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKC4uLnRoaXMuZ2V0Q2xhc3NOYW1lc0ZvcignY29udGFpbmVyOnBsYWNlZCcpKTtcbiAgICB9XG4gICAgdGhpcy5zb3VyY2UgPSB0aGlzLm9yaWdpbmFsU291cmNlLmNsb25lTm9kZSh0cnVlKTtcbiAgICB0aGlzLm9yaWdpbmFsU291cmNlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuc291cmNlLCB0aGlzLm9yaWdpbmFsU291cmNlKTtcbiAgICB0aGlzLm9yaWdpbmFsU291cmNlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgY29uc3QgZHJhZ1N0YXJ0RXZlbnQgPSBuZXcgRHJhZ1N0YXJ0RXZlbnQoe1xuICAgICAgc291cmNlOiB0aGlzLnNvdXJjZSxcbiAgICAgIG9yaWdpbmFsU291cmNlOiB0aGlzLm9yaWdpbmFsU291cmNlLFxuICAgICAgc291cmNlQ29udGFpbmVyOiBjb250YWluZXIsXG4gICAgICBzZW5zb3JFdmVudFxuICAgIH0pO1xuICAgIHRoaXMudHJpZ2dlcihkcmFnU3RhcnRFdmVudCk7XG4gICAgdGhpcy5kcmFnZ2luZyA9ICFkcmFnU3RhcnRFdmVudC5jYW5jZWxlZCgpO1xuICAgIGlmIChkcmFnU3RhcnRFdmVudC5jYW5jZWxlZCgpKSB7XG4gICAgICB0aGlzLnNvdXJjZS5yZW1vdmUoKTtcbiAgICAgIHRoaXMub3JpZ2luYWxTb3VyY2Uuc3R5bGUuZGlzcGxheSA9IG51bGw7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMub3JpZ2luYWxTb3VyY2UuY2xhc3NMaXN0LmFkZCguLi50aGlzLmdldENsYXNzTmFtZXNGb3IoJ3NvdXJjZTpvcmlnaW5hbCcpKTtcbiAgICB0aGlzLnNvdXJjZS5jbGFzc0xpc3QuYWRkKC4uLnRoaXMuZ2V0Q2xhc3NOYW1lc0Zvcignc291cmNlOmRyYWdnaW5nJykpO1xuICAgIHRoaXMuc291cmNlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoLi4udGhpcy5nZXRDbGFzc05hbWVzRm9yKCdjb250YWluZXI6ZHJhZ2dpbmcnKSk7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKC4uLnRoaXMuZ2V0Q2xhc3NOYW1lc0ZvcignYm9keTpkcmFnZ2luZycpKTtcbiAgICBhcHBseVVzZXJTZWxlY3QoZG9jdW1lbnQuYm9keSwgJ25vbmUnKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgY29uc3Qgb2xkU2Vuc29yRXZlbnQgPSBnZXRTZW5zb3JFdmVudChldmVudCk7XG4gICAgICBjb25zdCBuZXdTZW5zb3JFdmVudCA9IG9sZFNlbnNvckV2ZW50LmNsb25lKHtcbiAgICAgICAgdGFyZ2V0OiB0aGlzLnNvdXJjZVxuICAgICAgfSk7XG4gICAgICB0aGlzW29uRHJhZ01vdmVdKHtcbiAgICAgICAgLi4uZXZlbnQsXG4gICAgICAgIGRldGFpbDogbmV3U2Vuc29yRXZlbnRcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgW29uRHJhZ01vdmVdKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmRyYWdnaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHNlbnNvckV2ZW50ID0gZ2V0U2Vuc29yRXZlbnQoZXZlbnQpO1xuICAgIGNvbnN0IHtcbiAgICAgIGNvbnRhaW5lclxuICAgIH0gPSBzZW5zb3JFdmVudDtcbiAgICBsZXQgdGFyZ2V0ID0gc2Vuc29yRXZlbnQudGFyZ2V0O1xuICAgIGNvbnN0IGRyYWdNb3ZlRXZlbnQgPSBuZXcgRHJhZ01vdmVFdmVudCh7XG4gICAgICBzb3VyY2U6IHRoaXMuc291cmNlLFxuICAgICAgb3JpZ2luYWxTb3VyY2U6IHRoaXMub3JpZ2luYWxTb3VyY2UsXG4gICAgICBzb3VyY2VDb250YWluZXI6IGNvbnRhaW5lcixcbiAgICAgIHNlbnNvckV2ZW50XG4gICAgfSk7XG4gICAgdGhpcy50cmlnZ2VyKGRyYWdNb3ZlRXZlbnQpO1xuICAgIGlmIChkcmFnTW92ZUV2ZW50LmNhbmNlbGVkKCkpIHtcbiAgICAgIHNlbnNvckV2ZW50LmNhbmNlbCgpO1xuICAgIH1cbiAgICB0YXJnZXQgPSBjbG9zZXN0KHRhcmdldCwgdGhpcy5vcHRpb25zLmRyYWdnYWJsZSk7XG4gICAgY29uc3Qgd2l0aGluQ29ycmVjdENvbnRhaW5lciA9IGNsb3Nlc3Qoc2Vuc29yRXZlbnQudGFyZ2V0LCB0aGlzLmNvbnRhaW5lcnMpO1xuICAgIGNvbnN0IG92ZXJDb250YWluZXIgPSBzZW5zb3JFdmVudC5vdmVyQ29udGFpbmVyIHx8IHdpdGhpbkNvcnJlY3RDb250YWluZXI7XG4gICAgY29uc3QgaXNMZWF2aW5nQ29udGFpbmVyID0gdGhpcy5jdXJyZW50T3ZlckNvbnRhaW5lciAmJiBvdmVyQ29udGFpbmVyICE9PSB0aGlzLmN1cnJlbnRPdmVyQ29udGFpbmVyO1xuICAgIGNvbnN0IGlzTGVhdmluZ0RyYWdnYWJsZSA9IHRoaXMuY3VycmVudE92ZXIgJiYgdGFyZ2V0ICE9PSB0aGlzLmN1cnJlbnRPdmVyO1xuICAgIGNvbnN0IGlzT3ZlckNvbnRhaW5lciA9IG92ZXJDb250YWluZXIgJiYgdGhpcy5jdXJyZW50T3ZlckNvbnRhaW5lciAhPT0gb3ZlckNvbnRhaW5lcjtcbiAgICBjb25zdCBpc092ZXJEcmFnZ2FibGUgPSB3aXRoaW5Db3JyZWN0Q29udGFpbmVyICYmIHRhcmdldCAmJiB0aGlzLmN1cnJlbnRPdmVyICE9PSB0YXJnZXQ7XG4gICAgaWYgKGlzTGVhdmluZ0RyYWdnYWJsZSkge1xuICAgICAgY29uc3QgZHJhZ091dEV2ZW50ID0gbmV3IERyYWdPdXRFdmVudCh7XG4gICAgICAgIHNvdXJjZTogdGhpcy5zb3VyY2UsXG4gICAgICAgIG9yaWdpbmFsU291cmNlOiB0aGlzLm9yaWdpbmFsU291cmNlLFxuICAgICAgICBzb3VyY2VDb250YWluZXI6IGNvbnRhaW5lcixcbiAgICAgICAgc2Vuc29yRXZlbnQsXG4gICAgICAgIG92ZXI6IHRoaXMuY3VycmVudE92ZXIsXG4gICAgICAgIG92ZXJDb250YWluZXI6IHRoaXMuY3VycmVudE92ZXJDb250YWluZXJcbiAgICAgIH0pO1xuICAgICAgdGhpcy5jdXJyZW50T3Zlci5jbGFzc0xpc3QucmVtb3ZlKC4uLnRoaXMuZ2V0Q2xhc3NOYW1lc0ZvcignZHJhZ2dhYmxlOm92ZXInKSk7XG4gICAgICB0aGlzLmN1cnJlbnRPdmVyID0gbnVsbDtcbiAgICAgIHRoaXMudHJpZ2dlcihkcmFnT3V0RXZlbnQpO1xuICAgIH1cbiAgICBpZiAoaXNMZWF2aW5nQ29udGFpbmVyKSB7XG4gICAgICBjb25zdCBkcmFnT3V0Q29udGFpbmVyRXZlbnQgPSBuZXcgRHJhZ091dENvbnRhaW5lckV2ZW50KHtcbiAgICAgICAgc291cmNlOiB0aGlzLnNvdXJjZSxcbiAgICAgICAgb3JpZ2luYWxTb3VyY2U6IHRoaXMub3JpZ2luYWxTb3VyY2UsXG4gICAgICAgIHNvdXJjZUNvbnRhaW5lcjogY29udGFpbmVyLFxuICAgICAgICBzZW5zb3JFdmVudCxcbiAgICAgICAgb3ZlckNvbnRhaW5lcjogdGhpcy5jdXJyZW50T3ZlckNvbnRhaW5lclxuICAgICAgfSk7XG4gICAgICB0aGlzLmN1cnJlbnRPdmVyQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoLi4udGhpcy5nZXRDbGFzc05hbWVzRm9yKCdjb250YWluZXI6b3ZlcicpKTtcbiAgICAgIHRoaXMuY3VycmVudE92ZXJDb250YWluZXIgPSBudWxsO1xuICAgICAgdGhpcy50cmlnZ2VyKGRyYWdPdXRDb250YWluZXJFdmVudCk7XG4gICAgfVxuICAgIGlmIChpc092ZXJDb250YWluZXIpIHtcbiAgICAgIG92ZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCguLi50aGlzLmdldENsYXNzTmFtZXNGb3IoJ2NvbnRhaW5lcjpvdmVyJykpO1xuICAgICAgY29uc3QgZHJhZ092ZXJDb250YWluZXJFdmVudCA9IG5ldyBEcmFnT3ZlckNvbnRhaW5lckV2ZW50KHtcbiAgICAgICAgc291cmNlOiB0aGlzLnNvdXJjZSxcbiAgICAgICAgb3JpZ2luYWxTb3VyY2U6IHRoaXMub3JpZ2luYWxTb3VyY2UsXG4gICAgICAgIHNvdXJjZUNvbnRhaW5lcjogY29udGFpbmVyLFxuICAgICAgICBzZW5zb3JFdmVudCxcbiAgICAgICAgb3ZlckNvbnRhaW5lclxuICAgICAgfSk7XG4gICAgICB0aGlzLmN1cnJlbnRPdmVyQ29udGFpbmVyID0gb3ZlckNvbnRhaW5lcjtcbiAgICAgIHRoaXMudHJpZ2dlcihkcmFnT3ZlckNvbnRhaW5lckV2ZW50KTtcbiAgICB9XG4gICAgaWYgKGlzT3ZlckRyYWdnYWJsZSkge1xuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoLi4udGhpcy5nZXRDbGFzc05hbWVzRm9yKCdkcmFnZ2FibGU6b3ZlcicpKTtcbiAgICAgIGNvbnN0IGRyYWdPdmVyRXZlbnQgPSBuZXcgRHJhZ092ZXJFdmVudCh7XG4gICAgICAgIHNvdXJjZTogdGhpcy5zb3VyY2UsXG4gICAgICAgIG9yaWdpbmFsU291cmNlOiB0aGlzLm9yaWdpbmFsU291cmNlLFxuICAgICAgICBzb3VyY2VDb250YWluZXI6IGNvbnRhaW5lcixcbiAgICAgICAgc2Vuc29yRXZlbnQsXG4gICAgICAgIG92ZXJDb250YWluZXIsXG4gICAgICAgIG92ZXI6IHRhcmdldFxuICAgICAgfSk7XG4gICAgICB0aGlzLmN1cnJlbnRPdmVyID0gdGFyZ2V0O1xuICAgICAgdGhpcy50cmlnZ2VyKGRyYWdPdmVyRXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIFtkcmFnU3RvcF0oZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuZHJhZ2dpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuICAgIGNvbnN0IGRyYWdTdG9wRXZlbnQgPSBuZXcgRHJhZ1N0b3BFdmVudCh7XG4gICAgICBzb3VyY2U6IHRoaXMuc291cmNlLFxuICAgICAgb3JpZ2luYWxTb3VyY2U6IHRoaXMub3JpZ2luYWxTb3VyY2UsXG4gICAgICBzZW5zb3JFdmVudDogZXZlbnQgPyBldmVudC5zZW5zb3JFdmVudCA6IG51bGwsXG4gICAgICBzb3VyY2VDb250YWluZXI6IHRoaXMuc291cmNlQ29udGFpbmVyXG4gICAgfSk7XG4gICAgdGhpcy50cmlnZ2VyKGRyYWdTdG9wRXZlbnQpO1xuICAgIGlmICghZHJhZ1N0b3BFdmVudC5jYW5jZWxlZCgpKSB0aGlzLnNvdXJjZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzLm9yaWdpbmFsU291cmNlLCB0aGlzLnNvdXJjZSk7XG4gICAgdGhpcy5zb3VyY2UucmVtb3ZlKCk7XG4gICAgdGhpcy5vcmlnaW5hbFNvdXJjZS5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgdGhpcy5zb3VyY2UuY2xhc3NMaXN0LnJlbW92ZSguLi50aGlzLmdldENsYXNzTmFtZXNGb3IoJ3NvdXJjZTpkcmFnZ2luZycpKTtcbiAgICB0aGlzLm9yaWdpbmFsU291cmNlLmNsYXNzTGlzdC5yZW1vdmUoLi4udGhpcy5nZXRDbGFzc05hbWVzRm9yKCdzb3VyY2U6b3JpZ2luYWwnKSk7XG4gICAgdGhpcy5vcmlnaW5hbFNvdXJjZS5jbGFzc0xpc3QuYWRkKC4uLnRoaXMuZ2V0Q2xhc3NOYW1lc0Zvcignc291cmNlOnBsYWNlZCcpKTtcbiAgICB0aGlzLnNvdXJjZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKC4uLnRoaXMuZ2V0Q2xhc3NOYW1lc0ZvcignY29udGFpbmVyOnBsYWNlZCcpKTtcbiAgICB0aGlzLnNvdXJjZUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKC4uLnRoaXMuZ2V0Q2xhc3NOYW1lc0ZvcignY29udGFpbmVyOmRyYWdnaW5nJykpO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSguLi50aGlzLmdldENsYXNzTmFtZXNGb3IoJ2JvZHk6ZHJhZ2dpbmcnKSk7XG4gICAgYXBwbHlVc2VyU2VsZWN0KGRvY3VtZW50LmJvZHksICcnKTtcbiAgICBpZiAodGhpcy5jdXJyZW50T3Zlcikge1xuICAgICAgdGhpcy5jdXJyZW50T3Zlci5jbGFzc0xpc3QucmVtb3ZlKC4uLnRoaXMuZ2V0Q2xhc3NOYW1lc0ZvcignZHJhZ2dhYmxlOm92ZXInKSk7XG4gICAgfVxuICAgIGlmICh0aGlzLmN1cnJlbnRPdmVyQ29udGFpbmVyKSB7XG4gICAgICB0aGlzLmN1cnJlbnRPdmVyQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoLi4udGhpcy5nZXRDbGFzc05hbWVzRm9yKCdjb250YWluZXI6b3ZlcicpKTtcbiAgICB9XG4gICAgdGhpcy5sYXN0UGxhY2VkU291cmNlID0gdGhpcy5vcmlnaW5hbFNvdXJjZTtcbiAgICB0aGlzLmxhc3RQbGFjZWRDb250YWluZXIgPSB0aGlzLnNvdXJjZUNvbnRhaW5lcjtcbiAgICB0aGlzLnBsYWNlZFRpbWVvdXRJRCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMubGFzdFBsYWNlZFNvdXJjZSkge1xuICAgICAgICB0aGlzLmxhc3RQbGFjZWRTb3VyY2UuY2xhc3NMaXN0LnJlbW92ZSguLi50aGlzLmdldENsYXNzTmFtZXNGb3IoJ3NvdXJjZTpwbGFjZWQnKSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5sYXN0UGxhY2VkQ29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMubGFzdFBsYWNlZENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKC4uLnRoaXMuZ2V0Q2xhc3NOYW1lc0ZvcignY29udGFpbmVyOnBsYWNlZCcpKTtcbiAgICAgIH1cbiAgICAgIHRoaXMubGFzdFBsYWNlZFNvdXJjZSA9IG51bGw7XG4gICAgICB0aGlzLmxhc3RQbGFjZWRDb250YWluZXIgPSBudWxsO1xuICAgIH0sIHRoaXMub3B0aW9ucy5wbGFjZWRUaW1lb3V0KTtcbiAgICBjb25zdCBkcmFnU3RvcHBlZEV2ZW50ID0gbmV3IERyYWdTdG9wcGVkRXZlbnQoe1xuICAgICAgc291cmNlOiB0aGlzLnNvdXJjZSxcbiAgICAgIG9yaWdpbmFsU291cmNlOiB0aGlzLm9yaWdpbmFsU291cmNlLFxuICAgICAgc2Vuc29yRXZlbnQ6IGV2ZW50ID8gZXZlbnQuc2Vuc29yRXZlbnQgOiBudWxsLFxuICAgICAgc291cmNlQ29udGFpbmVyOiB0aGlzLnNvdXJjZUNvbnRhaW5lclxuICAgIH0pO1xuICAgIHRoaXMudHJpZ2dlcihkcmFnU3RvcHBlZEV2ZW50KTtcbiAgICB0aGlzLnNvdXJjZSA9IG51bGw7XG4gICAgdGhpcy5vcmlnaW5hbFNvdXJjZSA9IG51bGw7XG4gICAgdGhpcy5jdXJyZW50T3ZlckNvbnRhaW5lciA9IG51bGw7XG4gICAgdGhpcy5jdXJyZW50T3ZlciA9IG51bGw7XG4gICAgdGhpcy5zb3VyY2VDb250YWluZXIgPSBudWxsO1xuICB9XG5cbiAgW29uRHJhZ1N0b3BdKGV2ZW50KSB7XG4gICAgdGhpc1tkcmFnU3RvcF0oZXZlbnQpO1xuICB9XG5cbiAgW29uRHJhZ1ByZXNzdXJlXShldmVudCkge1xuICAgIGlmICghdGhpcy5kcmFnZ2luZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzZW5zb3JFdmVudCA9IGdldFNlbnNvckV2ZW50KGV2ZW50KTtcbiAgICBjb25zdCBzb3VyY2UgPSB0aGlzLnNvdXJjZSB8fCBjbG9zZXN0KHNlbnNvckV2ZW50Lm9yaWdpbmFsRXZlbnQudGFyZ2V0LCB0aGlzLm9wdGlvbnMuZHJhZ2dhYmxlKTtcbiAgICBjb25zdCBkcmFnUHJlc3N1cmVFdmVudCA9IG5ldyBEcmFnUHJlc3N1cmVFdmVudCh7XG4gICAgICBzZW5zb3JFdmVudCxcbiAgICAgIHNvdXJjZSxcbiAgICAgIHByZXNzdXJlOiBzZW5zb3JFdmVudC5wcmVzc3VyZVxuICAgIH0pO1xuICAgIHRoaXMudHJpZ2dlcihkcmFnUHJlc3N1cmVFdmVudCk7XG4gIH1cbn1cblxuRHJhZ2dhYmxlLlBsdWdpbnMgPSB7XG4gIEFubm91bmNlbWVudCxcbiAgRm9jdXNhYmxlLFxuICBNaXJyb3IsXG4gIFNjcm9sbGFibGVcbn07XG5cbkRyYWdnYWJsZS5TZW5zb3JzID0ge1xuICBNb3VzZVNlbnNvcixcbiAgVG91Y2hTZW5zb3Jcbn07XG5mdW5jdGlvbiBnZXRTZW5zb3JFdmVudChldmVudCkge1xuICByZXR1cm4gZXZlbnQuZGV0YWlsO1xufVxuZnVuY3Rpb24gYXBwbHlVc2VyU2VsZWN0KGVsZW1lbnQsIHZhbHVlKSB7XG4gIGVsZW1lbnQuc3R5bGUud2Via2l0VXNlclNlbGVjdCA9IHZhbHVlO1xuICBlbGVtZW50LnN0eWxlLm1velVzZXJTZWxlY3QgPSB2YWx1ZTtcbiAgZWxlbWVudC5zdHlsZS5tc1VzZXJTZWxlY3QgPSB2YWx1ZTtcbiAgZWxlbWVudC5zdHlsZS5vVXNlclNlbGVjdCA9IHZhbHVlO1xuICBlbGVtZW50LnN0eWxlLnVzZXJTZWxlY3QgPSB2YWx1ZTtcbn1cblxuZXhwb3J0IHsgRHJhZ2dhYmxlIGFzIGRlZmF1bHQsIGRlZmF1bHRPcHRpb25zIH07XG4iLCJpbXBvcnQgeyBBYnN0cmFjdEV2ZW50IH0gZnJvbSAnLi4vLi4vc2hhcmVkL0Fic3RyYWN0RXZlbnQvQWJzdHJhY3RFdmVudC5tanMnO1xuXG5jbGFzcyBEcmFnZ2FibGVFdmVudCBleHRlbmRzIEFic3RyYWN0RXZlbnQge1xuXG4gIGdldCBkcmFnZ2FibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5kcmFnZ2FibGU7XG4gIH1cbn1cblxuRHJhZ2dhYmxlRXZlbnQudHlwZSA9ICdkcmFnZ2FibGUnO1xuY2xhc3MgRHJhZ2dhYmxlSW5pdGlhbGl6ZWRFdmVudCBleHRlbmRzIERyYWdnYWJsZUV2ZW50IHt9XG5cbkRyYWdnYWJsZUluaXRpYWxpemVkRXZlbnQudHlwZSA9ICdkcmFnZ2FibGU6aW5pdGlhbGl6ZSc7XG5jbGFzcyBEcmFnZ2FibGVEZXN0cm95RXZlbnQgZXh0ZW5kcyBEcmFnZ2FibGVFdmVudCB7fVxuRHJhZ2dhYmxlRGVzdHJveUV2ZW50LnR5cGUgPSAnZHJhZ2dhYmxlOmRlc3Ryb3knO1xuXG5leHBvcnQgeyBEcmFnZ2FibGVEZXN0cm95RXZlbnQsIERyYWdnYWJsZUV2ZW50LCBEcmFnZ2FibGVJbml0aWFsaXplZEV2ZW50IH07XG4iLCJjbGFzcyBFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jYWxsYmFja3MgPSB7fTtcbiAgfVxuXG4gIG9uKHR5cGUsIC4uLmNhbGxiYWNrcykge1xuICAgIGlmICghdGhpcy5jYWxsYmFja3NbdHlwZV0pIHtcbiAgICAgIHRoaXMuY2FsbGJhY2tzW3R5cGVdID0gW107XG4gICAgfVxuICAgIHRoaXMuY2FsbGJhY2tzW3R5cGVdLnB1c2goLi4uY2FsbGJhY2tzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG9mZih0eXBlLCBjYWxsYmFjaykge1xuICAgIGlmICghdGhpcy5jYWxsYmFja3NbdHlwZV0pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBjb3B5ID0gdGhpcy5jYWxsYmFja3NbdHlwZV0uc2xpY2UoMCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3B5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoY2FsbGJhY2sgPT09IGNvcHlbaV0pIHtcbiAgICAgICAgdGhpcy5jYWxsYmFja3NbdHlwZV0uc3BsaWNlKGksIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHRyaWdnZXIoZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuY2FsbGJhY2tzW2V2ZW50LnR5cGVdKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgY2FsbGJhY2tzID0gWy4uLnRoaXMuY2FsbGJhY2tzW2V2ZW50LnR5cGVdXTtcbiAgICBjb25zdCBjYXVnaHRFcnJvcnMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gY2FsbGJhY2tzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjb25zdCBjYWxsYmFjayA9IGNhbGxiYWNrc1tpXTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNhbGxiYWNrKGV2ZW50KTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNhdWdodEVycm9ycy5wdXNoKGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGNhdWdodEVycm9ycy5sZW5ndGgpIHtcblxuICAgICAgY29uc29sZS5lcnJvcihgRHJhZ2dhYmxlIGNhdWdodCBlcnJvcnMgd2hpbGUgdHJpZ2dlcmluZyAnJHtldmVudC50eXBlfSdgLCBjYXVnaHRFcnJvcnMpO1xuXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuZXhwb3J0IHsgRW1pdHRlciBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgeyBBYnN0cmFjdFBsdWdpbiB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9BYnN0cmFjdFBsdWdpbi9BYnN0cmFjdFBsdWdpbi5tanMnO1xuXG5jb25zdCBvbkluaXRpYWxpemUgPSBTeW1ib2woJ29uSW5pdGlhbGl6ZScpO1xuY29uc3Qgb25EZXN0cm95ID0gU3ltYm9sKCdvbkRlc3Ryb3knKTtcbmNvbnN0IGFubm91bmNlRXZlbnQgPSBTeW1ib2woJ2Fubm91bmNlRXZlbnQnKTtcbmNvbnN0IGFubm91bmNlTWVzc2FnZSA9IFN5bWJvbCgnYW5ub3VuY2VNZXNzYWdlJyk7XG5jb25zdCBBUklBX1JFTEVWQU5UID0gJ2FyaWEtcmVsZXZhbnQnO1xuY29uc3QgQVJJQV9BVE9NSUMgPSAnYXJpYS1hdG9taWMnO1xuY29uc3QgQVJJQV9MSVZFID0gJ2FyaWEtbGl2ZSc7XG5jb25zdCBST0xFID0gJ3JvbGUnO1xuXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgZXhwaXJlOiA3MDAwXG59O1xuXG5jbGFzcyBBbm5vdW5jZW1lbnQgZXh0ZW5kcyBBYnN0cmFjdFBsdWdpbiB7XG5cbiAgY29uc3RydWN0b3IoZHJhZ2dhYmxlKSB7XG4gICAgc3VwZXIoZHJhZ2dhYmxlKTtcblxuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIC4uLmRlZmF1bHRPcHRpb25zLFxuICAgICAgLi4udGhpcy5nZXRPcHRpb25zKClcbiAgICB9O1xuXG4gICAgdGhpcy5vcmlnaW5hbFRyaWdnZXJNZXRob2QgPSB0aGlzLmRyYWdnYWJsZS50cmlnZ2VyO1xuICAgIHRoaXNbb25Jbml0aWFsaXplXSA9IHRoaXNbb25Jbml0aWFsaXplXS5iaW5kKHRoaXMpO1xuICAgIHRoaXNbb25EZXN0cm95XSA9IHRoaXNbb25EZXN0cm95XS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgYXR0YWNoKCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlLm9uKCdkcmFnZ2FibGU6aW5pdGlhbGl6ZScsIHRoaXNbb25Jbml0aWFsaXplXSk7XG4gIH1cblxuICBkZXRhY2goKSB7XG4gICAgdGhpcy5kcmFnZ2FibGUub2ZmKCdkcmFnZ2FibGU6ZGVzdHJveScsIHRoaXNbb25EZXN0cm95XSk7XG4gIH1cblxuICBnZXRPcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRyYWdnYWJsZS5vcHRpb25zLmFubm91bmNlbWVudHMgfHwge307XG4gIH1cblxuICBbYW5ub3VuY2VFdmVudF0oZXZlbnQpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gdGhpcy5vcHRpb25zW2V2ZW50LnR5cGVdO1xuICAgIGlmIChtZXNzYWdlICYmIHR5cGVvZiBtZXNzYWdlID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpc1thbm5vdW5jZU1lc3NhZ2VdKG1lc3NhZ2UpO1xuICAgIH1cbiAgICBpZiAobWVzc2FnZSAmJiB0eXBlb2YgbWVzc2FnZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpc1thbm5vdW5jZU1lc3NhZ2VdKG1lc3NhZ2UoZXZlbnQpKTtcbiAgICB9XG4gIH1cblxuICBbYW5ub3VuY2VNZXNzYWdlXShtZXNzYWdlKSB7XG4gICAgYW5ub3VuY2UobWVzc2FnZSwge1xuICAgICAgZXhwaXJlOiB0aGlzLm9wdGlvbnMuZXhwaXJlXG4gICAgfSk7XG4gIH1cblxuICBbb25Jbml0aWFsaXplXSgpIHtcblxuICAgIHRoaXMuZHJhZ2dhYmxlLnRyaWdnZXIgPSBldmVudCA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzW2Fubm91bmNlRXZlbnRdKGV2ZW50KTtcbiAgICAgIH0gZmluYWxseSB7XG5cbiAgICAgICAgdGhpcy5vcmlnaW5hbFRyaWdnZXJNZXRob2QuY2FsbCh0aGlzLmRyYWdnYWJsZSwgZXZlbnQpO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBbb25EZXN0cm95XSgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZS50cmlnZ2VyID0gdGhpcy5vcmlnaW5hbFRyaWdnZXJNZXRob2Q7XG4gIH1cbn1cblxuY29uc3QgbGl2ZVJlZ2lvbiA9IGNyZWF0ZVJlZ2lvbigpO1xuXG5mdW5jdGlvbiBhbm5vdW5jZShtZXNzYWdlLCB7XG4gIGV4cGlyZVxufSkge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGVsZW1lbnQudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xuICBsaXZlUmVnaW9uLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICByZXR1cm4gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgbGl2ZVJlZ2lvbi5yZW1vdmVDaGlsZChlbGVtZW50KTtcbiAgfSwgZXhwaXJlKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUmVnaW9uKCkge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsICdkcmFnZ2FibGUtbGl2ZS1yZWdpb24nKTtcbiAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoQVJJQV9SRUxFVkFOVCwgJ2FkZGl0aW9ucycpO1xuICBlbGVtZW50LnNldEF0dHJpYnV0ZShBUklBX0FUT01JQywgJ3RydWUnKTtcbiAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoQVJJQV9MSVZFLCAnYXNzZXJ0aXZlJyk7XG4gIGVsZW1lbnQuc2V0QXR0cmlidXRlKFJPTEUsICdsb2cnKTtcbiAgZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gIGVsZW1lbnQuc3R5bGUud2lkdGggPSAnMXB4JztcbiAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnMXB4JztcbiAgZWxlbWVudC5zdHlsZS50b3AgPSAnLTFweCc7XG4gIGVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGl2ZVJlZ2lvbik7XG59KTtcblxuZXhwb3J0IHsgQW5ub3VuY2VtZW50IGFzIGRlZmF1bHQsIGRlZmF1bHRPcHRpb25zIH07XG4iLCJpbXBvcnQgeyBBYnN0cmFjdFBsdWdpbiB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9BYnN0cmFjdFBsdWdpbi9BYnN0cmFjdFBsdWdpbi5tanMnO1xuXG5jb25zdCBvbkluaXRpYWxpemUgPSBTeW1ib2woJ29uSW5pdGlhbGl6ZScpO1xuY29uc3Qgb25EZXN0cm95ID0gU3ltYm9sKCdvbkRlc3Ryb3knKTtcblxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7fTtcblxuY2xhc3MgRm9jdXNhYmxlIGV4dGVuZHMgQWJzdHJhY3RQbHVnaW4ge1xuXG4gIGNvbnN0cnVjdG9yKGRyYWdnYWJsZSkge1xuICAgIHN1cGVyKGRyYWdnYWJsZSk7XG5cbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICAuLi5kZWZhdWx0T3B0aW9ucyxcbiAgICAgIC4uLnRoaXMuZ2V0T3B0aW9ucygpXG4gICAgfTtcbiAgICB0aGlzW29uSW5pdGlhbGl6ZV0gPSB0aGlzW29uSW5pdGlhbGl6ZV0uYmluZCh0aGlzKTtcbiAgICB0aGlzW29uRGVzdHJveV0gPSB0aGlzW29uRGVzdHJveV0uYmluZCh0aGlzKTtcbiAgfVxuXG4gIGF0dGFjaCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZS5vbignZHJhZ2dhYmxlOmluaXRpYWxpemUnLCB0aGlzW29uSW5pdGlhbGl6ZV0pLm9uKCdkcmFnZ2FibGU6ZGVzdHJveScsIHRoaXNbb25EZXN0cm95XSk7XG4gIH1cblxuICBkZXRhY2goKSB7XG4gICAgdGhpcy5kcmFnZ2FibGUub2ZmKCdkcmFnZ2FibGU6aW5pdGlhbGl6ZScsIHRoaXNbb25Jbml0aWFsaXplXSkub2ZmKCdkcmFnZ2FibGU6ZGVzdHJveScsIHRoaXNbb25EZXN0cm95XSk7XG5cbiAgICB0aGlzW29uRGVzdHJveV0oKTtcbiAgfVxuXG4gIGdldE9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlLm9wdGlvbnMuZm9jdXNhYmxlIHx8IHt9O1xuICB9XG5cbiAgZ2V0RWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIFsuLi50aGlzLmRyYWdnYWJsZS5jb250YWluZXJzLCAuLi50aGlzLmRyYWdnYWJsZS5nZXREcmFnZ2FibGVFbGVtZW50cygpXTtcbiAgfVxuXG4gIFtvbkluaXRpYWxpemVdKCkge1xuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHRoaXMuZ2V0RWxlbWVudHMoKS5mb3JFYWNoKGVsZW1lbnQgPT4gZGVjb3JhdGVFbGVtZW50KGVsZW1lbnQpKTtcbiAgICB9KTtcbiAgfVxuXG4gIFtvbkRlc3Ryb3ldKCkge1xuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHRoaXMuZ2V0RWxlbWVudHMoKS5mb3JFYWNoKGVsZW1lbnQgPT4gc3RyaXBFbGVtZW50KGVsZW1lbnQpKTtcbiAgICB9KTtcbiAgfVxufVxuXG5jb25zdCBlbGVtZW50c1dpdGhNaXNzaW5nVGFiSW5kZXggPSBbXTtcblxuZnVuY3Rpb24gZGVjb3JhdGVFbGVtZW50KGVsZW1lbnQpIHtcbiAgY29uc3QgaGFzTWlzc2luZ1RhYkluZGV4ID0gQm9vbGVhbighZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JykgJiYgZWxlbWVudC50YWJJbmRleCA9PT0gLTEpO1xuICBpZiAoaGFzTWlzc2luZ1RhYkluZGV4KSB7XG4gICAgZWxlbWVudHNXaXRoTWlzc2luZ1RhYkluZGV4LnB1c2goZWxlbWVudCk7XG4gICAgZWxlbWVudC50YWJJbmRleCA9IDA7XG4gIH1cbn1cblxuZnVuY3Rpb24gc3RyaXBFbGVtZW50KGVsZW1lbnQpIHtcbiAgY29uc3QgdGFiSW5kZXhFbGVtZW50UG9zaXRpb24gPSBlbGVtZW50c1dpdGhNaXNzaW5nVGFiSW5kZXguaW5kZXhPZihlbGVtZW50KTtcbiAgaWYgKHRhYkluZGV4RWxlbWVudFBvc2l0aW9uICE9PSAtMSkge1xuICAgIGVsZW1lbnQudGFiSW5kZXggPSAtMTtcbiAgICBlbGVtZW50c1dpdGhNaXNzaW5nVGFiSW5kZXguc3BsaWNlKHRhYkluZGV4RWxlbWVudFBvc2l0aW9uLCAxKTtcbiAgfVxufVxuXG5leHBvcnQgeyBGb2N1c2FibGUgYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IHsgQWJzdHJhY3RQbHVnaW4gfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvQWJzdHJhY3RQbHVnaW4vQWJzdHJhY3RQbHVnaW4ubWpzJztcbmltcG9ydCB7IE1pcnJvckNyZWF0ZUV2ZW50LCBNaXJyb3JDcmVhdGVkRXZlbnQsIE1pcnJvckF0dGFjaGVkRXZlbnQsIE1pcnJvck1vdmVFdmVudCwgTWlycm9yRGVzdHJveUV2ZW50LCBNaXJyb3JNb3ZlZEV2ZW50IH0gZnJvbSAnLi9NaXJyb3JFdmVudC9NaXJyb3JFdmVudC5tanMnO1xuXG5jb25zdCBvbkRyYWdTdGFydCA9IFN5bWJvbCgnb25EcmFnU3RhcnQnKTtcbmNvbnN0IG9uRHJhZ01vdmUgPSBTeW1ib2woJ29uRHJhZ01vdmUnKTtcbmNvbnN0IG9uRHJhZ1N0b3AgPSBTeW1ib2woJ29uRHJhZ1N0b3AnKTtcbmNvbnN0IG9uTWlycm9yQ3JlYXRlZCA9IFN5bWJvbCgnb25NaXJyb3JDcmVhdGVkJyk7XG5jb25zdCBvbk1pcnJvck1vdmUgPSBTeW1ib2woJ29uTWlycm9yTW92ZScpO1xuY29uc3Qgb25TY3JvbGwgPSBTeW1ib2woJ29uU2Nyb2xsJyk7XG5jb25zdCBnZXRBcHBlbmRhYmxlQ29udGFpbmVyID0gU3ltYm9sKCdnZXRBcHBlbmRhYmxlQ29udGFpbmVyJyk7XG5cbmNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICBjb25zdHJhaW5EaW1lbnNpb25zOiBmYWxzZSxcbiAgeEF4aXM6IHRydWUsXG4gIHlBeGlzOiB0cnVlLFxuICBjdXJzb3JPZmZzZXRYOiBudWxsLFxuICBjdXJzb3JPZmZzZXRZOiBudWxsLFxuICB0aHJlc2hvbGRYOiBudWxsLFxuICB0aHJlc2hvbGRZOiBudWxsXG59O1xuXG5jbGFzcyBNaXJyb3IgZXh0ZW5kcyBBYnN0cmFjdFBsdWdpbiB7XG5cbiAgY29uc3RydWN0b3IoZHJhZ2dhYmxlKSB7XG4gICAgc3VwZXIoZHJhZ2dhYmxlKTtcblxuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIC4uLmRlZmF1bHRPcHRpb25zLFxuICAgICAgLi4udGhpcy5nZXRPcHRpb25zKClcbiAgICB9O1xuXG4gICAgdGhpcy5zY3JvbGxPZmZzZXQgPSB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMFxuICAgIH07XG5cbiAgICB0aGlzLmluaXRpYWxTY3JvbGxPZmZzZXQgPSB7XG4gICAgICB4OiB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgIHk6IHdpbmRvdy5zY3JvbGxZXG4gICAgfTtcbiAgICB0aGlzW29uRHJhZ1N0YXJ0XSA9IHRoaXNbb25EcmFnU3RhcnRdLmJpbmQodGhpcyk7XG4gICAgdGhpc1tvbkRyYWdNb3ZlXSA9IHRoaXNbb25EcmFnTW92ZV0uYmluZCh0aGlzKTtcbiAgICB0aGlzW29uRHJhZ1N0b3BdID0gdGhpc1tvbkRyYWdTdG9wXS5iaW5kKHRoaXMpO1xuICAgIHRoaXNbb25NaXJyb3JDcmVhdGVkXSA9IHRoaXNbb25NaXJyb3JDcmVhdGVkXS5iaW5kKHRoaXMpO1xuICAgIHRoaXNbb25NaXJyb3JNb3ZlXSA9IHRoaXNbb25NaXJyb3JNb3ZlXS5iaW5kKHRoaXMpO1xuICAgIHRoaXNbb25TY3JvbGxdID0gdGhpc1tvblNjcm9sbF0uYmluZCh0aGlzKTtcbiAgfVxuXG4gIGF0dGFjaCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZS5vbignZHJhZzpzdGFydCcsIHRoaXNbb25EcmFnU3RhcnRdKS5vbignZHJhZzptb3ZlJywgdGhpc1tvbkRyYWdNb3ZlXSkub24oJ2RyYWc6c3RvcCcsIHRoaXNbb25EcmFnU3RvcF0pLm9uKCdtaXJyb3I6Y3JlYXRlZCcsIHRoaXNbb25NaXJyb3JDcmVhdGVkXSkub24oJ21pcnJvcjptb3ZlJywgdGhpc1tvbk1pcnJvck1vdmVdKTtcbiAgfVxuXG4gIGRldGFjaCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZS5vZmYoJ2RyYWc6c3RhcnQnLCB0aGlzW29uRHJhZ1N0YXJ0XSkub2ZmKCdkcmFnOm1vdmUnLCB0aGlzW29uRHJhZ01vdmVdKS5vZmYoJ2RyYWc6c3RvcCcsIHRoaXNbb25EcmFnU3RvcF0pLm9mZignbWlycm9yOmNyZWF0ZWQnLCB0aGlzW29uTWlycm9yQ3JlYXRlZF0pLm9mZignbWlycm9yOm1vdmUnLCB0aGlzW29uTWlycm9yTW92ZV0pO1xuICB9XG5cbiAgZ2V0T3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5kcmFnZ2FibGUub3B0aW9ucy5taXJyb3IgfHwge307XG4gIH1cbiAgW29uRHJhZ1N0YXJ0XShkcmFnRXZlbnQpIHtcbiAgICBpZiAoZHJhZ0V2ZW50LmNhbmNlbGVkKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdykge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpc1tvblNjcm9sbF0sIHRydWUpO1xuICAgIH1cbiAgICB0aGlzLmluaXRpYWxTY3JvbGxPZmZzZXQgPSB7XG4gICAgICB4OiB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgIHk6IHdpbmRvdy5zY3JvbGxZXG4gICAgfTtcbiAgICBjb25zdCB7XG4gICAgICBzb3VyY2UsXG4gICAgICBvcmlnaW5hbFNvdXJjZSxcbiAgICAgIHNvdXJjZUNvbnRhaW5lcixcbiAgICAgIHNlbnNvckV2ZW50XG4gICAgfSA9IGRyYWdFdmVudDtcblxuICAgIHRoaXMubGFzdE1pcnJvck1vdmVkQ2xpZW50ID0ge1xuICAgICAgeDogc2Vuc29yRXZlbnQuY2xpZW50WCxcbiAgICAgIHk6IHNlbnNvckV2ZW50LmNsaWVudFlcbiAgICB9O1xuICAgIGNvbnN0IG1pcnJvckNyZWF0ZUV2ZW50ID0gbmV3IE1pcnJvckNyZWF0ZUV2ZW50KHtcbiAgICAgIHNvdXJjZSxcbiAgICAgIG9yaWdpbmFsU291cmNlLFxuICAgICAgc291cmNlQ29udGFpbmVyLFxuICAgICAgc2Vuc29yRXZlbnQsXG4gICAgICBkcmFnRXZlbnRcbiAgICB9KTtcbiAgICB0aGlzLmRyYWdnYWJsZS50cmlnZ2VyKG1pcnJvckNyZWF0ZUV2ZW50KTtcbiAgICBpZiAoaXNOYXRpdmVEcmFnRXZlbnQoc2Vuc29yRXZlbnQpIHx8IG1pcnJvckNyZWF0ZUV2ZW50LmNhbmNlbGVkKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgYXBwZW5kYWJsZUNvbnRhaW5lciA9IHRoaXNbZ2V0QXBwZW5kYWJsZUNvbnRhaW5lcl0oc291cmNlKSB8fCBzb3VyY2VDb250YWluZXI7XG4gICAgdGhpcy5taXJyb3IgPSBzb3VyY2UuY2xvbmVOb2RlKHRydWUpO1xuICAgIGNvbnN0IG1pcnJvckNyZWF0ZWRFdmVudCA9IG5ldyBNaXJyb3JDcmVhdGVkRXZlbnQoe1xuICAgICAgc291cmNlLFxuICAgICAgb3JpZ2luYWxTb3VyY2UsXG4gICAgICBzb3VyY2VDb250YWluZXIsXG4gICAgICBzZW5zb3JFdmVudCxcbiAgICAgIGRyYWdFdmVudCxcbiAgICAgIG1pcnJvcjogdGhpcy5taXJyb3JcbiAgICB9KTtcbiAgICBjb25zdCBtaXJyb3JBdHRhY2hlZEV2ZW50ID0gbmV3IE1pcnJvckF0dGFjaGVkRXZlbnQoe1xuICAgICAgc291cmNlLFxuICAgICAgb3JpZ2luYWxTb3VyY2UsXG4gICAgICBzb3VyY2VDb250YWluZXIsXG4gICAgICBzZW5zb3JFdmVudCxcbiAgICAgIGRyYWdFdmVudCxcbiAgICAgIG1pcnJvcjogdGhpcy5taXJyb3JcbiAgICB9KTtcbiAgICB0aGlzLmRyYWdnYWJsZS50cmlnZ2VyKG1pcnJvckNyZWF0ZWRFdmVudCk7XG4gICAgYXBwZW5kYWJsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1pcnJvcik7XG4gICAgdGhpcy5kcmFnZ2FibGUudHJpZ2dlcihtaXJyb3JBdHRhY2hlZEV2ZW50KTtcbiAgfVxuICBbb25EcmFnTW92ZV0oZHJhZ0V2ZW50KSB7XG4gICAgaWYgKCF0aGlzLm1pcnJvciB8fCBkcmFnRXZlbnQuY2FuY2VsZWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB7XG4gICAgICBzb3VyY2UsXG4gICAgICBvcmlnaW5hbFNvdXJjZSxcbiAgICAgIHNvdXJjZUNvbnRhaW5lcixcbiAgICAgIHNlbnNvckV2ZW50XG4gICAgfSA9IGRyYWdFdmVudDtcbiAgICBsZXQgcGFzc2VkVGhyZXNoWCA9IHRydWU7XG4gICAgbGV0IHBhc3NlZFRocmVzaFkgPSB0cnVlO1xuICAgIGlmICh0aGlzLm9wdGlvbnMudGhyZXNob2xkWCB8fCB0aGlzLm9wdGlvbnMudGhyZXNob2xkWSkge1xuICAgICAgY29uc3Qge1xuICAgICAgICB4OiBsYXN0WCxcbiAgICAgICAgeTogbGFzdFlcbiAgICAgIH0gPSB0aGlzLmxhc3RNaXJyb3JNb3ZlZENsaWVudDtcbiAgICAgIGlmIChNYXRoLmFicyhsYXN0WCAtIHNlbnNvckV2ZW50LmNsaWVudFgpIDwgdGhpcy5vcHRpb25zLnRocmVzaG9sZFgpIHtcbiAgICAgICAgcGFzc2VkVGhyZXNoWCA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5sYXN0TWlycm9yTW92ZWRDbGllbnQueCA9IHNlbnNvckV2ZW50LmNsaWVudFg7XG4gICAgICB9XG4gICAgICBpZiAoTWF0aC5hYnMobGFzdFkgLSBzZW5zb3JFdmVudC5jbGllbnRZKSA8IHRoaXMub3B0aW9ucy50aHJlc2hvbGRZKSB7XG4gICAgICAgIHBhc3NlZFRocmVzaFkgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubGFzdE1pcnJvck1vdmVkQ2xpZW50LnkgPSBzZW5zb3JFdmVudC5jbGllbnRZO1xuICAgICAgfVxuICAgICAgaWYgKCFwYXNzZWRUaHJlc2hYICYmICFwYXNzZWRUaHJlc2hZKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgbWlycm9yTW92ZUV2ZW50ID0gbmV3IE1pcnJvck1vdmVFdmVudCh7XG4gICAgICBzb3VyY2UsXG4gICAgICBvcmlnaW5hbFNvdXJjZSxcbiAgICAgIHNvdXJjZUNvbnRhaW5lcixcbiAgICAgIHNlbnNvckV2ZW50LFxuICAgICAgZHJhZ0V2ZW50LFxuICAgICAgbWlycm9yOiB0aGlzLm1pcnJvcixcbiAgICAgIHBhc3NlZFRocmVzaFgsXG4gICAgICBwYXNzZWRUaHJlc2hZXG4gICAgfSk7XG4gICAgdGhpcy5kcmFnZ2FibGUudHJpZ2dlcihtaXJyb3JNb3ZlRXZlbnQpO1xuICB9XG4gIFtvbkRyYWdTdG9wXShkcmFnRXZlbnQpIHtcbiAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gd2luZG93KSB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzW29uU2Nyb2xsXSwgdHJ1ZSk7XG4gICAgfVxuICAgIHRoaXMuaW5pdGlhbFNjcm9sbE9mZnNldCA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwXG4gICAgfTtcbiAgICB0aGlzLnNjcm9sbE9mZnNldCA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwXG4gICAgfTtcbiAgICBpZiAoIXRoaXMubWlycm9yKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHtcbiAgICAgIHNvdXJjZSxcbiAgICAgIHNvdXJjZUNvbnRhaW5lcixcbiAgICAgIHNlbnNvckV2ZW50XG4gICAgfSA9IGRyYWdFdmVudDtcbiAgICBjb25zdCBtaXJyb3JEZXN0cm95RXZlbnQgPSBuZXcgTWlycm9yRGVzdHJveUV2ZW50KHtcbiAgICAgIHNvdXJjZSxcbiAgICAgIG1pcnJvcjogdGhpcy5taXJyb3IsXG4gICAgICBzb3VyY2VDb250YWluZXIsXG4gICAgICBzZW5zb3JFdmVudCxcbiAgICAgIGRyYWdFdmVudFxuICAgIH0pO1xuICAgIHRoaXMuZHJhZ2dhYmxlLnRyaWdnZXIobWlycm9yRGVzdHJveUV2ZW50KTtcbiAgICBpZiAoIW1pcnJvckRlc3Ryb3lFdmVudC5jYW5jZWxlZCgpKSB7XG4gICAgICB0aGlzLm1pcnJvci5yZW1vdmUoKTtcbiAgICB9XG4gIH1cbiAgW29uU2Nyb2xsXSgpIHtcbiAgICB0aGlzLnNjcm9sbE9mZnNldCA9IHtcbiAgICAgIHg6IHdpbmRvdy5zY3JvbGxYIC0gdGhpcy5pbml0aWFsU2Nyb2xsT2Zmc2V0LngsXG4gICAgICB5OiB3aW5kb3cuc2Nyb2xsWSAtIHRoaXMuaW5pdGlhbFNjcm9sbE9mZnNldC55XG4gICAgfTtcbiAgfVxuXG4gIFtvbk1pcnJvckNyZWF0ZWRdKHtcbiAgICBtaXJyb3IsXG4gICAgc291cmNlLFxuICAgIHNlbnNvckV2ZW50XG4gIH0pIHtcbiAgICBjb25zdCBtaXJyb3JDbGFzc2VzID0gdGhpcy5kcmFnZ2FibGUuZ2V0Q2xhc3NOYW1lc0ZvcignbWlycm9yJyk7XG4gICAgY29uc3Qgc2V0U3RhdGUgPSAoe1xuICAgICAgbWlycm9yT2Zmc2V0LFxuICAgICAgaW5pdGlhbFgsXG4gICAgICBpbml0aWFsWSxcbiAgICAgIC4uLmFyZ3NcbiAgICB9KSA9PiB7XG4gICAgICB0aGlzLm1pcnJvck9mZnNldCA9IG1pcnJvck9mZnNldDtcbiAgICAgIHRoaXMuaW5pdGlhbFggPSBpbml0aWFsWDtcbiAgICAgIHRoaXMuaW5pdGlhbFkgPSBpbml0aWFsWTtcbiAgICAgIHRoaXMubGFzdE1vdmVkWCA9IGluaXRpYWxYO1xuICAgICAgdGhpcy5sYXN0TW92ZWRZID0gaW5pdGlhbFk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBtaXJyb3JPZmZzZXQsXG4gICAgICAgIGluaXRpYWxYLFxuICAgICAgICBpbml0aWFsWSxcbiAgICAgICAgLi4uYXJnc1xuICAgICAgfTtcbiAgICB9O1xuICAgIG1pcnJvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICAgIG1pcnJvcixcbiAgICAgIHNvdXJjZSxcbiAgICAgIHNlbnNvckV2ZW50LFxuICAgICAgbWlycm9yQ2xhc3NlcyxcbiAgICAgIHNjcm9sbE9mZnNldDogdGhpcy5zY3JvbGxPZmZzZXQsXG4gICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnMsXG4gICAgICBwYXNzZWRUaHJlc2hYOiB0cnVlLFxuICAgICAgcGFzc2VkVGhyZXNoWTogdHJ1ZVxuICAgIH07XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShpbml0aWFsU3RhdGUpXG5cbiAgICAudGhlbihjb21wdXRlTWlycm9yRGltZW5zaW9ucykudGhlbihjYWxjdWxhdGVNaXJyb3JPZmZzZXQpLnRoZW4ocmVzZXRNaXJyb3IpLnRoZW4oYWRkTWlycm9yQ2xhc3NlcykudGhlbihwb3NpdGlvbk1pcnJvcih7XG4gICAgICBpbml0aWFsOiB0cnVlXG4gICAgfSkpLnRoZW4ocmVtb3ZlTWlycm9ySUQpLnRoZW4oc2V0U3RhdGUpO1xuICB9XG5cbiAgW29uTWlycm9yTW92ZV0obWlycm9yRXZlbnQpIHtcbiAgICBpZiAobWlycm9yRXZlbnQuY2FuY2VsZWQoKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IHNldFN0YXRlID0gKHtcbiAgICAgIGxhc3RNb3ZlZFgsXG4gICAgICBsYXN0TW92ZWRZLFxuICAgICAgLi4uYXJnc1xuICAgIH0pID0+IHtcbiAgICAgIHRoaXMubGFzdE1vdmVkWCA9IGxhc3RNb3ZlZFg7XG4gICAgICB0aGlzLmxhc3RNb3ZlZFkgPSBsYXN0TW92ZWRZO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGFzdE1vdmVkWCxcbiAgICAgICAgbGFzdE1vdmVkWSxcbiAgICAgICAgLi4uYXJnc1xuICAgICAgfTtcbiAgICB9O1xuICAgIGNvbnN0IHRyaWdnZXJNb3ZlZCA9IGFyZ3MgPT4ge1xuICAgICAgY29uc3QgbWlycm9yTW92ZWRFdmVudCA9IG5ldyBNaXJyb3JNb3ZlZEV2ZW50KHtcbiAgICAgICAgc291cmNlOiBtaXJyb3JFdmVudC5zb3VyY2UsXG4gICAgICAgIG9yaWdpbmFsU291cmNlOiBtaXJyb3JFdmVudC5vcmlnaW5hbFNvdXJjZSxcbiAgICAgICAgc291cmNlQ29udGFpbmVyOiBtaXJyb3JFdmVudC5zb3VyY2VDb250YWluZXIsXG4gICAgICAgIHNlbnNvckV2ZW50OiBtaXJyb3JFdmVudC5zZW5zb3JFdmVudCxcbiAgICAgICAgZHJhZ0V2ZW50OiBtaXJyb3JFdmVudC5kcmFnRXZlbnQsXG4gICAgICAgIG1pcnJvcjogdGhpcy5taXJyb3IsXG4gICAgICAgIHBhc3NlZFRocmVzaFg6IG1pcnJvckV2ZW50LnBhc3NlZFRocmVzaFgsXG4gICAgICAgIHBhc3NlZFRocmVzaFk6IG1pcnJvckV2ZW50LnBhc3NlZFRocmVzaFlcbiAgICAgIH0pO1xuICAgICAgdGhpcy5kcmFnZ2FibGUudHJpZ2dlcihtaXJyb3JNb3ZlZEV2ZW50KTtcbiAgICAgIHJldHVybiBhcmdzO1xuICAgIH07XG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgICAgbWlycm9yOiBtaXJyb3JFdmVudC5taXJyb3IsXG4gICAgICBzZW5zb3JFdmVudDogbWlycm9yRXZlbnQuc2Vuc29yRXZlbnQsXG4gICAgICBtaXJyb3JPZmZzZXQ6IHRoaXMubWlycm9yT2Zmc2V0LFxuICAgICAgb3B0aW9uczogdGhpcy5vcHRpb25zLFxuICAgICAgaW5pdGlhbFg6IHRoaXMuaW5pdGlhbFgsXG4gICAgICBpbml0aWFsWTogdGhpcy5pbml0aWFsWSxcbiAgICAgIHNjcm9sbE9mZnNldDogdGhpcy5zY3JvbGxPZmZzZXQsXG4gICAgICBwYXNzZWRUaHJlc2hYOiBtaXJyb3JFdmVudC5wYXNzZWRUaHJlc2hYLFxuICAgICAgcGFzc2VkVGhyZXNoWTogbWlycm9yRXZlbnQucGFzc2VkVGhyZXNoWSxcbiAgICAgIGxhc3RNb3ZlZFg6IHRoaXMubGFzdE1vdmVkWCxcbiAgICAgIGxhc3RNb3ZlZFk6IHRoaXMubGFzdE1vdmVkWVxuICAgIH07XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShpbml0aWFsU3RhdGUpLnRoZW4ocG9zaXRpb25NaXJyb3Ioe1xuICAgICAgcmFmOiB0cnVlXG4gICAgfSkpLnRoZW4oc2V0U3RhdGUpLnRoZW4odHJpZ2dlck1vdmVkKTtcbiAgfVxuXG4gIFtnZXRBcHBlbmRhYmxlQ29udGFpbmVyXShzb3VyY2UpIHtcbiAgICBjb25zdCBhcHBlbmRUbyA9IHRoaXMub3B0aW9ucy5hcHBlbmRUbztcbiAgICBpZiAodHlwZW9mIGFwcGVuZFRvID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYXBwZW5kVG8pO1xuICAgIH0gZWxzZSBpZiAoYXBwZW5kVG8gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgcmV0dXJuIGFwcGVuZFRvO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGFwcGVuZFRvID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gYXBwZW5kVG8oc291cmNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHNvdXJjZS5wYXJlbnROb2RlO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjb21wdXRlTWlycm9yRGltZW5zaW9ucyh7XG4gIHNvdXJjZSxcbiAgLi4uYXJnc1xufSkge1xuICByZXR1cm4gd2l0aFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgY29uc3Qgc291cmNlUmVjdCA9IHNvdXJjZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXNvbHZlKHtcbiAgICAgIHNvdXJjZSxcbiAgICAgIHNvdXJjZVJlY3QsXG4gICAgICAuLi5hcmdzXG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVNaXJyb3JPZmZzZXQoe1xuICBzZW5zb3JFdmVudCxcbiAgc291cmNlUmVjdCxcbiAgb3B0aW9ucyxcbiAgLi4uYXJnc1xufSkge1xuICByZXR1cm4gd2l0aFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgY29uc3QgdG9wID0gb3B0aW9ucy5jdXJzb3JPZmZzZXRZID09PSBudWxsID8gc2Vuc29yRXZlbnQuY2xpZW50WSAtIHNvdXJjZVJlY3QudG9wIDogb3B0aW9ucy5jdXJzb3JPZmZzZXRZO1xuICAgIGNvbnN0IGxlZnQgPSBvcHRpb25zLmN1cnNvck9mZnNldFggPT09IG51bGwgPyBzZW5zb3JFdmVudC5jbGllbnRYIC0gc291cmNlUmVjdC5sZWZ0IDogb3B0aW9ucy5jdXJzb3JPZmZzZXRYO1xuICAgIGNvbnN0IG1pcnJvck9mZnNldCA9IHtcbiAgICAgIHRvcCxcbiAgICAgIGxlZnRcbiAgICB9O1xuICAgIHJlc29sdmUoe1xuICAgICAgc2Vuc29yRXZlbnQsXG4gICAgICBzb3VyY2VSZWN0LFxuICAgICAgbWlycm9yT2Zmc2V0LFxuICAgICAgb3B0aW9ucyxcbiAgICAgIC4uLmFyZ3NcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlc2V0TWlycm9yKHtcbiAgbWlycm9yLFxuICBzb3VyY2UsXG4gIG9wdGlvbnMsXG4gIC4uLmFyZ3Ncbn0pIHtcbiAgcmV0dXJuIHdpdGhQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgIGxldCBvZmZzZXRIZWlnaHQ7XG4gICAgbGV0IG9mZnNldFdpZHRoO1xuICAgIGlmIChvcHRpb25zLmNvbnN0cmFpbkRpbWVuc2lvbnMpIHtcbiAgICAgIGNvbnN0IGNvbXB1dGVkU291cmNlU3R5bGVzID0gZ2V0Q29tcHV0ZWRTdHlsZShzb3VyY2UpO1xuICAgICAgb2Zmc2V0SGVpZ2h0ID0gY29tcHV0ZWRTb3VyY2VTdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZSgnaGVpZ2h0Jyk7XG4gICAgICBvZmZzZXRXaWR0aCA9IGNvbXB1dGVkU291cmNlU3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJ3dpZHRoJyk7XG4gICAgfVxuICAgIG1pcnJvci5zdHlsZS5kaXNwbGF5ID0gbnVsbDtcbiAgICBtaXJyb3Iuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgIG1pcnJvci5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgIG1pcnJvci5zdHlsZS50b3AgPSAwO1xuICAgIG1pcnJvci5zdHlsZS5sZWZ0ID0gMDtcbiAgICBtaXJyb3Iuc3R5bGUubWFyZ2luID0gMDtcbiAgICBpZiAob3B0aW9ucy5jb25zdHJhaW5EaW1lbnNpb25zKSB7XG4gICAgICBtaXJyb3Iuc3R5bGUuaGVpZ2h0ID0gb2Zmc2V0SGVpZ2h0O1xuICAgICAgbWlycm9yLnN0eWxlLndpZHRoID0gb2Zmc2V0V2lkdGg7XG4gICAgfVxuICAgIHJlc29sdmUoe1xuICAgICAgbWlycm9yLFxuICAgICAgc291cmNlLFxuICAgICAgb3B0aW9ucyxcbiAgICAgIC4uLmFyZ3NcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZE1pcnJvckNsYXNzZXMoe1xuICBtaXJyb3IsXG4gIG1pcnJvckNsYXNzZXMsXG4gIC4uLmFyZ3Ncbn0pIHtcbiAgcmV0dXJuIHdpdGhQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgIG1pcnJvci5jbGFzc0xpc3QuYWRkKC4uLm1pcnJvckNsYXNzZXMpO1xuICAgIHJlc29sdmUoe1xuICAgICAgbWlycm9yLFxuICAgICAgbWlycm9yQ2xhc3NlcyxcbiAgICAgIC4uLmFyZ3NcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZU1pcnJvcklEKHtcbiAgbWlycm9yLFxuICAuLi5hcmdzXG59KSB7XG4gIHJldHVybiB3aXRoUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICBtaXJyb3IucmVtb3ZlQXR0cmlidXRlKCdpZCcpO1xuICAgIGRlbGV0ZSBtaXJyb3IuaWQ7XG4gICAgcmVzb2x2ZSh7XG4gICAgICBtaXJyb3IsXG4gICAgICAuLi5hcmdzXG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBwb3NpdGlvbk1pcnJvcih7XG4gIHdpdGhGcmFtZSA9IGZhbHNlLFxuICBpbml0aWFsID0gZmFsc2Vcbn0gPSB7fSkge1xuICByZXR1cm4gKHtcbiAgICBtaXJyb3IsXG4gICAgc2Vuc29yRXZlbnQsXG4gICAgbWlycm9yT2Zmc2V0LFxuICAgIGluaXRpYWxZLFxuICAgIGluaXRpYWxYLFxuICAgIHNjcm9sbE9mZnNldCxcbiAgICBvcHRpb25zLFxuICAgIHBhc3NlZFRocmVzaFgsXG4gICAgcGFzc2VkVGhyZXNoWSxcbiAgICBsYXN0TW92ZWRYLFxuICAgIGxhc3RNb3ZlZFksXG4gICAgLi4uYXJnc1xuICB9KSA9PiB7XG4gICAgcmV0dXJuIHdpdGhQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgICBtaXJyb3IsXG4gICAgICAgIHNlbnNvckV2ZW50LFxuICAgICAgICBtaXJyb3JPZmZzZXQsXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICAgIC4uLmFyZ3NcbiAgICAgIH07XG4gICAgICBpZiAobWlycm9yT2Zmc2V0KSB7XG4gICAgICAgIGNvbnN0IHggPSBwYXNzZWRUaHJlc2hYID8gTWF0aC5yb3VuZCgoc2Vuc29yRXZlbnQuY2xpZW50WCAtIG1pcnJvck9mZnNldC5sZWZ0IC0gc2Nyb2xsT2Zmc2V0LngpIC8gKG9wdGlvbnMudGhyZXNob2xkWCB8fCAxKSkgKiAob3B0aW9ucy50aHJlc2hvbGRYIHx8IDEpIDogTWF0aC5yb3VuZChsYXN0TW92ZWRYKTtcbiAgICAgICAgY29uc3QgeSA9IHBhc3NlZFRocmVzaFkgPyBNYXRoLnJvdW5kKChzZW5zb3JFdmVudC5jbGllbnRZIC0gbWlycm9yT2Zmc2V0LnRvcCAtIHNjcm9sbE9mZnNldC55KSAvIChvcHRpb25zLnRocmVzaG9sZFkgfHwgMSkpICogKG9wdGlvbnMudGhyZXNob2xkWSB8fCAxKSA6IE1hdGgucm91bmQobGFzdE1vdmVkWSk7XG4gICAgICAgIGlmIChvcHRpb25zLnhBeGlzICYmIG9wdGlvbnMueUF4aXMgfHwgaW5pdGlhbCkge1xuICAgICAgICAgIG1pcnJvci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoJHt4fXB4LCAke3l9cHgsIDApYDtcbiAgICAgICAgfSBlbHNlIGlmIChvcHRpb25zLnhBeGlzICYmICFvcHRpb25zLnlBeGlzKSB7XG4gICAgICAgICAgbWlycm9yLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgke3h9cHgsICR7aW5pdGlhbFl9cHgsIDApYDtcbiAgICAgICAgfSBlbHNlIGlmIChvcHRpb25zLnlBeGlzICYmICFvcHRpb25zLnhBeGlzKSB7XG4gICAgICAgICAgbWlycm9yLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgke2luaXRpYWxYfXB4LCAke3l9cHgsIDApYDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5pdGlhbCkge1xuICAgICAgICAgIHJlc3VsdC5pbml0aWFsWCA9IHg7XG4gICAgICAgICAgcmVzdWx0LmluaXRpYWxZID0geTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQubGFzdE1vdmVkWCA9IHg7XG4gICAgICAgIHJlc3VsdC5sYXN0TW92ZWRZID0geTtcbiAgICAgIH1cbiAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICB9LCB7XG4gICAgICBmcmFtZTogd2l0aEZyYW1lXG4gICAgfSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHdpdGhQcm9taXNlKGNhbGxiYWNrLCB7XG4gIHJhZiA9IGZhbHNlXG59ID0ge30pIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAocmFmKSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICBjYWxsYmFjayhyZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbGxiYWNrKHJlc29sdmUsIHJlamVjdCk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gaXNOYXRpdmVEcmFnRXZlbnQoc2Vuc29yRXZlbnQpIHtcbiAgcmV0dXJuIC9eZHJhZy8udGVzdChzZW5zb3JFdmVudC5vcmlnaW5hbEV2ZW50LnR5cGUpO1xufVxuXG5leHBvcnQgeyBNaXJyb3IgYXMgZGVmYXVsdCwgZGVmYXVsdE9wdGlvbnMsIGdldEFwcGVuZGFibGVDb250YWluZXIsIG9uRHJhZ01vdmUsIG9uRHJhZ1N0YXJ0LCBvbkRyYWdTdG9wLCBvbk1pcnJvckNyZWF0ZWQsIG9uTWlycm9yTW92ZSwgb25TY3JvbGwgfTtcbiIsImltcG9ydCB7IEFic3RyYWN0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvQWJzdHJhY3RFdmVudC9BYnN0cmFjdEV2ZW50Lm1qcyc7XG5cbmNsYXNzIE1pcnJvckV2ZW50IGV4dGVuZHMgQWJzdHJhY3RFdmVudCB7XG5cbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIHN1cGVyKGRhdGEpO1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gIH1cblxuICBnZXQgc291cmNlKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEuc291cmNlO1xuICB9XG5cbiAgZ2V0IG9yaWdpbmFsU291cmNlKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEub3JpZ2luYWxTb3VyY2U7XG4gIH1cblxuICBnZXQgc291cmNlQ29udGFpbmVyKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEuc291cmNlQ29udGFpbmVyO1xuICB9XG5cbiAgZ2V0IHNlbnNvckV2ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEuc2Vuc29yRXZlbnQ7XG4gIH1cblxuICBnZXQgZHJhZ0V2ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEuZHJhZ0V2ZW50O1xuICB9XG5cbiAgZ2V0IG9yaWdpbmFsRXZlbnQoKSB7XG4gICAgaWYgKHRoaXMuc2Vuc29yRXZlbnQpIHtcbiAgICAgIHJldHVybiB0aGlzLnNlbnNvckV2ZW50Lm9yaWdpbmFsRXZlbnQ7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmNsYXNzIE1pcnJvckNyZWF0ZUV2ZW50IGV4dGVuZHMgTWlycm9yRXZlbnQge31cbk1pcnJvckNyZWF0ZUV2ZW50LnR5cGUgPSAnbWlycm9yOmNyZWF0ZSc7XG5cbmNsYXNzIE1pcnJvckNyZWF0ZWRFdmVudCBleHRlbmRzIE1pcnJvckV2ZW50IHtcblxuICBnZXQgbWlycm9yKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEubWlycm9yO1xuICB9XG59XG5NaXJyb3JDcmVhdGVkRXZlbnQudHlwZSA9ICdtaXJyb3I6Y3JlYXRlZCc7XG5cbmNsYXNzIE1pcnJvckF0dGFjaGVkRXZlbnQgZXh0ZW5kcyBNaXJyb3JFdmVudCB7XG5cbiAgZ2V0IG1pcnJvcigpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLm1pcnJvcjtcbiAgfVxufVxuTWlycm9yQXR0YWNoZWRFdmVudC50eXBlID0gJ21pcnJvcjphdHRhY2hlZCc7XG5cbmNsYXNzIE1pcnJvck1vdmVFdmVudCBleHRlbmRzIE1pcnJvckV2ZW50IHtcblxuICBnZXQgbWlycm9yKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEubWlycm9yO1xuICB9XG5cbiAgZ2V0IHBhc3NlZFRocmVzaFgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5wYXNzZWRUaHJlc2hYO1xuICB9XG5cbiAgZ2V0IHBhc3NlZFRocmVzaFkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5wYXNzZWRUaHJlc2hZO1xuICB9XG59XG5NaXJyb3JNb3ZlRXZlbnQudHlwZSA9ICdtaXJyb3I6bW92ZSc7XG5NaXJyb3JNb3ZlRXZlbnQuY2FuY2VsYWJsZSA9IHRydWU7XG5cbmNsYXNzIE1pcnJvck1vdmVkRXZlbnQgZXh0ZW5kcyBNaXJyb3JFdmVudCB7XG5cbiAgZ2V0IG1pcnJvcigpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLm1pcnJvcjtcbiAgfVxuXG4gIGdldCBwYXNzZWRUaHJlc2hYKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEucGFzc2VkVGhyZXNoWDtcbiAgfVxuXG4gIGdldCBwYXNzZWRUaHJlc2hZKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEucGFzc2VkVGhyZXNoWTtcbiAgfVxufVxuTWlycm9yTW92ZWRFdmVudC50eXBlID0gJ21pcnJvcjptb3ZlZCc7XG5cbmNsYXNzIE1pcnJvckRlc3Ryb3lFdmVudCBleHRlbmRzIE1pcnJvckV2ZW50IHtcblxuICBnZXQgbWlycm9yKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEubWlycm9yO1xuICB9XG59XG5NaXJyb3JEZXN0cm95RXZlbnQudHlwZSA9ICdtaXJyb3I6ZGVzdHJveSc7XG5NaXJyb3JEZXN0cm95RXZlbnQuY2FuY2VsYWJsZSA9IHRydWU7XG5cbmV4cG9ydCB7IE1pcnJvckF0dGFjaGVkRXZlbnQsIE1pcnJvckNyZWF0ZUV2ZW50LCBNaXJyb3JDcmVhdGVkRXZlbnQsIE1pcnJvckRlc3Ryb3lFdmVudCwgTWlycm9yRXZlbnQsIE1pcnJvck1vdmVFdmVudCwgTWlycm9yTW92ZWRFdmVudCB9O1xuIiwiaW1wb3J0IHsgQWJzdHJhY3RQbHVnaW4gfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvQWJzdHJhY3RQbHVnaW4vQWJzdHJhY3RQbHVnaW4ubWpzJztcbmltcG9ydCBjbG9zZXN0IGZyb20gJy4uLy4uLy4uL3NoYXJlZC91dGlscy9jbG9zZXN0L2Nsb3Nlc3QubWpzJztcblxuY29uc3Qgb25EcmFnU3RhcnQgPSBTeW1ib2woJ29uRHJhZ1N0YXJ0Jyk7XG5jb25zdCBvbkRyYWdNb3ZlID0gU3ltYm9sKCdvbkRyYWdNb3ZlJyk7XG5jb25zdCBvbkRyYWdTdG9wID0gU3ltYm9sKCdvbkRyYWdTdG9wJyk7XG5jb25zdCBzY3JvbGwgPSBTeW1ib2woJ3Njcm9sbCcpO1xuXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgc3BlZWQ6IDYsXG4gIHNlbnNpdGl2aXR5OiA1MCxcbiAgc2Nyb2xsYWJsZUVsZW1lbnRzOiBbXVxufTtcblxuY2xhc3MgU2Nyb2xsYWJsZSBleHRlbmRzIEFic3RyYWN0UGx1Z2luIHtcblxuICBjb25zdHJ1Y3RvcihkcmFnZ2FibGUpIHtcbiAgICBzdXBlcihkcmFnZ2FibGUpO1xuXG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgLi4uZGVmYXVsdE9wdGlvbnMsXG4gICAgICAuLi50aGlzLmdldE9wdGlvbnMoKVxuICAgIH07XG5cbiAgICB0aGlzLmN1cnJlbnRNb3VzZVBvc2l0aW9uID0gbnVsbDtcblxuICAgIHRoaXMuc2Nyb2xsQW5pbWF0aW9uRnJhbWUgPSBudWxsO1xuXG4gICAgdGhpcy5zY3JvbGxhYmxlRWxlbWVudCA9IG51bGw7XG5cbiAgICB0aGlzLmZpbmRTY3JvbGxhYmxlRWxlbWVudEZyYW1lID0gbnVsbDtcbiAgICB0aGlzW29uRHJhZ1N0YXJ0XSA9IHRoaXNbb25EcmFnU3RhcnRdLmJpbmQodGhpcyk7XG4gICAgdGhpc1tvbkRyYWdNb3ZlXSA9IHRoaXNbb25EcmFnTW92ZV0uYmluZCh0aGlzKTtcbiAgICB0aGlzW29uRHJhZ1N0b3BdID0gdGhpc1tvbkRyYWdTdG9wXS5iaW5kKHRoaXMpO1xuICAgIHRoaXNbc2Nyb2xsXSA9IHRoaXNbc2Nyb2xsXS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgYXR0YWNoKCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlLm9uKCdkcmFnOnN0YXJ0JywgdGhpc1tvbkRyYWdTdGFydF0pLm9uKCdkcmFnOm1vdmUnLCB0aGlzW29uRHJhZ01vdmVdKS5vbignZHJhZzpzdG9wJywgdGhpc1tvbkRyYWdTdG9wXSk7XG4gIH1cblxuICBkZXRhY2goKSB7XG4gICAgdGhpcy5kcmFnZ2FibGUub2ZmKCdkcmFnOnN0YXJ0JywgdGhpc1tvbkRyYWdTdGFydF0pLm9mZignZHJhZzptb3ZlJywgdGhpc1tvbkRyYWdNb3ZlXSkub2ZmKCdkcmFnOnN0b3AnLCB0aGlzW29uRHJhZ1N0b3BdKTtcbiAgfVxuXG4gIGdldE9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlLm9wdGlvbnMuc2Nyb2xsYWJsZSB8fCB7fTtcbiAgfVxuXG4gIGdldFNjcm9sbGFibGVFbGVtZW50KHRhcmdldCkge1xuICAgIGlmICh0aGlzLmhhc0RlZmluZWRTY3JvbGxhYmxlRWxlbWVudHMoKSkge1xuICAgICAgcmV0dXJuIGNsb3Nlc3QodGFyZ2V0LCB0aGlzLm9wdGlvbnMuc2Nyb2xsYWJsZUVsZW1lbnRzKSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjbG9zZXN0U2Nyb2xsYWJsZUVsZW1lbnQodGFyZ2V0KTtcbiAgICB9XG4gIH1cblxuICBoYXNEZWZpbmVkU2Nyb2xsYWJsZUVsZW1lbnRzKCkge1xuICAgIHJldHVybiBCb29sZWFuKHRoaXMub3B0aW9ucy5zY3JvbGxhYmxlRWxlbWVudHMubGVuZ3RoICE9PSAwKTtcbiAgfVxuXG4gIFtvbkRyYWdTdGFydF0oZHJhZ0V2ZW50KSB7XG4gICAgdGhpcy5maW5kU2Nyb2xsYWJsZUVsZW1lbnRGcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICB0aGlzLnNjcm9sbGFibGVFbGVtZW50ID0gdGhpcy5nZXRTY3JvbGxhYmxlRWxlbWVudChkcmFnRXZlbnQuc291cmNlKTtcbiAgICB9KTtcbiAgfVxuXG4gIFtvbkRyYWdNb3ZlXShkcmFnRXZlbnQpIHtcbiAgICB0aGlzLmZpbmRTY3JvbGxhYmxlRWxlbWVudEZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHRoaXMuc2Nyb2xsYWJsZUVsZW1lbnQgPSB0aGlzLmdldFNjcm9sbGFibGVFbGVtZW50KGRyYWdFdmVudC5zZW5zb3JFdmVudC50YXJnZXQpO1xuICAgIH0pO1xuICAgIGlmICghdGhpcy5zY3JvbGxhYmxlRWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzZW5zb3JFdmVudCA9IGRyYWdFdmVudC5zZW5zb3JFdmVudDtcbiAgICBjb25zdCBzY3JvbGxPZmZzZXQgPSB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMFxuICAgIH07XG4gICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdykge1xuICAgICAgc2Nyb2xsT2Zmc2V0LnkgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCB8fCAwO1xuICAgICAgc2Nyb2xsT2Zmc2V0LnggPSB3aW5kb3cucGFnZVhPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0IHx8IDA7XG4gICAgfVxuICAgIHRoaXMuY3VycmVudE1vdXNlUG9zaXRpb24gPSB7XG4gICAgICBjbGllbnRYOiBzZW5zb3JFdmVudC5jbGllbnRYIC0gc2Nyb2xsT2Zmc2V0LngsXG4gICAgICBjbGllbnRZOiBzZW5zb3JFdmVudC5jbGllbnRZIC0gc2Nyb2xsT2Zmc2V0LnlcbiAgICB9O1xuICAgIHRoaXMuc2Nyb2xsQW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpc1tzY3JvbGxdKTtcbiAgfVxuXG4gIFtvbkRyYWdTdG9wXSgpIHtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnNjcm9sbEFuaW1hdGlvbkZyYW1lKTtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmZpbmRTY3JvbGxhYmxlRWxlbWVudEZyYW1lKTtcbiAgICB0aGlzLnNjcm9sbGFibGVFbGVtZW50ID0gbnVsbDtcbiAgICB0aGlzLnNjcm9sbEFuaW1hdGlvbkZyYW1lID0gbnVsbDtcbiAgICB0aGlzLmZpbmRTY3JvbGxhYmxlRWxlbWVudEZyYW1lID0gbnVsbDtcbiAgICB0aGlzLmN1cnJlbnRNb3VzZVBvc2l0aW9uID0gbnVsbDtcbiAgfVxuXG4gIFtzY3JvbGxdKCkge1xuICAgIGlmICghdGhpcy5zY3JvbGxhYmxlRWxlbWVudCB8fCAhdGhpcy5jdXJyZW50TW91c2VQb3NpdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnNjcm9sbEFuaW1hdGlvbkZyYW1lKTtcbiAgICBjb25zdCB7XG4gICAgICBzcGVlZCxcbiAgICAgIHNlbnNpdGl2aXR5XG4gICAgfSA9IHRoaXMub3B0aW9ucztcbiAgICBjb25zdCByZWN0ID0gdGhpcy5zY3JvbGxhYmxlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBib3R0b21DdXRPZmYgPSByZWN0LmJvdHRvbSA+IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICBjb25zdCB0b3BDdXRPZmYgPSByZWN0LnRvcCA8IDA7XG4gICAgY29uc3QgY3V0T2ZmID0gdG9wQ3V0T2ZmIHx8IGJvdHRvbUN1dE9mZjtcbiAgICBjb25zdCBkb2N1bWVudFNjcm9sbGluZ0VsZW1lbnQgPSBnZXREb2N1bWVudFNjcm9sbGluZ0VsZW1lbnQoKTtcbiAgICBjb25zdCBzY3JvbGxhYmxlRWxlbWVudCA9IHRoaXMuc2Nyb2xsYWJsZUVsZW1lbnQ7XG4gICAgY29uc3QgY2xpZW50WCA9IHRoaXMuY3VycmVudE1vdXNlUG9zaXRpb24uY2xpZW50WDtcbiAgICBjb25zdCBjbGllbnRZID0gdGhpcy5jdXJyZW50TW91c2VQb3NpdGlvbi5jbGllbnRZO1xuICAgIGlmIChzY3JvbGxhYmxlRWxlbWVudCAhPT0gZG9jdW1lbnQuYm9keSAmJiBzY3JvbGxhYmxlRWxlbWVudCAhPT0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmICFjdXRPZmYpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgb2Zmc2V0SGVpZ2h0LFxuICAgICAgICBvZmZzZXRXaWR0aFxuICAgICAgfSA9IHNjcm9sbGFibGVFbGVtZW50O1xuICAgICAgaWYgKHJlY3QudG9wICsgb2Zmc2V0SGVpZ2h0IC0gY2xpZW50WSA8IHNlbnNpdGl2aXR5KSB7XG4gICAgICAgIHNjcm9sbGFibGVFbGVtZW50LnNjcm9sbFRvcCArPSBzcGVlZDtcbiAgICAgIH0gZWxzZSBpZiAoY2xpZW50WSAtIHJlY3QudG9wIDwgc2Vuc2l0aXZpdHkpIHtcbiAgICAgICAgc2Nyb2xsYWJsZUVsZW1lbnQuc2Nyb2xsVG9wIC09IHNwZWVkO1xuICAgICAgfVxuICAgICAgaWYgKHJlY3QubGVmdCArIG9mZnNldFdpZHRoIC0gY2xpZW50WCA8IHNlbnNpdGl2aXR5KSB7XG4gICAgICAgIHNjcm9sbGFibGVFbGVtZW50LnNjcm9sbExlZnQgKz0gc3BlZWQ7XG4gICAgICB9IGVsc2UgaWYgKGNsaWVudFggLSByZWN0LmxlZnQgPCBzZW5zaXRpdml0eSkge1xuICAgICAgICBzY3JvbGxhYmxlRWxlbWVudC5zY3JvbGxMZWZ0IC09IHNwZWVkO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGlubmVySGVpZ2h0LFxuICAgICAgICBpbm5lcldpZHRoXG4gICAgICB9ID0gd2luZG93O1xuICAgICAgaWYgKGNsaWVudFkgPCBzZW5zaXRpdml0eSkge1xuICAgICAgICBkb2N1bWVudFNjcm9sbGluZ0VsZW1lbnQuc2Nyb2xsVG9wIC09IHNwZWVkO1xuICAgICAgfSBlbHNlIGlmIChpbm5lckhlaWdodCAtIGNsaWVudFkgPCBzZW5zaXRpdml0eSkge1xuICAgICAgICBkb2N1bWVudFNjcm9sbGluZ0VsZW1lbnQuc2Nyb2xsVG9wICs9IHNwZWVkO1xuICAgICAgfVxuICAgICAgaWYgKGNsaWVudFggPCBzZW5zaXRpdml0eSkge1xuICAgICAgICBkb2N1bWVudFNjcm9sbGluZ0VsZW1lbnQuc2Nyb2xsTGVmdCAtPSBzcGVlZDtcbiAgICAgIH0gZWxzZSBpZiAoaW5uZXJXaWR0aCAtIGNsaWVudFggPCBzZW5zaXRpdml0eSkge1xuICAgICAgICBkb2N1bWVudFNjcm9sbGluZ0VsZW1lbnQuc2Nyb2xsTGVmdCArPSBzcGVlZDtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zY3JvbGxBbmltYXRpb25GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzW3Njcm9sbF0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhhc092ZXJmbG93KGVsZW1lbnQpIHtcbiAgY29uc3Qgb3ZlcmZsb3dSZWdleCA9IC8oYXV0b3xzY3JvbGwpLztcbiAgY29uc3QgY29tcHV0ZWRTdHlsZXMgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQsIG51bGwpO1xuICBjb25zdCBvdmVyZmxvdyA9IGNvbXB1dGVkU3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJ292ZXJmbG93JykgKyBjb21wdXRlZFN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCdvdmVyZmxvdy15JykgKyBjb21wdXRlZFN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCdvdmVyZmxvdy14Jyk7XG4gIHJldHVybiBvdmVyZmxvd1JlZ2V4LnRlc3Qob3ZlcmZsb3cpO1xufVxuXG5mdW5jdGlvbiBpc1N0YXRpY2FsbHlQb3NpdGlvbmVkKGVsZW1lbnQpIHtcbiAgY29uc3QgcG9zaXRpb24gPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoJ3Bvc2l0aW9uJyk7XG4gIHJldHVybiBwb3NpdGlvbiA9PT0gJ3N0YXRpYyc7XG59XG5cbmZ1bmN0aW9uIGNsb3Nlc3RTY3JvbGxhYmxlRWxlbWVudChlbGVtZW50KSB7XG4gIGlmICghZWxlbWVudCkge1xuICAgIHJldHVybiBnZXREb2N1bWVudFNjcm9sbGluZ0VsZW1lbnQoKTtcbiAgfVxuICBjb25zdCBwb3NpdGlvbiA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZSgncG9zaXRpb24nKTtcbiAgY29uc3QgZXhjbHVkZVN0YXRpY1BhcmVudHMgPSBwb3NpdGlvbiA9PT0gJ2Fic29sdXRlJztcbiAgY29uc3Qgc2Nyb2xsYWJsZUVsZW1lbnQgPSBjbG9zZXN0KGVsZW1lbnQsIHBhcmVudCA9PiB7XG4gICAgaWYgKGV4Y2x1ZGVTdGF0aWNQYXJlbnRzICYmIGlzU3RhdGljYWxseVBvc2l0aW9uZWQocGFyZW50KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzT3ZlcmZsb3cocGFyZW50KTtcbiAgfSk7XG4gIGlmIChwb3NpdGlvbiA9PT0gJ2ZpeGVkJyB8fCAhc2Nyb2xsYWJsZUVsZW1lbnQpIHtcbiAgICByZXR1cm4gZ2V0RG9jdW1lbnRTY3JvbGxpbmdFbGVtZW50KCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHNjcm9sbGFibGVFbGVtZW50O1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERvY3VtZW50U2Nyb2xsaW5nRWxlbWVudCgpIHtcbiAgcmV0dXJuIGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xufVxuXG5leHBvcnQgeyBTY3JvbGxhYmxlIGFzIGRlZmF1bHQsIGRlZmF1bHRPcHRpb25zLCBvbkRyYWdNb3ZlLCBvbkRyYWdTdGFydCwgb25EcmFnU3RvcCwgc2Nyb2xsIH07XG4iLCJpbXBvcnQgY2xvc2VzdCBmcm9tICcuLi8uLi8uLi9zaGFyZWQvdXRpbHMvY2xvc2VzdC9jbG9zZXN0Lm1qcyc7XG5pbXBvcnQgU2Vuc29yIGZyb20gJy4uL1NlbnNvci9TZW5zb3IubWpzJztcbmltcG9ydCB7IERyYWdTdGFydFNlbnNvckV2ZW50LCBEcmFnTW92ZVNlbnNvckV2ZW50LCBEcmFnU3RvcFNlbnNvckV2ZW50IH0gZnJvbSAnLi4vU2Vuc29yRXZlbnQvU2Vuc29yRXZlbnQubWpzJztcblxuY29uc3Qgb25Nb3VzZURvd24gPSBTeW1ib2woJ29uTW91c2VEb3duJyk7XG5jb25zdCBvbk1vdXNlVXAgPSBTeW1ib2woJ29uTW91c2VVcCcpO1xuY29uc3Qgb25EcmFnU3RhcnQgPSBTeW1ib2woJ29uRHJhZ1N0YXJ0Jyk7XG5jb25zdCBvbkRyYWdPdmVyID0gU3ltYm9sKCdvbkRyYWdPdmVyJyk7XG5jb25zdCBvbkRyYWdFbmQgPSBTeW1ib2woJ29uRHJhZ0VuZCcpO1xuY29uc3Qgb25Ecm9wID0gU3ltYm9sKCdvbkRyb3AnKTtcbmNvbnN0IHJlc2V0ID0gU3ltYm9sKCdyZXNldCcpO1xuXG5jbGFzcyBEcmFnU2Vuc29yIGV4dGVuZHMgU2Vuc29yIHtcblxuICBjb25zdHJ1Y3Rvcihjb250YWluZXJzID0gW10sIG9wdGlvbnMgPSB7fSkge1xuICAgIHN1cGVyKGNvbnRhaW5lcnMsIG9wdGlvbnMpO1xuXG4gICAgdGhpcy5tb3VzZURvd25UaW1lb3V0ID0gbnVsbDtcblxuICAgIHRoaXMuZHJhZ2dhYmxlRWxlbWVudCA9IG51bGw7XG5cbiAgICB0aGlzLm5hdGl2ZURyYWdnYWJsZUVsZW1lbnQgPSBudWxsO1xuICAgIHRoaXNbb25Nb3VzZURvd25dID0gdGhpc1tvbk1vdXNlRG93bl0uYmluZCh0aGlzKTtcbiAgICB0aGlzW29uTW91c2VVcF0gPSB0aGlzW29uTW91c2VVcF0uYmluZCh0aGlzKTtcbiAgICB0aGlzW29uRHJhZ1N0YXJ0XSA9IHRoaXNbb25EcmFnU3RhcnRdLmJpbmQodGhpcyk7XG4gICAgdGhpc1tvbkRyYWdPdmVyXSA9IHRoaXNbb25EcmFnT3Zlcl0uYmluZCh0aGlzKTtcbiAgICB0aGlzW29uRHJhZ0VuZF0gPSB0aGlzW29uRHJhZ0VuZF0uYmluZCh0aGlzKTtcbiAgICB0aGlzW29uRHJvcF0gPSB0aGlzW29uRHJvcF0uYmluZCh0aGlzKTtcbiAgfVxuXG4gIGF0dGFjaCgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzW29uTW91c2VEb3duXSwgdHJ1ZSk7XG4gIH1cblxuICBkZXRhY2goKSB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpc1tvbk1vdXNlRG93bl0sIHRydWUpO1xuICB9XG5cbiAgW29uRHJhZ1N0YXJ0XShldmVudCkge1xuXG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQnLCAnJyk7XG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSB0aGlzLm9wdGlvbnMudHlwZTtcbiAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xuICAgIGNvbnN0IG9yaWdpbmFsU291cmNlID0gdGhpcy5kcmFnZ2FibGVFbGVtZW50O1xuICAgIGlmICghb3JpZ2luYWxTb3VyY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZHJhZ1N0YXJ0RXZlbnQgPSBuZXcgRHJhZ1N0YXJ0U2Vuc29yRXZlbnQoe1xuICAgICAgY2xpZW50WDogZXZlbnQuY2xpZW50WCxcbiAgICAgIGNsaWVudFk6IGV2ZW50LmNsaWVudFksXG4gICAgICB0YXJnZXQsXG4gICAgICBvcmlnaW5hbFNvdXJjZSxcbiAgICAgIGNvbnRhaW5lcjogdGhpcy5jdXJyZW50Q29udGFpbmVyLFxuICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnRcbiAgICB9KTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy50cmlnZ2VyKHRoaXMuY3VycmVudENvbnRhaW5lciwgZHJhZ1N0YXJ0RXZlbnQpO1xuICAgICAgaWYgKGRyYWdTdGFydEV2ZW50LmNhbmNlbGVkKCkpIHtcbiAgICAgICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kcmFnZ2luZyA9IHRydWU7XG4gICAgICB9XG4gICAgfSwgMCk7XG4gIH1cblxuICBbb25EcmFnT3Zlcl0oZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuZHJhZ2dpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKTtcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmN1cnJlbnRDb250YWluZXI7XG4gICAgY29uc3QgZHJhZ01vdmVFdmVudCA9IG5ldyBEcmFnTW92ZVNlbnNvckV2ZW50KHtcbiAgICAgIGNsaWVudFg6IGV2ZW50LmNsaWVudFgsXG4gICAgICBjbGllbnRZOiBldmVudC5jbGllbnRZLFxuICAgICAgdGFyZ2V0LFxuICAgICAgY29udGFpbmVyLFxuICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnRcbiAgICB9KTtcbiAgICB0aGlzLnRyaWdnZXIoY29udGFpbmVyLCBkcmFnTW92ZUV2ZW50KTtcbiAgICBpZiAoIWRyYWdNb3ZlRXZlbnQuY2FuY2VsZWQoKSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gdGhpcy5vcHRpb25zLnR5cGU7XG4gICAgfVxuICB9XG5cbiAgW29uRHJhZ0VuZF0oZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuZHJhZ2dpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXNbb25Nb3VzZVVwXSwgdHJ1ZSk7XG4gICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKTtcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmN1cnJlbnRDb250YWluZXI7XG4gICAgY29uc3QgZHJhZ1N0b3BFdmVudCA9IG5ldyBEcmFnU3RvcFNlbnNvckV2ZW50KHtcbiAgICAgIGNsaWVudFg6IGV2ZW50LmNsaWVudFgsXG4gICAgICBjbGllbnRZOiBldmVudC5jbGllbnRZLFxuICAgICAgdGFyZ2V0LFxuICAgICAgY29udGFpbmVyLFxuICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnRcbiAgICB9KTtcbiAgICB0aGlzLnRyaWdnZXIoY29udGFpbmVyLCBkcmFnU3RvcEV2ZW50KTtcbiAgICB0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG4gICAgdGhpcy5zdGFydEV2ZW50ID0gbnVsbDtcbiAgICB0aGlzW3Jlc2V0XSgpO1xuICB9XG5cbiAgW29uRHJvcF0oZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgW29uTW91c2VEb3duXShldmVudCkge1xuXG4gICAgaWYgKGV2ZW50LnRhcmdldCAmJiAoZXZlbnQudGFyZ2V0LmZvcm0gfHwgZXZlbnQudGFyZ2V0LmNvbnRlbnRlZGl0YWJsZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgIHRoaXMuY3VycmVudENvbnRhaW5lciA9IGNsb3Nlc3QodGFyZ2V0LCB0aGlzLmNvbnRhaW5lcnMpO1xuICAgIGlmICghdGhpcy5jdXJyZW50Q29udGFpbmVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLm9wdGlvbnMuaGFuZGxlICYmIHRhcmdldCAmJiAhY2xvc2VzdCh0YXJnZXQsIHRoaXMub3B0aW9ucy5oYW5kbGUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG9yaWdpbmFsU291cmNlID0gY2xvc2VzdCh0YXJnZXQsIHRoaXMub3B0aW9ucy5kcmFnZ2FibGUpO1xuICAgIGlmICghb3JpZ2luYWxTb3VyY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbmF0aXZlRHJhZ2dhYmxlRWxlbWVudCA9IGNsb3Nlc3QoZXZlbnQudGFyZ2V0LCBlbGVtZW50ID0+IGVsZW1lbnQuZHJhZ2dhYmxlKTtcbiAgICBpZiAobmF0aXZlRHJhZ2dhYmxlRWxlbWVudCkge1xuICAgICAgbmF0aXZlRHJhZ2dhYmxlRWxlbWVudC5kcmFnZ2FibGUgPSBmYWxzZTtcbiAgICAgIHRoaXMubmF0aXZlRHJhZ2dhYmxlRWxlbWVudCA9IG5hdGl2ZURyYWdnYWJsZUVsZW1lbnQ7XG4gICAgfVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzW29uTW91c2VVcF0sIHRydWUpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRoaXNbb25EcmFnU3RhcnRdLCBmYWxzZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzW29uRHJhZ092ZXJdLCBmYWxzZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIHRoaXNbb25EcmFnRW5kXSwgZmFsc2UpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzW29uRHJvcF0sIGZhbHNlKTtcbiAgICB0aGlzLnN0YXJ0RXZlbnQgPSBldmVudDtcbiAgICB0aGlzLm1vdXNlRG93blRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIG9yaWdpbmFsU291cmNlLmRyYWdnYWJsZSA9IHRydWU7XG4gICAgICB0aGlzLmRyYWdnYWJsZUVsZW1lbnQgPSBvcmlnaW5hbFNvdXJjZTtcbiAgICB9LCB0aGlzLmRlbGF5LmRyYWcpO1xuICB9XG5cbiAgW29uTW91c2VVcF0oKSB7XG4gICAgdGhpc1tyZXNldF0oKTtcbiAgfVxuXG4gIFtyZXNldF0oKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMubW91c2VEb3duVGltZW91dCk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXNbb25Nb3VzZVVwXSwgdHJ1ZSk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgdGhpc1tvbkRyYWdTdGFydF0sIGZhbHNlKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXNbb25EcmFnT3Zlcl0sIGZhbHNlKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgdGhpc1tvbkRyYWdFbmRdLCBmYWxzZSk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJvcCcsIHRoaXNbb25Ecm9wXSwgZmFsc2UpO1xuICAgIGlmICh0aGlzLm5hdGl2ZURyYWdnYWJsZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMubmF0aXZlRHJhZ2dhYmxlRWxlbWVudC5kcmFnZ2FibGUgPSB0cnVlO1xuICAgICAgdGhpcy5uYXRpdmVEcmFnZ2FibGVFbGVtZW50ID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKHRoaXMuZHJhZ2dhYmxlRWxlbWVudCkge1xuICAgICAgdGhpcy5kcmFnZ2FibGVFbGVtZW50LmRyYWdnYWJsZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kcmFnZ2FibGVFbGVtZW50ID0gbnVsbDtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHsgRHJhZ1NlbnNvciBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgY2xvc2VzdCBmcm9tICcuLi8uLi8uLi9zaGFyZWQvdXRpbHMvY2xvc2VzdC9jbG9zZXN0Lm1qcyc7XG5pbXBvcnQgU2Vuc29yIGZyb20gJy4uL1NlbnNvci9TZW5zb3IubWpzJztcbmltcG9ydCB7IERyYWdTdGFydFNlbnNvckV2ZW50LCBEcmFnU3RvcFNlbnNvckV2ZW50LCBEcmFnTW92ZVNlbnNvckV2ZW50LCBEcmFnUHJlc3N1cmVTZW5zb3JFdmVudCB9IGZyb20gJy4uL1NlbnNvckV2ZW50L1NlbnNvckV2ZW50Lm1qcyc7XG5cbmNvbnN0IG9uTW91c2VGb3JjZVdpbGxCZWdpbiA9IFN5bWJvbCgnb25Nb3VzZUZvcmNlV2lsbEJlZ2luJyk7XG5jb25zdCBvbk1vdXNlRm9yY2VEb3duID0gU3ltYm9sKCdvbk1vdXNlRm9yY2VEb3duJyk7XG5jb25zdCBvbk1vdXNlRG93biA9IFN5bWJvbCgnb25Nb3VzZURvd24nKTtcbmNvbnN0IG9uTW91c2VGb3JjZUNoYW5nZSA9IFN5bWJvbCgnb25Nb3VzZUZvcmNlQ2hhbmdlJyk7XG5jb25zdCBvbk1vdXNlTW92ZSA9IFN5bWJvbCgnb25Nb3VzZU1vdmUnKTtcbmNvbnN0IG9uTW91c2VVcCA9IFN5bWJvbCgnb25Nb3VzZVVwJyk7XG5jb25zdCBvbk1vdXNlRm9yY2VHbG9iYWxDaGFuZ2UgPSBTeW1ib2woJ29uTW91c2VGb3JjZUdsb2JhbENoYW5nZScpO1xuXG5jbGFzcyBGb3JjZVRvdWNoU2Vuc29yIGV4dGVuZHMgU2Vuc29yIHtcblxuICBjb25zdHJ1Y3Rvcihjb250YWluZXJzID0gW10sIG9wdGlvbnMgPSB7fSkge1xuICAgIHN1cGVyKGNvbnRhaW5lcnMsIG9wdGlvbnMpO1xuXG4gICAgdGhpcy5taWdodERyYWcgPSBmYWxzZTtcbiAgICB0aGlzW29uTW91c2VGb3JjZVdpbGxCZWdpbl0gPSB0aGlzW29uTW91c2VGb3JjZVdpbGxCZWdpbl0uYmluZCh0aGlzKTtcbiAgICB0aGlzW29uTW91c2VGb3JjZURvd25dID0gdGhpc1tvbk1vdXNlRm9yY2VEb3duXS5iaW5kKHRoaXMpO1xuICAgIHRoaXNbb25Nb3VzZURvd25dID0gdGhpc1tvbk1vdXNlRG93bl0uYmluZCh0aGlzKTtcbiAgICB0aGlzW29uTW91c2VGb3JjZUNoYW5nZV0gPSB0aGlzW29uTW91c2VGb3JjZUNoYW5nZV0uYmluZCh0aGlzKTtcbiAgICB0aGlzW29uTW91c2VNb3ZlXSA9IHRoaXNbb25Nb3VzZU1vdmVdLmJpbmQodGhpcyk7XG4gICAgdGhpc1tvbk1vdXNlVXBdID0gdGhpc1tvbk1vdXNlVXBdLmJpbmQodGhpcyk7XG4gIH1cblxuICBhdHRhY2goKSB7XG4gICAgZm9yIChjb25zdCBjb250YWluZXIgb2YgdGhpcy5jb250YWluZXJzKSB7XG4gICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignd2Via2l0bW91c2Vmb3JjZXdpbGxiZWdpbicsIHRoaXNbb25Nb3VzZUZvcmNlV2lsbEJlZ2luXSwgZmFsc2UpO1xuICAgICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3dlYmtpdG1vdXNlZm9yY2Vkb3duJywgdGhpc1tvbk1vdXNlRm9yY2VEb3duXSwgZmFsc2UpO1xuICAgICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXNbb25Nb3VzZURvd25dLCB0cnVlKTtcbiAgICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCd3ZWJraXRtb3VzZWZvcmNlY2hhbmdlZCcsIHRoaXNbb25Nb3VzZUZvcmNlQ2hhbmdlXSwgZmFsc2UpO1xuICAgIH1cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzW29uTW91c2VNb3ZlXSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXNbb25Nb3VzZVVwXSk7XG4gIH1cblxuICBkZXRhY2goKSB7XG4gICAgZm9yIChjb25zdCBjb250YWluZXIgb2YgdGhpcy5jb250YWluZXJzKSB7XG4gICAgICBjb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2Via2l0bW91c2Vmb3JjZXdpbGxiZWdpbicsIHRoaXNbb25Nb3VzZUZvcmNlV2lsbEJlZ2luXSwgZmFsc2UpO1xuICAgICAgY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3dlYmtpdG1vdXNlZm9yY2Vkb3duJywgdGhpc1tvbk1vdXNlRm9yY2VEb3duXSwgZmFsc2UpO1xuICAgICAgY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXNbb25Nb3VzZURvd25dLCB0cnVlKTtcbiAgICAgIGNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCd3ZWJraXRtb3VzZWZvcmNlY2hhbmdlZCcsIHRoaXNbb25Nb3VzZUZvcmNlQ2hhbmdlXSwgZmFsc2UpO1xuICAgIH1cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzW29uTW91c2VNb3ZlXSk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXNbb25Nb3VzZVVwXSk7XG4gIH1cblxuICBbb25Nb3VzZUZvcmNlV2lsbEJlZ2luXShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5taWdodERyYWcgPSB0cnVlO1xuICB9XG5cbiAgW29uTW91c2VGb3JjZURvd25dKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuZHJhZ2dpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKTtcbiAgICBjb25zdCBjb250YWluZXIgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgIGlmICh0aGlzLm9wdGlvbnMuaGFuZGxlICYmIHRhcmdldCAmJiAhY2xvc2VzdCh0YXJnZXQsIHRoaXMub3B0aW9ucy5oYW5kbGUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG9yaWdpbmFsU291cmNlID0gY2xvc2VzdCh0YXJnZXQsIHRoaXMub3B0aW9ucy5kcmFnZ2FibGUpO1xuICAgIGlmICghb3JpZ2luYWxTb3VyY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZHJhZ1N0YXJ0RXZlbnQgPSBuZXcgRHJhZ1N0YXJ0U2Vuc29yRXZlbnQoe1xuICAgICAgY2xpZW50WDogZXZlbnQuY2xpZW50WCxcbiAgICAgIGNsaWVudFk6IGV2ZW50LmNsaWVudFksXG4gICAgICB0YXJnZXQsXG4gICAgICBjb250YWluZXIsXG4gICAgICBvcmlnaW5hbFNvdXJjZSxcbiAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50XG4gICAgfSk7XG4gICAgdGhpcy50cmlnZ2VyKGNvbnRhaW5lciwgZHJhZ1N0YXJ0RXZlbnQpO1xuICAgIHRoaXMuY3VycmVudENvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICB0aGlzLmRyYWdnaW5nID0gIWRyYWdTdGFydEV2ZW50LmNhbmNlbGVkKCk7XG4gICAgdGhpcy5taWdodERyYWcgPSBmYWxzZTtcbiAgfVxuXG4gIFtvbk1vdXNlVXBdKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmRyYWdnaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGRyYWdTdG9wRXZlbnQgPSBuZXcgRHJhZ1N0b3BTZW5zb3JFdmVudCh7XG4gICAgICBjbGllbnRYOiBldmVudC5jbGllbnRYLFxuICAgICAgY2xpZW50WTogZXZlbnQuY2xpZW50WSxcbiAgICAgIHRhcmdldDogbnVsbCxcbiAgICAgIGNvbnRhaW5lcjogdGhpcy5jdXJyZW50Q29udGFpbmVyLFxuICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnRcbiAgICB9KTtcbiAgICB0aGlzLnRyaWdnZXIodGhpcy5jdXJyZW50Q29udGFpbmVyLCBkcmFnU3RvcEV2ZW50KTtcbiAgICB0aGlzLmN1cnJlbnRDb250YWluZXIgPSBudWxsO1xuICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcbiAgICB0aGlzLm1pZ2h0RHJhZyA9IGZhbHNlO1xuICB9XG5cbiAgW29uTW91c2VEb3duXShldmVudCkge1xuICAgIGlmICghdGhpcy5taWdodERyYWcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgW29uTW91c2VNb3ZlXShldmVudCkge1xuICAgIGlmICghdGhpcy5kcmFnZ2luZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xuICAgIGNvbnN0IGRyYWdNb3ZlRXZlbnQgPSBuZXcgRHJhZ01vdmVTZW5zb3JFdmVudCh7XG4gICAgICBjbGllbnRYOiBldmVudC5jbGllbnRYLFxuICAgICAgY2xpZW50WTogZXZlbnQuY2xpZW50WSxcbiAgICAgIHRhcmdldCxcbiAgICAgIGNvbnRhaW5lcjogdGhpcy5jdXJyZW50Q29udGFpbmVyLFxuICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnRcbiAgICB9KTtcbiAgICB0aGlzLnRyaWdnZXIodGhpcy5jdXJyZW50Q29udGFpbmVyLCBkcmFnTW92ZUV2ZW50KTtcbiAgfVxuXG4gIFtvbk1vdXNlRm9yY2VDaGFuZ2VdKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuZHJhZ2dpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgY29uc3QgZHJhZ1ByZXNzdXJlRXZlbnQgPSBuZXcgRHJhZ1ByZXNzdXJlU2Vuc29yRXZlbnQoe1xuICAgICAgcHJlc3N1cmU6IGV2ZW50LndlYmtpdEZvcmNlLFxuICAgICAgY2xpZW50WDogZXZlbnQuY2xpZW50WCxcbiAgICAgIGNsaWVudFk6IGV2ZW50LmNsaWVudFksXG4gICAgICB0YXJnZXQsXG4gICAgICBjb250YWluZXIsXG4gICAgICBvcmlnaW5hbEV2ZW50OiBldmVudFxuICAgIH0pO1xuICAgIHRoaXMudHJpZ2dlcihjb250YWluZXIsIGRyYWdQcmVzc3VyZUV2ZW50KTtcbiAgfVxuXG4gIFtvbk1vdXNlRm9yY2VHbG9iYWxDaGFuZ2VdKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmRyYWdnaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICBjb25zdCBkcmFnUHJlc3N1cmVFdmVudCA9IG5ldyBEcmFnUHJlc3N1cmVTZW5zb3JFdmVudCh7XG4gICAgICBwcmVzc3VyZTogZXZlbnQud2Via2l0Rm9yY2UsXG4gICAgICBjbGllbnRYOiBldmVudC5jbGllbnRYLFxuICAgICAgY2xpZW50WTogZXZlbnQuY2xpZW50WSxcbiAgICAgIHRhcmdldCxcbiAgICAgIGNvbnRhaW5lcjogdGhpcy5jdXJyZW50Q29udGFpbmVyLFxuICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnRcbiAgICB9KTtcbiAgICB0aGlzLnRyaWdnZXIodGhpcy5jdXJyZW50Q29udGFpbmVyLCBkcmFnUHJlc3N1cmVFdmVudCk7XG4gIH1cbn1cblxuZXhwb3J0IHsgRm9yY2VUb3VjaFNlbnNvciBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgY2xvc2VzdCBmcm9tICcuLi8uLi8uLi9zaGFyZWQvdXRpbHMvY2xvc2VzdC9jbG9zZXN0Lm1qcyc7XG5pbXBvcnQgZGlzdGFuY2UgZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3V0aWxzL2Rpc3RhbmNlL2Rpc3RhbmNlLm1qcyc7XG5pbXBvcnQgU2Vuc29yIGZyb20gJy4uL1NlbnNvci9TZW5zb3IubWpzJztcbmltcG9ydCB7IERyYWdTdGFydFNlbnNvckV2ZW50LCBEcmFnTW92ZVNlbnNvckV2ZW50LCBEcmFnU3RvcFNlbnNvckV2ZW50IH0gZnJvbSAnLi4vU2Vuc29yRXZlbnQvU2Vuc29yRXZlbnQubWpzJztcblxuY29uc3Qgb25Db250ZXh0TWVudVdoaWxlRHJhZ2dpbmcgPSBTeW1ib2woJ29uQ29udGV4dE1lbnVXaGlsZURyYWdnaW5nJyk7XG5jb25zdCBvbk1vdXNlRG93biA9IFN5bWJvbCgnb25Nb3VzZURvd24nKTtcbmNvbnN0IG9uTW91c2VNb3ZlID0gU3ltYm9sKCdvbk1vdXNlTW92ZScpO1xuY29uc3Qgb25Nb3VzZVVwID0gU3ltYm9sKCdvbk1vdXNlVXAnKTtcbmNvbnN0IHN0YXJ0RHJhZyA9IFN5bWJvbCgnc3RhcnREcmFnJyk7XG5jb25zdCBvbkRpc3RhbmNlQ2hhbmdlID0gU3ltYm9sKCdvbkRpc3RhbmNlQ2hhbmdlJyk7XG5cbmNsYXNzIE1vdXNlU2Vuc29yIGV4dGVuZHMgU2Vuc29yIHtcblxuICBjb25zdHJ1Y3Rvcihjb250YWluZXJzID0gW10sIG9wdGlvbnMgPSB7fSkge1xuICAgIHN1cGVyKGNvbnRhaW5lcnMsIG9wdGlvbnMpO1xuXG4gICAgdGhpcy5tb3VzZURvd25UaW1lb3V0ID0gbnVsbDtcblxuICAgIHRoaXMucGFnZVggPSBudWxsO1xuXG4gICAgdGhpcy5wYWdlWSA9IG51bGw7XG4gICAgdGhpc1tvbkNvbnRleHRNZW51V2hpbGVEcmFnZ2luZ10gPSB0aGlzW29uQ29udGV4dE1lbnVXaGlsZURyYWdnaW5nXS5iaW5kKHRoaXMpO1xuICAgIHRoaXNbb25Nb3VzZURvd25dID0gdGhpc1tvbk1vdXNlRG93bl0uYmluZCh0aGlzKTtcbiAgICB0aGlzW29uTW91c2VNb3ZlXSA9IHRoaXNbb25Nb3VzZU1vdmVdLmJpbmQodGhpcyk7XG4gICAgdGhpc1tvbk1vdXNlVXBdID0gdGhpc1tvbk1vdXNlVXBdLmJpbmQodGhpcyk7XG4gICAgdGhpc1tzdGFydERyYWddID0gdGhpc1tzdGFydERyYWddLmJpbmQodGhpcyk7XG4gICAgdGhpc1tvbkRpc3RhbmNlQ2hhbmdlXSA9IHRoaXNbb25EaXN0YW5jZUNoYW5nZV0uYmluZCh0aGlzKTtcbiAgfVxuXG4gIGF0dGFjaCgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzW29uTW91c2VEb3duXSwgdHJ1ZSk7XG4gIH1cblxuICBkZXRhY2goKSB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpc1tvbk1vdXNlRG93bl0sIHRydWUpO1xuICB9XG5cbiAgW29uTW91c2VEb3duXShldmVudCkge1xuICAgIGlmIChldmVudC5idXR0b24gIT09IDAgfHwgZXZlbnQuY3RybEtleSB8fCBldmVudC5tZXRhS2V5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGNsb3Nlc3QoZXZlbnQudGFyZ2V0LCB0aGlzLmNvbnRhaW5lcnMpO1xuICAgIGlmICghY29udGFpbmVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLm9wdGlvbnMuaGFuZGxlICYmIGV2ZW50LnRhcmdldCAmJiAhY2xvc2VzdChldmVudC50YXJnZXQsIHRoaXMub3B0aW9ucy5oYW5kbGUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG9yaWdpbmFsU291cmNlID0gY2xvc2VzdChldmVudC50YXJnZXQsIHRoaXMub3B0aW9ucy5kcmFnZ2FibGUpO1xuICAgIGlmICghb3JpZ2luYWxTb3VyY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qge1xuICAgICAgZGVsYXlcbiAgICB9ID0gdGhpcztcbiAgICBjb25zdCB7XG4gICAgICBwYWdlWCxcbiAgICAgIHBhZ2VZXG4gICAgfSA9IGV2ZW50O1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywge1xuICAgICAgcGFnZVgsXG4gICAgICBwYWdlWVxuICAgIH0pO1xuICAgIHRoaXMub25Nb3VzZURvd25BdCA9IERhdGUubm93KCk7XG4gICAgdGhpcy5zdGFydEV2ZW50ID0gZXZlbnQ7XG4gICAgdGhpcy5jdXJyZW50Q29udGFpbmVyID0gY29udGFpbmVyO1xuICAgIHRoaXMub3JpZ2luYWxTb3VyY2UgPSBvcmlnaW5hbFNvdXJjZTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpc1tvbk1vdXNlVXBdKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBwcmV2ZW50TmF0aXZlRHJhZ1N0YXJ0KTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzW29uRGlzdGFuY2VDaGFuZ2VdKTtcbiAgICB0aGlzLm1vdXNlRG93blRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzW29uRGlzdGFuY2VDaGFuZ2VdKHtcbiAgICAgICAgcGFnZVg6IHRoaXMucGFnZVgsXG4gICAgICAgIHBhZ2VZOiB0aGlzLnBhZ2VZXG4gICAgICB9KTtcbiAgICB9LCBkZWxheS5tb3VzZSk7XG4gIH1cblxuICBbc3RhcnREcmFnXSgpIHtcbiAgICBjb25zdCBzdGFydEV2ZW50ID0gdGhpcy5zdGFydEV2ZW50O1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY3VycmVudENvbnRhaW5lcjtcbiAgICBjb25zdCBvcmlnaW5hbFNvdXJjZSA9IHRoaXMub3JpZ2luYWxTb3VyY2U7XG4gICAgY29uc3QgZHJhZ1N0YXJ0RXZlbnQgPSBuZXcgRHJhZ1N0YXJ0U2Vuc29yRXZlbnQoe1xuICAgICAgY2xpZW50WDogc3RhcnRFdmVudC5jbGllbnRYLFxuICAgICAgY2xpZW50WTogc3RhcnRFdmVudC5jbGllbnRZLFxuICAgICAgdGFyZ2V0OiBzdGFydEV2ZW50LnRhcmdldCxcbiAgICAgIGNvbnRhaW5lcixcbiAgICAgIG9yaWdpbmFsU291cmNlLFxuICAgICAgb3JpZ2luYWxFdmVudDogc3RhcnRFdmVudFxuICAgIH0pO1xuICAgIHRoaXMudHJpZ2dlcih0aGlzLmN1cnJlbnRDb250YWluZXIsIGRyYWdTdGFydEV2ZW50KTtcbiAgICB0aGlzLmRyYWdnaW5nID0gIWRyYWdTdGFydEV2ZW50LmNhbmNlbGVkKCk7XG4gICAgaWYgKHRoaXMuZHJhZ2dpbmcpIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRleHRtZW51JywgdGhpc1tvbkNvbnRleHRNZW51V2hpbGVEcmFnZ2luZ10sIHRydWUpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpc1tvbk1vdXNlTW92ZV0pO1xuICAgIH1cbiAgfVxuXG4gIFtvbkRpc3RhbmNlQ2hhbmdlXShldmVudCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhZ2VYLFxuICAgICAgcGFnZVlcbiAgICB9ID0gZXZlbnQ7XG4gICAgY29uc3Qge1xuICAgICAgZGlzdGFuY2U6IGRpc3RhbmNlJDFcbiAgICB9ID0gdGhpcy5vcHRpb25zO1xuICAgIGNvbnN0IHtcbiAgICAgIHN0YXJ0RXZlbnQsXG4gICAgICBkZWxheVxuICAgIH0gPSB0aGlzO1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywge1xuICAgICAgcGFnZVgsXG4gICAgICBwYWdlWVxuICAgIH0pO1xuICAgIGlmICghdGhpcy5jdXJyZW50Q29udGFpbmVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHRpbWVFbGFwc2VkID0gRGF0ZS5ub3coKSAtIHRoaXMub25Nb3VzZURvd25BdDtcbiAgICBjb25zdCBkaXN0YW5jZVRyYXZlbGxlZCA9IGRpc3RhbmNlKHN0YXJ0RXZlbnQucGFnZVgsIHN0YXJ0RXZlbnQucGFnZVksIHBhZ2VYLCBwYWdlWSkgfHwgMDtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5tb3VzZURvd25UaW1lb3V0KTtcbiAgICBpZiAodGltZUVsYXBzZWQgPCBkZWxheS5tb3VzZSkge1xuXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzW29uRGlzdGFuY2VDaGFuZ2VdKTtcbiAgICB9IGVsc2UgaWYgKGRpc3RhbmNlVHJhdmVsbGVkID49IGRpc3RhbmNlJDEpIHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXNbb25EaXN0YW5jZUNoYW5nZV0pO1xuICAgICAgdGhpc1tzdGFydERyYWddKCk7XG4gICAgfVxuICB9XG5cbiAgW29uTW91c2VNb3ZlXShldmVudCkge1xuICAgIGlmICghdGhpcy5kcmFnZ2luZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xuICAgIGNvbnN0IGRyYWdNb3ZlRXZlbnQgPSBuZXcgRHJhZ01vdmVTZW5zb3JFdmVudCh7XG4gICAgICBjbGllbnRYOiBldmVudC5jbGllbnRYLFxuICAgICAgY2xpZW50WTogZXZlbnQuY2xpZW50WSxcbiAgICAgIHRhcmdldCxcbiAgICAgIGNvbnRhaW5lcjogdGhpcy5jdXJyZW50Q29udGFpbmVyLFxuICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnRcbiAgICB9KTtcbiAgICB0aGlzLnRyaWdnZXIodGhpcy5jdXJyZW50Q29udGFpbmVyLCBkcmFnTW92ZUV2ZW50KTtcbiAgfVxuXG4gIFtvbk1vdXNlVXBdKGV2ZW50KSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMubW91c2VEb3duVGltZW91dCk7XG4gICAgaWYgKGV2ZW50LmJ1dHRvbiAhPT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpc1tvbk1vdXNlVXBdKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBwcmV2ZW50TmF0aXZlRHJhZ1N0YXJ0KTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzW29uRGlzdGFuY2VDaGFuZ2VdKTtcbiAgICBpZiAoIXRoaXMuZHJhZ2dpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKTtcbiAgICBjb25zdCBkcmFnU3RvcEV2ZW50ID0gbmV3IERyYWdTdG9wU2Vuc29yRXZlbnQoe1xuICAgICAgY2xpZW50WDogZXZlbnQuY2xpZW50WCxcbiAgICAgIGNsaWVudFk6IGV2ZW50LmNsaWVudFksXG4gICAgICB0YXJnZXQsXG4gICAgICBjb250YWluZXI6IHRoaXMuY3VycmVudENvbnRhaW5lcixcbiAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50XG4gICAgfSk7XG4gICAgdGhpcy50cmlnZ2VyKHRoaXMuY3VycmVudENvbnRhaW5lciwgZHJhZ1N0b3BFdmVudCk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY29udGV4dG1lbnUnLCB0aGlzW29uQ29udGV4dE1lbnVXaGlsZURyYWdnaW5nXSwgdHJ1ZSk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpc1tvbk1vdXNlTW92ZV0pO1xuICAgIHRoaXMuY3VycmVudENvbnRhaW5lciA9IG51bGw7XG4gICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuICAgIHRoaXMuc3RhcnRFdmVudCA9IG51bGw7XG4gIH1cblxuICBbb25Db250ZXh0TWVudVdoaWxlRHJhZ2dpbmddKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxufVxuZnVuY3Rpb24gcHJldmVudE5hdGl2ZURyYWdTdGFydChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xufVxuXG5leHBvcnQgeyBNb3VzZVNlbnNvciBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgeyBBYnN0cmFjdEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL0Fic3RyYWN0RXZlbnQvQWJzdHJhY3RFdmVudC5tanMnO1xuXG5jbGFzcyBTZW5zb3JFdmVudCBleHRlbmRzIEFic3RyYWN0RXZlbnQge1xuXG4gIGdldCBvcmlnaW5hbEV2ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEub3JpZ2luYWxFdmVudDtcbiAgfVxuXG4gIGdldCBjbGllbnRYKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEuY2xpZW50WDtcbiAgfVxuXG4gIGdldCBjbGllbnRZKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEuY2xpZW50WTtcbiAgfVxuXG4gIGdldCB0YXJnZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS50YXJnZXQ7XG4gIH1cblxuICBnZXQgY29udGFpbmVyKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEuY29udGFpbmVyO1xuICB9XG5cbiAgZ2V0IG9yaWdpbmFsU291cmNlKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEub3JpZ2luYWxTb3VyY2U7XG4gIH1cblxuICBnZXQgcHJlc3N1cmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5wcmVzc3VyZTtcbiAgfVxufVxuXG5jbGFzcyBEcmFnU3RhcnRTZW5zb3JFdmVudCBleHRlbmRzIFNlbnNvckV2ZW50IHt9XG5cbkRyYWdTdGFydFNlbnNvckV2ZW50LnR5cGUgPSAnZHJhZzpzdGFydCc7XG5jbGFzcyBEcmFnTW92ZVNlbnNvckV2ZW50IGV4dGVuZHMgU2Vuc29yRXZlbnQge31cblxuRHJhZ01vdmVTZW5zb3JFdmVudC50eXBlID0gJ2RyYWc6bW92ZSc7XG5jbGFzcyBEcmFnU3RvcFNlbnNvckV2ZW50IGV4dGVuZHMgU2Vuc29yRXZlbnQge31cblxuRHJhZ1N0b3BTZW5zb3JFdmVudC50eXBlID0gJ2RyYWc6c3RvcCc7XG5jbGFzcyBEcmFnUHJlc3N1cmVTZW5zb3JFdmVudCBleHRlbmRzIFNlbnNvckV2ZW50IHt9XG5EcmFnUHJlc3N1cmVTZW5zb3JFdmVudC50eXBlID0gJ2RyYWc6cHJlc3N1cmUnO1xuXG5leHBvcnQgeyBEcmFnTW92ZVNlbnNvckV2ZW50LCBEcmFnUHJlc3N1cmVTZW5zb3JFdmVudCwgRHJhZ1N0YXJ0U2Vuc29yRXZlbnQsIERyYWdTdG9wU2Vuc29yRXZlbnQsIFNlbnNvckV2ZW50IH07XG4iLCJjb25zdCBkZWZhdWx0RGVsYXkgPSB7XG4gIG1vdXNlOiAwLFxuICBkcmFnOiAwLFxuICB0b3VjaDogMTAwXG59O1xuXG5jbGFzcyBTZW5zb3Ige1xuXG4gIGNvbnN0cnVjdG9yKGNvbnRhaW5lcnMgPSBbXSwgb3B0aW9ucyA9IHt9KSB7XG5cbiAgICB0aGlzLmNvbnRhaW5lcnMgPSBbLi4uY29udGFpbmVyc107XG5cbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICAuLi5vcHRpb25zXG4gICAgfTtcblxuICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcblxuICAgIHRoaXMuY3VycmVudENvbnRhaW5lciA9IG51bGw7XG5cbiAgICB0aGlzLm9yaWdpbmFsU291cmNlID0gbnVsbDtcblxuICAgIHRoaXMuc3RhcnRFdmVudCA9IG51bGw7XG5cbiAgICB0aGlzLmRlbGF5ID0gY2FsY0RlbGF5KG9wdGlvbnMuZGVsYXkpO1xuICB9XG5cbiAgYXR0YWNoKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZGV0YWNoKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYWRkQ29udGFpbmVyKC4uLmNvbnRhaW5lcnMpIHtcbiAgICB0aGlzLmNvbnRhaW5lcnMgPSBbLi4udGhpcy5jb250YWluZXJzLCAuLi5jb250YWluZXJzXTtcbiAgfVxuXG4gIHJlbW92ZUNvbnRhaW5lciguLi5jb250YWluZXJzKSB7XG4gICAgdGhpcy5jb250YWluZXJzID0gdGhpcy5jb250YWluZXJzLmZpbHRlcihjb250YWluZXIgPT4gIWNvbnRhaW5lcnMuaW5jbHVkZXMoY29udGFpbmVyKSk7XG4gIH1cblxuICB0cmlnZ2VyKGVsZW1lbnQsIHNlbnNvckV2ZW50KSB7XG4gICAgY29uc3QgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcbiAgICBldmVudC5kZXRhaWwgPSBzZW5zb3JFdmVudDtcbiAgICBldmVudC5pbml0RXZlbnQoc2Vuc29yRXZlbnQudHlwZSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICB0aGlzLmxhc3RFdmVudCA9IHNlbnNvckV2ZW50O1xuICAgIHJldHVybiBzZW5zb3JFdmVudDtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYWxjRGVsYXkob3B0aW9uc0RlbGF5KSB7XG4gIGNvbnN0IGRlbGF5ID0ge307XG4gIGlmIChvcHRpb25zRGVsYXkgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5kZWZhdWx0RGVsYXlcbiAgICB9O1xuICB9XG4gIGlmICh0eXBlb2Ygb3B0aW9uc0RlbGF5ID09PSAnbnVtYmVyJykge1xuICAgIGZvciAoY29uc3Qga2V5IGluIGRlZmF1bHREZWxheSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChkZWZhdWx0RGVsYXksIGtleSkpIHtcbiAgICAgICAgZGVsYXlba2V5XSA9IG9wdGlvbnNEZWxheTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRlbGF5O1xuICB9XG4gIGZvciAoY29uc3Qga2V5IGluIGRlZmF1bHREZWxheSkge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZGVmYXVsdERlbGF5LCBrZXkpKSB7XG4gICAgICBpZiAob3B0aW9uc0RlbGF5W2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBkZWxheVtrZXldID0gZGVmYXVsdERlbGF5W2tleV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWxheVtrZXldID0gb3B0aW9uc0RlbGF5W2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBkZWxheTtcbn1cblxuZXhwb3J0IHsgU2Vuc29yIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCBjbG9zZXN0IGZyb20gJy4uLy4uLy4uL3NoYXJlZC91dGlscy9jbG9zZXN0L2Nsb3Nlc3QubWpzJztcbmltcG9ydCBkaXN0YW5jZSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvdXRpbHMvZGlzdGFuY2UvZGlzdGFuY2UubWpzJztcbmltcG9ydCB0b3VjaENvb3JkcyBmcm9tICcuLi8uLi8uLi9zaGFyZWQvdXRpbHMvdG91Y2hDb29yZHMvdG91Y2hDb29yZHMubWpzJztcbmltcG9ydCBTZW5zb3IgZnJvbSAnLi4vU2Vuc29yL1NlbnNvci5tanMnO1xuaW1wb3J0IHsgRHJhZ1N0YXJ0U2Vuc29yRXZlbnQsIERyYWdNb3ZlU2Vuc29yRXZlbnQsIERyYWdTdG9wU2Vuc29yRXZlbnQgfSBmcm9tICcuLi9TZW5zb3JFdmVudC9TZW5zb3JFdmVudC5tanMnO1xuXG5jb25zdCBvblRvdWNoU3RhcnQgPSBTeW1ib2woJ29uVG91Y2hTdGFydCcpO1xuY29uc3Qgb25Ub3VjaEVuZCA9IFN5bWJvbCgnb25Ub3VjaEVuZCcpO1xuY29uc3Qgb25Ub3VjaE1vdmUgPSBTeW1ib2woJ29uVG91Y2hNb3ZlJyk7XG5jb25zdCBzdGFydERyYWcgPSBTeW1ib2woJ3N0YXJ0RHJhZycpO1xuY29uc3Qgb25EaXN0YW5jZUNoYW5nZSA9IFN5bWJvbCgnb25EaXN0YW5jZUNoYW5nZScpO1xuXG5sZXQgcHJldmVudFNjcm9sbGluZyA9IGZhbHNlO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgZXZlbnQgPT4ge1xuICBpZiAoIXByZXZlbnRTY3JvbGxpbmcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xufSwge1xuICBwYXNzaXZlOiBmYWxzZVxufSk7XG5cbmNsYXNzIFRvdWNoU2Vuc29yIGV4dGVuZHMgU2Vuc29yIHtcblxuICBjb25zdHJ1Y3Rvcihjb250YWluZXJzID0gW10sIG9wdGlvbnMgPSB7fSkge1xuICAgIHN1cGVyKGNvbnRhaW5lcnMsIG9wdGlvbnMpO1xuXG4gICAgdGhpcy5jdXJyZW50U2Nyb2xsYWJsZVBhcmVudCA9IG51bGw7XG5cbiAgICB0aGlzLnRhcFRpbWVvdXQgPSBudWxsO1xuXG4gICAgdGhpcy50b3VjaE1vdmVkID0gZmFsc2U7XG5cbiAgICB0aGlzLnBhZ2VYID0gbnVsbDtcblxuICAgIHRoaXMucGFnZVkgPSBudWxsO1xuICAgIHRoaXNbb25Ub3VjaFN0YXJ0XSA9IHRoaXNbb25Ub3VjaFN0YXJ0XS5iaW5kKHRoaXMpO1xuICAgIHRoaXNbb25Ub3VjaEVuZF0gPSB0aGlzW29uVG91Y2hFbmRdLmJpbmQodGhpcyk7XG4gICAgdGhpc1tvblRvdWNoTW92ZV0gPSB0aGlzW29uVG91Y2hNb3ZlXS5iaW5kKHRoaXMpO1xuICAgIHRoaXNbc3RhcnREcmFnXSA9IHRoaXNbc3RhcnREcmFnXS5iaW5kKHRoaXMpO1xuICAgIHRoaXNbb25EaXN0YW5jZUNoYW5nZV0gPSB0aGlzW29uRGlzdGFuY2VDaGFuZ2VdLmJpbmQodGhpcyk7XG4gIH1cblxuICBhdHRhY2goKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXNbb25Ub3VjaFN0YXJ0XSk7XG4gIH1cblxuICBkZXRhY2goKSB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXNbb25Ub3VjaFN0YXJ0XSk7XG4gIH1cblxuICBbb25Ub3VjaFN0YXJ0XShldmVudCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGNsb3Nlc3QoZXZlbnQudGFyZ2V0LCB0aGlzLmNvbnRhaW5lcnMpO1xuICAgIGlmICghY29udGFpbmVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLm9wdGlvbnMuaGFuZGxlICYmIGV2ZW50LnRhcmdldCAmJiAhY2xvc2VzdChldmVudC50YXJnZXQsIHRoaXMub3B0aW9ucy5oYW5kbGUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG9yaWdpbmFsU291cmNlID0gY2xvc2VzdChldmVudC50YXJnZXQsIHRoaXMub3B0aW9ucy5kcmFnZ2FibGUpO1xuICAgIGlmICghb3JpZ2luYWxTb3VyY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qge1xuICAgICAgZGlzdGFuY2UgPSAwXG4gICAgfSA9IHRoaXMub3B0aW9ucztcbiAgICBjb25zdCB7XG4gICAgICBkZWxheVxuICAgIH0gPSB0aGlzO1xuICAgIGNvbnN0IHtcbiAgICAgIHBhZ2VYLFxuICAgICAgcGFnZVlcbiAgICB9ID0gdG91Y2hDb29yZHMoZXZlbnQpO1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywge1xuICAgICAgcGFnZVgsXG4gICAgICBwYWdlWVxuICAgIH0pO1xuICAgIHRoaXMub25Ub3VjaFN0YXJ0QXQgPSBEYXRlLm5vdygpO1xuICAgIHRoaXMuc3RhcnRFdmVudCA9IGV2ZW50O1xuICAgIHRoaXMuY3VycmVudENvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICB0aGlzLm9yaWdpbmFsU291cmNlID0gb3JpZ2luYWxTb3VyY2U7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzW29uVG91Y2hFbmRdKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIHRoaXNbb25Ub3VjaEVuZF0pO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXNbb25EaXN0YW5jZUNoYW5nZV0pO1xuICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjb250ZXh0bWVudScsIG9uQ29udGV4dE1lbnUpO1xuICAgIGlmIChkaXN0YW5jZSkge1xuICAgICAgcHJldmVudFNjcm9sbGluZyA9IHRydWU7XG4gICAgfVxuICAgIHRoaXMudGFwVGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXNbb25EaXN0YW5jZUNoYW5nZV0oe1xuICAgICAgICB0b3VjaGVzOiBbe1xuICAgICAgICAgIHBhZ2VYOiB0aGlzLnBhZ2VYLFxuICAgICAgICAgIHBhZ2VZOiB0aGlzLnBhZ2VZXG4gICAgICAgIH1dXG4gICAgICB9KTtcbiAgICB9LCBkZWxheS50b3VjaCk7XG4gIH1cblxuICBbc3RhcnREcmFnXSgpIHtcbiAgICBjb25zdCBzdGFydEV2ZW50ID0gdGhpcy5zdGFydEV2ZW50O1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY3VycmVudENvbnRhaW5lcjtcbiAgICBjb25zdCB0b3VjaCA9IHRvdWNoQ29vcmRzKHN0YXJ0RXZlbnQpO1xuICAgIGNvbnN0IG9yaWdpbmFsU291cmNlID0gdGhpcy5vcmlnaW5hbFNvdXJjZTtcbiAgICBjb25zdCBkcmFnU3RhcnRFdmVudCA9IG5ldyBEcmFnU3RhcnRTZW5zb3JFdmVudCh7XG4gICAgICBjbGllbnRYOiB0b3VjaC5wYWdlWCxcbiAgICAgIGNsaWVudFk6IHRvdWNoLnBhZ2VZLFxuICAgICAgdGFyZ2V0OiBzdGFydEV2ZW50LnRhcmdldCxcbiAgICAgIGNvbnRhaW5lcixcbiAgICAgIG9yaWdpbmFsU291cmNlLFxuICAgICAgb3JpZ2luYWxFdmVudDogc3RhcnRFdmVudFxuICAgIH0pO1xuICAgIHRoaXMudHJpZ2dlcih0aGlzLmN1cnJlbnRDb250YWluZXIsIGRyYWdTdGFydEV2ZW50KTtcbiAgICB0aGlzLmRyYWdnaW5nID0gIWRyYWdTdGFydEV2ZW50LmNhbmNlbGVkKCk7XG4gICAgaWYgKHRoaXMuZHJhZ2dpbmcpIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXNbb25Ub3VjaE1vdmVdKTtcbiAgICB9XG4gICAgcHJldmVudFNjcm9sbGluZyA9IHRoaXMuZHJhZ2dpbmc7XG4gIH1cblxuICBbb25EaXN0YW5jZUNoYW5nZV0oZXZlbnQpIHtcbiAgICBjb25zdCB7XG4gICAgICBkaXN0YW5jZTogZGlzdGFuY2UkMVxuICAgIH0gPSB0aGlzLm9wdGlvbnM7XG4gICAgY29uc3Qge1xuICAgICAgc3RhcnRFdmVudCxcbiAgICAgIGRlbGF5XG4gICAgfSA9IHRoaXM7XG4gICAgY29uc3Qgc3RhcnQgPSB0b3VjaENvb3JkcyhzdGFydEV2ZW50KTtcbiAgICBjb25zdCBjdXJyZW50ID0gdG91Y2hDb29yZHMoZXZlbnQpO1xuICAgIGNvbnN0IHRpbWVFbGFwc2VkID0gRGF0ZS5ub3coKSAtIHRoaXMub25Ub3VjaFN0YXJ0QXQ7XG4gICAgY29uc3QgZGlzdGFuY2VUcmF2ZWxsZWQgPSBkaXN0YW5jZShzdGFydC5wYWdlWCwgc3RhcnQucGFnZVksIGN1cnJlbnQucGFnZVgsIGN1cnJlbnQucGFnZVkpO1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgY3VycmVudCk7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGFwVGltZW91dCk7XG4gICAgaWYgKHRpbWVFbGFwc2VkIDwgZGVsYXkudG91Y2gpIHtcblxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpc1tvbkRpc3RhbmNlQ2hhbmdlXSk7XG4gICAgfSBlbHNlIGlmIChkaXN0YW5jZVRyYXZlbGxlZCA+PSBkaXN0YW5jZSQxKSB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzW29uRGlzdGFuY2VDaGFuZ2VdKTtcbiAgICAgIHRoaXNbc3RhcnREcmFnXSgpO1xuICAgIH1cbiAgfVxuXG4gIFtvblRvdWNoTW92ZV0oZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuZHJhZ2dpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qge1xuICAgICAgcGFnZVgsXG4gICAgICBwYWdlWVxuICAgIH0gPSB0b3VjaENvb3JkcyhldmVudCk7XG4gICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChwYWdlWCAtIHdpbmRvdy5zY3JvbGxYLCBwYWdlWSAtIHdpbmRvdy5zY3JvbGxZKTtcbiAgICBjb25zdCBkcmFnTW92ZUV2ZW50ID0gbmV3IERyYWdNb3ZlU2Vuc29yRXZlbnQoe1xuICAgICAgY2xpZW50WDogcGFnZVgsXG4gICAgICBjbGllbnRZOiBwYWdlWSxcbiAgICAgIHRhcmdldCxcbiAgICAgIGNvbnRhaW5lcjogdGhpcy5jdXJyZW50Q29udGFpbmVyLFxuICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnRcbiAgICB9KTtcbiAgICB0aGlzLnRyaWdnZXIodGhpcy5jdXJyZW50Q29udGFpbmVyLCBkcmFnTW92ZUV2ZW50KTtcbiAgfVxuXG4gIFtvblRvdWNoRW5kXShldmVudCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnRhcFRpbWVvdXQpO1xuICAgIHByZXZlbnRTY3JvbGxpbmcgPSBmYWxzZTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXNbb25Ub3VjaEVuZF0pO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgdGhpc1tvblRvdWNoRW5kXSk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpc1tvbkRpc3RhbmNlQ2hhbmdlXSk7XG4gICAgaWYgKHRoaXMuY3VycmVudENvbnRhaW5lcikge1xuICAgICAgdGhpcy5jdXJyZW50Q29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbnRleHRtZW51Jywgb25Db250ZXh0TWVudSk7XG4gICAgfVxuICAgIGlmICghdGhpcy5kcmFnZ2luZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzW29uVG91Y2hNb3ZlXSk7XG4gICAgY29uc3Qge1xuICAgICAgcGFnZVgsXG4gICAgICBwYWdlWVxuICAgIH0gPSB0b3VjaENvb3JkcyhldmVudCk7XG4gICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChwYWdlWCAtIHdpbmRvdy5zY3JvbGxYLCBwYWdlWSAtIHdpbmRvdy5zY3JvbGxZKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGRyYWdTdG9wRXZlbnQgPSBuZXcgRHJhZ1N0b3BTZW5zb3JFdmVudCh7XG4gICAgICBjbGllbnRYOiBwYWdlWCxcbiAgICAgIGNsaWVudFk6IHBhZ2VZLFxuICAgICAgdGFyZ2V0LFxuICAgICAgY29udGFpbmVyOiB0aGlzLmN1cnJlbnRDb250YWluZXIsXG4gICAgICBvcmlnaW5hbEV2ZW50OiBldmVudFxuICAgIH0pO1xuICAgIHRoaXMudHJpZ2dlcih0aGlzLmN1cnJlbnRDb250YWluZXIsIGRyYWdTdG9wRXZlbnQpO1xuICAgIHRoaXMuY3VycmVudENvbnRhaW5lciA9IG51bGw7XG4gICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuICAgIHRoaXMuc3RhcnRFdmVudCA9IG51bGw7XG4gIH1cbn1cbmZ1bmN0aW9uIG9uQ29udGV4dE1lbnUoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG59XG5cbmV4cG9ydCB7IFRvdWNoU2Vuc29yIGFzIGRlZmF1bHQgfTtcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgU2Vuc29yIH0gZnJvbSAnLi9TZW5zb3IvU2Vuc29yLm1qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1vdXNlU2Vuc29yIH0gZnJvbSAnLi9Nb3VzZVNlbnNvci9Nb3VzZVNlbnNvci5tanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUb3VjaFNlbnNvciB9IGZyb20gJy4vVG91Y2hTZW5zb3IvVG91Y2hTZW5zb3IubWpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRHJhZ1NlbnNvciB9IGZyb20gJy4vRHJhZ1NlbnNvci9EcmFnU2Vuc29yLm1qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEZvcmNlVG91Y2hTZW5zb3IgfSBmcm9tICcuL0ZvcmNlVG91Y2hTZW5zb3IvRm9yY2VUb3VjaFNlbnNvci5tanMnO1xuZXhwb3J0IHsgRHJhZ01vdmVTZW5zb3JFdmVudCwgRHJhZ1ByZXNzdXJlU2Vuc29yRXZlbnQsIERyYWdTdGFydFNlbnNvckV2ZW50LCBEcmFnU3RvcFNlbnNvckV2ZW50LCBTZW5zb3JFdmVudCB9IGZyb20gJy4vU2Vuc29yRXZlbnQvU2Vuc29yRXZlbnQubWpzJztcbiIsImltcG9ydCBjbG9zZXN0IGZyb20gJy4uL3NoYXJlZC91dGlscy9jbG9zZXN0L2Nsb3Nlc3QubWpzJztcbmltcG9ydCBEcmFnZ2FibGUgZnJvbSAnLi4vRHJhZ2dhYmxlL0RyYWdnYWJsZS5tanMnO1xuaW1wb3J0ICcuLi9EcmFnZ2FibGUvRHJhZ0V2ZW50L0RyYWdFdmVudC5tanMnO1xuaW1wb3J0ICcuLi9EcmFnZ2FibGUvRHJhZ2dhYmxlRXZlbnQvRHJhZ2dhYmxlRXZlbnQubWpzJztcbmltcG9ydCAnLi4vRHJhZ2dhYmxlL1BsdWdpbnMvQW5ub3VuY2VtZW50L0Fubm91bmNlbWVudC5tanMnO1xuaW1wb3J0ICcuLi9EcmFnZ2FibGUvUGx1Z2lucy9NaXJyb3IvTWlycm9yRXZlbnQvTWlycm9yRXZlbnQubWpzJztcbmltcG9ydCAnLi4vRHJhZ2dhYmxlL1NlbnNvcnMvU2Vuc29yRXZlbnQvU2Vuc29yRXZlbnQubWpzJztcbmltcG9ydCAnLi4vRHJhZ2dhYmxlL1NlbnNvcnMvVG91Y2hTZW5zb3IvVG91Y2hTZW5zb3IubWpzJztcbmltcG9ydCB7IERyb3BwYWJsZVN0YXJ0RXZlbnQsIERyb3BwYWJsZVN0b3BFdmVudCwgRHJvcHBhYmxlRHJvcHBlZEV2ZW50LCBEcm9wcGFibGVSZXR1cm5lZEV2ZW50IH0gZnJvbSAnLi9Ecm9wcGFibGVFdmVudC9Ecm9wcGFibGVFdmVudC5tanMnO1xuXG5jb25zdCBvbkRyYWdTdGFydCA9IFN5bWJvbCgnb25EcmFnU3RhcnQnKTtcbmNvbnN0IG9uRHJhZ01vdmUgPSBTeW1ib2woJ29uRHJhZ01vdmUnKTtcbmNvbnN0IG9uRHJhZ1N0b3AgPSBTeW1ib2woJ29uRHJhZ1N0b3AnKTtcbmNvbnN0IGRyb3BJbkRyb3B6b25lID0gU3ltYm9sKCdkcm9wSW5Ecm9wWm9uZScpO1xuY29uc3QgcmV0dXJuVG9PcmlnaW5hbERyb3B6b25lID0gU3ltYm9sKCdyZXR1cm5Ub09yaWdpbmFsRHJvcHpvbmUnKTtcbmNvbnN0IGNsb3Nlc3REcm9wem9uZSA9IFN5bWJvbCgnY2xvc2VzdERyb3B6b25lJyk7XG5jb25zdCBnZXREcm9wem9uZXMgPSBTeW1ib2woJ2dldERyb3B6b25lcycpO1xuXG5mdW5jdGlvbiBvbkRyb3BwYWJsZURyb3BwZWREZWZhdWx0QW5ub3VuY2VtZW50KHtcbiAgZHJhZ0V2ZW50LFxuICBkcm9wem9uZVxufSkge1xuICBjb25zdCBzb3VyY2VUZXh0ID0gZHJhZ0V2ZW50LnNvdXJjZS50ZXh0Q29udGVudC50cmltKCkgfHwgZHJhZ0V2ZW50LnNvdXJjZS5pZCB8fCAnZHJhZ2dhYmxlIGVsZW1lbnQnO1xuICBjb25zdCBkcm9wem9uZVRleHQgPSBkcm9wem9uZS50ZXh0Q29udGVudC50cmltKCkgfHwgZHJvcHpvbmUuaWQgfHwgJ2Ryb3BwYWJsZSBlbGVtZW50JztcbiAgcmV0dXJuIGBEcm9wcGVkICR7c291cmNlVGV4dH0gaW50byAke2Ryb3B6b25lVGV4dH1gO1xufVxuXG5mdW5jdGlvbiBvbkRyb3BwYWJsZVJldHVybmVkRGVmYXVsdEFubm91bmNlbWVudCh7XG4gIGRyYWdFdmVudCxcbiAgZHJvcHpvbmVcbn0pIHtcbiAgY29uc3Qgc291cmNlVGV4dCA9IGRyYWdFdmVudC5zb3VyY2UudGV4dENvbnRlbnQudHJpbSgpIHx8IGRyYWdFdmVudC5zb3VyY2UuaWQgfHwgJ2RyYWdnYWJsZSBlbGVtZW50JztcbiAgY29uc3QgZHJvcHpvbmVUZXh0ID0gZHJvcHpvbmUudGV4dENvbnRlbnQudHJpbSgpIHx8IGRyb3B6b25lLmlkIHx8ICdkcm9wcGFibGUgZWxlbWVudCc7XG4gIHJldHVybiBgUmV0dXJuZWQgJHtzb3VyY2VUZXh0fSBmcm9tICR7ZHJvcHpvbmVUZXh0fWA7XG59XG5cbmNvbnN0IGRlZmF1bHRBbm5vdW5jZW1lbnRzID0ge1xuICAnZHJvcHBhYmxlOmRyb3BwZWQnOiBvbkRyb3BwYWJsZURyb3BwZWREZWZhdWx0QW5ub3VuY2VtZW50LFxuICAnZHJvcHBhYmxlOnJldHVybmVkJzogb25Ecm9wcGFibGVSZXR1cm5lZERlZmF1bHRBbm5vdW5jZW1lbnRcbn07XG5jb25zdCBkZWZhdWx0Q2xhc3NlcyA9IHtcbiAgJ2Ryb3BwYWJsZTphY3RpdmUnOiAnZHJhZ2dhYmxlLWRyb3B6b25lLS1hY3RpdmUnLFxuICAnZHJvcHBhYmxlOm9jY3VwaWVkJzogJ2RyYWdnYWJsZS1kcm9wem9uZS0tb2NjdXBpZWQnXG59O1xuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gIGRyb3B6b25lOiAnLmRyYWdnYWJsZS1kcm9wcGFibGUnXG59O1xuXG5jbGFzcyBEcm9wcGFibGUgZXh0ZW5kcyBEcmFnZ2FibGUge1xuXG4gIGNvbnN0cnVjdG9yKGNvbnRhaW5lcnMgPSBbXSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgc3VwZXIoY29udGFpbmVycywge1xuICAgICAgLi4uZGVmYXVsdE9wdGlvbnMsXG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgY2xhc3Nlczoge1xuICAgICAgICAuLi5kZWZhdWx0Q2xhc3NlcyxcbiAgICAgICAgLi4uKG9wdGlvbnMuY2xhc3NlcyB8fCB7fSlcbiAgICAgIH0sXG4gICAgICBhbm5vdW5jZW1lbnRzOiB7XG4gICAgICAgIC4uLmRlZmF1bHRBbm5vdW5jZW1lbnRzLFxuICAgICAgICAuLi4ob3B0aW9ucy5hbm5vdW5jZW1lbnRzIHx8IHt9KVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5kcm9wem9uZXMgPSBudWxsO1xuXG4gICAgdGhpcy5sYXN0RHJvcHpvbmUgPSBudWxsO1xuXG4gICAgdGhpcy5pbml0aWFsRHJvcHpvbmUgPSBudWxsO1xuICAgIHRoaXNbb25EcmFnU3RhcnRdID0gdGhpc1tvbkRyYWdTdGFydF0uYmluZCh0aGlzKTtcbiAgICB0aGlzW29uRHJhZ01vdmVdID0gdGhpc1tvbkRyYWdNb3ZlXS5iaW5kKHRoaXMpO1xuICAgIHRoaXNbb25EcmFnU3RvcF0gPSB0aGlzW29uRHJhZ1N0b3BdLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbignZHJhZzpzdGFydCcsIHRoaXNbb25EcmFnU3RhcnRdKS5vbignZHJhZzptb3ZlJywgdGhpc1tvbkRyYWdNb3ZlXSkub24oJ2RyYWc6c3RvcCcsIHRoaXNbb25EcmFnU3RvcF0pO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBzdXBlci5kZXN0cm95KCk7XG4gICAgdGhpcy5vZmYoJ2RyYWc6c3RhcnQnLCB0aGlzW29uRHJhZ1N0YXJ0XSkub2ZmKCdkcmFnOm1vdmUnLCB0aGlzW29uRHJhZ01vdmVdKS5vZmYoJ2RyYWc6c3RvcCcsIHRoaXNbb25EcmFnU3RvcF0pO1xuICB9XG5cbiAgW29uRHJhZ1N0YXJ0XShldmVudCkge1xuICAgIGlmIChldmVudC5jYW5jZWxlZCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZHJvcHpvbmVzID0gWy4uLnRoaXNbZ2V0RHJvcHpvbmVzXSgpXTtcbiAgICBjb25zdCBkcm9wem9uZSA9IGNsb3Nlc3QoZXZlbnQuc2Vuc29yRXZlbnQudGFyZ2V0LCB0aGlzLm9wdGlvbnMuZHJvcHpvbmUpO1xuICAgIGlmICghZHJvcHpvbmUpIHtcbiAgICAgIGV2ZW50LmNhbmNlbCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBkcm9wcGFibGVTdGFydEV2ZW50ID0gbmV3IERyb3BwYWJsZVN0YXJ0RXZlbnQoe1xuICAgICAgZHJhZ0V2ZW50OiBldmVudCxcbiAgICAgIGRyb3B6b25lXG4gICAgfSk7XG4gICAgdGhpcy50cmlnZ2VyKGRyb3BwYWJsZVN0YXJ0RXZlbnQpO1xuICAgIGlmIChkcm9wcGFibGVTdGFydEV2ZW50LmNhbmNlbGVkKCkpIHtcbiAgICAgIGV2ZW50LmNhbmNlbCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmluaXRpYWxEcm9wem9uZSA9IGRyb3B6b25lO1xuICAgIGZvciAoY29uc3QgZHJvcHpvbmVFbGVtZW50IG9mIHRoaXMuZHJvcHpvbmVzKSB7XG4gICAgICBpZiAoZHJvcHpvbmVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmdldENsYXNzTmFtZUZvcignZHJvcHBhYmxlOm9jY3VwaWVkJykpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgZHJvcHpvbmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoLi4udGhpcy5nZXRDbGFzc05hbWVzRm9yKCdkcm9wcGFibGU6YWN0aXZlJykpO1xuICAgIH1cbiAgfVxuXG4gIFtvbkRyYWdNb3ZlXShldmVudCkge1xuICAgIGlmIChldmVudC5jYW5jZWxlZCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGRyb3B6b25lID0gdGhpc1tjbG9zZXN0RHJvcHpvbmVdKGV2ZW50LnNlbnNvckV2ZW50LnRhcmdldCk7XG4gICAgY29uc3Qgb3ZlckVtcHR5RHJvcHpvbmUgPSBkcm9wem9uZSAmJiAhZHJvcHpvbmUuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuZ2V0Q2xhc3NOYW1lRm9yKCdkcm9wcGFibGU6b2NjdXBpZWQnKSk7XG4gICAgaWYgKG92ZXJFbXB0eURyb3B6b25lICYmIHRoaXNbZHJvcEluRHJvcHpvbmVdKGV2ZW50LCBkcm9wem9uZSkpIHtcbiAgICAgIHRoaXMubGFzdERyb3B6b25lID0gZHJvcHpvbmU7XG4gICAgfSBlbHNlIGlmICgoIWRyb3B6b25lIHx8IGRyb3B6b25lID09PSB0aGlzLmluaXRpYWxEcm9wem9uZSkgJiYgdGhpcy5sYXN0RHJvcHpvbmUpIHtcbiAgICAgIHRoaXNbcmV0dXJuVG9PcmlnaW5hbERyb3B6b25lXShldmVudCk7XG4gICAgICB0aGlzLmxhc3REcm9wem9uZSA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgW29uRHJhZ1N0b3BdKGV2ZW50KSB7XG4gICAgY29uc3QgZHJvcHBhYmxlU3RvcEV2ZW50ID0gbmV3IERyb3BwYWJsZVN0b3BFdmVudCh7XG4gICAgICBkcmFnRXZlbnQ6IGV2ZW50LFxuICAgICAgZHJvcHpvbmU6IHRoaXMubGFzdERyb3B6b25lIHx8IHRoaXMuaW5pdGlhbERyb3B6b25lXG4gICAgfSk7XG4gICAgdGhpcy50cmlnZ2VyKGRyb3BwYWJsZVN0b3BFdmVudCk7XG4gICAgY29uc3Qgb2NjdXBpZWRDbGFzc2VzID0gdGhpcy5nZXRDbGFzc05hbWVzRm9yKCdkcm9wcGFibGU6b2NjdXBpZWQnKTtcbiAgICBmb3IgKGNvbnN0IGRyb3B6b25lIG9mIHRoaXMuZHJvcHpvbmVzKSB7XG4gICAgICBkcm9wem9uZS5jbGFzc0xpc3QucmVtb3ZlKC4uLnRoaXMuZ2V0Q2xhc3NOYW1lc0ZvcignZHJvcHBhYmxlOmFjdGl2ZScpKTtcbiAgICB9XG4gICAgaWYgKHRoaXMubGFzdERyb3B6b25lICYmIHRoaXMubGFzdERyb3B6b25lICE9PSB0aGlzLmluaXRpYWxEcm9wem9uZSkge1xuICAgICAgdGhpcy5pbml0aWFsRHJvcHpvbmUuY2xhc3NMaXN0LnJlbW92ZSguLi5vY2N1cGllZENsYXNzZXMpO1xuICAgIH1cbiAgICB0aGlzLmRyb3B6b25lcyA9IG51bGw7XG4gICAgdGhpcy5sYXN0RHJvcHpvbmUgPSBudWxsO1xuICAgIHRoaXMuaW5pdGlhbERyb3B6b25lID0gbnVsbDtcbiAgfVxuXG4gIFtkcm9wSW5Ecm9wem9uZV0oZXZlbnQsIGRyb3B6b25lKSB7XG4gICAgY29uc3QgZHJvcHBhYmxlRHJvcHBlZEV2ZW50ID0gbmV3IERyb3BwYWJsZURyb3BwZWRFdmVudCh7XG4gICAgICBkcmFnRXZlbnQ6IGV2ZW50LFxuICAgICAgZHJvcHpvbmVcbiAgICB9KTtcbiAgICB0aGlzLnRyaWdnZXIoZHJvcHBhYmxlRHJvcHBlZEV2ZW50KTtcbiAgICBpZiAoZHJvcHBhYmxlRHJvcHBlZEV2ZW50LmNhbmNlbGVkKCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3Qgb2NjdXBpZWRDbGFzc2VzID0gdGhpcy5nZXRDbGFzc05hbWVzRm9yKCdkcm9wcGFibGU6b2NjdXBpZWQnKTtcbiAgICBpZiAodGhpcy5sYXN0RHJvcHpvbmUpIHtcbiAgICAgIHRoaXMubGFzdERyb3B6b25lLmNsYXNzTGlzdC5yZW1vdmUoLi4ub2NjdXBpZWRDbGFzc2VzKTtcbiAgICB9XG4gICAgZHJvcHpvbmUuYXBwZW5kQ2hpbGQoZXZlbnQuc291cmNlKTtcbiAgICBkcm9wem9uZS5jbGFzc0xpc3QuYWRkKC4uLm9jY3VwaWVkQ2xhc3Nlcyk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBbcmV0dXJuVG9PcmlnaW5hbERyb3B6b25lXShldmVudCkge1xuICAgIGNvbnN0IGRyb3BwYWJsZVJldHVybmVkRXZlbnQgPSBuZXcgRHJvcHBhYmxlUmV0dXJuZWRFdmVudCh7XG4gICAgICBkcmFnRXZlbnQ6IGV2ZW50LFxuICAgICAgZHJvcHpvbmU6IHRoaXMubGFzdERyb3B6b25lXG4gICAgfSk7XG4gICAgdGhpcy50cmlnZ2VyKGRyb3BwYWJsZVJldHVybmVkRXZlbnQpO1xuICAgIGlmIChkcm9wcGFibGVSZXR1cm5lZEV2ZW50LmNhbmNlbGVkKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5pbml0aWFsRHJvcHpvbmUuYXBwZW5kQ2hpbGQoZXZlbnQuc291cmNlKTtcbiAgICB0aGlzLmxhc3REcm9wem9uZS5jbGFzc0xpc3QucmVtb3ZlKC4uLnRoaXMuZ2V0Q2xhc3NOYW1lc0ZvcignZHJvcHBhYmxlOm9jY3VwaWVkJykpO1xuICB9XG5cbiAgW2Nsb3Nlc3REcm9wem9uZV0odGFyZ2V0KSB7XG4gICAgaWYgKCF0aGlzLmRyb3B6b25lcykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjbG9zZXN0KHRhcmdldCwgdGhpcy5kcm9wem9uZXMpO1xuICB9XG5cbiAgW2dldERyb3B6b25lc10oKSB7XG4gICAgY29uc3QgZHJvcHpvbmUgPSB0aGlzLm9wdGlvbnMuZHJvcHpvbmU7XG4gICAgaWYgKHR5cGVvZiBkcm9wem9uZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGRyb3B6b25lKTtcbiAgICB9IGVsc2UgaWYgKGRyb3B6b25lIGluc3RhbmNlb2YgTm9kZUxpc3QgfHwgZHJvcHpvbmUgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgcmV0dXJuIGRyb3B6b25lO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGRyb3B6b25lID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gZHJvcHpvbmUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgeyBEcm9wcGFibGUgYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IHsgQWJzdHJhY3RFdmVudCB9IGZyb20gJy4uLy4uL3NoYXJlZC9BYnN0cmFjdEV2ZW50L0Fic3RyYWN0RXZlbnQubWpzJztcblxuY2xhc3MgRHJvcHBhYmxlRXZlbnQgZXh0ZW5kcyBBYnN0cmFjdEV2ZW50IHtcblxuICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgc3VwZXIoZGF0YSk7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgfVxuXG4gIGdldCBkcmFnRXZlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5kcmFnRXZlbnQ7XG4gIH1cbn1cbkRyb3BwYWJsZUV2ZW50LnR5cGUgPSAnZHJvcHBhYmxlJztcblxuY2xhc3MgRHJvcHBhYmxlU3RhcnRFdmVudCBleHRlbmRzIERyb3BwYWJsZUV2ZW50IHtcblxuICBnZXQgZHJvcHpvbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5kcm9wem9uZTtcbiAgfVxufVxuRHJvcHBhYmxlU3RhcnRFdmVudC50eXBlID0gJ2Ryb3BwYWJsZTpzdGFydCc7XG5Ecm9wcGFibGVTdGFydEV2ZW50LmNhbmNlbGFibGUgPSB0cnVlO1xuXG5jbGFzcyBEcm9wcGFibGVEcm9wcGVkRXZlbnQgZXh0ZW5kcyBEcm9wcGFibGVFdmVudCB7XG5cbiAgZ2V0IGRyb3B6b25lKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEuZHJvcHpvbmU7XG4gIH1cbn1cbkRyb3BwYWJsZURyb3BwZWRFdmVudC50eXBlID0gJ2Ryb3BwYWJsZTpkcm9wcGVkJztcbkRyb3BwYWJsZURyb3BwZWRFdmVudC5jYW5jZWxhYmxlID0gdHJ1ZTtcblxuY2xhc3MgRHJvcHBhYmxlUmV0dXJuZWRFdmVudCBleHRlbmRzIERyb3BwYWJsZUV2ZW50IHtcblxuICBnZXQgZHJvcHpvbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5kcm9wem9uZTtcbiAgfVxufVxuRHJvcHBhYmxlUmV0dXJuZWRFdmVudC50eXBlID0gJ2Ryb3BwYWJsZTpyZXR1cm5lZCc7XG5Ecm9wcGFibGVSZXR1cm5lZEV2ZW50LmNhbmNlbGFibGUgPSB0cnVlO1xuXG5jbGFzcyBEcm9wcGFibGVTdG9wRXZlbnQgZXh0ZW5kcyBEcm9wcGFibGVFdmVudCB7XG5cbiAgZ2V0IGRyb3B6b25lKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEuZHJvcHpvbmU7XG4gIH1cbn1cbkRyb3BwYWJsZVN0b3BFdmVudC50eXBlID0gJ2Ryb3BwYWJsZTpzdG9wJztcbkRyb3BwYWJsZVN0b3BFdmVudC5jYW5jZWxhYmxlID0gdHJ1ZTtcblxuZXhwb3J0IHsgRHJvcHBhYmxlRHJvcHBlZEV2ZW50LCBEcm9wcGFibGVFdmVudCwgRHJvcHBhYmxlUmV0dXJuZWRFdmVudCwgRHJvcHBhYmxlU3RhcnRFdmVudCwgRHJvcHBhYmxlU3RvcEV2ZW50IH07XG4iLCJpbXBvcnQgeyBBYnN0cmFjdFBsdWdpbiB9IGZyb20gJy4uLy4uL3NoYXJlZC9BYnN0cmFjdFBsdWdpbi9BYnN0cmFjdFBsdWdpbi5tanMnO1xuaW1wb3J0IGNsb3Nlc3QgZnJvbSAnLi4vLi4vc2hhcmVkL3V0aWxzL2Nsb3Nlc3QvY2xvc2VzdC5tanMnO1xuaW1wb3J0IHsgQ29sbGlkYWJsZUluRXZlbnQsIENvbGxpZGFibGVPdXRFdmVudCB9IGZyb20gJy4vQ29sbGlkYWJsZUV2ZW50L0NvbGxpZGFibGVFdmVudC5tanMnO1xuXG5jb25zdCBvbkRyYWdNb3ZlID0gU3ltYm9sKCdvbkRyYWdNb3ZlJyk7XG5jb25zdCBvbkRyYWdTdG9wID0gU3ltYm9sKCdvbkRyYWdTdG9wJyk7XG5jb25zdCBvblJlcXVlc3RBbmltYXRpb25GcmFtZSA9IFN5bWJvbCgnb25SZXF1ZXN0QW5pbWF0aW9uRnJhbWUnKTtcblxuY2xhc3MgQ29sbGlkYWJsZSBleHRlbmRzIEFic3RyYWN0UGx1Z2luIHtcblxuICBjb25zdHJ1Y3RvcihkcmFnZ2FibGUpIHtcbiAgICBzdXBlcihkcmFnZ2FibGUpO1xuXG4gICAgdGhpcy5jdXJyZW50bHlDb2xsaWRpbmdFbGVtZW50ID0gbnVsbDtcblxuICAgIHRoaXMubGFzdENvbGxpZGluZ0VsZW1lbnQgPSBudWxsO1xuXG4gICAgdGhpcy5jdXJyZW50QW5pbWF0aW9uRnJhbWUgPSBudWxsO1xuICAgIHRoaXNbb25EcmFnTW92ZV0gPSB0aGlzW29uRHJhZ01vdmVdLmJpbmQodGhpcyk7XG4gICAgdGhpc1tvbkRyYWdTdG9wXSA9IHRoaXNbb25EcmFnU3RvcF0uYmluZCh0aGlzKTtcbiAgICB0aGlzW29uUmVxdWVzdEFuaW1hdGlvbkZyYW1lXSA9IHRoaXNbb25SZXF1ZXN0QW5pbWF0aW9uRnJhbWVdLmJpbmQodGhpcyk7XG4gIH1cblxuICBhdHRhY2goKSB7XG4gICAgdGhpcy5kcmFnZ2FibGUub24oJ2RyYWc6bW92ZScsIHRoaXNbb25EcmFnTW92ZV0pLm9uKCdkcmFnOnN0b3AnLCB0aGlzW29uRHJhZ1N0b3BdKTtcbiAgfVxuXG4gIGRldGFjaCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZS5vZmYoJ2RyYWc6bW92ZScsIHRoaXNbb25EcmFnTW92ZV0pLm9mZignZHJhZzpzdG9wJywgdGhpc1tvbkRyYWdTdG9wXSk7XG4gIH1cblxuICBnZXRDb2xsaWRhYmxlcygpIHtcbiAgICBjb25zdCBjb2xsaWRhYmxlcyA9IHRoaXMuZHJhZ2dhYmxlLm9wdGlvbnMuY29sbGlkYWJsZXM7XG4gICAgaWYgKHR5cGVvZiBjb2xsaWRhYmxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGNvbGxpZGFibGVzKSk7XG4gICAgfSBlbHNlIGlmIChjb2xsaWRhYmxlcyBpbnN0YW5jZW9mIE5vZGVMaXN0IHx8IGNvbGxpZGFibGVzIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChjb2xsaWRhYmxlcyk7XG4gICAgfSBlbHNlIGlmIChjb2xsaWRhYmxlcyBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICByZXR1cm4gW2NvbGxpZGFibGVzXTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb2xsaWRhYmxlcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGNvbGxpZGFibGVzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH1cblxuICBbb25EcmFnTW92ZV0oZXZlbnQpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC5zZW5zb3JFdmVudC50YXJnZXQ7XG4gICAgdGhpcy5jdXJyZW50QW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpc1tvblJlcXVlc3RBbmltYXRpb25GcmFtZV0odGFyZ2V0KSk7XG4gICAgaWYgKHRoaXMuY3VycmVudGx5Q29sbGlkaW5nRWxlbWVudCkge1xuICAgICAgZXZlbnQuY2FuY2VsKCk7XG4gICAgfVxuICAgIGNvbnN0IGNvbGxpZGFibGVJbkV2ZW50ID0gbmV3IENvbGxpZGFibGVJbkV2ZW50KHtcbiAgICAgIGRyYWdFdmVudDogZXZlbnQsXG4gICAgICBjb2xsaWRpbmdFbGVtZW50OiB0aGlzLmN1cnJlbnRseUNvbGxpZGluZ0VsZW1lbnRcbiAgICB9KTtcbiAgICBjb25zdCBjb2xsaWRhYmxlT3V0RXZlbnQgPSBuZXcgQ29sbGlkYWJsZU91dEV2ZW50KHtcbiAgICAgIGRyYWdFdmVudDogZXZlbnQsXG4gICAgICBjb2xsaWRpbmdFbGVtZW50OiB0aGlzLmxhc3RDb2xsaWRpbmdFbGVtZW50XG4gICAgfSk7XG4gICAgY29uc3QgZW50ZXJpbmdDb2xsaWRhYmxlID0gQm9vbGVhbih0aGlzLmN1cnJlbnRseUNvbGxpZGluZ0VsZW1lbnQgJiYgdGhpcy5sYXN0Q29sbGlkaW5nRWxlbWVudCAhPT0gdGhpcy5jdXJyZW50bHlDb2xsaWRpbmdFbGVtZW50KTtcbiAgICBjb25zdCBsZWF2aW5nQ29sbGlkYWJsZSA9IEJvb2xlYW4oIXRoaXMuY3VycmVudGx5Q29sbGlkaW5nRWxlbWVudCAmJiB0aGlzLmxhc3RDb2xsaWRpbmdFbGVtZW50KTtcbiAgICBpZiAoZW50ZXJpbmdDb2xsaWRhYmxlKSB7XG4gICAgICBpZiAodGhpcy5sYXN0Q29sbGlkaW5nRWxlbWVudCkge1xuICAgICAgICB0aGlzLmRyYWdnYWJsZS50cmlnZ2VyKGNvbGxpZGFibGVPdXRFdmVudCk7XG4gICAgICB9XG4gICAgICB0aGlzLmRyYWdnYWJsZS50cmlnZ2VyKGNvbGxpZGFibGVJbkV2ZW50KTtcbiAgICB9IGVsc2UgaWYgKGxlYXZpbmdDb2xsaWRhYmxlKSB7XG4gICAgICB0aGlzLmRyYWdnYWJsZS50cmlnZ2VyKGNvbGxpZGFibGVPdXRFdmVudCk7XG4gICAgfVxuICAgIHRoaXMubGFzdENvbGxpZGluZ0VsZW1lbnQgPSB0aGlzLmN1cnJlbnRseUNvbGxpZGluZ0VsZW1lbnQ7XG4gIH1cblxuICBbb25EcmFnU3RvcF0oZXZlbnQpIHtcbiAgICBjb25zdCBsYXN0Q29sbGlkaW5nRWxlbWVudCA9IHRoaXMuY3VycmVudGx5Q29sbGlkaW5nRWxlbWVudCB8fCB0aGlzLmxhc3RDb2xsaWRpbmdFbGVtZW50O1xuICAgIGNvbnN0IGNvbGxpZGFibGVPdXRFdmVudCA9IG5ldyBDb2xsaWRhYmxlT3V0RXZlbnQoe1xuICAgICAgZHJhZ0V2ZW50OiBldmVudCxcbiAgICAgIGNvbGxpZGluZ0VsZW1lbnQ6IGxhc3RDb2xsaWRpbmdFbGVtZW50XG4gICAgfSk7XG4gICAgaWYgKGxhc3RDb2xsaWRpbmdFbGVtZW50KSB7XG4gICAgICB0aGlzLmRyYWdnYWJsZS50cmlnZ2VyKGNvbGxpZGFibGVPdXRFdmVudCk7XG4gICAgfVxuICAgIHRoaXMubGFzdENvbGxpZGluZ0VsZW1lbnQgPSBudWxsO1xuICAgIHRoaXMuY3VycmVudGx5Q29sbGlkaW5nRWxlbWVudCA9IG51bGw7XG4gIH1cblxuICBbb25SZXF1ZXN0QW5pbWF0aW9uRnJhbWVdKHRhcmdldCkge1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCBjb2xsaWRhYmxlcyA9IHRoaXMuZ2V0Q29sbGlkYWJsZXMoKTtcbiAgICAgIHRoaXMuY3VycmVudGx5Q29sbGlkaW5nRWxlbWVudCA9IGNsb3Nlc3QodGFyZ2V0LCBlbGVtZW50ID0+IGNvbGxpZGFibGVzLmluY2x1ZGVzKGVsZW1lbnQpKTtcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCB7IENvbGxpZGFibGUgYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IHsgQWJzdHJhY3RFdmVudCB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9BYnN0cmFjdEV2ZW50L0Fic3RyYWN0RXZlbnQubWpzJztcblxuY2xhc3MgQ29sbGlkYWJsZUV2ZW50IGV4dGVuZHMgQWJzdHJhY3RFdmVudCB7XG5cbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIHN1cGVyKGRhdGEpO1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gIH1cblxuICBnZXQgZHJhZ0V2ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEuZHJhZ0V2ZW50O1xuICB9XG59XG5Db2xsaWRhYmxlRXZlbnQudHlwZSA9ICdjb2xsaWRhYmxlJztcblxuY2xhc3MgQ29sbGlkYWJsZUluRXZlbnQgZXh0ZW5kcyBDb2xsaWRhYmxlRXZlbnQge1xuXG4gIGdldCBjb2xsaWRpbmdFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEuY29sbGlkaW5nRWxlbWVudDtcbiAgfVxufVxuQ29sbGlkYWJsZUluRXZlbnQudHlwZSA9ICdjb2xsaWRhYmxlOmluJztcblxuY2xhc3MgQ29sbGlkYWJsZU91dEV2ZW50IGV4dGVuZHMgQ29sbGlkYWJsZUV2ZW50IHtcblxuICBnZXQgY29sbGlkaW5nRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLmNvbGxpZGluZ0VsZW1lbnQ7XG4gIH1cbn1cbkNvbGxpZGFibGVPdXRFdmVudC50eXBlID0gJ2NvbGxpZGFibGU6b3V0JztcblxuZXhwb3J0IHsgQ29sbGlkYWJsZUV2ZW50LCBDb2xsaWRhYmxlSW5FdmVudCwgQ29sbGlkYWJsZU91dEV2ZW50IH07XG4iLCJpbXBvcnQgeyBhcHBseURlY3MyMzA1IGFzIF9hcHBseURlY3MyMzA1IH0gZnJvbSAnLi4vLi4vX3ZpcnR1YWwvX3JvbGx1cFBsdWdpbkJhYmVsSGVscGVycy5tanMnO1xuaW1wb3J0IHsgQWJzdHJhY3RQbHVnaW4gfSBmcm9tICcuLi8uLi9zaGFyZWQvQWJzdHJhY3RQbHVnaW4vQWJzdHJhY3RQbHVnaW4ubWpzJztcbmltcG9ydCB7IEF1dG9CaW5kIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3V0aWxzL2RlY29yYXRvcnMvQXV0b0JpbmQubWpzJztcbmltcG9ydCByZXF1ZXN0TmV4dEFuaW1hdGlvbkZyYW1lIGZyb20gJy4uLy4uL3NoYXJlZC91dGlscy9yZXF1ZXN0TmV4dEFuaW1hdGlvbkZyYW1lL3JlcXVlc3ROZXh0QW5pbWF0aW9uRnJhbWUubWpzJztcbmltcG9ydCB7IGlzRHJhZ092ZXJFdmVudCB9IGZyb20gJy4uLy4uL0RyYWdnYWJsZS9EcmFnRXZlbnQvRHJhZ0V2ZW50Lm1qcyc7XG5cbnZhciBfaW5pdFByb3RvLCBfY2xhc3M7XG5cbmNvbnN0IGRlZmF1bHRPcHRpb25zID0ge307XG5cbmNsYXNzIFJlc2l6ZU1pcnJvciBleHRlbmRzIEFic3RyYWN0UGx1Z2luIHtcblxuICBjb25zdHJ1Y3RvcihkcmFnZ2FibGUpIHtcbiAgICBfaW5pdFByb3RvKHN1cGVyKGRyYWdnYWJsZSkpO1xuXG4gICAgdGhpcy5sYXN0V2lkdGggPSAwO1xuXG4gICAgdGhpcy5sYXN0SGVpZ2h0ID0gMDtcblxuICAgIHRoaXMubWlycm9yID0gbnVsbDtcbiAgfVxuXG4gIGF0dGFjaCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZS5vbignbWlycm9yOmNyZWF0ZWQnLCB0aGlzLm9uTWlycm9yQ3JlYXRlZCkub24oJ2RyYWc6b3ZlcicsIHRoaXMub25EcmFnT3Zlcikub24oJ2RyYWc6b3Zlcjpjb250YWluZXInLCB0aGlzLm9uRHJhZ092ZXIpO1xuICB9XG5cbiAgZGV0YWNoKCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlLm9mZignbWlycm9yOmNyZWF0ZWQnLCB0aGlzLm9uTWlycm9yQ3JlYXRlZCkub2ZmKCdtaXJyb3I6ZGVzdHJveScsIHRoaXMub25NaXJyb3JEZXN0cm95KS5vZmYoJ2RyYWc6b3ZlcicsIHRoaXMub25EcmFnT3Zlcikub2ZmKCdkcmFnOm92ZXI6Y29udGFpbmVyJywgdGhpcy5vbkRyYWdPdmVyKTtcbiAgfVxuXG4gIGdldE9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlLm9wdGlvbnMucmVzaXplTWlycm9yIHx8IHt9O1xuICB9XG5cbiAgb25NaXJyb3JDcmVhdGVkKHtcbiAgICBtaXJyb3JcbiAgfSkge1xuICAgIHRoaXMubWlycm9yID0gbWlycm9yO1xuICB9XG5cbiAgb25NaXJyb3JEZXN0cm95KCkge1xuICAgIHRoaXMubWlycm9yID0gbnVsbDtcbiAgfVxuXG4gIG9uRHJhZ092ZXIoZHJhZ0V2ZW50KSB7XG4gICAgdGhpcy5yZXNpemUoZHJhZ0V2ZW50KTtcbiAgfVxuXG4gIHJlc2l6ZShkcmFnRXZlbnQpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgbGV0IG92ZXIgPSBudWxsO1xuICAgICAgY29uc3Qge1xuICAgICAgICBvdmVyQ29udGFpbmVyXG4gICAgICB9ID0gZHJhZ0V2ZW50O1xuICAgICAgaWYgKHRoaXMubWlycm9yID09IG51bGwgfHwgdGhpcy5taXJyb3IucGFyZW50Tm9kZSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm1pcnJvci5wYXJlbnROb2RlICE9PSBvdmVyQ29udGFpbmVyKSB7XG4gICAgICAgIG92ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5taXJyb3IpO1xuICAgICAgfVxuICAgICAgaWYgKGlzRHJhZ092ZXJFdmVudChkcmFnRXZlbnQpKSB7XG4gICAgICAgIG92ZXIgPSBkcmFnRXZlbnQub3ZlcjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG92ZXJFbGVtZW50ID0gb3ZlciB8fCB0aGlzLmRyYWdnYWJsZS5nZXREcmFnZ2FibGVFbGVtZW50c0ZvckNvbnRhaW5lcihvdmVyQ29udGFpbmVyKVswXTtcbiAgICAgIGlmICghb3ZlckVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcmVxdWVzdE5leHRBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIGNvbnN0IG92ZXJSZWN0ID0gb3ZlckVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGlmICh0aGlzLm1pcnJvciA9PSBudWxsIHx8IHRoaXMubGFzdEhlaWdodCA9PT0gb3ZlclJlY3QuaGVpZ2h0ICYmIHRoaXMubGFzdFdpZHRoID09PSBvdmVyUmVjdC53aWR0aCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1pcnJvci5zdHlsZS53aWR0aCA9IGAke292ZXJSZWN0LndpZHRofXB4YDtcbiAgICAgICAgdGhpcy5taXJyb3Iuc3R5bGUuaGVpZ2h0ID0gYCR7b3ZlclJlY3QuaGVpZ2h0fXB4YDtcbiAgICAgICAgdGhpcy5sYXN0V2lkdGggPSBvdmVyUmVjdC53aWR0aDtcbiAgICAgICAgdGhpcy5sYXN0SGVpZ2h0ID0gb3ZlclJlY3QuaGVpZ2h0O1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbl9jbGFzcyA9IFJlc2l6ZU1pcnJvcjtcbltfaW5pdFByb3RvXSA9IF9hcHBseURlY3MyMzA1KF9jbGFzcywgW1tBdXRvQmluZCwgMiwgXCJvbk1pcnJvckNyZWF0ZWRcIl0sIFtBdXRvQmluZCwgMiwgXCJvbk1pcnJvckRlc3Ryb3lcIl0sIFtBdXRvQmluZCwgMiwgXCJvbkRyYWdPdmVyXCJdXSwgW10sIDAsIHZvaWQgMCwgQWJzdHJhY3RQbHVnaW4pLmU7XG5cbmV4cG9ydCB7IFJlc2l6ZU1pcnJvciBhcyBkZWZhdWx0LCBkZWZhdWx0T3B0aW9ucyB9O1xuIiwiaW1wb3J0IHsgQWJzdHJhY3RQbHVnaW4gfSBmcm9tICcuLi8uLi9zaGFyZWQvQWJzdHJhY3RQbHVnaW4vQWJzdHJhY3RQbHVnaW4ubWpzJztcbmltcG9ydCB7IFNuYXBJbkV2ZW50LCBTbmFwT3V0RXZlbnQgfSBmcm9tICcuL1NuYXBwYWJsZUV2ZW50L1NuYXBwYWJsZUV2ZW50Lm1qcyc7XG5cbmNvbnN0IG9uRHJhZ1N0YXJ0ID0gU3ltYm9sKCdvbkRyYWdTdGFydCcpO1xuY29uc3Qgb25EcmFnU3RvcCA9IFN5bWJvbCgnb25EcmFnU3RvcCcpO1xuY29uc3Qgb25EcmFnT3ZlciA9IFN5bWJvbCgnb25EcmFnT3ZlcicpO1xuY29uc3Qgb25EcmFnT3V0ID0gU3ltYm9sKCdvbkRyYWdPdXQnKTtcbmNvbnN0IG9uTWlycm9yQ3JlYXRlZCA9IFN5bWJvbCgnb25NaXJyb3JDcmVhdGVkJyk7XG5jb25zdCBvbk1pcnJvckRlc3Ryb3kgPSBTeW1ib2woJ29uTWlycm9yRGVzdHJveScpO1xuXG5jbGFzcyBTbmFwcGFibGUgZXh0ZW5kcyBBYnN0cmFjdFBsdWdpbiB7XG5cbiAgY29uc3RydWN0b3IoZHJhZ2dhYmxlKSB7XG4gICAgc3VwZXIoZHJhZ2dhYmxlKTtcblxuICAgIHRoaXMuZmlyc3RTb3VyY2UgPSBudWxsO1xuXG4gICAgdGhpcy5taXJyb3IgPSBudWxsO1xuICAgIHRoaXNbb25EcmFnU3RhcnRdID0gdGhpc1tvbkRyYWdTdGFydF0uYmluZCh0aGlzKTtcbiAgICB0aGlzW29uRHJhZ1N0b3BdID0gdGhpc1tvbkRyYWdTdG9wXS5iaW5kKHRoaXMpO1xuICAgIHRoaXNbb25EcmFnT3Zlcl0gPSB0aGlzW29uRHJhZ092ZXJdLmJpbmQodGhpcyk7XG4gICAgdGhpc1tvbkRyYWdPdXRdID0gdGhpc1tvbkRyYWdPdXRdLmJpbmQodGhpcyk7XG4gICAgdGhpc1tvbk1pcnJvckNyZWF0ZWRdID0gdGhpc1tvbk1pcnJvckNyZWF0ZWRdLmJpbmQodGhpcyk7XG4gICAgdGhpc1tvbk1pcnJvckRlc3Ryb3ldID0gdGhpc1tvbk1pcnJvckRlc3Ryb3ldLmJpbmQodGhpcyk7XG4gIH1cblxuICBhdHRhY2goKSB7XG4gICAgdGhpcy5kcmFnZ2FibGUub24oJ2RyYWc6c3RhcnQnLCB0aGlzW29uRHJhZ1N0YXJ0XSkub24oJ2RyYWc6c3RvcCcsIHRoaXNbb25EcmFnU3RvcF0pLm9uKCdkcmFnOm92ZXInLCB0aGlzW29uRHJhZ092ZXJdKS5vbignZHJhZzpvdXQnLCB0aGlzW29uRHJhZ091dF0pLm9uKCdkcm9wcGFibGU6b3ZlcicsIHRoaXNbb25EcmFnT3Zlcl0pLm9uKCdkcm9wcGFibGU6b3V0JywgdGhpc1tvbkRyYWdPdXRdKS5vbignbWlycm9yOmNyZWF0ZWQnLCB0aGlzW29uTWlycm9yQ3JlYXRlZF0pLm9uKCdtaXJyb3I6ZGVzdHJveScsIHRoaXNbb25NaXJyb3JEZXN0cm95XSk7XG4gIH1cblxuICBkZXRhY2goKSB7XG4gICAgdGhpcy5kcmFnZ2FibGUub2ZmKCdkcmFnOnN0YXJ0JywgdGhpc1tvbkRyYWdTdGFydF0pLm9mZignZHJhZzpzdG9wJywgdGhpc1tvbkRyYWdTdG9wXSkub2ZmKCdkcmFnOm92ZXInLCB0aGlzW29uRHJhZ092ZXJdKS5vZmYoJ2RyYWc6b3V0JywgdGhpc1tvbkRyYWdPdXRdKS5vZmYoJ2Ryb3BwYWJsZTpvdmVyJywgdGhpc1tvbkRyYWdPdmVyXSkub2ZmKCdkcm9wcGFibGU6b3V0JywgdGhpc1tvbkRyYWdPdXRdKS5vZmYoJ21pcnJvcjpjcmVhdGVkJywgdGhpc1tvbk1pcnJvckNyZWF0ZWRdKS5vZmYoJ21pcnJvcjpkZXN0cm95JywgdGhpc1tvbk1pcnJvckRlc3Ryb3ldKTtcbiAgfVxuXG4gIFtvbkRyYWdTdGFydF0oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuY2FuY2VsZWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmZpcnN0U291cmNlID0gZXZlbnQuc291cmNlO1xuICB9XG5cbiAgW29uRHJhZ1N0b3BdKCkge1xuICAgIHRoaXMuZmlyc3RTb3VyY2UgPSBudWxsO1xuICB9XG5cbiAgW29uRHJhZ092ZXJdKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmNhbmNlbGVkKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc291cmNlID0gZXZlbnQuc291cmNlIHx8IGV2ZW50LmRyYWdFdmVudC5zb3VyY2U7XG4gICAgaWYgKHNvdXJjZSA9PT0gdGhpcy5maXJzdFNvdXJjZSkge1xuICAgICAgdGhpcy5maXJzdFNvdXJjZSA9IG51bGw7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHNuYXBJbkV2ZW50ID0gbmV3IFNuYXBJbkV2ZW50KHtcbiAgICAgIGRyYWdFdmVudDogZXZlbnQsXG4gICAgICBzbmFwcGFibGU6IGV2ZW50Lm92ZXIgfHwgZXZlbnQuZHJvcHBhYmxlXG4gICAgfSk7XG4gICAgdGhpcy5kcmFnZ2FibGUudHJpZ2dlcihzbmFwSW5FdmVudCk7XG4gICAgaWYgKHNuYXBJbkV2ZW50LmNhbmNlbGVkKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMubWlycm9yKSB7XG4gICAgICB0aGlzLm1pcnJvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgICBzb3VyY2UuY2xhc3NMaXN0LnJlbW92ZSguLi50aGlzLmRyYWdnYWJsZS5nZXRDbGFzc05hbWVzRm9yKCdzb3VyY2U6ZHJhZ2dpbmcnKSk7XG4gICAgc291cmNlLmNsYXNzTGlzdC5hZGQoLi4udGhpcy5kcmFnZ2FibGUuZ2V0Q2xhc3NOYW1lc0Zvcignc291cmNlOnBsYWNlZCcpKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc291cmNlLmNsYXNzTGlzdC5yZW1vdmUoLi4udGhpcy5kcmFnZ2FibGUuZ2V0Q2xhc3NOYW1lc0Zvcignc291cmNlOnBsYWNlZCcpKTtcbiAgICB9LCB0aGlzLmRyYWdnYWJsZS5vcHRpb25zLnBsYWNlZFRpbWVvdXQpO1xuICB9XG5cbiAgW29uRHJhZ091dF0oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuY2FuY2VsZWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzb3VyY2UgPSBldmVudC5zb3VyY2UgfHwgZXZlbnQuZHJhZ0V2ZW50LnNvdXJjZTtcbiAgICBjb25zdCBzbmFwT3V0RXZlbnQgPSBuZXcgU25hcE91dEV2ZW50KHtcbiAgICAgIGRyYWdFdmVudDogZXZlbnQsXG4gICAgICBzbmFwcGFibGU6IGV2ZW50Lm92ZXIgfHwgZXZlbnQuZHJvcHBhYmxlXG4gICAgfSk7XG4gICAgdGhpcy5kcmFnZ2FibGUudHJpZ2dlcihzbmFwT3V0RXZlbnQpO1xuICAgIGlmIChzbmFwT3V0RXZlbnQuY2FuY2VsZWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5taXJyb3IpIHtcbiAgICAgIHRoaXMubWlycm9yLnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICB9XG4gICAgc291cmNlLmNsYXNzTGlzdC5hZGQoLi4udGhpcy5kcmFnZ2FibGUuZ2V0Q2xhc3NOYW1lc0Zvcignc291cmNlOmRyYWdnaW5nJykpO1xuICB9XG5cbiAgW29uTWlycm9yQ3JlYXRlZF0oe1xuICAgIG1pcnJvclxuICB9KSB7XG4gICAgdGhpcy5taXJyb3IgPSBtaXJyb3I7XG4gIH1cblxuICBbb25NaXJyb3JEZXN0cm95XSgpIHtcbiAgICB0aGlzLm1pcnJvciA9IG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IHsgU25hcHBhYmxlIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCB7IEFic3RyYWN0RXZlbnQgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvQWJzdHJhY3RFdmVudC9BYnN0cmFjdEV2ZW50Lm1qcyc7XG5cbmNsYXNzIFNuYXBFdmVudCBleHRlbmRzIEFic3RyYWN0RXZlbnQge1xuXG4gIGdldCBkcmFnRXZlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5kcmFnRXZlbnQ7XG4gIH1cblxuICBnZXQgc25hcHBhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEuc25hcHBhYmxlO1xuICB9XG59XG5cblNuYXBFdmVudC50eXBlID0gJ3NuYXAnO1xuY2xhc3MgU25hcEluRXZlbnQgZXh0ZW5kcyBTbmFwRXZlbnQge31cblxuU25hcEluRXZlbnQudHlwZSA9ICdzbmFwOmluJztcblNuYXBJbkV2ZW50LmNhbmNlbGFibGUgPSB0cnVlO1xuY2xhc3MgU25hcE91dEV2ZW50IGV4dGVuZHMgU25hcEV2ZW50IHt9XG5TbmFwT3V0RXZlbnQudHlwZSA9ICdzbmFwOm91dCc7XG5TbmFwT3V0RXZlbnQuY2FuY2VsYWJsZSA9IHRydWU7XG5cbmV4cG9ydCB7IFNuYXBFdmVudCwgU25hcEluRXZlbnQsIFNuYXBPdXRFdmVudCB9O1xuIiwiaW1wb3J0IHsgQWJzdHJhY3RQbHVnaW4gfSBmcm9tICcuLi8uLi9zaGFyZWQvQWJzdHJhY3RQbHVnaW4vQWJzdHJhY3RQbHVnaW4ubWpzJztcblxuY29uc3Qgb25Tb3J0YWJsZVNvcnRlZCA9IFN5bWJvbCgnb25Tb3J0YWJsZVNvcnRlZCcpO1xuY29uc3Qgb25Tb3J0YWJsZVNvcnQgPSBTeW1ib2woJ29uU29ydGFibGVTb3J0Jyk7XG5cbmNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICBkdXJhdGlvbjogMTUwLFxuICBlYXNpbmdGdW5jdGlvbjogJ2Vhc2UtaW4tb3V0J1xufTtcblxuY2xhc3MgU29ydEFuaW1hdGlvbiBleHRlbmRzIEFic3RyYWN0UGx1Z2luIHtcblxuICBjb25zdHJ1Y3RvcihkcmFnZ2FibGUpIHtcbiAgICBzdXBlcihkcmFnZ2FibGUpO1xuXG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgLi4uZGVmYXVsdE9wdGlvbnMsXG4gICAgICAuLi50aGlzLmdldE9wdGlvbnMoKVxuICAgIH07XG5cbiAgICB0aGlzLmxhc3RBbmltYXRpb25GcmFtZSA9IG51bGw7XG4gICAgdGhpcy5sYXN0RWxlbWVudHMgPSBbXTtcbiAgICB0aGlzW29uU29ydGFibGVTb3J0ZWRdID0gdGhpc1tvblNvcnRhYmxlU29ydGVkXS5iaW5kKHRoaXMpO1xuICAgIHRoaXNbb25Tb3J0YWJsZVNvcnRdID0gdGhpc1tvblNvcnRhYmxlU29ydF0uYmluZCh0aGlzKTtcbiAgfVxuXG4gIGF0dGFjaCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZS5vbignc29ydGFibGU6c29ydCcsIHRoaXNbb25Tb3J0YWJsZVNvcnRdKTtcbiAgICB0aGlzLmRyYWdnYWJsZS5vbignc29ydGFibGU6c29ydGVkJywgdGhpc1tvblNvcnRhYmxlU29ydGVkXSk7XG4gIH1cblxuICBkZXRhY2goKSB7XG4gICAgdGhpcy5kcmFnZ2FibGUub2ZmKCdzb3J0YWJsZTpzb3J0JywgdGhpc1tvblNvcnRhYmxlU29ydF0pO1xuICAgIHRoaXMuZHJhZ2dhYmxlLm9mZignc29ydGFibGU6c29ydGVkJywgdGhpc1tvblNvcnRhYmxlU29ydGVkXSk7XG4gIH1cblxuICBnZXRPcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRyYWdnYWJsZS5vcHRpb25zLnNvcnRBbmltYXRpb24gfHwge307XG4gIH1cblxuICBbb25Tb3J0YWJsZVNvcnRdKHtcbiAgICBkcmFnRXZlbnRcbiAgfSkge1xuICAgIGNvbnN0IHtcbiAgICAgIHNvdXJjZUNvbnRhaW5lclxuICAgIH0gPSBkcmFnRXZlbnQ7XG4gICAgY29uc3QgZWxlbWVudHMgPSB0aGlzLmRyYWdnYWJsZS5nZXREcmFnZ2FibGVFbGVtZW50c0ZvckNvbnRhaW5lcihzb3VyY2VDb250YWluZXIpO1xuICAgIHRoaXMubGFzdEVsZW1lbnRzID0gQXJyYXkuZnJvbShlbGVtZW50cykubWFwKGVsID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRvbUVsOiBlbCxcbiAgICAgICAgb2Zmc2V0VG9wOiBlbC5vZmZzZXRUb3AsXG4gICAgICAgIG9mZnNldExlZnQ6IGVsLm9mZnNldExlZnRcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBbb25Tb3J0YWJsZVNvcnRlZF0oe1xuICAgIG9sZEluZGV4LFxuICAgIG5ld0luZGV4XG4gIH0pIHtcbiAgICBpZiAob2xkSW5kZXggPT09IG5ld0luZGV4KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGVmZmVjdGVkRWxlbWVudHMgPSBbXTtcbiAgICBsZXQgc3RhcnQ7XG4gICAgbGV0IGVuZDtcbiAgICBsZXQgbnVtO1xuICAgIGlmIChvbGRJbmRleCA+IG5ld0luZGV4KSB7XG4gICAgICBzdGFydCA9IG5ld0luZGV4O1xuICAgICAgZW5kID0gb2xkSW5kZXggLSAxO1xuICAgICAgbnVtID0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhcnQgPSBvbGRJbmRleCArIDE7XG4gICAgICBlbmQgPSBuZXdJbmRleDtcbiAgICAgIG51bSA9IC0xO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPD0gZW5kOyBpKyspIHtcbiAgICAgIGNvbnN0IGZyb20gPSB0aGlzLmxhc3RFbGVtZW50c1tpXTtcbiAgICAgIGNvbnN0IHRvID0gdGhpcy5sYXN0RWxlbWVudHNbaSArIG51bV07XG4gICAgICBlZmZlY3RlZEVsZW1lbnRzLnB1c2goe1xuICAgICAgICBmcm9tLFxuICAgICAgICB0b1xuICAgICAgfSk7XG4gICAgfVxuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMubGFzdEFuaW1hdGlvbkZyYW1lKTtcblxuICAgIHRoaXMubGFzdEFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIGVmZmVjdGVkRWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IGFuaW1hdGUoZWxlbWVudCwgdGhpcy5vcHRpb25zKSk7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYW5pbWF0ZSh7XG4gIGZyb20sXG4gIHRvXG59LCB7XG4gIGR1cmF0aW9uLFxuICBlYXNpbmdGdW5jdGlvblxufSkge1xuICBjb25zdCBkb21FbCA9IGZyb20uZG9tRWw7XG4gIGNvbnN0IHggPSBmcm9tLm9mZnNldExlZnQgLSB0by5vZmZzZXRMZWZ0O1xuICBjb25zdCB5ID0gZnJvbS5vZmZzZXRUb3AgLSB0by5vZmZzZXRUb3A7XG4gIGRvbUVsLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gIGRvbUVsLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgke3h9cHgsICR7eX1weCwgMClgO1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgIGRvbUVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCByZXNldEVsZW1lbnRPblRyYW5zaXRpb25FbmQpO1xuICAgIGRvbUVsLnN0eWxlLnRyYW5zaXRpb24gPSBgdHJhbnNmb3JtICR7ZHVyYXRpb259bXMgJHtlYXNpbmdGdW5jdGlvbn1gO1xuICAgIGRvbUVsLnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVzZXRFbGVtZW50T25UcmFuc2l0aW9uRW5kKGV2ZW50KSB7XG4gIGV2ZW50LnRhcmdldC5zdHlsZS50cmFuc2l0aW9uID0gJyc7XG4gIGV2ZW50LnRhcmdldC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJyc7XG4gIGV2ZW50LnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgcmVzZXRFbGVtZW50T25UcmFuc2l0aW9uRW5kKTtcbn1cblxuZXhwb3J0IHsgU29ydEFuaW1hdGlvbiBhcyBkZWZhdWx0LCBkZWZhdWx0T3B0aW9ucyB9O1xuIiwiaW1wb3J0IHsgYXBwbHlEZWNzMjMwNSBhcyBfYXBwbHlEZWNzMjMwNSB9IGZyb20gJy4uLy4uL192aXJ0dWFsL19yb2xsdXBQbHVnaW5CYWJlbEhlbHBlcnMubWpzJztcbmltcG9ydCB7IEFic3RyYWN0UGx1Z2luIH0gZnJvbSAnLi4vLi4vc2hhcmVkL0Fic3RyYWN0UGx1Z2luL0Fic3RyYWN0UGx1Z2luLm1qcyc7XG5pbXBvcnQgeyBBdXRvQmluZCB9IGZyb20gJy4uLy4uL3NoYXJlZC91dGlscy9kZWNvcmF0b3JzL0F1dG9CaW5kLm1qcyc7XG5cbnZhciBfaW5pdFByb3RvLCBfY2xhc3M7XG5cbmNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICBkdXJhdGlvbjogMTUwLFxuICBlYXNpbmdGdW5jdGlvbjogJ2Vhc2UtaW4tb3V0JyxcbiAgaG9yaXpvbnRhbDogZmFsc2Vcbn07XG5cbmNsYXNzIFN3YXBBbmltYXRpb24gZXh0ZW5kcyBBYnN0cmFjdFBsdWdpbiB7XG5cbiAgY29uc3RydWN0b3IoZHJhZ2dhYmxlKSB7XG4gICAgX2luaXRQcm90byhzdXBlcihkcmFnZ2FibGUpKTtcblxuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIC4uLmRlZmF1bHRPcHRpb25zLFxuICAgICAgLi4udGhpcy5nZXRPcHRpb25zKClcbiAgICB9O1xuXG4gICAgdGhpcy5sYXN0QW5pbWF0aW9uRnJhbWUgPSBudWxsO1xuICB9XG5cbiAgYXR0YWNoKCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlLm9uKCdzb3J0YWJsZTpzb3J0ZWQnLCB0aGlzLm9uU29ydGFibGVTb3J0ZWQpO1xuICB9XG5cbiAgZGV0YWNoKCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlLm9mZignc29ydGFibGU6c29ydGVkJywgdGhpcy5vblNvcnRhYmxlU29ydGVkKTtcbiAgfVxuXG4gIGdldE9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlLm9wdGlvbnMuc3dhcEFuaW1hdGlvbiB8fCB7fTtcbiAgfVxuXG4gIG9uU29ydGFibGVTb3J0ZWQoe1xuICAgIG9sZEluZGV4LFxuICAgIG5ld0luZGV4LFxuICAgIGRyYWdFdmVudFxuICB9KSB7XG4gICAgY29uc3Qge1xuICAgICAgc291cmNlLFxuICAgICAgb3ZlclxuICAgIH0gPSBkcmFnRXZlbnQ7XG4gICAgaWYgKHRoaXMubGFzdEFuaW1hdGlvbkZyYW1lKSB7XG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmxhc3RBbmltYXRpb25GcmFtZSk7XG4gICAgfVxuXG4gICAgdGhpcy5sYXN0QW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgaWYgKG9sZEluZGV4ID49IG5ld0luZGV4KSB7XG4gICAgICAgIGFuaW1hdGUoc291cmNlLCBvdmVyLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYW5pbWF0ZShvdmVyLCBzb3VyY2UsIHRoaXMub3B0aW9ucyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuX2NsYXNzID0gU3dhcEFuaW1hdGlvbjtcbltfaW5pdFByb3RvXSA9IF9hcHBseURlY3MyMzA1KF9jbGFzcywgW1tBdXRvQmluZCwgMiwgXCJvblNvcnRhYmxlU29ydGVkXCJdXSwgW10sIDAsIHZvaWQgMCwgQWJzdHJhY3RQbHVnaW4pLmU7XG5mdW5jdGlvbiBhbmltYXRlKGZyb20sIHRvLCB7XG4gIGR1cmF0aW9uLFxuICBlYXNpbmdGdW5jdGlvbixcbiAgaG9yaXpvbnRhbFxufSkge1xuICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgW2Zyb20sIHRvXSkge1xuICAgIGVsZW1lbnQuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgfVxuICBpZiAoaG9yaXpvbnRhbCkge1xuICAgIGNvbnN0IHdpZHRoID0gZnJvbS5vZmZzZXRXaWR0aDtcbiAgICBmcm9tLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgke3dpZHRofXB4LCAwLCAwKWA7XG4gICAgdG8uc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKC0ke3dpZHRofXB4LCAwLCAwKWA7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgaGVpZ2h0ID0gZnJvbS5vZmZzZXRIZWlnaHQ7XG4gICAgZnJvbS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoMCwgJHtoZWlnaHR9cHgsIDApYDtcbiAgICB0by5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoMCwgLSR7aGVpZ2h0fXB4LCAwKWA7XG4gIH1cbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgW2Zyb20sIHRvXSkge1xuICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgcmVzZXRFbGVtZW50T25UcmFuc2l0aW9uRW5kKTtcbiAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbiA9IGB0cmFuc2Zvcm0gJHtkdXJhdGlvbn1tcyAke2Vhc2luZ0Z1bmN0aW9ufWA7XG4gICAgICBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlc2V0RWxlbWVudE9uVHJhbnNpdGlvbkVuZChldmVudCkge1xuICBpZiAoZXZlbnQudGFyZ2V0ID09IG51bGwgfHwgIWlzSFRNTEVsZW1lbnQoZXZlbnQudGFyZ2V0KSkge1xuICAgIHJldHVybjtcbiAgfVxuICBldmVudC50YXJnZXQuc3R5bGUudHJhbnNpdGlvbiA9ICcnO1xuICBldmVudC50YXJnZXQuc3R5bGUucG9pbnRlckV2ZW50cyA9ICcnO1xuICBldmVudC50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHJlc2V0RWxlbWVudE9uVHJhbnNpdGlvbkVuZCk7XG59XG5mdW5jdGlvbiBpc0hUTUxFbGVtZW50KGV2ZW50VGFyZ2V0KSB7XG4gIHJldHVybiBCb29sZWFuKCdzdHlsZScgaW4gZXZlbnRUYXJnZXQpO1xufVxuXG5leHBvcnQgeyBTd2FwQW5pbWF0aW9uIGFzIGRlZmF1bHQsIGRlZmF1bHRPcHRpb25zIH07XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIENvbGxpZGFibGUgfSBmcm9tICcuL0NvbGxpZGFibGUvQ29sbGlkYWJsZS5tanMnO1xuaW1wb3J0ICcuL0NvbGxpZGFibGUvQ29sbGlkYWJsZUV2ZW50L0NvbGxpZGFibGVFdmVudC5tanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBSZXNpemVNaXJyb3IsIGRlZmF1bHRPcHRpb25zIGFzIGRlZmF1bHRSZXNpemVNaXJyb3JPcHRpb25zIH0gZnJvbSAnLi9SZXNpemVNaXJyb3IvUmVzaXplTWlycm9yLm1qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNuYXBwYWJsZSB9IGZyb20gJy4vU25hcHBhYmxlL1NuYXBwYWJsZS5tanMnO1xuaW1wb3J0ICcuL1NuYXBwYWJsZS9TbmFwcGFibGVFdmVudC9TbmFwcGFibGVFdmVudC5tanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTd2FwQW5pbWF0aW9uLCBkZWZhdWx0T3B0aW9ucyBhcyBkZWZhdWx0U3dhcEFuaW1hdGlvbk9wdGlvbnMgfSBmcm9tICcuL1N3YXBBbmltYXRpb24vU3dhcEFuaW1hdGlvbi5tanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTb3J0QW5pbWF0aW9uLCBkZWZhdWx0T3B0aW9ucyBhcyBkZWZhdWx0U29ydEFuaW1hdGlvbk9wdGlvbnMgfSBmcm9tICcuL1NvcnRBbmltYXRpb24vU29ydEFuaW1hdGlvbi5tanMnO1xuIiwiaW1wb3J0IERyYWdnYWJsZSBmcm9tICcuLi9EcmFnZ2FibGUvRHJhZ2dhYmxlLm1qcyc7XG5pbXBvcnQgJy4uL0RyYWdnYWJsZS9EcmFnRXZlbnQvRHJhZ0V2ZW50Lm1qcyc7XG5pbXBvcnQgJy4uL0RyYWdnYWJsZS9EcmFnZ2FibGVFdmVudC9EcmFnZ2FibGVFdmVudC5tanMnO1xuaW1wb3J0ICcuLi9EcmFnZ2FibGUvUGx1Z2lucy9Bbm5vdW5jZW1lbnQvQW5ub3VuY2VtZW50Lm1qcyc7XG5pbXBvcnQgJy4uL0RyYWdnYWJsZS9QbHVnaW5zL01pcnJvci9NaXJyb3JFdmVudC9NaXJyb3JFdmVudC5tanMnO1xuaW1wb3J0ICcuLi9EcmFnZ2FibGUvU2Vuc29ycy9TZW5zb3JFdmVudC9TZW5zb3JFdmVudC5tanMnO1xuaW1wb3J0ICcuLi9EcmFnZ2FibGUvU2Vuc29ycy9Ub3VjaFNlbnNvci9Ub3VjaFNlbnNvci5tanMnO1xuaW1wb3J0IHsgU29ydGFibGVTdGFydEV2ZW50LCBTb3J0YWJsZVNvcnRFdmVudCwgU29ydGFibGVTb3J0ZWRFdmVudCwgU29ydGFibGVTdG9wRXZlbnQgfSBmcm9tICcuL1NvcnRhYmxlRXZlbnQvU29ydGFibGVFdmVudC5tanMnO1xuXG5jb25zdCBvbkRyYWdTdGFydCA9IFN5bWJvbCgnb25EcmFnU3RhcnQnKTtcbmNvbnN0IG9uRHJhZ092ZXJDb250YWluZXIgPSBTeW1ib2woJ29uRHJhZ092ZXJDb250YWluZXInKTtcbmNvbnN0IG9uRHJhZ092ZXIgPSBTeW1ib2woJ29uRHJhZ092ZXInKTtcbmNvbnN0IG9uRHJhZ1N0b3AgPSBTeW1ib2woJ29uRHJhZ1N0b3AnKTtcblxuZnVuY3Rpb24gb25Tb3J0YWJsZVNvcnRlZERlZmF1bHRBbm5vdW5jZW1lbnQoe1xuICBkcmFnRXZlbnRcbn0pIHtcbiAgY29uc3Qgc291cmNlVGV4dCA9IGRyYWdFdmVudC5zb3VyY2UudGV4dENvbnRlbnQudHJpbSgpIHx8IGRyYWdFdmVudC5zb3VyY2UuaWQgfHwgJ3NvcnRhYmxlIGVsZW1lbnQnO1xuICBpZiAoZHJhZ0V2ZW50Lm92ZXIpIHtcbiAgICBjb25zdCBvdmVyVGV4dCA9IGRyYWdFdmVudC5vdmVyLnRleHRDb250ZW50LnRyaW0oKSB8fCBkcmFnRXZlbnQub3Zlci5pZCB8fCAnc29ydGFibGUgZWxlbWVudCc7XG4gICAgY29uc3QgaXNGb2xsb3dpbmcgPSBkcmFnRXZlbnQuc291cmNlLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGRyYWdFdmVudC5vdmVyKSAmIE5vZGUuRE9DVU1FTlRfUE9TSVRJT05fRk9MTE9XSU5HO1xuICAgIGlmIChpc0ZvbGxvd2luZykge1xuICAgICAgcmV0dXJuIGBQbGFjZWQgJHtzb3VyY2VUZXh0fSBhZnRlciAke292ZXJUZXh0fWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBgUGxhY2VkICR7c291cmNlVGV4dH0gYmVmb3JlICR7b3ZlclRleHR9YDtcbiAgICB9XG4gIH0gZWxzZSB7XG5cbiAgICByZXR1cm4gYFBsYWNlZCAke3NvdXJjZVRleHR9IGludG8gYSBkaWZmZXJlbnQgY29udGFpbmVyYDtcbiAgfVxufVxuXG5jb25zdCBkZWZhdWx0QW5ub3VuY2VtZW50cyA9IHtcbiAgJ3NvcnRhYmxlOnNvcnRlZCc6IG9uU29ydGFibGVTb3J0ZWREZWZhdWx0QW5ub3VuY2VtZW50XG59O1xuXG5jbGFzcyBTb3J0YWJsZSBleHRlbmRzIERyYWdnYWJsZSB7XG5cbiAgY29uc3RydWN0b3IoY29udGFpbmVycyA9IFtdLCBvcHRpb25zID0ge30pIHtcbiAgICBzdXBlcihjb250YWluZXJzLCB7XG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgYW5ub3VuY2VtZW50czoge1xuICAgICAgICAuLi5kZWZhdWx0QW5ub3VuY2VtZW50cyxcbiAgICAgICAgLi4uKG9wdGlvbnMuYW5ub3VuY2VtZW50cyB8fCB7fSlcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuc3RhcnRJbmRleCA9IG51bGw7XG5cbiAgICB0aGlzLnN0YXJ0Q29udGFpbmVyID0gbnVsbDtcbiAgICB0aGlzW29uRHJhZ1N0YXJ0XSA9IHRoaXNbb25EcmFnU3RhcnRdLmJpbmQodGhpcyk7XG4gICAgdGhpc1tvbkRyYWdPdmVyQ29udGFpbmVyXSA9IHRoaXNbb25EcmFnT3ZlckNvbnRhaW5lcl0uYmluZCh0aGlzKTtcbiAgICB0aGlzW29uRHJhZ092ZXJdID0gdGhpc1tvbkRyYWdPdmVyXS5iaW5kKHRoaXMpO1xuICAgIHRoaXNbb25EcmFnU3RvcF0gPSB0aGlzW29uRHJhZ1N0b3BdLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbignZHJhZzpzdGFydCcsIHRoaXNbb25EcmFnU3RhcnRdKS5vbignZHJhZzpvdmVyOmNvbnRhaW5lcicsIHRoaXNbb25EcmFnT3ZlckNvbnRhaW5lcl0pLm9uKCdkcmFnOm92ZXInLCB0aGlzW29uRHJhZ092ZXJdKS5vbignZHJhZzpzdG9wJywgdGhpc1tvbkRyYWdTdG9wXSk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHN1cGVyLmRlc3Ryb3koKTtcbiAgICB0aGlzLm9mZignZHJhZzpzdGFydCcsIHRoaXNbb25EcmFnU3RhcnRdKS5vZmYoJ2RyYWc6b3Zlcjpjb250YWluZXInLCB0aGlzW29uRHJhZ092ZXJDb250YWluZXJdKS5vZmYoJ2RyYWc6b3ZlcicsIHRoaXNbb25EcmFnT3Zlcl0pLm9mZignZHJhZzpzdG9wJywgdGhpc1tvbkRyYWdTdG9wXSk7XG4gIH1cblxuICBpbmRleChlbGVtZW50KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U29ydGFibGVFbGVtZW50c0ZvckNvbnRhaW5lcihlbGVtZW50LnBhcmVudE5vZGUpLmluZGV4T2YoZWxlbWVudCk7XG4gIH1cblxuICBnZXRTb3J0YWJsZUVsZW1lbnRzRm9yQ29udGFpbmVyKGNvbnRhaW5lcikge1xuICAgIGNvbnN0IGFsbFNvcnRhYmxlRWxlbWVudHMgPSBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbCh0aGlzLm9wdGlvbnMuZHJhZ2dhYmxlKTtcbiAgICByZXR1cm4gWy4uLmFsbFNvcnRhYmxlRWxlbWVudHNdLmZpbHRlcihjaGlsZEVsZW1lbnQgPT4ge1xuICAgICAgcmV0dXJuIGNoaWxkRWxlbWVudCAhPT0gdGhpcy5vcmlnaW5hbFNvdXJjZSAmJiBjaGlsZEVsZW1lbnQgIT09IHRoaXMubWlycm9yICYmIGNoaWxkRWxlbWVudC5wYXJlbnROb2RlID09PSBjb250YWluZXI7XG4gICAgfSk7XG4gIH1cblxuICBbb25EcmFnU3RhcnRdKGV2ZW50KSB7XG4gICAgdGhpcy5zdGFydENvbnRhaW5lciA9IGV2ZW50LnNvdXJjZS5wYXJlbnROb2RlO1xuICAgIHRoaXMuc3RhcnRJbmRleCA9IHRoaXMuaW5kZXgoZXZlbnQuc291cmNlKTtcbiAgICBjb25zdCBzb3J0YWJsZVN0YXJ0RXZlbnQgPSBuZXcgU29ydGFibGVTdGFydEV2ZW50KHtcbiAgICAgIGRyYWdFdmVudDogZXZlbnQsXG4gICAgICBzdGFydEluZGV4OiB0aGlzLnN0YXJ0SW5kZXgsXG4gICAgICBzdGFydENvbnRhaW5lcjogdGhpcy5zdGFydENvbnRhaW5lclxuICAgIH0pO1xuICAgIHRoaXMudHJpZ2dlcihzb3J0YWJsZVN0YXJ0RXZlbnQpO1xuICAgIGlmIChzb3J0YWJsZVN0YXJ0RXZlbnQuY2FuY2VsZWQoKSkge1xuICAgICAgZXZlbnQuY2FuY2VsKCk7XG4gICAgfVxuICB9XG5cbiAgW29uRHJhZ092ZXJDb250YWluZXJdKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmNhbmNlbGVkKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qge1xuICAgICAgc291cmNlLFxuICAgICAgb3ZlcixcbiAgICAgIG92ZXJDb250YWluZXJcbiAgICB9ID0gZXZlbnQ7XG4gICAgY29uc3Qgb2xkSW5kZXggPSB0aGlzLmluZGV4KHNvdXJjZSk7XG4gICAgY29uc3Qgc29ydGFibGVTb3J0RXZlbnQgPSBuZXcgU29ydGFibGVTb3J0RXZlbnQoe1xuICAgICAgZHJhZ0V2ZW50OiBldmVudCxcbiAgICAgIGN1cnJlbnRJbmRleDogb2xkSW5kZXgsXG4gICAgICBzb3VyY2UsXG4gICAgICBvdmVyXG4gICAgfSk7XG4gICAgdGhpcy50cmlnZ2VyKHNvcnRhYmxlU29ydEV2ZW50KTtcbiAgICBpZiAoc29ydGFibGVTb3J0RXZlbnQuY2FuY2VsZWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuZ2V0U29ydGFibGVFbGVtZW50c0ZvckNvbnRhaW5lcihvdmVyQ29udGFpbmVyKTtcbiAgICBjb25zdCBtb3ZlcyA9IG1vdmUoe1xuICAgICAgc291cmNlLFxuICAgICAgb3ZlcixcbiAgICAgIG92ZXJDb250YWluZXIsXG4gICAgICBjaGlsZHJlblxuICAgIH0pO1xuICAgIGlmICghbW92ZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qge1xuICAgICAgb2xkQ29udGFpbmVyLFxuICAgICAgbmV3Q29udGFpbmVyXG4gICAgfSA9IG1vdmVzO1xuICAgIGNvbnN0IG5ld0luZGV4ID0gdGhpcy5pbmRleChldmVudC5zb3VyY2UpO1xuICAgIGNvbnN0IHNvcnRhYmxlU29ydGVkRXZlbnQgPSBuZXcgU29ydGFibGVTb3J0ZWRFdmVudCh7XG4gICAgICBkcmFnRXZlbnQ6IGV2ZW50LFxuICAgICAgb2xkSW5kZXgsXG4gICAgICBuZXdJbmRleCxcbiAgICAgIG9sZENvbnRhaW5lcixcbiAgICAgIG5ld0NvbnRhaW5lclxuICAgIH0pO1xuICAgIHRoaXMudHJpZ2dlcihzb3J0YWJsZVNvcnRlZEV2ZW50KTtcbiAgfVxuXG4gIFtvbkRyYWdPdmVyXShldmVudCkge1xuICAgIGlmIChldmVudC5vdmVyID09PSBldmVudC5vcmlnaW5hbFNvdXJjZSB8fCBldmVudC5vdmVyID09PSBldmVudC5zb3VyY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qge1xuICAgICAgc291cmNlLFxuICAgICAgb3ZlcixcbiAgICAgIG92ZXJDb250YWluZXJcbiAgICB9ID0gZXZlbnQ7XG4gICAgY29uc3Qgb2xkSW5kZXggPSB0aGlzLmluZGV4KHNvdXJjZSk7XG4gICAgY29uc3Qgc29ydGFibGVTb3J0RXZlbnQgPSBuZXcgU29ydGFibGVTb3J0RXZlbnQoe1xuICAgICAgZHJhZ0V2ZW50OiBldmVudCxcbiAgICAgIGN1cnJlbnRJbmRleDogb2xkSW5kZXgsXG4gICAgICBzb3VyY2UsXG4gICAgICBvdmVyXG4gICAgfSk7XG4gICAgdGhpcy50cmlnZ2VyKHNvcnRhYmxlU29ydEV2ZW50KTtcbiAgICBpZiAoc29ydGFibGVTb3J0RXZlbnQuY2FuY2VsZWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuZ2V0RHJhZ2dhYmxlRWxlbWVudHNGb3JDb250YWluZXIob3ZlckNvbnRhaW5lcik7XG4gICAgY29uc3QgbW92ZXMgPSBtb3ZlKHtcbiAgICAgIHNvdXJjZSxcbiAgICAgIG92ZXIsXG4gICAgICBvdmVyQ29udGFpbmVyLFxuICAgICAgY2hpbGRyZW5cbiAgICB9KTtcbiAgICBpZiAoIW1vdmVzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHtcbiAgICAgIG9sZENvbnRhaW5lcixcbiAgICAgIG5ld0NvbnRhaW5lclxuICAgIH0gPSBtb3ZlcztcbiAgICBjb25zdCBuZXdJbmRleCA9IHRoaXMuaW5kZXgoc291cmNlKTtcbiAgICBjb25zdCBzb3J0YWJsZVNvcnRlZEV2ZW50ID0gbmV3IFNvcnRhYmxlU29ydGVkRXZlbnQoe1xuICAgICAgZHJhZ0V2ZW50OiBldmVudCxcbiAgICAgIG9sZEluZGV4LFxuICAgICAgbmV3SW5kZXgsXG4gICAgICBvbGRDb250YWluZXIsXG4gICAgICBuZXdDb250YWluZXJcbiAgICB9KTtcbiAgICB0aGlzLnRyaWdnZXIoc29ydGFibGVTb3J0ZWRFdmVudCk7XG4gIH1cblxuICBbb25EcmFnU3RvcF0oZXZlbnQpIHtcbiAgICBjb25zdCBzb3J0YWJsZVN0b3BFdmVudCA9IG5ldyBTb3J0YWJsZVN0b3BFdmVudCh7XG4gICAgICBkcmFnRXZlbnQ6IGV2ZW50LFxuICAgICAgb2xkSW5kZXg6IHRoaXMuc3RhcnRJbmRleCxcbiAgICAgIG5ld0luZGV4OiB0aGlzLmluZGV4KGV2ZW50LnNvdXJjZSksXG4gICAgICBvbGRDb250YWluZXI6IHRoaXMuc3RhcnRDb250YWluZXIsXG4gICAgICBuZXdDb250YWluZXI6IGV2ZW50LnNvdXJjZS5wYXJlbnROb2RlXG4gICAgfSk7XG4gICAgdGhpcy50cmlnZ2VyKHNvcnRhYmxlU3RvcEV2ZW50KTtcbiAgICB0aGlzLnN0YXJ0SW5kZXggPSBudWxsO1xuICAgIHRoaXMuc3RhcnRDb250YWluZXIgPSBudWxsO1xuICB9XG59XG5mdW5jdGlvbiBpbmRleChlbGVtZW50KSB7XG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKGVsZW1lbnQucGFyZW50Tm9kZS5jaGlsZHJlbiwgZWxlbWVudCk7XG59XG5mdW5jdGlvbiBtb3ZlKHtcbiAgc291cmNlLFxuICBvdmVyLFxuICBvdmVyQ29udGFpbmVyLFxuICBjaGlsZHJlblxufSkge1xuICBjb25zdCBlbXB0eU92ZXJDb250YWluZXIgPSAhY2hpbGRyZW4ubGVuZ3RoO1xuICBjb25zdCBkaWZmZXJlbnRDb250YWluZXIgPSBzb3VyY2UucGFyZW50Tm9kZSAhPT0gb3ZlckNvbnRhaW5lcjtcbiAgY29uc3Qgc2FtZUNvbnRhaW5lciA9IG92ZXIgJiYgc291cmNlLnBhcmVudE5vZGUgPT09IG92ZXIucGFyZW50Tm9kZTtcbiAgaWYgKGVtcHR5T3ZlckNvbnRhaW5lcikge1xuICAgIHJldHVybiBtb3ZlSW5zaWRlRW1wdHlDb250YWluZXIoc291cmNlLCBvdmVyQ29udGFpbmVyKTtcbiAgfSBlbHNlIGlmIChzYW1lQ29udGFpbmVyKSB7XG4gICAgcmV0dXJuIG1vdmVXaXRoaW5Db250YWluZXIoc291cmNlLCBvdmVyKTtcbiAgfSBlbHNlIGlmIChkaWZmZXJlbnRDb250YWluZXIpIHtcbiAgICByZXR1cm4gbW92ZU91dHNpZGVDb250YWluZXIoc291cmNlLCBvdmVyLCBvdmVyQ29udGFpbmVyKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuZnVuY3Rpb24gbW92ZUluc2lkZUVtcHR5Q29udGFpbmVyKHNvdXJjZSwgb3ZlckNvbnRhaW5lcikge1xuICBjb25zdCBvbGRDb250YWluZXIgPSBzb3VyY2UucGFyZW50Tm9kZTtcbiAgb3ZlckNvbnRhaW5lci5hcHBlbmRDaGlsZChzb3VyY2UpO1xuICByZXR1cm4ge1xuICAgIG9sZENvbnRhaW5lcixcbiAgICBuZXdDb250YWluZXI6IG92ZXJDb250YWluZXJcbiAgfTtcbn1cbmZ1bmN0aW9uIG1vdmVXaXRoaW5Db250YWluZXIoc291cmNlLCBvdmVyKSB7XG4gIGNvbnN0IG9sZEluZGV4ID0gaW5kZXgoc291cmNlKTtcbiAgY29uc3QgbmV3SW5kZXggPSBpbmRleChvdmVyKTtcbiAgaWYgKG9sZEluZGV4IDwgbmV3SW5kZXgpIHtcbiAgICBzb3VyY2UucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc291cmNlLCBvdmVyLm5leHRFbGVtZW50U2libGluZyk7XG4gIH0gZWxzZSB7XG4gICAgc291cmNlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNvdXJjZSwgb3Zlcik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBvbGRDb250YWluZXI6IHNvdXJjZS5wYXJlbnROb2RlLFxuICAgIG5ld0NvbnRhaW5lcjogc291cmNlLnBhcmVudE5vZGVcbiAgfTtcbn1cbmZ1bmN0aW9uIG1vdmVPdXRzaWRlQ29udGFpbmVyKHNvdXJjZSwgb3Zlciwgb3ZlckNvbnRhaW5lcikge1xuICBjb25zdCBvbGRDb250YWluZXIgPSBzb3VyY2UucGFyZW50Tm9kZTtcbiAgaWYgKG92ZXIpIHtcbiAgICBvdmVyLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNvdXJjZSwgb3Zlcik7XG4gIH0gZWxzZSB7XG5cbiAgICBvdmVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHNvdXJjZSk7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBvbGRDb250YWluZXIsXG4gICAgbmV3Q29udGFpbmVyOiBzb3VyY2UucGFyZW50Tm9kZVxuICB9O1xufVxuXG5leHBvcnQgeyBTb3J0YWJsZSBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgeyBBYnN0cmFjdEV2ZW50IH0gZnJvbSAnLi4vLi4vc2hhcmVkL0Fic3RyYWN0RXZlbnQvQWJzdHJhY3RFdmVudC5tanMnO1xuXG5jbGFzcyBTb3J0YWJsZUV2ZW50IGV4dGVuZHMgQWJzdHJhY3RFdmVudCB7XG5cbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIHN1cGVyKGRhdGEpO1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gIH1cblxuICBnZXQgZHJhZ0V2ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEuZHJhZ0V2ZW50O1xuICB9XG59XG5Tb3J0YWJsZUV2ZW50LnR5cGUgPSAnc29ydGFibGUnO1xuXG5jbGFzcyBTb3J0YWJsZVN0YXJ0RXZlbnQgZXh0ZW5kcyBTb3J0YWJsZUV2ZW50IHtcblxuICBnZXQgc3RhcnRJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLnN0YXJ0SW5kZXg7XG4gIH1cblxuICBnZXQgc3RhcnRDb250YWluZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5zdGFydENvbnRhaW5lcjtcbiAgfVxufVxuU29ydGFibGVTdGFydEV2ZW50LnR5cGUgPSAnc29ydGFibGU6c3RhcnQnO1xuU29ydGFibGVTdGFydEV2ZW50LmNhbmNlbGFibGUgPSB0cnVlO1xuXG5jbGFzcyBTb3J0YWJsZVNvcnRFdmVudCBleHRlbmRzIFNvcnRhYmxlRXZlbnQge1xuXG4gIGdldCBjdXJyZW50SW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5jdXJyZW50SW5kZXg7XG4gIH1cblxuICBnZXQgb3ZlcigpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLm92ZXI7XG4gIH1cblxuICBnZXQgb3ZlckNvbnRhaW5lcigpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLmRyYWdFdmVudC5vdmVyQ29udGFpbmVyO1xuICB9XG59XG5Tb3J0YWJsZVNvcnRFdmVudC50eXBlID0gJ3NvcnRhYmxlOnNvcnQnO1xuU29ydGFibGVTb3J0RXZlbnQuY2FuY2VsYWJsZSA9IHRydWU7XG5cbmNsYXNzIFNvcnRhYmxlU29ydGVkRXZlbnQgZXh0ZW5kcyBTb3J0YWJsZUV2ZW50IHtcblxuICBnZXQgb2xkSW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5vbGRJbmRleDtcbiAgfVxuXG4gIGdldCBuZXdJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLm5ld0luZGV4O1xuICB9XG5cbiAgZ2V0IG9sZENvbnRhaW5lcigpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLm9sZENvbnRhaW5lcjtcbiAgfVxuXG4gIGdldCBuZXdDb250YWluZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5uZXdDb250YWluZXI7XG4gIH1cbn1cblNvcnRhYmxlU29ydGVkRXZlbnQudHlwZSA9ICdzb3J0YWJsZTpzb3J0ZWQnO1xuXG5jbGFzcyBTb3J0YWJsZVN0b3BFdmVudCBleHRlbmRzIFNvcnRhYmxlRXZlbnQge1xuXG4gIGdldCBvbGRJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLm9sZEluZGV4O1xuICB9XG5cbiAgZ2V0IG5ld0luZGV4KCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEubmV3SW5kZXg7XG4gIH1cblxuICBnZXQgb2xkQ29udGFpbmVyKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEub2xkQ29udGFpbmVyO1xuICB9XG5cbiAgZ2V0IG5ld0NvbnRhaW5lcigpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLm5ld0NvbnRhaW5lcjtcbiAgfVxufVxuU29ydGFibGVTdG9wRXZlbnQudHlwZSA9ICdzb3J0YWJsZTpzdG9wJztcblxuZXhwb3J0IHsgU29ydGFibGVFdmVudCwgU29ydGFibGVTb3J0RXZlbnQsIFNvcnRhYmxlU29ydGVkRXZlbnQsIFNvcnRhYmxlU3RhcnRFdmVudCwgU29ydGFibGVTdG9wRXZlbnQgfTtcbiIsImltcG9ydCBEcmFnZ2FibGUgZnJvbSAnLi4vRHJhZ2dhYmxlL0RyYWdnYWJsZS5tanMnO1xuaW1wb3J0ICcuLi9EcmFnZ2FibGUvRHJhZ0V2ZW50L0RyYWdFdmVudC5tanMnO1xuaW1wb3J0ICcuLi9EcmFnZ2FibGUvRHJhZ2dhYmxlRXZlbnQvRHJhZ2dhYmxlRXZlbnQubWpzJztcbmltcG9ydCAnLi4vRHJhZ2dhYmxlL1BsdWdpbnMvQW5ub3VuY2VtZW50L0Fubm91bmNlbWVudC5tanMnO1xuaW1wb3J0ICcuLi9EcmFnZ2FibGUvUGx1Z2lucy9NaXJyb3IvTWlycm9yRXZlbnQvTWlycm9yRXZlbnQubWpzJztcbmltcG9ydCAnLi4vRHJhZ2dhYmxlL1NlbnNvcnMvU2Vuc29yRXZlbnQvU2Vuc29yRXZlbnQubWpzJztcbmltcG9ydCAnLi4vRHJhZ2dhYmxlL1NlbnNvcnMvVG91Y2hTZW5zb3IvVG91Y2hTZW5zb3IubWpzJztcbmltcG9ydCB7IFN3YXBwYWJsZVN0YXJ0RXZlbnQsIFN3YXBwYWJsZVN3YXBFdmVudCwgU3dhcHBhYmxlU3dhcHBlZEV2ZW50LCBTd2FwcGFibGVTdG9wRXZlbnQgfSBmcm9tICcuL1N3YXBwYWJsZUV2ZW50L1N3YXBwYWJsZUV2ZW50Lm1qcyc7XG5cbmNvbnN0IG9uRHJhZ1N0YXJ0ID0gU3ltYm9sKCdvbkRyYWdTdGFydCcpO1xuY29uc3Qgb25EcmFnT3ZlciA9IFN5bWJvbCgnb25EcmFnT3ZlcicpO1xuY29uc3Qgb25EcmFnU3RvcCA9IFN5bWJvbCgnb25EcmFnU3RvcCcpO1xuXG5mdW5jdGlvbiBvblN3YXBwYWJsZVN3YXBwZWREZWZhdWx0QW5ub3VuY2VtZW50KHtcbiAgZHJhZ0V2ZW50LFxuICBzd2FwcGVkRWxlbWVudFxufSkge1xuICBjb25zdCBzb3VyY2VUZXh0ID0gZHJhZ0V2ZW50LnNvdXJjZS50ZXh0Q29udGVudC50cmltKCkgfHwgZHJhZ0V2ZW50LnNvdXJjZS5pZCB8fCAnc3dhcHBhYmxlIGVsZW1lbnQnO1xuICBjb25zdCBvdmVyVGV4dCA9IHN3YXBwZWRFbGVtZW50LnRleHRDb250ZW50LnRyaW0oKSB8fCBzd2FwcGVkRWxlbWVudC5pZCB8fCAnc3dhcHBhYmxlIGVsZW1lbnQnO1xuICByZXR1cm4gYFN3YXBwZWQgJHtzb3VyY2VUZXh0fSB3aXRoICR7b3ZlclRleHR9YDtcbn1cblxuY29uc3QgZGVmYXVsdEFubm91bmNlbWVudHMgPSB7XG4gICdzd2FwcGFibGVkOnN3YXBwZWQnOiBvblN3YXBwYWJsZVN3YXBwZWREZWZhdWx0QW5ub3VuY2VtZW50XG59O1xuXG5jbGFzcyBTd2FwcGFibGUgZXh0ZW5kcyBEcmFnZ2FibGUge1xuXG4gIGNvbnN0cnVjdG9yKGNvbnRhaW5lcnMgPSBbXSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgc3VwZXIoY29udGFpbmVycywge1xuICAgICAgLi4ub3B0aW9ucyxcbiAgICAgIGFubm91bmNlbWVudHM6IHtcbiAgICAgICAgLi4uZGVmYXVsdEFubm91bmNlbWVudHMsXG4gICAgICAgIC4uLihvcHRpb25zLmFubm91bmNlbWVudHMgfHwge30pXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmxhc3RPdmVyID0gbnVsbDtcbiAgICB0aGlzW29uRHJhZ1N0YXJ0XSA9IHRoaXNbb25EcmFnU3RhcnRdLmJpbmQodGhpcyk7XG4gICAgdGhpc1tvbkRyYWdPdmVyXSA9IHRoaXNbb25EcmFnT3Zlcl0uYmluZCh0aGlzKTtcbiAgICB0aGlzW29uRHJhZ1N0b3BdID0gdGhpc1tvbkRyYWdTdG9wXS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub24oJ2RyYWc6c3RhcnQnLCB0aGlzW29uRHJhZ1N0YXJ0XSkub24oJ2RyYWc6b3ZlcicsIHRoaXNbb25EcmFnT3Zlcl0pLm9uKCdkcmFnOnN0b3AnLCB0aGlzW29uRHJhZ1N0b3BdKTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgc3VwZXIuZGVzdHJveSgpO1xuICAgIHRoaXMub2ZmKCdkcmFnOnN0YXJ0JywgdGhpcy5fb25EcmFnU3RhcnQpLm9mZignZHJhZzpvdmVyJywgdGhpcy5fb25EcmFnT3Zlcikub2ZmKCdkcmFnOnN0b3AnLCB0aGlzLl9vbkRyYWdTdG9wKTtcbiAgfVxuXG4gIFtvbkRyYWdTdGFydF0oZXZlbnQpIHtcbiAgICBjb25zdCBzd2FwcGFibGVTdGFydEV2ZW50ID0gbmV3IFN3YXBwYWJsZVN0YXJ0RXZlbnQoe1xuICAgICAgZHJhZ0V2ZW50OiBldmVudFxuICAgIH0pO1xuICAgIHRoaXMudHJpZ2dlcihzd2FwcGFibGVTdGFydEV2ZW50KTtcbiAgICBpZiAoc3dhcHBhYmxlU3RhcnRFdmVudC5jYW5jZWxlZCgpKSB7XG4gICAgICBldmVudC5jYW5jZWwoKTtcbiAgICB9XG4gIH1cblxuICBbb25EcmFnT3Zlcl0oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQub3ZlciA9PT0gZXZlbnQub3JpZ2luYWxTb3VyY2UgfHwgZXZlbnQub3ZlciA9PT0gZXZlbnQuc291cmNlIHx8IGV2ZW50LmNhbmNlbGVkKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc3dhcHBhYmxlU3dhcEV2ZW50ID0gbmV3IFN3YXBwYWJsZVN3YXBFdmVudCh7XG4gICAgICBkcmFnRXZlbnQ6IGV2ZW50LFxuICAgICAgb3ZlcjogZXZlbnQub3ZlcixcbiAgICAgIG92ZXJDb250YWluZXI6IGV2ZW50Lm92ZXJDb250YWluZXJcbiAgICB9KTtcbiAgICB0aGlzLnRyaWdnZXIoc3dhcHBhYmxlU3dhcEV2ZW50KTtcbiAgICBpZiAoc3dhcHBhYmxlU3dhcEV2ZW50LmNhbmNlbGVkKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5sYXN0T3ZlciAmJiB0aGlzLmxhc3RPdmVyICE9PSBldmVudC5vdmVyKSB7XG4gICAgICBzd2FwKHRoaXMubGFzdE92ZXIsIGV2ZW50LnNvdXJjZSk7XG4gICAgfVxuICAgIGlmICh0aGlzLmxhc3RPdmVyID09PSBldmVudC5vdmVyKSB7XG4gICAgICB0aGlzLmxhc3RPdmVyID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sYXN0T3ZlciA9IGV2ZW50Lm92ZXI7XG4gICAgfVxuICAgIHN3YXAoZXZlbnQuc291cmNlLCBldmVudC5vdmVyKTtcbiAgICBjb25zdCBzd2FwcGFibGVTd2FwcGVkRXZlbnQgPSBuZXcgU3dhcHBhYmxlU3dhcHBlZEV2ZW50KHtcbiAgICAgIGRyYWdFdmVudDogZXZlbnQsXG4gICAgICBzd2FwcGVkRWxlbWVudDogZXZlbnQub3ZlclxuICAgIH0pO1xuICAgIHRoaXMudHJpZ2dlcihzd2FwcGFibGVTd2FwcGVkRXZlbnQpO1xuICB9XG5cbiAgW29uRHJhZ1N0b3BdKGV2ZW50KSB7XG4gICAgY29uc3Qgc3dhcHBhYmxlU3RvcEV2ZW50ID0gbmV3IFN3YXBwYWJsZVN0b3BFdmVudCh7XG4gICAgICBkcmFnRXZlbnQ6IGV2ZW50XG4gICAgfSk7XG4gICAgdGhpcy50cmlnZ2VyKHN3YXBwYWJsZVN0b3BFdmVudCk7XG4gICAgdGhpcy5sYXN0T3ZlciA9IG51bGw7XG4gIH1cbn1cbmZ1bmN0aW9uIHdpdGhUZW1wRWxlbWVudChjYWxsYmFjaykge1xuICBjb25zdCB0bXBFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhbGxiYWNrKHRtcEVsZW1lbnQpO1xuICB0bXBFbGVtZW50LnJlbW92ZSgpO1xufVxuZnVuY3Rpb24gc3dhcChzb3VyY2UsIG92ZXIpIHtcbiAgY29uc3Qgb3ZlclBhcmVudCA9IG92ZXIucGFyZW50Tm9kZTtcbiAgY29uc3Qgc291cmNlUGFyZW50ID0gc291cmNlLnBhcmVudE5vZGU7XG4gIHdpdGhUZW1wRWxlbWVudCh0bXBFbGVtZW50ID0+IHtcbiAgICBzb3VyY2VQYXJlbnQuaW5zZXJ0QmVmb3JlKHRtcEVsZW1lbnQsIHNvdXJjZSk7XG4gICAgb3ZlclBhcmVudC5pbnNlcnRCZWZvcmUoc291cmNlLCBvdmVyKTtcbiAgICBzb3VyY2VQYXJlbnQuaW5zZXJ0QmVmb3JlKG92ZXIsIHRtcEVsZW1lbnQpO1xuICB9KTtcbn1cblxuZXhwb3J0IHsgU3dhcHBhYmxlIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCB7IEFic3RyYWN0RXZlbnQgfSBmcm9tICcuLi8uLi9zaGFyZWQvQWJzdHJhY3RFdmVudC9BYnN0cmFjdEV2ZW50Lm1qcyc7XG5cbmNsYXNzIFN3YXBwYWJsZUV2ZW50IGV4dGVuZHMgQWJzdHJhY3RFdmVudCB7XG5cbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIHN1cGVyKGRhdGEpO1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gIH1cblxuICBnZXQgZHJhZ0V2ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEuZHJhZ0V2ZW50O1xuICB9XG59XG5cblN3YXBwYWJsZUV2ZW50LnR5cGUgPSAnc3dhcHBhYmxlJztcbmNsYXNzIFN3YXBwYWJsZVN0YXJ0RXZlbnQgZXh0ZW5kcyBTd2FwcGFibGVFdmVudCB7fVxuU3dhcHBhYmxlU3RhcnRFdmVudC50eXBlID0gJ3N3YXBwYWJsZTpzdGFydCc7XG5Td2FwcGFibGVTdGFydEV2ZW50LmNhbmNlbGFibGUgPSB0cnVlO1xuXG5jbGFzcyBTd2FwcGFibGVTd2FwRXZlbnQgZXh0ZW5kcyBTd2FwcGFibGVFdmVudCB7XG5cbiAgZ2V0IG92ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5vdmVyO1xuICB9XG5cbiAgZ2V0IG92ZXJDb250YWluZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5vdmVyQ29udGFpbmVyO1xuICB9XG59XG5Td2FwcGFibGVTd2FwRXZlbnQudHlwZSA9ICdzd2FwcGFibGU6c3dhcCc7XG5Td2FwcGFibGVTd2FwRXZlbnQuY2FuY2VsYWJsZSA9IHRydWU7XG5cbmNsYXNzIFN3YXBwYWJsZVN3YXBwZWRFdmVudCBleHRlbmRzIFN3YXBwYWJsZUV2ZW50IHtcblxuICBnZXQgc3dhcHBlZEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5zd2FwcGVkRWxlbWVudDtcbiAgfVxufVxuXG5Td2FwcGFibGVTd2FwcGVkRXZlbnQudHlwZSA9ICdzd2FwcGFibGU6c3dhcHBlZCc7XG5jbGFzcyBTd2FwcGFibGVTdG9wRXZlbnQgZXh0ZW5kcyBTd2FwcGFibGVFdmVudCB7fVxuU3dhcHBhYmxlU3RvcEV2ZW50LnR5cGUgPSAnc3dhcHBhYmxlOnN0b3AnO1xuXG5leHBvcnQgeyBTd2FwcGFibGVFdmVudCwgU3dhcHBhYmxlU3RhcnRFdmVudCwgU3dhcHBhYmxlU3RvcEV2ZW50LCBTd2FwcGFibGVTd2FwRXZlbnQsIFN3YXBwYWJsZVN3YXBwZWRFdmVudCB9O1xuIiwiZnVuY3Rpb24gY3JlYXRlQWRkSW5pdGlhbGl6ZXJNZXRob2QoZSwgdCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHIpIHtcbiAgICBhc3NlcnROb3RGaW5pc2hlZCh0LCBcImFkZEluaXRpYWxpemVyXCIpLCBhc3NlcnRDYWxsYWJsZShyLCBcIkFuIGluaXRpYWxpemVyXCIpLCBlLnB1c2gocik7XG4gIH07XG59XG5mdW5jdGlvbiBhc3NlcnRJbnN0YW5jZUlmUHJpdmF0ZShlLCB0KSB7XG4gIGlmICghZSh0KSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkF0dGVtcHRlZCB0byBhY2Nlc3MgcHJpdmF0ZSBlbGVtZW50IG9uIG5vbi1pbnN0YW5jZVwiKTtcbn1cbmZ1bmN0aW9uIG1lbWJlckRlYyhlLCB0LCByLCBhLCBuLCBpLCBzLCBvLCBjLCBsLCB1KSB7XG4gIHZhciBmO1xuICBzd2l0Y2ggKGkpIHtcbiAgICBjYXNlIDE6XG4gICAgICBmID0gXCJhY2Nlc3NvclwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAyOlxuICAgICAgZiA9IFwibWV0aG9kXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDM6XG4gICAgICBmID0gXCJnZXR0ZXJcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNDpcbiAgICAgIGYgPSBcInNldHRlclwiO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGYgPSBcImZpZWxkXCI7XG4gIH1cbiAgdmFyIGQsXG4gICAgcCxcbiAgICBoID0ge1xuICAgICAga2luZDogZixcbiAgICAgIG5hbWU6IG8gPyBcIiNcIiArIHIgOiByLFxuICAgICAgc3RhdGljOiBzLFxuICAgICAgcHJpdmF0ZTogbyxcbiAgICAgIG1ldGFkYXRhOiB1XG4gICAgfSxcbiAgICB2ID0ge1xuICAgICAgdjogITFcbiAgICB9O1xuICBpZiAoMCAhPT0gaSAmJiAoaC5hZGRJbml0aWFsaXplciA9IGNyZWF0ZUFkZEluaXRpYWxpemVyTWV0aG9kKG4sIHYpKSwgbyB8fCAwICE9PSBpICYmIDIgIT09IGkpIHtcbiAgICBpZiAoMiA9PT0gaSkgZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gYXNzZXJ0SW5zdGFuY2VJZlByaXZhdGUobCwgZSksIGEudmFsdWU7XG4gICAgfTtlbHNlIHtcbiAgICAgIHZhciB5ID0gMCA9PT0gaSB8fCAxID09PSBpO1xuICAgICAgKHkgfHwgMyA9PT0gaSkgJiYgKGQgPSBvID8gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIGFzc2VydEluc3RhbmNlSWZQcml2YXRlKGwsIGUpLCBhLmdldC5jYWxsKGUpO1xuICAgICAgfSA6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBhLmdldC5jYWxsKGUpO1xuICAgICAgfSksICh5IHx8IDQgPT09IGkpICYmIChwID0gbyA/IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgIGFzc2VydEluc3RhbmNlSWZQcml2YXRlKGwsIGUpLCBhLnNldC5jYWxsKGUsIHQpO1xuICAgICAgfSA6IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgIGEuc2V0LmNhbGwoZSwgdCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0gZWxzZSBkID0gZnVuY3Rpb24gKGUpIHtcbiAgICByZXR1cm4gZVtyXTtcbiAgfSwgMCA9PT0gaSAmJiAocCA9IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgZVtyXSA9IHQ7XG4gIH0pO1xuICB2YXIgbSA9IG8gPyBsLmJpbmQoKSA6IGZ1bmN0aW9uIChlKSB7XG4gICAgcmV0dXJuIHIgaW4gZTtcbiAgfTtcbiAgaC5hY2Nlc3MgPSBkICYmIHAgPyB7XG4gICAgZ2V0OiBkLFxuICAgIHNldDogcCxcbiAgICBoYXM6IG1cbiAgfSA6IGQgPyB7XG4gICAgZ2V0OiBkLFxuICAgIGhhczogbVxuICB9IDoge1xuICAgIHNldDogcCxcbiAgICBoYXM6IG1cbiAgfTtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZS5jYWxsKHQsIGMsIGgpO1xuICB9IGZpbmFsbHkge1xuICAgIHYudiA9ICEwO1xuICB9XG59XG5mdW5jdGlvbiBhc3NlcnROb3RGaW5pc2hlZChlLCB0KSB7XG4gIGlmIChlLnYpIHRocm93IG5ldyBFcnJvcihcImF0dGVtcHRlZCB0byBjYWxsIFwiICsgdCArIFwiIGFmdGVyIGRlY29yYXRpb24gd2FzIGZpbmlzaGVkXCIpO1xufVxuZnVuY3Rpb24gYXNzZXJ0Q2FsbGFibGUoZSwgdCkge1xuICBpZiAoXCJmdW5jdGlvblwiICE9IHR5cGVvZiBlKSB0aHJvdyBuZXcgVHlwZUVycm9yKHQgKyBcIiBtdXN0IGJlIGEgZnVuY3Rpb25cIik7XG59XG5mdW5jdGlvbiBhc3NlcnRWYWxpZFJldHVyblZhbHVlKGUsIHQpIHtcbiAgdmFyIHIgPSB0eXBlb2YgdDtcbiAgaWYgKDEgPT09IGUpIHtcbiAgICBpZiAoXCJvYmplY3RcIiAhPT0gciB8fCBudWxsID09PSB0KSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYWNjZXNzb3IgZGVjb3JhdG9ycyBtdXN0IHJldHVybiBhbiBvYmplY3Qgd2l0aCBnZXQsIHNldCwgb3IgaW5pdCBwcm9wZXJ0aWVzIG9yIHZvaWQgMFwiKTtcbiAgICB2b2lkIDAgIT09IHQuZ2V0ICYmIGFzc2VydENhbGxhYmxlKHQuZ2V0LCBcImFjY2Vzc29yLmdldFwiKSwgdm9pZCAwICE9PSB0LnNldCAmJiBhc3NlcnRDYWxsYWJsZSh0LnNldCwgXCJhY2Nlc3Nvci5zZXRcIiksIHZvaWQgMCAhPT0gdC5pbml0ICYmIGFzc2VydENhbGxhYmxlKHQuaW5pdCwgXCJhY2Nlc3Nvci5pbml0XCIpO1xuICB9IGVsc2UgaWYgKFwiZnVuY3Rpb25cIiAhPT0gcikge1xuICAgIHZhciBhO1xuICAgIHRocm93IGEgPSAwID09PSBlID8gXCJmaWVsZFwiIDogNSA9PT0gZSA/IFwiY2xhc3NcIiA6IFwibWV0aG9kXCIsIG5ldyBUeXBlRXJyb3IoYSArIFwiIGRlY29yYXRvcnMgbXVzdCByZXR1cm4gYSBmdW5jdGlvbiBvciB2b2lkIDBcIik7XG4gIH1cbn1cbmZ1bmN0aW9uIGN1cnJ5VGhpczEoZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBlKHRoaXMpO1xuICB9O1xufVxuZnVuY3Rpb24gY3VycnlUaGlzMihlKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodCkge1xuICAgIGUodGhpcywgdCk7XG4gIH07XG59XG5mdW5jdGlvbiBhcHBseU1lbWJlckRlYyhlLCB0LCByLCBhLCBuLCBpLCBzLCBvLCBjLCBsLCB1KSB7XG4gIHZhciBmLFxuICAgIGQsXG4gICAgcCxcbiAgICBoLFxuICAgIHYsXG4gICAgeSxcbiAgICBtID0gclswXTtcbiAgYSB8fCBBcnJheS5pc0FycmF5KG0pIHx8IChtID0gW21dKSwgbyA/IGYgPSAwID09PSBpIHx8IDEgPT09IGkgPyB7XG4gICAgZ2V0OiBjdXJyeVRoaXMxKHJbM10pLFxuICAgIHNldDogY3VycnlUaGlzMihyWzRdKVxuICB9IDogMyA9PT0gaSA/IHtcbiAgICBnZXQ6IHJbM11cbiAgfSA6IDQgPT09IGkgPyB7XG4gICAgc2V0OiByWzNdXG4gIH0gOiB7XG4gICAgdmFsdWU6IHJbM11cbiAgfSA6IDAgIT09IGkgJiYgKGYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHQsIG4pKSwgMSA9PT0gaSA/IHAgPSB7XG4gICAgZ2V0OiBmLmdldCxcbiAgICBzZXQ6IGYuc2V0XG4gIH0gOiAyID09PSBpID8gcCA9IGYudmFsdWUgOiAzID09PSBpID8gcCA9IGYuZ2V0IDogNCA9PT0gaSAmJiAocCA9IGYuc2V0KTtcbiAgZm9yICh2YXIgZyA9IGEgPyAyIDogMSwgYiA9IG0ubGVuZ3RoIC0gMTsgYiA+PSAwOyBiIC09IGcpIHtcbiAgICB2YXIgSTtcbiAgICBpZiAodm9pZCAwICE9PSAoaCA9IG1lbWJlckRlYyhtW2JdLCBhID8gbVtiIC0gMV0gOiB2b2lkIDAsIG4sIGYsIGMsIGksIHMsIG8sIHAsIGwsIHUpKSkgYXNzZXJ0VmFsaWRSZXR1cm5WYWx1ZShpLCBoKSwgMCA9PT0gaSA/IEkgPSBoIDogMSA9PT0gaSA/IChJID0gaC5pbml0LCB2ID0gaC5nZXQgfHwgcC5nZXQsIHkgPSBoLnNldCB8fCBwLnNldCwgcCA9IHtcbiAgICAgIGdldDogdixcbiAgICAgIHNldDogeVxuICAgIH0pIDogcCA9IGgsIHZvaWQgMCAhPT0gSSAmJiAodm9pZCAwID09PSBkID8gZCA9IEkgOiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGQgPyBkID0gW2QsIEldIDogZC5wdXNoKEkpKTtcbiAgfVxuICBpZiAoMCA9PT0gaSB8fCAxID09PSBpKSB7XG4gICAgaWYgKHZvaWQgMCA9PT0gZCkgZCA9IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICByZXR1cm4gdDtcbiAgICB9O2Vsc2UgaWYgKFwiZnVuY3Rpb25cIiAhPSB0eXBlb2YgZCkge1xuICAgICAgdmFyIHcgPSBkO1xuICAgICAgZCA9IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgIGZvciAodmFyIHIgPSB0LCBhID0gdy5sZW5ndGggLSAxOyBhID49IDA7IGEtLSkgciA9IHdbYV0uY2FsbChlLCByKTtcbiAgICAgICAgcmV0dXJuIHI7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgTSA9IGQ7XG4gICAgICBkID0gZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgcmV0dXJuIE0uY2FsbChlLCB0KTtcbiAgICAgIH07XG4gICAgfVxuICAgIGUucHVzaChkKTtcbiAgfVxuICAwICE9PSBpICYmICgxID09PSBpID8gKGYuZ2V0ID0gcC5nZXQsIGYuc2V0ID0gcC5zZXQpIDogMiA9PT0gaSA/IGYudmFsdWUgPSBwIDogMyA9PT0gaSA/IGYuZ2V0ID0gcCA6IDQgPT09IGkgJiYgKGYuc2V0ID0gcCksIG8gPyAxID09PSBpID8gKGUucHVzaChmdW5jdGlvbiAoZSwgdCkge1xuICAgIHJldHVybiBwLmdldC5jYWxsKGUsIHQpO1xuICB9KSwgZS5wdXNoKGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgcmV0dXJuIHAuc2V0LmNhbGwoZSwgdCk7XG4gIH0pKSA6IDIgPT09IGkgPyBlLnB1c2gocCkgOiBlLnB1c2goZnVuY3Rpb24gKGUsIHQpIHtcbiAgICByZXR1cm4gcC5jYWxsKGUsIHQpO1xuICB9KSA6IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LCBuLCBmKSk7XG59XG5mdW5jdGlvbiBhcHBseU1lbWJlckRlY3MoZSwgdCwgciwgYSkge1xuICBmb3IgKHZhciBuLCBpLCBzLCBvID0gW10sIGMgPSBuZXcgTWFwKCksIGwgPSBuZXcgTWFwKCksIHUgPSAwOyB1IDwgdC5sZW5ndGg7IHUrKykge1xuICAgIHZhciBmID0gdFt1XTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShmKSkge1xuICAgICAgdmFyIGQsXG4gICAgICAgIHAsXG4gICAgICAgIGggPSBmWzFdLFxuICAgICAgICB2ID0gZlsyXSxcbiAgICAgICAgeSA9IGYubGVuZ3RoID4gMyxcbiAgICAgICAgbSA9IDE2ICYgaCxcbiAgICAgICAgZyA9ICEhKDggJiBoKSxcbiAgICAgICAgYiA9IHI7XG4gICAgICBpZiAoaCAmPSA3LCBnID8gKGQgPSBlLCAwICE9PSBoICYmIChwID0gaSA9IGkgfHwgW10pLCB5ICYmICFzICYmIChzID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIF9jaGVja0luUkhTKHQpID09PSBlO1xuICAgICAgfSksIGIgPSBzKSA6IChkID0gZS5wcm90b3R5cGUsIDAgIT09IGggJiYgKHAgPSBuID0gbiB8fCBbXSkpLCAwICE9PSBoICYmICF5KSB7XG4gICAgICAgIHZhciBJID0gZyA/IGwgOiBjLFxuICAgICAgICAgIHcgPSBJLmdldCh2KSB8fCAwO1xuICAgICAgICBpZiAoITAgPT09IHcgfHwgMyA9PT0gdyAmJiA0ICE9PSBoIHx8IDQgPT09IHcgJiYgMyAhPT0gaCkgdGhyb3cgbmV3IEVycm9yKFwiQXR0ZW1wdGVkIHRvIGRlY29yYXRlIGEgcHVibGljIG1ldGhvZC9hY2Nlc3NvciB0aGF0IGhhcyB0aGUgc2FtZSBuYW1lIGFzIGEgcHJldmlvdXNseSBkZWNvcmF0ZWQgcHVibGljIG1ldGhvZC9hY2Nlc3Nvci4gVGhpcyBpcyBub3QgY3VycmVudGx5IHN1cHBvcnRlZCBieSB0aGUgZGVjb3JhdG9ycyBwbHVnaW4uIFByb3BlcnR5IG5hbWUgd2FzOiBcIiArIHYpO1xuICAgICAgICBJLnNldCh2LCAhKCF3ICYmIGggPiAyKSB8fCBoKTtcbiAgICAgIH1cbiAgICAgIGFwcGx5TWVtYmVyRGVjKG8sIGQsIGYsIG0sIHYsIGgsIGcsIHksIHAsIGIsIGEpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcHVzaEluaXRpYWxpemVycyhvLCBuKSwgcHVzaEluaXRpYWxpemVycyhvLCBpKSwgbztcbn1cbmZ1bmN0aW9uIHB1c2hJbml0aWFsaXplcnMoZSwgdCkge1xuICB0ICYmIGUucHVzaChmdW5jdGlvbiAoZSkge1xuICAgIGZvciAodmFyIHIgPSAwOyByIDwgdC5sZW5ndGg7IHIrKykgdFtyXS5jYWxsKGUpO1xuICAgIHJldHVybiBlO1xuICB9KTtcbn1cbmZ1bmN0aW9uIGFwcGx5Q2xhc3NEZWNzKGUsIHQsIHIsIGEpIHtcbiAgaWYgKHQubGVuZ3RoKSB7XG4gICAgZm9yICh2YXIgbiA9IFtdLCBpID0gZSwgcyA9IGUubmFtZSwgbyA9IHIgPyAyIDogMSwgYyA9IHQubGVuZ3RoIC0gMTsgYyA+PSAwOyBjIC09IG8pIHtcbiAgICAgIHZhciBsID0ge1xuICAgICAgICB2OiAhMVxuICAgICAgfTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciB1ID0gdFtjXS5jYWxsKHIgPyB0W2MgLSAxXSA6IHZvaWQgMCwgaSwge1xuICAgICAgICAgIGtpbmQ6IFwiY2xhc3NcIixcbiAgICAgICAgICBuYW1lOiBzLFxuICAgICAgICAgIGFkZEluaXRpYWxpemVyOiBjcmVhdGVBZGRJbml0aWFsaXplck1ldGhvZChuLCBsKSxcbiAgICAgICAgICBtZXRhZGF0YTogYVxuICAgICAgICB9KTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGwudiA9ICEwO1xuICAgICAgfVxuICAgICAgdm9pZCAwICE9PSB1ICYmIChhc3NlcnRWYWxpZFJldHVyblZhbHVlKDUsIHUpLCBpID0gdSk7XG4gICAgfVxuICAgIHJldHVybiBbZGVmaW5lTWV0YWRhdGEoaSwgYSksIGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvciAodmFyIGUgPSAwOyBlIDwgbi5sZW5ndGg7IGUrKykgbltlXS5jYWxsKGkpO1xuICAgIH1dO1xuICB9XG59XG5mdW5jdGlvbiBkZWZpbmVNZXRhZGF0YShlLCB0KSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgU3ltYm9sLm1ldGFkYXRhIHx8IFN5bWJvbC5mb3IoXCJTeW1ib2wubWV0YWRhdGFcIiksIHtcbiAgICBjb25maWd1cmFibGU6ICEwLFxuICAgIGVudW1lcmFibGU6ICEwLFxuICAgIHZhbHVlOiB0XG4gIH0pO1xufVxuZnVuY3Rpb24gX2FwcGx5RGVjczIzMDUoZSwgdCwgciwgYSwgbiwgaSkge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+PSA2KSB2YXIgcyA9IGlbU3ltYm9sLm1ldGFkYXRhIHx8IFN5bWJvbC5mb3IoXCJTeW1ib2wubWV0YWRhdGFcIildO1xuICB2YXIgbyA9IE9iamVjdC5jcmVhdGUodm9pZCAwID09PSBzID8gbnVsbCA6IHMpLFxuICAgIGMgPSBhcHBseU1lbWJlckRlY3MoZSwgdCwgbiwgbyk7XG4gIHJldHVybiByLmxlbmd0aCB8fCBkZWZpbmVNZXRhZGF0YShlLCBvKSwge1xuICAgIGU6IGMsXG4gICAgZ2V0IGMoKSB7XG4gICAgICByZXR1cm4gYXBwbHlDbGFzc0RlY3MoZSwgciwgYSwgbyk7XG4gICAgfVxuICB9O1xufVxuZnVuY3Rpb24gX2NoZWNrSW5SSFMoZSkge1xuICBpZiAoT2JqZWN0KGUpICE9PSBlKSB0aHJvdyBUeXBlRXJyb3IoXCJyaWdodC1oYW5kIHNpZGUgb2YgJ2luJyBzaG91bGQgYmUgYW4gb2JqZWN0LCBnb3QgXCIgKyAobnVsbCAhPT0gZSA/IHR5cGVvZiBlIDogXCJudWxsXCIpKTtcbiAgcmV0dXJuIGU7XG59XG5cbmV4cG9ydCB7IF9hcHBseURlY3MyMzA1IGFzIGFwcGx5RGVjczIzMDUsIF9jaGVja0luUkhTIGFzIGNoZWNrSW5SSFMgfTtcbiIsImV4cG9ydCB7IEFic3RyYWN0RXZlbnQgYXMgQmFzZUV2ZW50IH0gZnJvbSAnLi9zaGFyZWQvQWJzdHJhY3RFdmVudC9BYnN0cmFjdEV2ZW50Lm1qcyc7XG5leHBvcnQgeyBBYnN0cmFjdFBsdWdpbiBhcyBCYXNlUGx1Z2luIH0gZnJvbSAnLi9zaGFyZWQvQWJzdHJhY3RQbHVnaW4vQWJzdHJhY3RQbHVnaW4ubWpzJztcbmltcG9ydCAqIGFzIGluZGV4IGZyb20gJy4vRHJhZ2dhYmxlL1NlbnNvcnMvaW5kZXgubWpzJztcbmV4cG9ydCB7IGluZGV4IGFzIFNlbnNvcnMgfTtcbmltcG9ydCAqIGFzIGluZGV4JDEgZnJvbSAnLi9QbHVnaW5zL2luZGV4Lm1qcyc7XG5leHBvcnQgeyBpbmRleCQxIGFzIFBsdWdpbnMgfTtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRHJhZ2dhYmxlIH0gZnJvbSAnLi9EcmFnZ2FibGUvRHJhZ2dhYmxlLm1qcyc7XG5pbXBvcnQgJy4vRHJhZ2dhYmxlL0RyYWdFdmVudC9EcmFnRXZlbnQubWpzJztcbmltcG9ydCAnLi9EcmFnZ2FibGUvRHJhZ2dhYmxlRXZlbnQvRHJhZ2dhYmxlRXZlbnQubWpzJztcbmltcG9ydCAnLi9EcmFnZ2FibGUvUGx1Z2lucy9Bbm5vdW5jZW1lbnQvQW5ub3VuY2VtZW50Lm1qcyc7XG5pbXBvcnQgJy4vRHJhZ2dhYmxlL1BsdWdpbnMvTWlycm9yL01pcnJvckV2ZW50L01pcnJvckV2ZW50Lm1qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIERyb3BwYWJsZSB9IGZyb20gJy4vRHJvcHBhYmxlL0Ryb3BwYWJsZS5tanMnO1xuaW1wb3J0ICcuL0Ryb3BwYWJsZS9Ecm9wcGFibGVFdmVudC9Ecm9wcGFibGVFdmVudC5tanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTd2FwcGFibGUgfSBmcm9tICcuL1N3YXBwYWJsZS9Td2FwcGFibGUubWpzJztcbmltcG9ydCAnLi9Td2FwcGFibGUvU3dhcHBhYmxlRXZlbnQvU3dhcHBhYmxlRXZlbnQubWpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU29ydGFibGUgfSBmcm9tICcuL1NvcnRhYmxlL1NvcnRhYmxlLm1qcyc7XG5pbXBvcnQgJy4vU29ydGFibGUvU29ydGFibGVFdmVudC9Tb3J0YWJsZUV2ZW50Lm1qcyc7XG4iLCJjbGFzcyBBYnN0cmFjdEV2ZW50IHtcblxuICBjb25zdHJ1Y3RvcihkYXRhKSB7XG5cbiAgICB0aGlzLl9jYW5jZWxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gIH1cblxuICBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci50eXBlO1xuICB9XG5cbiAgZ2V0IGNhbmNlbGFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IuY2FuY2VsYWJsZTtcbiAgfVxuXG4gIGNhbmNlbCgpIHtcbiAgICB0aGlzLl9jYW5jZWxlZCA9IHRydWU7XG4gIH1cblxuICBjYW5jZWxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2FuY2VsZWQ7XG4gIH1cblxuICBjbG9uZShkYXRhKSB7XG4gICAgcmV0dXJuIG5ldyB0aGlzLmNvbnN0cnVjdG9yKHtcbiAgICAgIC4uLnRoaXMuZGF0YSxcbiAgICAgIC4uLmRhdGFcbiAgICB9KTtcbiAgfVxufVxuXG5BYnN0cmFjdEV2ZW50LnR5cGUgPSAnZXZlbnQnO1xuXG5BYnN0cmFjdEV2ZW50LmNhbmNlbGFibGUgPSBmYWxzZTtcblxuZXhwb3J0IHsgQWJzdHJhY3RFdmVudCB9O1xuIiwiY2xhc3MgQWJzdHJhY3RQbHVnaW4ge1xuXG4gIGNvbnN0cnVjdG9yKGRyYWdnYWJsZSkge1xuICAgIHRoaXMuZHJhZ2dhYmxlID0gZHJhZ2dhYmxlO1xuICB9XG5cbiAgYXR0YWNoKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignTm90IEltcGxlbWVudGVkJyk7XG4gIH1cblxuICBkZXRhY2goKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgSW1wbGVtZW50ZWQnKTtcbiAgfVxufVxuXG5leHBvcnQgeyBBYnN0cmFjdFBsdWdpbiB9O1xuIiwiZnVuY3Rpb24gY2xvc2VzdChub2RlLCB2YWx1ZSkge1xuICBpZiAobm9kZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgZnVuY3Rpb24gY29uZGl0aW9uRm4oY3VycmVudE5vZGUpIHtcbiAgICBpZiAoY3VycmVudE5vZGUgPT0gbnVsbCB8fCB2YWx1ZSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChpc1NlbGVjdG9yKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMuY2FsbChjdXJyZW50Tm9kZSwgdmFsdWUpO1xuICAgIH0gZWxzZSBpZiAoaXNOb2RlTGlzdCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBbLi4udmFsdWVdLmluY2x1ZGVzKGN1cnJlbnROb2RlKTtcbiAgICB9IGVsc2UgaWYgKGlzRWxlbWVudCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZSA9PT0gY3VycmVudE5vZGU7XG4gICAgfSBlbHNlIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlKGN1cnJlbnROb2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBsZXQgY3VycmVudCA9IG5vZGU7XG4gIGRvIHtcbiAgICBjdXJyZW50ID0gY3VycmVudC5jb3JyZXNwb25kaW5nVXNlRWxlbWVudCB8fCBjdXJyZW50LmNvcnJlc3BvbmRpbmdFbGVtZW50IHx8IGN1cnJlbnQ7XG4gICAgaWYgKGNvbmRpdGlvbkZuKGN1cnJlbnQpKSB7XG4gICAgICByZXR1cm4gY3VycmVudDtcbiAgICB9XG4gICAgY3VycmVudCA9IGN1cnJlbnQ/LnBhcmVudE5vZGUgfHwgbnVsbDtcbiAgfSB3aGlsZSAoY3VycmVudCAhPSBudWxsICYmIGN1cnJlbnQgIT09IGRvY3VtZW50LmJvZHkgJiYgY3VycmVudCAhPT0gZG9jdW1lbnQpO1xuICByZXR1cm4gbnVsbDtcbn1cbmZ1bmN0aW9uIGlzU2VsZWN0b3IodmFsdWUpIHtcbiAgcmV0dXJuIEJvb2xlYW4odHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyk7XG59XG5mdW5jdGlvbiBpc05vZGVMaXN0KHZhbHVlKSB7XG4gIHJldHVybiBCb29sZWFuKHZhbHVlIGluc3RhbmNlb2YgTm9kZUxpc3QgfHwgdmFsdWUgaW5zdGFuY2VvZiBBcnJheSk7XG59XG5mdW5jdGlvbiBpc0VsZW1lbnQodmFsdWUpIHtcbiAgcmV0dXJuIEJvb2xlYW4odmFsdWUgaW5zdGFuY2VvZiBOb2RlKTtcbn1cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIEJvb2xlYW4odHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKTtcbn1cblxuZXhwb3J0IHsgY2xvc2VzdCBhcyBkZWZhdWx0IH07XG4iLCJmdW5jdGlvbiBBdXRvQmluZChvcmlnaW5hbE1ldGhvZCwge1xuICBuYW1lLFxuICBhZGRJbml0aWFsaXplclxufSkge1xuICBhZGRJbml0aWFsaXplcihmdW5jdGlvbiAoKSB7XG5cbiAgICB0aGlzW25hbWVdID0gb3JpZ2luYWxNZXRob2QuYmluZCh0aGlzKTtcblxuICB9KTtcbn1cblxuZXhwb3J0IHsgQXV0b0JpbmQgfTtcbiIsImZ1bmN0aW9uIGRpc3RhbmNlKHgxLCB5MSwgeDIsIHkyKSB7XG4gIHJldHVybiBNYXRoLnNxcnQoKHgyIC0geDEpICoqIDIgKyAoeTIgLSB5MSkgKiogMik7XG59XG5cbmV4cG9ydCB7IGRpc3RhbmNlIGFzIGRlZmF1bHQgfTtcbiIsImZ1bmN0aW9uIHJlcXVlc3ROZXh0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2spIHtcbiAgcmV0dXJuIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNhbGxiYWNrKTtcbiAgfSk7XG59XG5cbmV4cG9ydCB7IHJlcXVlc3ROZXh0QW5pbWF0aW9uRnJhbWUgYXMgZGVmYXVsdCB9O1xuIiwiZnVuY3Rpb24gdG91Y2hDb29yZHMoZXZlbnQpIHtcbiAgY29uc3Qge1xuICAgIHRvdWNoZXMsXG4gICAgY2hhbmdlZFRvdWNoZXNcbiAgfSA9IGV2ZW50O1xuICByZXR1cm4gdG91Y2hlcyAmJiB0b3VjaGVzWzBdIHx8IGNoYW5nZWRUb3VjaGVzICYmIGNoYW5nZWRUb3VjaGVzWzBdO1xufVxuXG5leHBvcnQgeyB0b3VjaENvb3JkcyBhcyBkZWZhdWx0IH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBXRUFUSEVSX0FQSSBmcm9tICcuL2FwaWtleS5qcydcclxuXHJcbmltcG9ydCB7IERyYWdnYWJsZSwgU3dhcHBhYmxlIH0gZnJvbSAnQHNob3BpZnkvZHJhZ2dhYmxlJ1xyXG5cclxuLy8gSG9tZSBTZWN0aW9uIERPTVxyXG5jb25zdCBzZWFyY2hCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWJveCcpXHJcbmNvbnN0IHNlYXJjaE9wdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLW9wdGlvbnMnKVxyXG5jb25zdCBjbG9zZVNlYXJjaEljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2Utc2VhcmNoLWljb24nKVxyXG5jb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtYnV0dG9uJylcclxuY29uc3QgZWRpdE1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1tZW51JylcclxuY29uc3QgZWRpdENvbnRleHRNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtY29udGV4dC1tZW51JylcclxuY29uc3QgZWRpdExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1jb250ZXh0LW1lbnUtZWRpdC1saXN0JylcclxuY29uc3QgZWRpdE1lbnVCYWNrZHJvcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LW1lbnUtYmFja2Ryb3AnKVxyXG5jb25zdCBlZGl0Q29udGV4dE1lbnVDZWxzaXVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtY29udGV4dC1tZW51LWNlbHNpdXMnKVxyXG5jb25zdCBlZGl0Q29udGV4dE1lbnVGYWhyZW5oZWl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtY29udGV4dC1tZW51LWZhaHJlbmhlaXQnKVxyXG5jb25zdCB0cmFzaENhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cmFzaC1jYW4nKVxyXG5jb25zdCB0cmFzaENhbkxpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cmFzaC1jYW4tbGlkJylcclxuLy8gV2VhdGhlciBTZWN0aW9uIERPTVxyXG5jb25zdCB3ZWF0aGVyU2VjdGlvblRvZ2dsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWF0aGVyLXNlY3Rpb24tdG9nZ2xlJylcclxuY29uc3Qgd2VhdGhlclNlY3Rpb25Mb2NhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWF0aGVyLXNlY3Rpb24tbG9jYXRpb24nKVxyXG5jb25zdCB3ZWF0aGVyU2VjdGlvblRpbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VhdGhlci1zZWN0aW9uLXRpbWUnKVxyXG5jb25zdCB3ZWF0aGVyU2VjdGlvblRlbXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VhdGhlci1zZWN0aW9uLXRlbXAnKVxyXG5cclxuXHJcbmxldCBjdXJyZW50Q2l0aWVzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NpdGllcycpID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2l0aWVzJykpIDogW11cclxubGV0IHVzZXJUZW1wUHJlZmVyZW5jZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyVGVtcFByZWZlcmVuY2UnKSA/IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyVGVtcFByZWZlcmVuY2UnKSA6ICdjJ1xyXG5cclxuLy8gTG9hZGluZyBJbml0aWFsIHN0YXJ0XHJcbmlmICh1c2VyVGVtcFByZWZlcmVuY2UgPT0gJ2YnKSB7XHJcbiAgICBlZGl0Q29udGV4dE1lbnVDZWxzaXVzLmNsYXNzTGlzdC5yZW1vdmUoJ2VkaXQtY29udGV4dC1tZW51LXRlbXAtYWN0aXZlJylcclxuICAgIGVkaXRDb250ZXh0TWVudUZhaHJlbmhlaXQuY2xhc3NMaXN0LmFkZCgnZWRpdC1jb250ZXh0LW1lbnUtdGVtcC1hY3RpdmUnKVxyXG59XHJcblxyXG5sZXQgSW5pdGlhbEN1cnJlbnRDaXRpZXNJbmRleCA9IDBcclxuTG9hZEluaXRpYWxDaXRpZXMoKVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gTG9hZEluaXRpYWxDaXRpZXMoKSB7XHJcbiAgICBpZiAoY3VycmVudENpdGllcy5sZW5ndGggPT0gMCkgcmV0dXJuXHJcblxyXG4gICAgYXdhaXQgQ3JlYXRlV2VhdGhlckVsZW1lbnRzKGN1cnJlbnRDaXRpZXNbSW5pdGlhbEN1cnJlbnRDaXRpZXNJbmRleF0pXHJcbiAgICBJbml0aWFsQ3VycmVudENpdGllc0luZGV4KytcclxuICAgIGlmIChJbml0aWFsQ3VycmVudENpdGllc0luZGV4IDwgY3VycmVudENpdGllcy5sZW5ndGgpIHtcclxuICAgICAgICBMb2FkSW5pdGlhbENpdGllcygpXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIEZ1bmN0aW9ucyB0aGF0IGZldGNoIGRhdGFcclxuYXN5bmMgZnVuY3Rpb24gR2V0U2VhcmNoRGF0YShzZWFyY2hRdWVyeSkge1xyXG4gICAgc2VhcmNoUXVlcnkgPSBzZWFyY2hRdWVyeSA9PSAnJyA/ICfCoCcgOiBzZWFyY2hRdWVyeVxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvc2VhcmNoLmpzb24/a2V5PSR7V0VBVEhFUl9BUEl9JnE9JHtzZWFyY2hRdWVyeX1gLCB7IG1vZGU6ICdjb3JzJyB9KTtcclxuICAgIGNvbnN0IGNpdHlEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgcmV0dXJuIGNpdHlEYXRhXHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIEdldFdlYXRoZXJEYXRhKHNlYXJjaFF1ZXJ5KSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0ke1dFQVRIRVJfQVBJfSZxPSR7c2VhcmNoUXVlcnl9JmFxaT15ZXMmZGF5cz0zYCwgeyBtb2RlOiAnY29ycycgfSk7XHJcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHJldHVybiB3ZWF0aGVyRGF0YTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gQ3JlYXRlV2VhdGhlckVsZW1lbnRzKHNlYXJjaFF1ZXJ5KSB7XHJcbiAgICBsZXQgd2VhdGhlckRhdGEgPSBhd2FpdCBHZXRXZWF0aGVyRGF0YShzZWFyY2hRdWVyeSlcclxuXHJcbiAgICBBZGRDaXRpZXNFbGVtZW50KHdlYXRoZXJEYXRhKTtcclxuICAgIHJldHVybiB3ZWF0aGVyRGF0YS5sb2NhdGlvbi5uYW1lO1xyXG59XHJcblxyXG5mdW5jdGlvbiBBZGRDaXRpZXNFbGVtZW50KHdlYXRoZXJEYXRhKSB7XHJcbiAgICBjb25zdCBjaXR5RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICBjaXR5RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdob21lLWNpdHktYnV0dG9uJylcclxuICAgIGNpdHlFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1jaXR5JywgYCR7d2VhdGhlckRhdGEubG9jYXRpb24ubmFtZX0ke3dlYXRoZXJEYXRhLmxvY2F0aW9uLnJlZ2lvbiA/ICcsICcgKyB3ZWF0aGVyRGF0YS5sb2NhdGlvbi5yZWdpb24gOiAnJ30sICR7d2VhdGhlckRhdGEubG9jYXRpb24uY291bnRyeX1gKVxyXG5cclxuICAgIGNpdHlFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIENoYW5nZVdlYXRoZXJTZWN0aW9uKHdlYXRoZXJEYXRhKVxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWF0aGVyLXNlY3Rpb24nKS5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyLXNlY3Rpb24tb3BlbmVkJylcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgY2l0eU5hbWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxyXG4gICAgY2l0eU5hbWVFbGVtZW50LnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEubG9jYXRpb24ubmFtZVxyXG4gICAgY2l0eU5hbWVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hvbWUtY2l0eS1uYW1lJylcclxuXHJcbiAgICBjb25zdCBjaXR5VGltZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXHJcbiAgICBjaXR5VGltZUVsZW1lbnQudGV4dENvbnRlbnQgPSBDaGFuZ2VUbzEySG91ckZvcm1hdCh3ZWF0aGVyRGF0YS5sb2NhdGlvbi5sb2NhbHRpbWUuc3BsaXQoXCIgXCIpWzFdKVxyXG4gICAgY2l0eVRpbWVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hvbWUtY2l0eS10aW1lJylcclxuXHJcbiAgICBjb25zdCBjaXR5V2VhdGhlckNvbmRpdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXHJcbiAgICBjaXR5V2VhdGhlckNvbmRpdGlvbkVsZW1lbnQudGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0XHJcbiAgICBjaXR5V2VhdGhlckNvbmRpdGlvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaG9tZS1jaXR5LXdlYXRoZXItY29uZGl0aW9uJylcclxuXHJcbiAgICBjb25zdCBjaXR5V2VhdGhlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXHJcbiAgICBjaXR5V2VhdGhlckVsZW1lbnQuaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPVwidGVtcF9pbl8ke3VzZXJUZW1wUHJlZmVyZW5jZX1cIj4ke051bWJlcih3ZWF0aGVyRGF0YS5jdXJyZW50Wyd0ZW1wXycgKyB1c2VyVGVtcFByZWZlcmVuY2VdKS50b0ZpeGVkKDEpfTwvc3Bhbj7CsDxzcGFuIGNsYXNzPVwidGVtcF9pbl8ke3VzZXJUZW1wUHJlZmVyZW5jZX1fc3ltYm9sXCI+JHt1c2VyVGVtcFByZWZlcmVuY2UudG9VcHBlckNhc2UoKX08L3NwYW4+YFxyXG4gICAgY2l0eVdlYXRoZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hvbWUtY2l0eS13ZWF0aGVyJylcclxuXHJcbiAgICBjb25zdCBjaXR5SGlnaExvd1RlbXBzRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjaXR5SGlnaExvd1RlbXBzRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdob21lLWNpdHktaGlnaC1sb3ctdGVtcHMnKVxyXG5cclxuICAgIGNvbnN0IGNpdHlIaWdoVGVtcEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXHJcbiAgICBjaXR5SGlnaFRlbXBFbGVtZW50LmlubmVySFRNTCA9IGBIOiA8c3BhbiBjbGFzcz1cInRlbXBfaW5fJHt1c2VyVGVtcFByZWZlcmVuY2V9XCI+JHtOdW1iZXIod2VhdGhlckRhdGEuZm9yZWNhc3RbXCJmb3JlY2FzdGRheVwiXVswXS5kYXlbJ21heHRlbXBfJyArIHVzZXJUZW1wUHJlZmVyZW5jZV0pLnRvRml4ZWQoMSl9PC9zcGFuPsKwPHNwYW4gY2xhc3M9XCJ0ZW1wX2luXyR7dXNlclRlbXBQcmVmZXJlbmNlfV9zeW1ib2xcIj4ke3VzZXJUZW1wUHJlZmVyZW5jZS50b1VwcGVyQ2FzZSgpfTwvc3Bhbj5gXHJcbiAgICBjaXR5SGlnaFRlbXBFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hvbWUtY2l0eS1oaWdoLXRlbXAnKVxyXG5cclxuICAgIGNvbnN0IGNpdHlMb3dUZW1wRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcclxuICAgIGNpdHlMb3dUZW1wRWxlbWVudC5pbm5lckhUTUwgPSBgTDogPHNwYW4gY2xhc3M9XCJ0ZW1wX2luXyR7dXNlclRlbXBQcmVmZXJlbmNlfVwiPiR7TnVtYmVyKHdlYXRoZXJEYXRhLmZvcmVjYXN0W1wiZm9yZWNhc3RkYXlcIl1bMF0uZGF5WydtaW50ZW1wXycgKyB1c2VyVGVtcFByZWZlcmVuY2VdKS50b0ZpeGVkKDEpfTwvc3Bhbj7CsDxzcGFuIGNsYXNzPVwidGVtcF9pbl8ke3VzZXJUZW1wUHJlZmVyZW5jZX1fc3ltYm9sXCI+JHt1c2VyVGVtcFByZWZlcmVuY2UudG9VcHBlckNhc2UoKX08L3NwYW4+YFxyXG4gICAgY2l0eUxvd1RlbXBFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hvbWUtY2l0eS1sb3ctdGVtcCcpXHJcblxyXG4gICAgY2l0eUhpZ2hMb3dUZW1wc0VsZW1lbnQuYXBwZW5kKGNpdHlIaWdoVGVtcEVsZW1lbnQsIGNpdHlMb3dUZW1wRWxlbWVudClcclxuXHJcbiAgICBjaXR5RWxlbWVudC5hcHBlbmQoY2l0eU5hbWVFbGVtZW50LCBjaXR5VGltZUVsZW1lbnQsIGNpdHlXZWF0aGVyQ29uZGl0aW9uRWxlbWVudCwgY2l0eVdlYXRoZXJFbGVtZW50LCBjaXR5SGlnaExvd1RlbXBzRWxlbWVudClcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkZWQtY2l0aWVzJykuYXBwZW5kQ2hpbGQoY2l0eUVsZW1lbnQpXHJcbn1cclxuXHJcbi8vIG90aGVyIEZ1bmN0aW9uc1xyXG5mdW5jdGlvbiBDaGFuZ2VUbzEySG91ckZvcm1hdCh0aW1lU3RyaW5nKSB7XHJcbiAgICAvLyBTcGxpdCB0aGUgdGltZSBzdHJpbmcgaW50byBob3VycyBhbmQgbWludXRlc1xyXG4gICAgY29uc3QgW2hvdXJzLCBtaW51dGVzXSA9IHRpbWVTdHJpbmcuc3BsaXQoJzonKTtcclxuXHJcbiAgICAvLyBDb252ZXJ0IGhvdXJzIHRvIGEgMTItaG91ciBmb3JtYXRcclxuICAgIGNvbnN0IGNvbnZlcnRlZEhvdXJzID0gaG91cnMgJSAxMiB8fCAxMjtcclxuXHJcbiAgICAvLyBBZGQgQU0vUE0gaW5kaWNhdG9yXHJcbiAgICBjb25zdCBwZXJpb2QgPSBob3VycyA8IDEyID8gJ0FNJyA6ICdQTSc7XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBmb3JtYXR0ZWQgdGltZSBzdHJpbmdcclxuICAgIHJldHVybiBgJHtjb252ZXJ0ZWRIb3Vyc306JHttaW51dGVzfSAke3BlcmlvZH1gO1xyXG59XHJcblxyXG5mdW5jdGlvbiBDaGFuZ2VUb0NlbHNpdXMoKSB7XHJcbiAgICB1c2VyVGVtcFByZWZlcmVuY2UgPSAnYydcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyVGVtcFByZWZlcmVuY2UnLCAnYycpXHJcblxyXG4gICAgZWRpdENvbnRleHRNZW51RmFocmVuaGVpdC5jbGFzc0xpc3QucmVtb3ZlKCdlZGl0LWNvbnRleHQtbWVudS10ZW1wLWFjdGl2ZScpXHJcbiAgICBlZGl0Q29udGV4dE1lbnVDZWxzaXVzLmNsYXNzTGlzdC5hZGQoJ2VkaXQtY29udGV4dC1tZW51LXRlbXAtYWN0aXZlJylcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGVtcF9pbl9mJykuZm9yRWFjaCh0ZW1wID0+IHtcclxuICAgICAgICB0ZW1wLmNsYXNzTGlzdC5yZW1vdmUoJ3RlbXBfaW5fZicpXHJcbiAgICAgICAgdGVtcC5jbGFzc0xpc3QuYWRkKCd0ZW1wX2luX2MnKVxyXG4gICAgICAgIHRlbXAudGV4dENvbnRlbnQgPSAoKE51bWJlcih0ZW1wLnRleHRDb250ZW50KSAtIDMyKSAqIDUgLyA5KS50b0ZpeGVkKDEpO1xyXG4gICAgfSlcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGVtcF9pbl9mX3N5bWJvbCcpLmZvckVhY2goc3ltYm9sID0+IHtcclxuICAgICAgICBzeW1ib2wuY2xhc3NMaXN0LnJlbW92ZSgndGVtcF9pbl9mX3N5bWJvbCcpXHJcbiAgICAgICAgc3ltYm9sLmNsYXNzTGlzdC5hZGQoJ3RlbXBfaW5fY19zeW1ib2wnKVxyXG4gICAgICAgIHN5bWJvbC50ZXh0Q29udGVudCA9ICdDJ1xyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gQ2hhbmdlVG9GYWhyZW5oZWl0KCkge1xyXG4gICAgdXNlclRlbXBQcmVmZXJlbmNlID0gJ2YnXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlclRlbXBQcmVmZXJlbmNlJywgJ2YnKVxyXG5cclxuICAgIGVkaXRDb250ZXh0TWVudUNlbHNpdXMuY2xhc3NMaXN0LnJlbW92ZSgnZWRpdC1jb250ZXh0LW1lbnUtdGVtcC1hY3RpdmUnKVxyXG4gICAgZWRpdENvbnRleHRNZW51RmFocmVuaGVpdC5jbGFzc0xpc3QuYWRkKCdlZGl0LWNvbnRleHQtbWVudS10ZW1wLWFjdGl2ZScpXHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRlbXBfaW5fYycpLmZvckVhY2godGVtcCA9PiB7XHJcbiAgICAgICAgdGVtcC5jbGFzc0xpc3QucmVtb3ZlKCd0ZW1wX2luX2MnKVxyXG4gICAgICAgIHRlbXAuY2xhc3NMaXN0LmFkZCgndGVtcF9pbl9mJylcclxuICAgICAgICB0ZW1wLnRleHRDb250ZW50ID0gKChOdW1iZXIodGVtcC50ZXh0Q29udGVudCkgKiA5IC8gNSkgKyAzMikudG9GaXhlZCgxKTtcclxuICAgIH0pXHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRlbXBfaW5fY19zeW1ib2wnKS5mb3JFYWNoKHN5bWJvbCA9PiB7XHJcbiAgICAgICAgc3ltYm9sLmNsYXNzTGlzdC5yZW1vdmUoJ3RlbXBfaW5fY19zeW1ib2wnKVxyXG4gICAgICAgIHN5bWJvbC5jbGFzc0xpc3QuYWRkKCd0ZW1wX2luX2Zfc3ltYm9sJylcclxuICAgICAgICBzeW1ib2wudGV4dENvbnRlbnQgPSAnRidcclxuICAgIH0pXHJcbn1cclxuXHJcbi8vIEhvbWUgU2VjdGlvbiBET01cclxuZWRpdENvbnRleHRNZW51Q2Vsc2l1cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIENoYW5nZVRvQ2Vsc2l1cylcclxuZWRpdENvbnRleHRNZW51RmFocmVuaGVpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIENoYW5nZVRvRmFocmVuaGVpdClcclxuXHJcbmVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBlZGl0Q29udGV4dE1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnZWRpdC1jb250ZXh0LW1lbnUtY2xvc2VkJylcclxuICAgIGVkaXRNZW51LmNsYXNzTGlzdC50b2dnbGUoJ2VkaXQtbWVudS1vcGVuZWQnKVxyXG59KVxyXG5cclxuZWRpdE1lbnVCYWNrZHJvcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGVkaXRDb250ZXh0TWVudS5jbGFzc0xpc3QuYWRkKCdlZGl0LWNvbnRleHQtbWVudS1jbG9zZWQnKVxyXG4gICAgZWRpdE1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnZWRpdC1tZW51LW9wZW5lZCcpXHJcbn0pXHJcblxyXG5jbG9zZVNlYXJjaEljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBzZWFyY2hCb3gudmFsdWUgPSAnJ1xyXG4gICAgc2VhcmNoT3B0aW9ucy5pbm5lckhUTUwgPSAnJ1xyXG59KVxyXG5cclxuc2VhcmNoQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCAoKSA9PiB7XHJcbiAgICBzZWFyY2hPcHRpb25zLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXHJcbn0pXHJcblxyXG5zZWFyY2hCb3guYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBhc3luYyBlID0+IHtcclxuICAgIGxldCBzZWFyY2hSZXN1bHRzID0gYXdhaXQgR2V0U2VhcmNoRGF0YShzZWFyY2hCb3gudmFsdWUpXHJcbiAgICBzZWFyY2hPcHRpb25zLmlubmVySFRNTCA9ICcnXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlYXJjaFJlc3VsdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBzZWFyY2hPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgICAgIHNlYXJjaE9wdGlvbi50ZXh0Q29udGVudCA9IGAke3NlYXJjaFJlc3VsdHNbaV0ubmFtZX0ke3NlYXJjaFJlc3VsdHNbaV0ucmVnaW9uID8gJywgJyArIHNlYXJjaFJlc3VsdHNbaV0ucmVnaW9uIDogJyd9LCAke3NlYXJjaFJlc3VsdHNbaV0uY291bnRyeX1gXHJcbiAgICAgICAgc2VhcmNoT3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBPblNlYXJjaEVudGVyKHNlYXJjaFJlc3VsdHNbaV0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICBzZWFyY2hPcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICAgICAgc2VhcmNoT3B0aW9ucy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgc2VhcmNoT3B0aW9ucy5hcHBlbmRDaGlsZChzZWFyY2hPcHRpb24pXHJcbiAgICB9XHJcbn0pXHJcblxyXG5mdW5jdGlvbiBPblNlYXJjaEVudGVyKHNlYXJjaFJlc3VsdHMpIHtcclxuICAgIGlmIChjdXJyZW50Q2l0aWVzLmluY2x1ZGVzKGAke3NlYXJjaFJlc3VsdHMubmFtZX0ke3NlYXJjaFJlc3VsdHMucmVnaW9uID8gJywgJyArIHNlYXJjaFJlc3VsdHMucmVnaW9uIDogJyd9LCAke3NlYXJjaFJlc3VsdHMuY291bnRyeX1gKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjdXJyZW50Q2l0aWVzLnB1c2goYCR7c2VhcmNoUmVzdWx0cy5uYW1lfSR7c2VhcmNoUmVzdWx0cy5yZWdpb24gPyAnLCAnICsgc2VhcmNoUmVzdWx0cy5yZWdpb24gOiAnJ30sICR7c2VhcmNoUmVzdWx0cy5jb3VudHJ5fWApXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2l0aWVzJywgSlNPTi5zdHJpbmdpZnkoY3VycmVudENpdGllcykpXHJcblxyXG4gICAgQ3JlYXRlV2VhdGhlckVsZW1lbnRzKGAke3NlYXJjaFJlc3VsdHMubmFtZX0ke3NlYXJjaFJlc3VsdHMucmVnaW9uID8gJywgJyArIHNlYXJjaFJlc3VsdHMucmVnaW9uIDogJyd9LCAke3NlYXJjaFJlc3VsdHMuY291bnRyeX1gKVxyXG59XHJcblxyXG5jb25zdCBzd2FwcGFibGUgPSBuZXcgU3dhcHBhYmxlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRlZC1jaXRpZXMnKSwge1xyXG4gICAgZHJhZ2dhYmxlOiAnYnV0dG9uJyxcclxuICAgIGRlbGF5OiB7XHJcbiAgICAgICAgbW91c2U6IDMwMCxcclxuICAgICAgICBkcmFnOiAwLFxyXG4gICAgICAgIHRvdWNoOiAzMDAsXHJcbiAgICB9XHJcbn0pO1xyXG5cclxubGV0IGlzRHJhZ0FjdGl2ZSA9IGZhbHNlXHJcbmxldCBpc0NhbkRlbGV0ZSA9IGZhbHNlXHJcblxyXG5zd2FwcGFibGUub24oJ3N3YXBwYWJsZTpzdGFydCcsIGUgPT4geyBpc0RyYWdBY3RpdmUgPSB0cnVlOyB0cmFzaENhbi5jbGFzc0xpc3QuYWRkKCd0cmFzaC1jYW4tcmV2ZWFsJykgfSk7XHJcbnN3YXBwYWJsZS5vbignc3dhcHBhYmxlOnN3YXBwZWQnLCBlID0+IHsgfSk7XHJcbnN3YXBwYWJsZS5vbignc3dhcHBhYmxlOnN0b3AnLCBlID0+IHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGN1cnJlbnRDaXRpZXMgPSBbXVxyXG4gICAgICAgIEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZGVkLWNpdGllcycpLmNoaWxkcmVuKS5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICAgICAgY3VycmVudENpdGllcy5wdXNoKGNoaWxkLmdldEF0dHJpYnV0ZSgnZGF0YS1jaXR5JykpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NpdGllcycsIEpTT04uc3RyaW5naWZ5KGN1cnJlbnRDaXRpZXMpKVxyXG5cclxuICAgICAgICBpZiAoaXNDYW5EZWxldGUpIHtcclxuICAgICAgICAgICAgY3VycmVudENpdGllcyA9IGN1cnJlbnRDaXRpZXMuZmlsdGVyKChlbGVtZW50KSA9PiBlbGVtZW50ICE9PSBlLmRyYWdFdmVudC5zb3VyY2UuZ2V0QXR0cmlidXRlKCdkYXRhLWNpdHknKSlcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NpdGllcycsIEpTT04uc3RyaW5naWZ5KGN1cnJlbnRDaXRpZXMpKVxyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkZWQtY2l0aWVzJykucmVtb3ZlQ2hpbGQoZS5kcmFnRXZlbnQub3JpZ2luYWxTb3VyY2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0cmFzaENhbi5jbGFzc0xpc3QucmVtb3ZlKCd0cmFzaC1jYW4tcmV2ZWFsJylcclxuICAgICAgICB0cmFzaENhbkxpZC5jbGFzc0xpc3QucmVtb3ZlKCd0cmFzaC1jYW4tbGlkLW9wZW4nKVxyXG4gICAgICAgIGlzRHJhZ0FjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgaXNDYW5EZWxldGUgPSBmYWxzZVxyXG4gICAgfSwgMCk7XHJcbn0pO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgZSA9PiB7XHJcbiAgICBpZiAoZS50b3VjaGVzWzBdLmNsaWVudFggPiB0cmFzaENhbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS54ICYmXHJcbiAgICAgICAgZS50b3VjaGVzWzBdLmNsaWVudFggPCB0cmFzaENhbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS54ICsgdHJhc2hDYW4uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggJiZcclxuICAgICAgICBlLnRvdWNoZXNbMF0uY2xpZW50WSA+IHRyYXNoQ2FuLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnkgJiZcclxuICAgICAgICBlLnRvdWNoZXNbMF0uY2xpZW50WSA8IHRyYXNoQ2FuLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnkgKyB0cmFzaENhbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHRcclxuICAgICkge1xyXG4gICAgICAgIGlmIChpc0RyYWdBY3RpdmUpIHtcclxuICAgICAgICAgICAgdHJhc2hDYW5MaWQuY2xhc3NMaXN0LmFkZCgndHJhc2gtY2FuLWxpZC1vcGVuJylcclxuICAgICAgICAgICAgaXNDYW5EZWxldGUgPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0cmFzaENhbkxpZC5jbGFzc0xpc3QucmVtb3ZlKCd0cmFzaC1jYW4tbGlkLW9wZW4nKVxyXG4gICAgICAgIGlzQ2FuRGVsZXRlID0gZmFsc2VcclxuICAgIH1cclxufSlcclxuXHJcbnRyYXNoQ2FuLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGUgPT4ge1xyXG4gICAgaWYgKGlzRHJhZ0FjdGl2ZSkge1xyXG4gICAgICAgIHRyYXNoQ2FuTGlkLmNsYXNzTGlzdC5hZGQoJ3RyYXNoLWNhbi1saWQtb3BlbicpXHJcbiAgICAgICAgaXNDYW5EZWxldGUgPSB0cnVlXHJcbiAgICB9XHJcbn0pXHJcblxyXG50cmFzaENhbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZSA9PiB7XHJcbiAgICB0cmFzaENhbkxpZC5jbGFzc0xpc3QucmVtb3ZlKCd0cmFzaC1jYW4tbGlkLW9wZW4nKVxyXG4gICAgaXNDYW5EZWxldGUgPSBmYWxzZVxyXG59KVxyXG5cclxud2VhdGhlclNlY3Rpb25Ub2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWF0aGVyLXNlY3Rpb24nKS5jbGFzc0xpc3QucmVtb3ZlKCd3ZWF0aGVyLXNlY3Rpb24tb3BlbmVkJylcclxufSlcclxuXHJcbmZ1bmN0aW9uIENoYW5nZVdlYXRoZXJTZWN0aW9uKHdlYXRoZXJEYXRhKSB7XHJcbiAgICB3ZWF0aGVyU2VjdGlvbkxvY2F0aW9uLnRleHRDb250ZW50ID0gYCR7d2VhdGhlckRhdGEubG9jYXRpb24ubmFtZX0ke3dlYXRoZXJEYXRhLmxvY2F0aW9uLnJlZ2lvbiA/ICcsICcgKyB3ZWF0aGVyRGF0YS5sb2NhdGlvbi5yZWdpb24gOiAnJ30sICR7d2VhdGhlckRhdGEubG9jYXRpb24uY291bnRyeX1gXHJcbiAgICB3ZWF0aGVyU2VjdGlvblRpbWUudGV4dENvbnRlbnQgPSBDaGFuZ2VUbzEySG91ckZvcm1hdCh3ZWF0aGVyRGF0YS5sb2NhdGlvbi5sb2NhbHRpbWUuc3BsaXQoXCIgXCIpWzFdKVxyXG4gICAgd2VhdGhlclNlY3Rpb25UZW1wLnRleHRDb250ZW50ID0gYCR7TnVtYmVyKHdlYXRoZXJEYXRhLmN1cnJlbnQudGVtcF9jKS50b0ZpeGVkKDEpfcKwQ2BcclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==