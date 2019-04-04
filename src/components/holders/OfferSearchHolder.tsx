import { OfferResultAction, OfferSearch } from '@bitclave/base-client-js';
import * as React from 'react';
import Button from 'reactstrap/lib/Button';
import Col from 'reactstrap/lib/Col';
import Row from 'reactstrap/lib/Row';
import AbstractHolder, { AbstractProperties, AbstractState } from './AbstractHolder';

interface Properties extends AbstractProperties<OfferSearch> {
    onComplainClick: Function;
    onGrantAccessClick: Function;
}

export default class OfferSearchHolder extends AbstractHolder<Properties, OfferSearch, AbstractState> {

    public bindModel(model: OfferSearch): object {
        return (
            <Row>
                <Col className="client-data-item-field" xs="2" sm="3">
                    status: {model.state}
                </Col>
                <Col className="client-data-item-field" xs="6" sm="3">
                    {this.getComplainButton(model)}
                </Col>
                <Col className="client-data-item-field" xs="6" sm="3">
                    {this.getGrantAccessButton(model)}
                </Col>
            </Row>
        );
    }

    private getComplainButton(model: OfferSearch): object {
        return (
            <Button
                disabled={model.state !== OfferResultAction.NONE}
                className="m-2"
                color="danger"
                size="sm"
                onClick={() => this.props.onComplainClick(model)}
            >
                Complain (misrepresentation)
            </Button>
        );
    }

    private getGrantAccessButton(model: OfferSearch): object {
        return (
            <Button
                disabled={model.state !== OfferResultAction.NONE}
                className="m-2"
                color="success"
                size="sm"
                onClick={() => this.props.onGrantAccessClick(model)}
            >
                Grant access
            </Button>
        );
    }

}
