enum EngineEvent {
    AddFailure,
    AddSuccess,
    Ran(bool),
}


struct Engine {
    handle_events: fn(EngineEvent),
    handle_failure: fn(),
    handle_success: fn(),
}


impl Engine {
    fn new(handle_events: fn(EngineEvent)) -> Self {
        Self {
            handle_events,
            handle_failure: || {},
            handle_success: || {},
        }
    }
    
    fn on_failure(&mut self, callback: fn()) {
        self.handle_failure = callback;
        (self.handle_events)(EngineEvent::AddFailure);
    }
    
    fn on_success(&mut self, callback: fn()) {
        self.handle_success = callback;
        (self.handle_events)(EngineEvent::AddSuccess);
    }
    
    fn run(&self, succeeded: bool) {
        if succeeded {
            (self.handle_success)();
        } else {
            (self.handle_failure)();
        }
        (self.handle_events)(EngineEvent::Ran(succeeded));
    }
}


fn main() {
    let mut engine: Engine = Engine::new(|event: EngineEvent| {
        match event {
            EngineEvent::AddFailure => {
                println!("AddFailure");
            },
            EngineEvent::AddSuccess => {
                println!("AddSuccess");
            },
            EngineEvent::Ran(succeeded) => {
                println!("Ran with: {}", succeeded);
            },
        }
    });
    
    engine.on_failure(|| {
        println!("Failed");
    });
    
    engine.on_success(|| {
        println!("Success");
    });
    
    
    engine.run(false);
}
